(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3L/t":function(t,e,n){"use strict";n.r(e);var a,r=n("UrUy"),i=n.n(r),l=n("JYC+"),o=n.n(l),s=n("R3/3"),c=n("z3IF"),u=n("LkAs"),h=n("Moms"),d=n("bMj6"),f=n("hZod"),g=n("tEuJ"),m=n("mXGw"),p=n.n(m),v=n("CXsl"),b=n("t1Qi"),y=n("YKN3"),E=n("azxR"),O=(m.Component,function(t){function e(t){var n;Object(u.default)(this,e);var a=(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=a.handle,i=a.svgDimen,l=a.margins,o=a.rangeStart,s=a.rangeEnd,c=a.xScale;return n.state={handle:r,svgDimen:i,margins:l,rangeStart:o,rangeEnd:s,xScale:c},n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,n=t.svgDimen,a=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({handle:e,svgDimen:n,margins:a,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,n=t.margins,a=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,o=p.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-n.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?p.a.createElement("g",{className:l,transform:"translate(".concat(i(a),", 0)"),onMouseOver:this.onMouseOver.bind(this)},o):p.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},o)}},{key:"componentDidUpdate",value:function(){var t,e=this.state,n=e.xScale,a=(e.rangeStart,e.rangeEnd,e.handle),r=this.props.changeHandlerValue,i=b.i().on("start",function(){t=l(b.o(this)[0])}).on("drag",function(){t=l(b.o(this)[0]),b.v("."+a).attr("transform","translate("+t+", 0)"),r(a,t)}).on("end",function(){b.v("."+a).attr("transform","translate("+t+", 0)"),r(a,t)});function l(t){return Math.round(n.invert(t))}b.v(".graphSliderGroup").call(i)}}]),e}(p.a.Component)),w=function(t){function e(t){var n;Object(u.default)(this,e),n=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(E.a)(Object(y.default)(Object(y.default)(n)),"changeHandlerValue",function(t,e){var a=n.state,r=a.total,i=a.rangeStart,l=a.rangeEnd,o=b.x("%Y-%m-%d"),s=[];if(s.column=r.column,"handleLeft"==t){for(var c=0;c<r.length;c++)o(r[c].Date)>=e&&o(r[c].Date)<=l&&s.push(r[c]);n.setState({rangeStart:e,partial:s})}else{for(var u=0;u<r.length;u++)o(r[u].Date)<=e&&o(r[u].Date)>=i&&s.push(r[u]);n.setState({rangeEnd:e,partial:s})}});var a=n.props,r=a.data,i=a.width,l=a.height,o=b.x("%Y-%m-%d"),s=r.sort(function(t,e){return b.c(o(t.Date),o(e.Date))}),c=s.map(function(t){return o(t.Date)});return n.state={total:s,partial:s,width:i,height:l,rangeStart:c[0],rangeEnd:c[c.length-1]},n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,n=t.width,a=t.height,r=b.x("%Y-%m-%d"),i=e.sort(function(t,e){return b.c(r(t.Date),r(e.Date))}),l=i.map(function(t){return r(t.Date)});this.setState({total:i,partial:i,width:n,height:a,rangeStart:l[0],rangeEnd:l[l.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,n=t.height,a=t.total,r=20,i=20,l=20,o=20,s=e-o-i,c=n/6,u=b.x("%Y-%m-%d"),h=a.columns.slice(2).map(function(t){return{id:t,values:a.map(function(e){return{date:u(e.Date),value:e[t]}})}}),d=b.m(h[0].values,function(t){return t.value}),f=h[0].values.map(function(t){return t.date}),g=b.t().range([o,s-i]).domain([f[0],f[f.length-1]]),m=b.r().range([c-l,r]).domain([0,d]),p=b.b().curve(b.g).x(function(t){return g(t.date)}).y0(m(0)).y1(function(t){return m(t.value)}),v=b.v(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(c-l)+")").call(b.d(g).tickSize(0).tickFormat(b.w("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").attr("transform","rotate(-65)"),v.append("g").call(b.e().scale(m).ticks(10).tickSize(0)).select(".domain").style("opacity",0),v.selectAll(".area").data(h).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,n=e.width,a=e.height,r=e.total,i=(e.partial,e.rangeStart),l=e.rangeEnd,o={top:20,right:20,bottom:20,left:20},s={width:n-o.left-o.right,height:a/6},c={width:n-o.left-o.right,height:a},u=b.x("%Y-%m-%d"),h=r.map(function(t){return u(t.Date)}),d=b.t().range([o.left,c.width-o.right]).domain([h[0],h[h.length-1]]).clamp(!0);console.log(d(i)+":"+d(l));var f=p.a.createElement("rect",{x:d(i),y:"0",width:d(l)-d(i),height:s.height-o.bottom,fill:"rgba(54, 174, 175, 0.65)"});return p.a.createElement("svg",{className:"areaChartSvg",width:c.width,height:c.height},p.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*a/6,")")},p.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),f,p.a.createElement(O,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:s,margins:o,xScale:d}),p.a.createElement(O,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:i,rangeEnd:l,svgDimen:s,margins:o,xScale:d})))}}]),e}(m.Component),S=function(t){function e(t){var n;Object(u.default)(this,e);var a=(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=a.parentWidth,i=a.parentHeight,l=a.data;return l.columns=n.getColumns(l),n.state={width:Math.max(r,450),height:Math.max(i,400),data:l},n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,n=t.parentHeight,a=t.data;a.columns=this.getColumns(a),this.setState({width:Math.max(e,450),height:Math.max(n,400),data:a})}},{key:"getColumns",value:function(t){var e=[];for(var n in t[0])e.push(n);return e}},{key:"render",value:function(){return p.a.createElement(m.Fragment,null,this.state.data&&p.a.createElement(w,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(m.Component),C=(a=S,function(t){function e(t){var n;return Object(u.default)(this,e),(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(y.default)(Object(y.default)(n))),n}return Object(g.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:n}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(a,Object(c.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(m.Component)),j=function(t){function e(){return Object(u.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(g.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,n=(t.navMenu,t.data);return p.a.createElement(v.a,Object(c.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(C,{data:n[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(s.default)(i.a.mark(function t(e){var n,a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.req,a=n?n.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:o()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:a,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(m.Component);e.default=j},G9HM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=n("3L/t");return{page:t.default||t}}])},azxR:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function i(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}},[["G9HM",1,0]]]);