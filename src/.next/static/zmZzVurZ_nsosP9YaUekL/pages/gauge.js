(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{rXUM:function(t,e,a){"use strict";a.r(e);var n,i=a("UrUy"),r=a.n(i),l=a("JYC+"),u=a.n(l),o=a("R3/3"),c=a("z3IF"),h=a("LkAs"),s=a("Moms"),d=a("bMj6"),m=a("hZod"),v=a("tEuJ"),f=a("mXGw"),p=a.n(f),g=a("CXsl"),b=a("YKN3"),w=a("t1Qi"),y=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(d.default)(this,Object(m.default)(e).call(this,t))).props,i=n.width,r=n.height,l=n.data,u=n.dataRange,o={width:i-20-20,height:r-0-0};return l[0].value>u.max?l[0].value=u.max:l[0].value<u.min&&(l[0].value=u.min),l[1].value>u.max?l[1].value=u.max:l[1].value<u.min&&(l[1].value=u.min),l[2].value>u.max?l[2].value=u.max:l[2].value<u.min&&(l[2].value=u.min),l[0].value=l[0].value-u.min,l[1].value=l[1].value-u.min,l[2].value=l[2].value-u.min,a.state={svgDimen:o,data:l,dataRange:u},a}return Object(v.default)(e,t),Object(s.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.width,a=t.height,n=t.data,i=t.dataRange,r={width:e-20-20,height:a-0-0};n[0].value>i.max?n[0].value=i.max:n[0].value<i.min&&(n[0].value=i.min),n[1].value>i.max?n[1].value=i.max:n[1].value<i.min&&(n[1].value=i.min),n[2].value>i.max?n[2].value=i.max:n[2].value<i.min&&(n[2].value=i.min),n[0].value=n[0].value-i.min,n[1].value=n[1].value-i.min,n[2].value=n[2].value-i.min,n[1].value==n[2].value&&this.setState({svgDimen:r,data:n,dataRange:i})}},{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var t=this.state,e=t.svgDimen,a=t.data,n=t.dataRange,i=60,r=60,l=Math.min((.9*e.width-r-i)/2,e.height/2),u=l-2*l/5,o=.15*l,c=Math.PI,h=c/2,s=c/2,d=-s,m=w.q(d,s,c/100),v=w.t().domain([0,100]).range([d,s]),f=Math.abs(n.max-n.min),p=100/f,g=w.t().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,f/2,f]);g=1==n.direction?w.t().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,f/2,f]):w.t().range(["#66ad2b","#ee7e00","#e2062a"]).domain([0,f/2,f]),w.x(this.el).selectAll("*").remove();var b=w.a().innerRadius(l-l/5).outerRadius(l).startAngle(function(t,e){return v(e)}).endAngle(function(t,e){return v(e+1)});w.x(this.el).append("g").selectAll("path").data(m).enter().append("path").attr("stroke",function(t,e){return e+1<=a[0].value*p?g(a[0].value):"#e4e7ec"}).attr("fill",function(t,e){return e+1<=a[0].value*p?g(a[0].value):"#e4e7ec"}).attr("d",b),w.x(this.el).append("path").attr("class","needle").attr("d",function(t){var e=v(a[0].value*p)-h,n=e-h,i=e+h,r=u*Math.cos(e),l=u*Math.sin(e),c=o*Math.cos(n);return"M "+r+" "+l+" L "+c+" "+o*Math.sin(n)+" A "+c+" "+c+" 1 0 0 "+o*Math.cos(i)+" "+o*Math.sin(i)+" Z"}).attr("fill",g(a[0].value));var y=v.ticks(100);w.x(this.el).append("g").attr("class","label").selectAll("text.label").data(y).enter().append("text").attr("transform",function(t){var e=v(t)-h;return"translate("+(l+10)*Math.cos(e)+","+(l+10)*Math.sin(e)+")"}).style("text-anchor",function(t){return t<50?"end":"start"}).style("font-size",.045*e.width).attr("fill","#929292").text(function(t){return t===Math.floor(a[1].value*p)?"Branche":t===Math.floor(a[2].value*p)?"Market":""}),w.x(this.el).append("g").attr("class","marker").selectAll("path.marker").data(y).enter().append("path").style("stroke","#929292").style("stroke-width",function(t){return t===Math.floor(a[1].value*p)?6:t===Math.floor(a[2].value*p)?6:0}).attr("d",function(t){var e=v(t)-h;return"M "+(l+5)*Math.cos(e)+" "+(l+5)*Math.sin(e)+" L "+(4*l/5-5)*Math.cos(e)+" "+(4*l/5-5)*Math.sin(e)+" Z"})}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.data,i=e.dataRange,r=100/Math.abs(i.max-i.min);return p.a.createElement("svg",{width:a.width,height:a.height},p.a.createElement("g",{width:a.width,className:"gaugeChart",transform:"translate(".concat(a.width/2,", ").concat(.6*a.height,")"),ref:function(e){return t.el=e}}),p.a.createElement("g",{className:"legendBottom",transform:"translate(".concat(a.width/2,", ").concat(7*a.height/8,")")},p.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"baseline",textAnchor:"middle",style:{fontSize:.06*a.width,fill:"#929292"}},n[0].value*r==0?n[0].value*r:(n[0].value*r).toFixed(2),"%"),p.a.createElement("text",{x:"0",y:"10",alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:.05*a.width,fill:"#929292"}},i.title)))}}]),e}(f.Component),C=[{title:"PE-ratio",min:0,max:40,direction:0},{title:"ROIC",min:0,max:.5,direction:1},{title:"Return on equity",min:0,max:.5,direction:1},{title:"Revenue Growth",min:-30,max:60,direction:1},{title:"N.t.b",min:0,max:4,direction:0},{title:"N.t.b",min:0,max:4,direction:1}],x=function(t){function e(t){var a;Object(h.default)(this,e);var n=(a=Object(d.default)(this,Object(m.default)(e).call(this,t))).props,i=(n.parentWidth,n.parentHeight,n.data);return a.state={data:i,dataRange:C,width:350,height:300},a}return Object(v.default)(e,t),Object(s.default)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){t.parentWidth,t.parentHeight;var e=t.data;this.setState({data:e,dataRange:C,width:350,height:300})}},{key:"render",value:function(){var t=this,e=this.state.data,a=[],n=[],i=1;return JSON.parse(u()(e),function(t,e){a.push({label:t,value:e}),i%3==0&&(n.push(a),a=[]),i++}),p.a.createElement(f.Fragment,null,n.map(function(e,a){return p.a.createElement(y,{key:a,data:e,dataRange:C[a],width:t.state.width,height:t.state.height})}))}}]),e}(f.Component),M=(n=x,function(t){function e(t){var a;return Object(h.default)(this,e),(a=Object(d.default)(this,Object(m.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(b.default)(Object(b.default)(a))),a}return Object(v.default)(e,t),Object(s.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return p.a.createElement(n,Object(c.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(f.Component)),O=function(t){function e(){return Object(h.default)(this,e),Object(d.default)(this,Object(m.default)(e).apply(this,arguments))}return Object(v.default)(e,t),Object(s.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return console.log(a[0].calculated),p.a.createElement(g.a,Object(c.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(M,{data:a[0].calculated})))}}],[{key:"getInitialProps",value:function(){var t=Object(o.default)(r.a.mark(function t(e){var a,n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:u()({operationName:null,variables:{},query:'\n        {\n          security(id: "xgfr4") {\n            id\n            name\n            calculated {\n              PERatioCompany\n              PERatioBranche\n              PERatioMarket\n              ROICCompany\n              ROICBranche\n              ROICMarket\n              ROECompany\n              ROEBranche\n              ROEMarket\n              RevenueGrowthCompany\n              RevenueGrowthBranche\n              RevenueGrowthMarket\n              DebtRatioCompany\n              DebtRatioBranche\n              DebtRatioMarket\n              NettDEBTEBITDACompany\n              NettDEBTEBITDABranche\n              NettDEBTEBITDAMarket\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return console.log(t.data.security),[t.data.security]});case 4:return i=t.sent,t.abrupt("return",{userAgent:n,data:i});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(f.Component);e.default=O},"t+oq":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gauge",function(){var t=a("rXUM");return{page:t.default||t}}])}},[["t+oq",1,0]]]);