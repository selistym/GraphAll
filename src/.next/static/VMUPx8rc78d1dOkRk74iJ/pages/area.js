(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("UrUy"),i=a.n(r),l=a("JYC+"),s=a.n(l),o=a("R3/3"),c=a("z3IF"),u=a("LkAs"),h=a("Moms"),d=a("bMj6"),f=a("hZod"),m=a("tEuJ"),g=a("mXGw"),p=a.n(g),v=a("CXsl"),b=a("t1Qi"),y=a("YKN3"),w=a("azxR"),O=function(t){function e(t){var a;return Object(u.default)(this,e),(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial},a}return Object(m.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,margins:t.margins,partial:t.partial})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.Date,value:e[t]}})}}),i=b.x("%Y-%m-%d"),l=r[0].values.map(function(t){return i(t.date)}),s=b.m(r[0].values,function(t){return t.value}),o=b.t().range([a.left,e.width-a.right]).domain([l[0],l[l.length-1]]).clamp(!0),c=b.r().range([e.height-a.bottom,a.top]).domain([0,s]),u=b.b().curve(b.g).x(function(t){return o(i(t.date))}).y0(c(0)).y1(function(t){return c(t.value)}),h=b.v(this.el);h.selectAll("*").remove(),h.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(b.d(o).tickSize(0).tickFormat(b.w("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black"),h.append("g").call(b.e().scale(c).ticks(10).tickSize(0)).select(".domain").style("opacity",0),h.selectAll(".area").data(r).enter().append("path").attr("d",function(t){return u(t.values)}).style("fill","#df072c")}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return p.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height},p.a.createElement("g",{className:"graphPane",ref:function(e){return t.el=e}}))}}]),e}(g.Component),E=function(t){function e(t){var a;Object(u.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.handle,i=n.svgDimen,l=n.margins,s=n.rangeStart,o=n.rangeEnd,c=n.xScale;return a.state={handle:r,svgDimen:i,margins:l,rangeStart:s,rangeEnd:o,xScale:c},a}return Object(m.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,a=t.svgDimen,n=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({handle:e,svgDimen:a,margins:n,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,s=p.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?p.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):p.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(){var t,e=this.state,a=e.xScale,n=e.handle,r=this.props.changeHandlerValue,i=b.i().on("start",function(){t=l(b.o(this)[0])}).on("drag",function(){t=l(b.o(this)[0]),b.v("."+n).attr("transform","translate("+a(t)+", 0)"),r(n,t)}).on("end",function(){b.v("."+n).attr("transform","translate("+a(t)+", 0)"),r(n,t)});function l(t){return Math.round(a.invert(t))}b.v(".graphSliderGroup").call(i)}}]),e}(p.a.Component),j=function(t){function e(t){var a;Object(u.default)(this,e),a=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(w.a)(Object(y.default)(Object(y.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=b.x("%Y-%m-%d"),o=[];if("handleLeft"==t){for(var c=0;c<r.length;c++)s(r[c].Date)>=e&&s(r[c].Date)<=l&&o.push(r[c]);o.columns=r.columns,a.setState({rangeStart:e,partial:o})}else{for(var u=0;u<r.length;u++)s(r[u].Date)<=e&&s(r[u].Date)>=i&&o.push(r[u]);o.columns=r.columns,a.setState({rangeEnd:e,partial:o})}});var n=a.props,r=n.data,i=n.width,l=n.height,s=b.x("%Y-%m-%d"),o=r.sort(function(t,e){return b.c(s(t.Date),s(e.Date))}),c=o.map(function(t){return s(t.Date)});return a.state={total:o,partial:o,width:i,height:l,rangeStart:c[0],rangeEnd:c[c.length-1]},a}return Object(m.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=b.x("%Y-%m-%d"),i=e.sort(function(t,e){return b.c(r(t.Date),r(e.Date))}),l=i.map(function(t){return r(t.Date)});this.setState({total:i,partial:i,width:a,height:n,rangeStart:l[0],rangeEnd:l[l.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=20,i=20,l=20,s=20,o=e-s-i,c=a/6,u=b.x("%Y-%m-%d"),h=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:u(e.Date),value:e[t]}})}}),d=b.m(h[0].values,function(t){return t.value}),f=h[0].values.map(function(t){return t.date}),m=b.t().range([s,o-i]).domain([f[0],f[f.length-1]]),g=b.r().range([c-l,r]).domain([0,d]),p=b.b().curve(b.g).x(function(t){return m(t.date)}).y0(g(0)).y1(function(t){return g(t.value)}),v=b.v(this.GraphAxisElement);v.selectAll("*").remove(),v.append("g").attr("transform","translate(0,"+(c-l)+")").call(b.d(m).tickSize(0).tickFormat(b.w("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").attr("transform","rotate(-65)"),v.append("g").call(b.e().scale(g).ticks(10).tickSize(0)).select(".domain").style("opacity",0),v.selectAll(".area").data(h).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=e.partial,l=e.rangeStart,s=e.rangeEnd,o={top:20,right:20,bottom:20,left:20},c={width:a-o.left-o.right,height:n/6},u={width:a-o.left-o.right,height:5*n/6},h={width:a-o.left-o.right,height:n},d=b.x("%Y-%m-%d"),f=r.map(function(t){return d(t.Date)}),m=b.t().range([o.left,h.width-o.right]).domain([f[0],f[f.length-1]]).clamp(!0),g=p.a.createElement("rect",{x:m(l),y:"0",width:m(s)-m(l),height:c.height-o.bottom,fill:"rgba(54, 174, 175, 0.65)"});return p.a.createElement("svg",{className:"areaChartSvg",width:h.width,height:h.height},p.a.createElement("g",{className:"Chart"},p.a.createElement(O,{margins:o,svgDimen:u,partial:i})),p.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},p.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),g,p.a.createElement(E,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:c,margins:o,xScale:m}),p.a.createElement(E,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:c,margins:o,xScale:m})))}}]),e}(g.Component),S=function(t){function e(t){var a;Object(u.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.parentWidth,i=n.parentHeight,l=n.data;return l.columns=a.getColumns(l),a.state={width:Math.max(r,450),height:Math.max(i,400),data:l},a}return Object(m.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;n.columns=this.getColumns(n),this.setState({width:Math.max(e,450),height:Math.max(a,400),data:n})}},{key:"getColumns",value:function(t){var e=[];for(var a in t[0])e.push(a);return e}},{key:"render",value:function(){return p.a.createElement(g.Fragment,null,this.state.data&&p.a.createElement(j,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(g.Component),k=(n=S,function(t){function e(t){var a;return Object(u.default)(this,e),(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(y.default)(Object(y.default)(a))),a}return Object(m.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(n,Object(c.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(g.Component)),C=function(t){function e(){return Object(u.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(m.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return p.a.createElement(v.a,Object(c.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(k,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(o.default)(i.a.mark(function t(e){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:n,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(g.Component);e.default=C},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);