(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,a){"use strict";a.r(e);var n,r=a("UrUy"),i=a.n(r),l=a("JYC+"),s=a.n(l),o=a("R3/3"),c=a("z3IF"),u=a("LkAs"),h=a("Moms"),d=a("bMj6"),f=a("hZod"),p=a("tEuJ"),g=a("mXGw"),m=a.n(g),v=a("CXsl"),b=a("t1Qi"),y=a("YKN3"),w=a("azxR"),O=function(t){function e(t){var a;return Object(u.default)(this,e),a=Object(d.default)(this,Object(f.default)(e).call(this,t)),console.log(a.props.partial,"from chart"),a.state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial},a}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,margins:margins,partial:t.partial})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.Date,value:e[t]}})}});console.log(r,"data gra");var i=b.m(r[0].values,function(t){return t.value}),l=b.q().rangeRound([a.left,e.width-a.right]).domain(r[0].values.map(function(t){return t.date})),s=b.r().range([e.height-a.bottom,a.top]).domain([0,i]),o=b.b().curve(b.g).x(function(t){return l(t.date)}).y0(s(0)).y1(function(t){return s(t.value)}),c=b.v(this.el);c.selectAll("*").remove(),c.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(b.d().scale(l).tickSize(0)).selectAll("text").style("font-size","10px").style("fill","black"),c.append("g").call(b.e().scale(s).ticks(10).tickSize(0)).select(".domain").style("opacity",0),c.selectAll(".area").data(r).enter().append("path").attr("d",function(t){return o(t.values)}).style("fill","#df072c")}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return m.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height},m.a.createElement("g",{className:"graphPane",ref:function(e){return t.el=e}}))}}]),e}(g.Component),E=function(t){function e(t){var a;Object(u.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.handle,i=n.svgDimen,l=n.margins,s=n.rangeStart,o=n.rangeEnd,c=n.xScale;return a.state={handle:r,svgDimen:i,margins:l,rangeStart:s,rangeEnd:o,xScale:c},a}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.handle,a=t.svgDimen,n=t.margins,r=t.rangeStart,i=t.rangeEnd,l=t.xScale;this.setState({handle:e,svgDimen:a,margins:n,rangeStart:r,rangeEnd:i,xScale:l})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale,l=t.handle,s=m.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:e.height-a.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==l?m.a.createElement("g",{className:l,transform:"translate(".concat(i(n),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s):m.a.createElement("g",{className:l,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},s)}},{key:"componentDidUpdate",value:function(){var t,e=this.state,a=e.xScale,n=(e.rangeStart,e.rangeEnd,e.handle),r=this.props.changeHandlerValue,i=b.i().on("start",function(){t=l(b.o(this)[0])}).on("drag",function(){t=l(b.o(this)[0]),b.v("."+n).attr("transform","translate("+a(t)+", 0)"),r(n,t)}).on("end",function(){b.v("."+n).attr("transform","translate("+a(t)+",0)"),r(n,t)});function l(t){return Math.round(a(t))}b.v(".graphSliderGroup").call(i)}}]),e}(m.a.Component),S=function(t){function e(t){var a;Object(u.default)(this,e),a=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(w.a)(Object(y.default)(Object(y.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=Date.parse(e),o=Date.parse(i),c=Date.parse(l);console.log(s+":"+o+":"+c);var u=[];if(u.column=r.column,"handleLeft"==t){for(var h=0;h<r.length;h++)Date.parse(r[h].date)>=s&&Date.parse(r[h].date)<=c&&u.push(r[h]);a.setState({rangeStart:e,partial:u})}else{for(var d=0;d<r.length;d++)Date.parse(r[d].date)>=o&&Date.parse(r[d].date)<=s&&u.push(r[d]);a.setState({rangeEnd:e,partial:u})}});var n=a.props,r=n.data,i=n.width,l=n.height,s=r.sort(function(t,e){return b.c(t.Date,e.Date)}),o=s.map(function(t){return t.Date});return a.state={total:s,partial:s,width:i,height:l,rangeStart:o[0],rangeEnd:o[o.length-1]},a}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=e.sort(function(t,e){return b.c(t.Date,e.Date)}),i=r.map(function(t){return t.Date});this.setState({total:r,partial:r,width:a,height:n,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=20,i=20,l=20,s=20,o=e-s-i,c=a/6,u=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.Date,value:e[t]}})}}),h=b.m(u[0].values,function(t){return t.value}),d=b.q().rangeRound([s,o-i]).domain(u[0].values.map(function(t){return t.date})),f=b.r().range([c-l,r]).domain([0,h]),p=b.b().curve(b.g).x(function(t){return d(t.date)}).y0(f(0)).y1(function(t){return f(t.value)}),g=b.v(this.GraphAxisElement);g.selectAll("*").remove(),g.append("g").attr("transform","translate(0,"+(c-l)+")").call(b.d().scale(d).tickSize(0)).selectAll("text").style("font-size","10px").style("fill","black"),g.append("g").call(b.e().scale(f).ticks(10).tickSize(0)).select(".domain").style("opacity",0),g.selectAll(".area").data(u).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=e.partial,l=e.rangeStart,s=e.rangeEnd,o={top:20,right:20,bottom:20,left:20},c={width:a-o.left-o.right,height:n/6},u={width:a-o.left-o.right,height:5*n/6},h={width:a-o.left-o.right,height:n},d=b.q().rangeRound([o.left,h.width-o.right]).domain(r.map(function(t){return t.Date})),f=m.a.createElement("rect",{x:d(l),y:"0",width:d(s)-d(l),height:c.height-o.bottom,fill:"rgba(54, 174, 175, 0.65)"});return m.a.createElement("svg",{className:"areaChartSvg",width:h.width,height:h.height},m.a.createElement("g",{className:"Chart"},m.a.createElement(O,{margins:o,svgDimen:u,partial:i})),m.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},m.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),f,m.a.createElement(E,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:c,margins:o,xScale:d}),m.a.createElement(E,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:c,margins:o,xScale:d})))}}]),e}(g.Component),j=function(t){function e(t){var a;Object(u.default)(this,e);var n=(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=n.parentWidth,i=n.parentHeight,l=n.data;return l.columns=a.getColumns(l),a.state={width:Math.max(r,450),height:Math.max(i,400),data:l},a}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;n.columns=this.getColumns(n),this.setState({width:Math.max(e,450),height:Math.max(a,400),data:n})}},{key:"getColumns",value:function(t){var e=[];for(var a in t[0])e.push(a);return e}},{key:"render",value:function(){return m.a.createElement(g.Fragment,null,this.state.data&&m.a.createElement(S,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(g.Component),C=(n=j,function(t){function e(t){var a;return Object(u.default)(this,e),(a=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(y.default)(Object(y.default)(a))),a}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return m.a.createElement(n,Object(c.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return m.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(g.Component)),k=function(t){function e(){return Object(u.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(p.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return m.a.createElement(v.a,Object(c.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),m.a.createElement("div",{className:"content"},m.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),m.a.createElement("p",null,"The Coca-Cola Company is an American ...."),m.a.createElement(C,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(o.default)(i.a.mark(function t(e){var a,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:s()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:n,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(g.Component);e.default=k},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);