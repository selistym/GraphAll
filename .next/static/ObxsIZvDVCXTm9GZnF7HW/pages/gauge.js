(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Feuw:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gauge",function(){var t=a("rXUM");return{page:t.default||t}}])},rXUM:function(t,e,a){"use strict";a.r(e);var n,i=a("kOwS"),r=a("0iUn"),l=a("sLSF"),u=a("MI3g"),o=a("a7VT"),h=a("Tit0"),s=a("q1tI"),c=a.n(s),d=a("CXsl"),m=a("9Jkg"),v=a.n(m),f=a("AT/M"),p=a("VphZ"),g=function(t){function e(t){var a;Object(r.default)(this,e);var n=(a=Object(u.default)(this,Object(o.default)(e).call(this,t))).props,i=n.width,l=n.height,h=n.data,s=n.dataRange;console.log(h,"data"),console.log(s,"dataRange");var c={width:i-20-20,height:l-20-20};return h[0].value>s.max?h[0].value=s.max:h[0].value<s.min&&(h[0].value=s.min),h[1].value>s.max?h[1].value=s.max:h[1].value<s.min&&(h[1].value=s.min),h[2].value>s.max?h[2].value=s.max:h[2].value<s.min&&(h[2].value=s.min),h[0].value=Math.abs(h[0].value),h[1].value=Math.abs(h[1].value),h[2].value=Math.abs(h[2].value),a.state={svgDimen:c,data:h,dataRange:s},a}return Object(h.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.width,a=t.height,n=t.data,i=t.dataRange,r={width:e-50-50,height:a-20-20};n[0].value>i.max?n[0].value=i.max:n[0].value<i.min&&(n[0].value=i.min),n[1].value>i.max?n[1].value=i.max:n[1].value<i.min&&(n[1].value=i.min),n[2].value>i.max?n[2].value=i.max:n[2].value<i.min&&(n[2].value=i.min),n[0].value=Math.abs(n[0].value),n[1].value=Math.abs(n[1].value),n[2].value=Math.abs(n[2].value),this.setState({svgDimen:r,data:n,dataRange:i})}},{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){this.drawChart()}},{key:"formatData",value:function(){}},{key:"drawChart",value:function(){var t=this.state,e=t.svgDimen,a=t.data,n=t.dataRange,i=60,r=60,l=Math.min((e.width-r-i)/2,e.height/2),u=l-2*l/5,o=.15*l,h=Math.PI,s=h/2,c=h/2,d=-c,m=p.o(d,c,h/100),v=p.q().domain([0,100]).range([d,c]),f=100/(Math.abs(n.min)+Math.abs(n.max)),g=p.q().range(["#e2062a","#ee7e00","#66ad2b"]).domain([n.min,(n.max-n.min)/2,n.max]);g=1==n.direction?p.q().range(["#e2062a","#ee7e00","#66ad2b"]).domain([n.min,(n.max-n.min)/2,n.max]):p.q().range(["#66ad2b","#ee7e00","#e2062a"]).domain([n.min,(n.max-n.min)/2,n.max]),p.u(this.el).selectAll("*").remove();var b=p.a().innerRadius(l-l/5).outerRadius(l).startAngle(function(t,e){return v(e)}).endAngle(function(t,e){return v(e+1)});p.u(this.el).append("g").selectAll("path").data(m).enter().append("path").attr("stroke",function(t,e){return e+1<=a[0].value*f?g(a[0].value):"#e4e7ec"}).attr("fill",function(t,e){return e+1<=a[0].value*f?g(a[0].value):"#e4e7ec"}).attr("d",b),p.u(this.el).append("path").attr("class","needle").attr("d",function(t){var e=v(a[0].value*f)-s,n=e-s,i=e+s,r=u*Math.cos(e),l=u*Math.sin(e),h=o*Math.cos(n);return"M "+r+" "+l+" L "+h+" "+o*Math.sin(n)+" A "+h+" "+h+" 1 0 0 "+o*Math.cos(i)+" "+o*Math.sin(i)+" Z"}).attr("fill",g(a[0].value));var M=v.ticks(100);p.u(this.el).append("g").attr("class","label").selectAll("text.label").data(M).enter().append("text").attr("transform",function(t){var e=v(t)-s;return"translate("+(l+10)*Math.cos(e)+","+(l+10)*Math.sin(e)+")"}).style("text-anchor",function(t){return t<50?"end":"start"}).style("font-size",.05*e.width).attr("fill","#929292").text(function(t){return t===a[1].value*f?"Branche":t===a[2].value*f?"Market":""}),p.u(this.el).append("g").attr("class","marker").selectAll("path.marker").data(M).enter().append("path").style("stroke","#929292").style("stroke-width",function(t){return t===a[1].value*f?6:t===a[2].value*f?6:0}).attr("d",function(t){var e=v(t)-s;return"M "+(l+5)*Math.cos(e)+" "+(l+5)*Math.sin(e)+" L "+(4*l/5-5)*Math.cos(e)+" "+(4*l/5-5)*Math.sin(e)+" Z"})}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.data,i=e.dataRange,r=100/(Math.abs(i.min)+Math.abs(i.max));return c.a.createElement("svg",{width:a.width,height:a.height},c.a.createElement("g",{className:"gaugeChart",transform:"translate(".concat(a.width/2,", ").concat(.6*a.height,")"),ref:function(e){return t.el=e}}),c.a.createElement("g",{className:"legendBottom",transform:"translate(".concat(a.width/2,", ").concat(7*a.height/8,")")},c.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"baseline",textAnchor:"middle",style:{fontSize:.12*a.width,fill:"#929292"}},n[0].value*r,"%"),c.a.createElement("text",{x:"0",y:"10",alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:.05*a.width,fill:"#929292"}},i.title)))}}]),e}(s.Component),b={PERatioCompany:5,PERatioBranche:20,PERatioMarket:10,ROICCompany:.2,ROICBranche:.1,ROICMarket:.05,ROECompany:.45,ROEBranche:.15,ROEMarket:.25,RevenueGrowthCompany:-15,RevenueGrowthBranche:-20,RevenueGrowthMarket:-7,DebtRatioCompany:9,DebtRatioBranche:2,DebtRatioMarket:1,NettDEBTEBITDACompany:-7,NettDEBTEBITDABranche:2,NettDEBTEBITDAMarket:2},M=[{title:"PE-ratio",min:0,max:40,direction:0},{title:"ROIC",min:0,max:.5,direction:1},{title:"Return on equity",min:0,max:.5,direction:1},{title:"Revenue Growth",min:-30,max:30,direction:1},{title:"N.t.b",min:0,max:4,direction:0},{title:"N.t.b",min:0,max:4,direction:1}],w=function(t){function e(t){var a;Object(r.default)(this,e);var n=(a=Object(u.default)(this,Object(o.default)(e).call(this,t))).props,i=n.parentWidth,l=n.parentHeight;return a.state={data:b,dataRange:M,width:Math.max(i/6,400),height:Math.min(l,400)},a}return Object(h.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight;this.setState({data:b,dataRange:M,width:Math.max(e/6,400),height:Math.min(a,400)})}},{key:"render",value:function(){var t=this,e=this.state.data,a=[],n=[],i=1;return JSON.parse(v()(e),function(t,e){a.push({label:t,value:e}),i%3==0&&(n.push(a),a=[]),i++}),c.a.createElement(s.Fragment,null,n.map(function(e,a){return c.a.createElement(g,{key:a,data:e,dataRange:M[a],width:t.state.width,height:t.state.height})}))}}]),e}(s.Component),C=(n=w,function(t){function e(t){var a;return Object(r.default)(this,e),(a=Object(u.default)(this,Object(o.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(f.default)(a)),a}return Object(h.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return c.a.createElement(n,Object(i.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return c.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(s.Component)),x=function(t){function e(){return Object(r.default)(this,e),Object(u.default)(this,Object(o.default)(e).apply(this,arguments))}return Object(h.default)(e,t),Object(l.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session;t.navMenu;return c.a.createElement(d.a,Object(i.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),c.a.createElement("p",null,"The Coca-Cola Company is an American ...."),c.a.createElement(C,null)))}}]),e}(s.Component);e.default=x}},[["Feuw",1,0]]]);