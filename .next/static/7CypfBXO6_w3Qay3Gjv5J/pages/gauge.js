(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Feuw:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gauge",function(){var t=a("rXUM");return{page:t.default||t}}])},rXUM:function(t,e,a){"use strict";a.r(e);var n,i=a("kOwS"),r=a("0iUn"),l=a("sLSF"),u=a("MI3g"),o=a("a7VT"),h=a("Tit0"),c=a("q1tI"),s=a.n(c),d=a("CXsl"),m=a("9Jkg"),v=a.n(m),f=a("AT/M"),p=a("VphZ"),g=function(t){function e(t){var a;Object(r.default)(this,e);var n=(a=Object(u.default)(this,Object(o.default)(e).call(this,t))).props,i=n.width,l=n.height,h=n.data,c=n.dataRange,s={width:i-20-20,height:l-20-20};return h[0].value>c.max?h[0].value=c.max:h[0].value<c.min&&(h[0].value=c.min),h[1].value>c.max?h[1].value=c.max:h[1].value<c.min&&(h[1].value=c.min),h[2].value>c.max?h[2].value=c.max:h[2].value<c.min&&(h[2].value=c.min),h[0].value=h[0].value-c.min,h[1].value=h[1].value-c.min,h[2].value=h[2].value-c.min,a.state={svgDimen:s,data:h,dataRange:c},a}return Object(h.default)(e,t),Object(l.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.width,a=t.height,n=t.data,i=t.dataRange,r={width:e-50-50,height:a-20-20};n[0].value>i.max?n[0].value=i.max:n[0].value<i.min&&(n[0].value=i.min),n[1].value>i.max?n[1].value=i.max:n[1].value<i.min&&(n[1].value=i.min),n[2].value>i.max?n[2].value=i.max:n[2].value<i.min&&(n[2].value=i.min),n[0].value=n[0].value-i.min,n[1].value=n[1].value-i.min,n[2].value=n[2].value-i.min,this.setState({svgDimen:r,data:n,dataRange:i})}},{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){this.drawChart()}},{key:"formatData",value:function(){}},{key:"drawChart",value:function(){var t=this.state,e=t.svgDimen,a=t.data,n=t.dataRange,i=60,r=60,l=Math.min((e.width-r-i)/2,e.height/2),u=l-2*l/5,o=.15*l,h=Math.PI,c=h/2,s=h/2,d=-s,m=p.o(d,s,h/100),v=p.q().domain([0,100]).range([d,s]),f=Math.abs(n.max-n.min),g=100/f,w=p.q().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,f/2,f]);w=1==n.direction?p.q().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,f/2,f]):p.q().range(["#66ad2b","#ee7e00","#e2062a"]).domain([0,f/2,f]),p.u(this.el).selectAll("*").remove();var C=p.a().innerRadius(l-l/5).outerRadius(l).startAngle(function(t,e){return v(e)}).endAngle(function(t,e){return v(e+1)});p.u(this.el).append("g").selectAll("path").data(m).enter().append("path").attr("stroke",function(t,e){return e+1<=a[0].value*g?w(a[0].value):"#e4e7ec"}).attr("fill",function(t,e){return e+1<=a[0].value*g?w(a[0].value):"#e4e7ec"}).attr("d",C),p.u(this.el).append("path").attr("class","needle").attr("d",function(t){var e=v(a[0].value*g)-c,n=e-c,i=e+c,r=u*Math.cos(e),l=u*Math.sin(e),h=o*Math.cos(n);return"M "+r+" "+l+" L "+h+" "+o*Math.sin(n)+" A "+h+" "+h+" 1 0 0 "+o*Math.cos(i)+" "+o*Math.sin(i)+" Z"}).attr("fill",w(a[0].value));var M=v.ticks(100);p.u(this.el).append("g").attr("class","label").selectAll("text.label").data(M).enter().append("text").attr("transform",function(t){var e=v(t)-c;return"translate("+(l+10)*Math.cos(e)+","+(l+10)*Math.sin(e)+")"}).style("text-anchor",function(t){return t<50?"end":"start"}).style("font-size",.05*e.width).attr("fill","#929292").text(function(t){return t===Math.floor(a[1].value*g)?"Branche":t===Math.floor(a[2].value*g)?"Market":""}),p.u(this.el).append("g").attr("class","marker").selectAll("path.marker").data(M).enter().append("path").style("stroke","#929292").style("stroke-width",function(t){return t===Math.floor(a[1].value*g)?6:t===Math.floor(a[2].value*g)?6:0}).attr("d",function(t){var e=v(t)-c;return"M "+(l+5)*Math.cos(e)+" "+(l+5)*Math.sin(e)+" L "+(4*l/5-5)*Math.cos(e)+" "+(4*l/5-5)*Math.sin(e)+" Z"})}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.data,i=e.dataRange,r=100/Math.abs(i.max-i.min);return s.a.createElement("svg",{width:a.width,height:a.height,align:"center"},s.a.createElement("g",{width:a.width,className:"gaugeChart",transform:"translate(".concat(a.width/3,", ").concat(.6*a.height,")"),ref:function(e){return t.el=e}}),s.a.createElement("g",{width:a.width,className:"legendBottom",transform:"translate(".concat(a.width/3,", ").concat(7*a.height/8,")")},s.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"baseline",textAnchor:"middle",style:{fontSize:.12*a.width,fill:"#929292"}},n[0].value*r,"%"),s.a.createElement("text",{x:"0",y:"10",alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:.05*a.width,fill:"#929292"}},i.title)))}}]),e}(c.Component),w={PERatioCompany:5,PERatioBranche:20,PERatioMarket:10,ROICCompany:.2,ROICBranche:.1,ROICMarket:.05,ROECompany:.45,ROEBranche:.15,ROEMarket:.25,RevenueGrowthCompany:15,RevenueGrowthBranche:20,RevenueGrowthMarket:7,DebtRatioCompany:9,DebtRatioBranche:2,DebtRatioMarket:1,NettDEBTEBITDACompany:-7,NettDEBTEBITDABranche:2,NettDEBTEBITDAMarket:4},C=[{title:"PE-ratio",min:0,max:40,direction:0},{title:"ROIC",min:0,max:.5,direction:1},{title:"Return on equity",min:0,max:.5,direction:1},{title:"Revenue Growth",min:-30,max:60,direction:1},{title:"N.t.b",min:0,max:4,direction:0},{title:"N.t.b",min:0,max:4,direction:1}],M=function(t){function e(t){var a;Object(r.default)(this,e);var n=(a=Object(u.default)(this,Object(o.default)(e).call(this,t))).props,i=n.parentWidth,l=n.parentHeight;return a.state={data:w,dataRange:C,width:Math.max(i/6,400),height:Math.min(l,400)},a}return Object(h.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight;this.setState({data:w,dataRange:C,width:Math.max(e/6,400),height:Math.min(a,400)})}},{key:"render",value:function(){var t=this,e=this.state.data,a=[],n=[],i=1;return JSON.parse(v()(e),function(t,e){a.push({label:t,value:e}),i%3==0&&(n.push(a),a=[]),i++}),s.a.createElement(c.Fragment,null,n.map(function(e,a){return s.a.createElement(g,{key:a,data:e,dataRange:C[a],width:t.state.width,height:t.state.height})}))}}]),e}(c.Component),b=(n=M,function(t){function e(t){var a;return Object(r.default)(this,e),(a=Object(u.default)(this,Object(o.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(f.default)(a)),a}return Object(h.default)(e,t),Object(l.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return s.a.createElement(n,Object(i.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return s.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(c.Component)),y=function(t){function e(){return Object(r.default)(this,e),Object(u.default)(this,Object(o.default)(e).apply(this,arguments))}return Object(h.default)(e,t),Object(l.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session;t.navMenu;return s.a.createElement(d.a,Object(i.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),s.a.createElement("div",{className:"content"},s.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),s.a.createElement("p",null,"The Coca-Cola Company is an American ...."),s.a.createElement(b,null)))}}]),e}(c.Component);e.default=y}},[["Feuw",1,0]]]);