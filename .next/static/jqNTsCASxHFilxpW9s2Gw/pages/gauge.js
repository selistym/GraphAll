(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Feuw:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gauge",function(){var t=a("rXUM");return{page:t.default||t}}])},rXUM:function(t,e,a){"use strict";a.r(e);var n=a("kOwS"),r=a("0iUn"),i=a("sLSF"),l=a("MI3g"),c=a("a7VT"),s=a("Tit0"),o=a("q1tI"),u=a.n(o),h=a("CXsl"),d=a("VphZ"),f=function(t){function e(t){var a;Object(r.default)(this,e);var n=(a=Object(l.default)(this,Object(c.default)(e).call(this,t))).props,i=n.width,s=n.height,o=n.data,u={width:i-20-20,height:s-20-20};return a.state={svgDimen:u,data:o},a}return Object(s.default)(e,t),Object(i.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.width,a=t.height,n=t.data,r={width:e-20-20,height:a-20-20};this.setState({svgDimen:r,data:n})}},{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){this.drawChart()}},{key:"shouldComponentUpdate",value:function(t,e){return this.props.data!==t.data}},{key:"drawChart",value:function(){var t=this.state,e=t.svgDimen,a=t.data,n=20,r=20,i=(e.height-n-r)/2,l=i-2*i/5,c=.15*i,s=Math.PI,o=s/2,u=s/2,h=-u,f=d.o(h,u,s/100),p=d.q().domain([0,100]).range([h,u]);d.u(this.el).selectAll("*").remove();var m=d.a().innerRadius(i-i/5).outerRadius(i).startAngle(function(t,e){return p(e)}).endAngle(function(t,e){return p(e+1)});d.u(this.el).append("g").selectAll("path").data(f).enter().append("path").attr("stroke",function(t,e){return e+1<=a.current?a.color:"#929292"}).attr("fill",function(t,e){return e+1<=a.current?a.color:"#929292"}).attr("d",m),d.u(this.el).append("path").attr("class","needle").attr("d",function(t){var e=p(a.current)-o,n=e-o,r=e+o,i=l*Math.cos(e),s=l*Math.sin(e),u=c*Math.cos(n);return"M "+i+" "+s+" L "+u+" "+c*Math.sin(n)+" A "+u+" "+u+" 1 0 0 "+c*Math.cos(r)+" "+c*Math.sin(r)+" Z"}).attr("fill",a.color);var g=p.ticks(100);d.u(this.el).append("g").attr("class","label").selectAll("text.label").data(g).enter().append("text").attr("transform",function(t){var e=p(t)-o;return"translate("+(i+15)*Math.cos(e)+","+(i+15)*Math.sin(e)+")"}).style("text-anchor",function(t){return t<50?"end":"start"}).attr("fill","#929292").text(function(t){return t===a.branche?"Branche":t===a.market?"Market":""}),d.u(this.el).append("g").attr("class","marker").selectAll("path.marker").data(g).enter().append("path").style("stroke","#929292").style("stroke-width",function(t){return t===a.branche?6:t===a.market?6:0}).attr("d",function(t){var e=p(t)-o;return"M "+(i+10)*Math.cos(e)+" "+(i+10)*Math.sin(e)+" L "+(4*i/5-10)*Math.cos(e)+" "+(4*i/5-10)*Math.sin(e)+" Z"})}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.data;return u.a.createElement("svg",{width:a.width,height:a.height},u.a.createElement("g",{className:"gaugeChart",transform:"translate(".concat(a.width/2,", ").concat(.6*a.height,")"),ref:function(e){return t.el=e}}),u.a.createElement("g",{className:"legendBottom",transform:"translate(".concat(a.width/2,", ").concat(7*a.height/8,")")},u.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"baseline",textAnchor:"middle",style:{fontSize:64,fill:"#bdbbbc"}},n.current,"%"),u.a.createElement("text",{x:"0",y:"10",alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:18,fill:"#bdbbbc"}},n.description)))}}]),e}(o.Component),p={branche:25,market:45,current:70,color:"#df072c",description:"PE-ratio"},m=function(t){function e(t){var a;return Object(r.default)(this,e),(a=Object(l.default)(this,Object(c.default)(e).call(this,t))).state={data:p,width:600,height:400},a}return Object(s.default)(e,t),Object(i.default)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){this.setState({data:t.data,width:t.width,height:t.height})}},{key:"render",value:function(){return u.a.createElement(o.Fragment,null,u.a.createElement(f,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(o.Component),g=function(t){function e(){return Object(r.default)(this,e),Object(l.default)(this,Object(c.default)(e).apply(this,arguments))}return Object(s.default)(e,t),Object(i.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session;t.navMenu;return u.a.createElement(h.a,Object(n.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),u.a.createElement("div",{className:"content"},u.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),u.a.createElement("p",null,"The Coca-Cola Company is an American ...."),u.a.createElement(m,null)))}}]),e}(o.Component);e.default=g}},[["Feuw",1,0,8]]]);