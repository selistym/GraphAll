(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{rXUM:function(e,t,a){"use strict";a.r(t);var n,i=a("UrUy"),r=a.n(i),l=a("JYC+"),u=a.n(l),o=a("R3/3"),c=a("z3IF"),s=a("LkAs"),h=a("Moms"),d=a("bMj6"),v=a("hZod"),m=a("tEuJ"),f=a("mXGw"),p=a.n(f),g=a("CXsl"),b=a("YKN3"),w=a("t1Qi"),y=function(e){function t(e){var a;Object(s.default)(this,t);var n=(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).props,i=n.width,r=n.height,l=n.data,u=n.dataRange,o={width:i-20-20,height:r-0-0};return l[0].value>u.max?l[0].value=u.max:l[0].value<u.min&&(l[0].value=u.min),l[1].value>u.max?l[1].value=u.max:l[1].value<u.min&&(l[1].value=u.min),l[2].value>u.max?l[2].value=u.max:l[2].value<u.min&&(l[2].value=u.min),l[0].value=l[0].value-u.min,l[1].value=l[1].value-u.min,l[2].value=l[2].value-u.min,console.log(l[0].value),console.log(l[1].value),console.log(l[2].value),l[1].value==l[2].value&&(l[1].value+=10),a.state={svgDimen:o,data:l,dataRange:u},a}return Object(m.default)(t,e),Object(h.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,n=e.data,i=e.dataRange,r={width:t-20-20,height:a-0-0};n[0].value>i.max?n[0].value=i.max:n[0].value<i.min&&(n[0].value=i.min),n[1].value>i.max?n[1].value=i.max:n[1].value<i.min&&(n[1].value=i.min),n[2].value>i.max?n[2].value=i.max:n[2].value<i.min&&(n[2].value=i.min),n[0].value=n[0].value-i.min,n[1].value=n[1].value-i.min,n[2].value=n[2].value-i.min,n[1].value==n[2].value&&(n[1].value+=10),console.log(n[0].value),console.log(n[1].value),console.log(n[2].value),this.setState({svgDimen:r,data:n,dataRange:i})}},{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){this.drawChart()}},{key:"formatData",value:function(){}},{key:"drawChart",value:function(){var e=this.state,t=e.svgDimen,a=e.data,n=e.dataRange,i=60,r=60,l=Math.min((.9*t.width-r-i)/2,t.height/2),u=l-2*l/5,o=.15*l,c=Math.PI,s=c/2,h=c/2,d=-h,v=w.o(d,h,c/100),m=w.q().domain([0,100]).range([d,h]),f=Math.abs(n.max-n.min),p=100/f,g=w.q().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,f/2,f]);g=1==n.direction?w.q().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,f/2,f]):w.q().range(["#66ad2b","#ee7e00","#e2062a"]).domain([0,f/2,f]),w.u(this.el).selectAll("*").remove();var b=w.a().innerRadius(l-l/5).outerRadius(l).startAngle(function(e,t){return m(t)}).endAngle(function(e,t){return m(t+1)});w.u(this.el).append("g").selectAll("path").data(v).enter().append("path").attr("stroke",function(e,t){return t+1<=a[0].value*p?g(a[0].value):"#e4e7ec"}).attr("fill",function(e,t){return t+1<=a[0].value*p?g(a[0].value):"#e4e7ec"}).attr("d",b),w.u(this.el).append("path").attr("class","needle").attr("d",function(e){var t=m(a[0].value*p)-s,n=t-s,i=t+s,r=u*Math.cos(t),l=u*Math.sin(t),c=o*Math.cos(n);return"M "+r+" "+l+" L "+c+" "+o*Math.sin(n)+" A "+c+" "+c+" 1 0 0 "+o*Math.cos(i)+" "+o*Math.sin(i)+" Z"}).attr("fill",g(a[0].value));var y=m.ticks(100);w.u(this.el).append("g").attr("class","label").selectAll("text.label").data(y).enter().append("text").attr("transform",function(e){var t=m(e)-s;return"translate("+(l+10)*Math.cos(t)+","+(l+10)*Math.sin(t)+")"}).style("text-anchor",function(e){return e<50?"end":"start"}).style("font-size",.05*t.width).attr("fill","#929292").text(function(e){return e===Math.floor(a[1].value*p)?"Branche":e===Math.floor(a[2].value*p)?"Market":""}),w.u(this.el).append("g").attr("class","marker").selectAll("path.marker").data(y).enter().append("path").style("stroke","#929292").style("stroke-width",function(e){return e===Math.floor(a[1].value*p)?6:e===Math.floor(a[2].value*p)?6:0}).attr("d",function(e){var t=m(e)-s;return"M "+(l+5)*Math.cos(t)+" "+(l+5)*Math.sin(t)+" L "+(4*l/5-5)*Math.cos(t)+" "+(4*l/5-5)*Math.sin(t)+" Z"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.svgDimen,n=t.data,i=t.dataRange,r=100/Math.abs(i.max-i.min);return p.a.createElement("svg",{width:a.width,height:a.height},p.a.createElement("g",{width:a.width,className:"gaugeChart",transform:"translate(".concat(a.width/2,", ").concat(.6*a.height,")"),ref:function(t){return e.el=t}}),p.a.createElement("g",{className:"legendBottom",transform:"translate(".concat(a.width/2,", ").concat(7*a.height/8,")")},p.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"baseline",textAnchor:"middle",style:{fontSize:.06*a.width,fill:"#929292"}},n[0].value*r==0?n[0].value*r:(n[0].value*r).toFixed(2),"%"),p.a.createElement("text",{x:"0",y:"10",alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:.05*a.width,fill:"#929292"}},i.title)))}}]),t}(f.Component),C=[{title:"PE-ratio",min:0,max:40,direction:0},{title:"ROIC",min:0,max:.5,direction:1},{title:"Return on equity",min:0,max:.5,direction:1},{title:"Revenue Growth",min:-30,max:60,direction:1},{title:"N.t.b",min:0,max:4,direction:0},{title:"N.t.b",min:0,max:4,direction:1}],M=function(e){function t(e){var a;Object(s.default)(this,t);var n=(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).props,i=(n.parentWidth,n.parentHeight,n.data);return a.state={data:i,dataRange:C,width:350,height:300},a}return Object(m.default)(t,e),Object(h.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.parentWidth,e.parentHeight;var t=e.data;this.setState({data:t,dataRange:C,width:350,height:300})}},{key:"render",value:function(){var e=this,t=this.state.data,a=[],n=[],i=1;return JSON.parse(u()(t),function(e,t){a.push({label:e,value:t}),i%3==0&&(n.push(a),a=[]),i++}),p.a.createElement(f.Fragment,null,n.map(function(t,a){return p.a.createElement(y,{key:a,data:t,dataRange:C[a],width:e.state.width,height:e.state.height})}))}}]),t}(f.Component),x=(n=M,function(e){function t(e){var a;return Object(s.default)(this,t),(a=Object(d.default)(this,Object(v.default)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(b.default)(Object(b.default)(a))),a}return Object(m.default)(t,e),Object(h.default)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return p.a.createElement(n,Object(c.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return p.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(f.Component)),O=function(e){function t(){return Object(s.default)(this,t),Object(d.default)(this,Object(v.default)(t).apply(this,arguments))}return Object(m.default)(t,e),Object(h.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session,a=(e.navMenu,e.data);return console.log(a[0].calculated),p.a.createElement(g.a,Object(c.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),p.a.createElement("div",{className:"content"},p.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),p.a.createElement("p",null,"The Coca-Cola Company is an American ...."),p.a.createElement(x,{data:a[0].calculated})))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(r.a.mark(function e(t){var a,n,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,n=a?a.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:u()({operationName:null,variables:{},query:'\n        {\n          security(id: "xgfr4") {\n            id\n            name\n            calculated {\n              PERatioCompany\n              PERatioBranche\n              PERatioMarket\n              ROICCompany\n              ROICBranche\n              ROICMarket\n              ROECompany\n              ROEBranche\n              ROEMarket\n              RevenueGrowthCompany\n              RevenueGrowthBranche\n              RevenueGrowthMarket\n              DebtRatioCompany\n              DebtRatioBranche\n              DebtRatioMarket\n              NettDEBTEBITDACompany\n              NettDEBTEBITDABranche\n              NettDEBTEBITDAMarket\n              }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return console.log(e.data.security),[e.data.security]});case 4:return i=e.sent,e.abrupt("return",{userAgent:n,data:i});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.Component);t.default=O},"t+oq":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gauge",function(){var e=a("rXUM");return{page:e.default||e}}])}},[["t+oq",1,0]]]);