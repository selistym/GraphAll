(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3L/t":function(t,e,n){"use strict";n.r(e);var a,r=n("UrUy"),i=n.n(r),l=n("JYC+"),o=n.n(l),u=n("R3/3"),s=n("z3IF"),c=n("LkAs"),h=n("Moms"),d=n("bMj6"),f=n("hZod"),p=n("tEuJ"),m=n("mXGw"),g=n.n(m),v=n("CXsl"),b=n("t1Qi"),C=n("YKN3"),y=n("azxR"),w=(n("YkuB"),m.Component,g.a.Component,function(t){function e(t){var n;Object(c.default)(this,e),n=Object(d.default)(this,Object(f.default)(e).call(this,t)),Object(y.a)(Object(C.default)(Object(C.default)(n)),"changeHandlerValue",function(t,e){var a=n.state,r=a.total,i=a.rangeStart,l=a.rangeEnd,o=a.column,u=[];if(u.columns=o,"handleLeft"==t){for(var s=0;s<r.length;s++)r[s].date>=e&&r[s].date<=l&&u.push(r[s]);n.setState({rangeStart:e,partial:u})}else{for(var c=0;c<r.length;c++)r[c].date>=i&&r[c].date<=e&&u.push(r[c]);n.setState({rangeEnd:e,partial:u})}});var a=n.props,r=a.data,i=a.width,l=a.height;console.log(r,"from index");var o=r.sort(function(t,e){return b.c(t.Date,e.Date)}),u=o.map(function(t){return t.Date});return n.state={total:o,partial:o,width:i,height:l,rangeStart:u[0],rangeEnd:u[u.length-1]},n}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,n=t.width,a=t.height,r=e.sort(function(t,e){return b.c(t.Date,e.Date)}),i=r.map(function(t){return t.Date});this.setState({total:r,partial:r,width:n,height:a,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,n=t.height,a=t.total,r=20,i=20,l=20,o=20,u=e-o-i,s=n/6,c=a.columns.slice(2).map(function(t){return{id:t,values:a.map(function(e){return{date:e.Date,value:e[t]}})}});console.log(c,"sliderGraph");c[0].values[0].date,c[0].values[c[0].values.length-1].date;var h=b.m(c[0].values,function(t){return t.value}),d=b.q().range([o,u-i]).domain(c[0].values.map(function(t){return t.date})),f=b.r().range([s-l,r]).domain([0,h]),p=b.b().curve(b.g).x(function(t){return console.log(d(t.date)),d(t.date)}).y0(f(0)).y1(function(t){return console.log(f(t.value)),f(t.value)}),m=b.v(this.GraphAxisElement);m.selectAll("*").remove(),m.append("g").attr("transform","translate(0,"+(s-l)+")").call(b.d().scale(d).ticks(c[0].values.length).tickFormat(b.j(""))).selectAll("text").style("font-size","10px").style("fill","black"),m.append("g").call(b.e().scale(f).ticks(10).tickSize(0)).select(".domain").style("opacity",0),m.selectAll(".area").data(c).enter().append("path").attr("d",function(t){return console.log(t.values,"d.values"),p(t.values)}).style("fill","#ddd")}},{key:"render",value:function(){var t=this,e=this.state,n=e.width,a=e.height,r=e.total,i=(e.partial,e.column,e.rangeStart,e.rangeEnd,20),l=20,o={width:n-l-i,height:a},u=r.map(function(t){return t.Date}),s=u[0],c=u[u.length-1];b.r().range([l,o.width-i]).domain([s,c]).clamp(!0);return g.a.createElement("svg",{className:"areaChartSvg",width:o.width,height:o.height},g.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*a/6,")")},g.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}})))}}]),e}(m.Component)),j=function(t){function e(t){var n;Object(c.default)(this,e);var a=(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).props,r=a.parentWidth,i=a.parentHeight,l=a.data;return l.columns=n.getColumns(l),n.state={width:Math.max(r,450),height:Math.max(i,400),data:l},n}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,n=t.parentHeight,a=t.data;a.columns=this.getColumns(a),this.setState({width:Math.max(e,450),height:Math.max(n,400),data:a})}},{key:"getColumns",value:function(t){var e=[];for(var n in t[0])e.push(n);return e}},{key:"render",value:function(){return g.a.createElement(m.Fragment,null,this.state.data&&g.a.createElement(w,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(m.Component),O=(a=j,function(t){function e(t){var n;return Object(c.default)(this,e),(n=Object(d.default)(this,Object(f.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(C.default)(Object(C.default)(n))),n}return Object(p.default)(e,t),Object(h.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:n}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return g.a.createElement(a,Object(s.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return g.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(m.Component)),k=function(t){function e(){return Object(c.default)(this,e),Object(d.default)(this,Object(f.default)(e).apply(this,arguments))}return Object(p.default)(e,t),Object(h.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,n=(t.navMenu,t.data);return g.a.createElement(v.a,Object(s.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),g.a.createElement("div",{className:"content"},g.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),g.a.createElement("p",null,"The Coca-Cola Company is an American ...."),g.a.createElement(O,{data:n[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(u.default)(i.a.mark(function t(e){var n,a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.req,a=n?n.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:o()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return r=t.sent,t.abrupt("return",{userAgent:a,data:r});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(m.Component);e.default=k},G9HM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=n("3L/t");return{page:t.default||t}}])},YkuB:function(t){t.exports={}},azxR:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function i(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}},[["G9HM",1,0]]]);