(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,n){"use strict";n.r(e);var a,r=n("UrUy"),i=n.n(r),l=n("JYC+"),s=n.n(l),o=n("R3/3"),u=n("z3IF"),c=n("LkAs"),h=n("Moms"),d=n("bMj6"),f=n("hZod"),g=n("tEuJ"),m=n("mXGw"),p=n.n(m),v=n("CXsl"),b=n("t1Qi"),y=n("YKN3"),w=n("azxR"),E=(m.Component,function(t){function e(t){var n;Object(c.default)(this,e);var a=(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=a.handle,i=a.svgDimen,l=a.margins,s=a.rangeStart,o=a.rangeEnd,u=a.xScale;return n.state={handle:r,svgDimen:i,margins:l,rangeStart:s,rangeEnd:o,xScale:u},n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,n=t.svgDimen,a=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({handle:e,svgDimen:n,margins:a,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,n=t.margins,a=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,s=p.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-n.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?p.a.createElement("g",{className:l,transform:"translate(".concat(i(a),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):p.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(){var t,e=this.state,n=e.xScale,a=(e.rangeStart,e.rangeEnd,e.handle),r=this.props.changeHandlerValue,i=b.i().on("start",function(){t=l(b.p(this)[0])}).on("drag",function(){t=l(b.p(this)[0]),console.log(t),b.w("."+a).attr("transform","translate("+n(t)+", 0)"),r(a,t)}).on("end",function(){b.w("."+a).attr("transform","translate("+n(t)+",0)")});function l(t){return n(t)}b.w(".graphSliderGroup").call(i)}}]),e}(p.a.Component)),O=function(t){function e(t){var n;Object(c.default)(this,e),n=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(w.a)(Object(y.default)(Object(y.default)(n)),"changeHandlerValue",function(t,e){var a=n.state,r=a.total,i=a.rangeStart,l=a.rangeEnd,s=b.y("%Y-%m-%d"),o=[];if(o.column=r.column,"handleLeft"==t){for(var u=0;u<r.length;u++)s(r[u].Date)>=e&&s(r[u].Date)<=l&&o.push(r[u]);n.setState({rangeStart:e,partial:o})}else{for(var c=0;c<r.length;c++)s(r[c].Date)<=e&&s(r[c].Date)>=i&&o.push(r[c]);n.setState({rangeEnd:e,partial:o})}});var a=n.props,r=a.data,i=a.width,l=a.height,s=b.y("%Y-%m-%d"),o=r.sort(function(t,e){return b.c(s(t.Date),s(e.Date))}),u=o.map(function(t){return s(t.Date)});return n.state={total:o,partial:o,width:i,height:l,rangeStart:u[0],rangeEnd:u[u.length-1]},n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,n=t.width,a=t.height,r=b.y("%Y-%m-%d"),i=e.sort(function(t,e){return b.c(r(t.Date),r(e.Date))}),l=i.map(function(t){return r(t.Date)});this.setState({total:i,partial:i,width:n,height:a,rangeStart:l[0],rangeEnd:l[l.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,n=t.height,a=t.total,r=20,i=20,l=20,s=20,o=e-s-i,u=n/6,c=a.columns.slice(2).map(function(t){return{id:t,values:a.map(function(e){return{date:e.Date,value:e[t]}})}}),h=b.n(c[0].values,function(t){return t.value}),d=b.y("%Y-%m-%d"),f=c[0].values.map(function(t){return d(t.date)}),g=b.u().range([s,o-i]).domain(b.j(f)),m=b.s().range([u-l,r]).domain([0,h]),p=b.b().curve(b.g).x(function(t){return g(t.date)}).y0(m(0)).y1(function(t){return m(t.value)}),v=b.w(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(u-l)+")").call(b.d(g).tickSize(0).tickFormat(b.x("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").attr("transform","rotate(-65)"),v.append("g").call(b.e().scale(m).ticks(10).tickSize(0)).select(".domain").style("opacity",0),v.selectAll(".area").data(c).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,n=e.width,a=e.height,r=e.total,i=(e.partial,e.rangeStart),l=e.rangeEnd,s={top:20,right:20,bottom:20,left:20},o={width:n-s.left-s.right,height:a/6},u={width:n-s.left-s.right,height:a},c=b.y("%Y-%m-%d"),h=r.map(function(t){return c(t.Date)}),d=b.u().range([s.left,u.width-s.right]).domain(b.j(h)),f=p.a.createElement("rect",{x:d(i),y:"0",width:d(l)-d(i),height:o.height-s.bottom,fill:"rgba(54, 174, 175, 0.65)"});return p.a.createElement("svg",{className:"areaChartSvg",width:u.width,height:u.height},p.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*a/6,")")},p.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),f,p.a.createElement(E,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:o,margins:s,xScale:d}),p.a.createElement(E,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:o,margins:s,xScale:d})))}}]),e}(m.Component),j=function(t){function e(t){var n;Object(c.default)(this,e);var a=(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=a.parentWidth,i=a.parentHeight,l=a.data;return l.columns=n.getColumns(l),n.state={width:Math.max(r,450),height:Math.max(i,400),data:l},n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,n=t.parentHeight,a=t.data;a.columns=this.getColumns(a),this.setState({width:Math.max(e,450),height:Math.max(n,400),data:a})}},{key:"getColumns",value:function(t){var e=[];for(var n in t[0])e.push(n);return e}},{key:"render",value:function(){return p.a.createElement(m.Fragment,null,this.state.data&&p.a.createElement(O,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(m.Component),S=(a=j,function(t){function e(t){var n;return Object(c.default)(this,e),(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(y.default)(Object(y.default)(n))),n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:n}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(a,Object(u.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(m.Component)),C=function(t){function e(){return Object(c.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(g.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,n=(t.navMenu,t.data);return p.a.createElement(v.a,Object(u.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(S,{data:n[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(o.default)(i.a.mark(function t(e){var n,a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.req,a=n?n.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:a,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(m.Component);e.default=C},G9HM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=n("3L/t");return{page:t.default||t}}])},azxR:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function i(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}},[["G9HM",1,0]]]);