(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4lWJ":function(t,e,n){n("MRte"),t.exports=n("TaGV").Object.getOwnPropertySymbols},"9lmX":function(t,e,n){n("zWrT");var a=n("TaGV").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}},azxR:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function i(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},s4hn:function(t,e,n){t.exports=n("4lWJ")},szmd:function(t,e,n){"use strict";n.r(e);var a=n("z3IF"),r=n("LkAs"),i=n("Moms"),o=n("bMj6"),c=n("hZod"),l=n("tEuJ"),s=n("mXGw"),u=n.n(s),d=n("CXsl"),h=n("tvLF"),f=n.n(h),p=n("s4hn"),m=n.n(p),v=n("1qCV"),y=n.n(v),g=n("azxR");var w=n("YKN3");var b,x,O=n("t1Qi"),j=(b=function(t,e,n){var a=e.width,r=e.height,i=e.security,o=e.t,c=e.d,l=e.b,s=e.g,u=e.v,d="#f45b63",h="#f49d73",f="#72c14a",p=function(t){return t<=50?d:t>=70?f:h},m=Math.min(a,r)/1.9,v=[{index:.7,text:"Dividend",value:c/100,allValues:[c,25,50,75]},{index:.6,text:"Balans",value:l/100,allValues:[l,25,50,75]},{index:.5,text:"Growth",value:s/100,allValues:[s,25,50,75]},{index:.4,text:"Valuation",value:u/100,allValues:[u,25,50,75]}],y=O.w(".tooltip-".concat(i.id));O.w(t.current).select("g").remove();var g=O.a().startAngle(0).endAngle(function(t){return 2*t.value*Math.PI}).innerRadius(function(t){return t.index*m}).outerRadius(function(t){return(t.index+.09)*m}).cornerRadius(2),w=O.w(t.current).append("g").attr("transform","translate("+a/2+","+r/2+")");w.append("text").attr("class","center-text").style("font-weight","bold").style("alignment-baseline","middle").style("text-anchor","middle").style("font-size",20).style("fill",p(o)).text(o+"%");var b,x=w.selectAll("g").data(v,function(t){return t.value}).enter().append("g"),j=x.append("path").attr("class","arc-body").style("fill",function(t){return p(o)});x.append("text").attr("dy","-.15em").attr("dx","-0.75em").style("text-anchor","middle").attr("transform",function(t){return"translate("+[0,-t.index*m]+")"}).style("font-size",function(){return function(t){return t<=120?11:t>=180?14:12}(m)}).style("font-weight","bold").style("fill",p(o)).text(function(t){return t.text.split("")[0]}),j.style("stroke","#fff").style("stroke-width",2).on("mouseover",function(e){var n=t.current.getBoundingClientRect();O.w(this).style("stroke-width",0),y.html("<b>".concat(e.text,"</b><br/>\n          <div class='sparkGraph sparkGraph-").concat(i.id,"'></div>\n          ").concat(e.allValues.join(" - "),"\n          ")).style("left","".concat(n.x+n.width/2-140,"px")).style("top","".concat(n.y+n.height/2-40,"px")).transition().duration(200).style("opacity",.9),function(t,e){var n=O.s().range([0,150]),a=O.s().range([30,0]);n.domain([0,4]),a.domain([0,100]);var r=O.m().x(function(t,e){return n(e)}).y(function(t,e){return a(t)});O.w(t).append("svg").attr("width",150).attr("class","sparkline-wrapper-svg").attr("height",30).append("g").attr("transform","translate(0, 2)").append("path").datum(e).attr("class","sparkline").attr("id","current-path-"+t.replace("#","")).attr("d",r)}(".sparkGraph-".concat(i.id),e.allValues)}).on("mouseout",function(t){y.transition().duration(500).style("opacity",0),O.w(this).style("stroke-width",2)}).transition().duration(750).attrTween("d",(b=g,function(t){var e=O.l(0,t.value);return function(n){return t.value=e(n),b(t)}}))},function(t){function e(){var t,n;Object(r.default)(this,e);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=Object(o.default)(this,(t=Object(c.default)(e)).call.apply(t,[this].concat(i))),Object(g.a)(Object(w.default)(Object(w.default)(n)),"anchor",u.a.createRef()),n}return Object(l.default)(e,t),Object(i.default)(e,[{key:"componentDidMount",value:function(){b(this.anchor,this.props,this.state)}},{key:"componentDidUpdate",value:function(){b(this.anchor,this.props,this.state)}},{key:"render",value:function(){var t=this.props,e=t.x,n=t.y,a=this.props.component||"g";return u.a.createElement(a,{transform:"translate(".concat(e,", ").concat(n,")"),ref:this.anchor})}}]),e}(s.Component)),C=function(t){function e(){var t,n;Object(r.default)(this,e);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=Object(o.default)(this,(t=Object(c.default)(e)).call.apply(t,[this].concat(i))),Object(g.a)(Object(w.default)(Object(w.default)(n)),"state",{svgDimensions:null,width:null,height:null}),n}return Object(l.default)(e,t),Object(i.default)(e,[{key:"render",value:function(){var t=this.state.svgDimensions,e=this.props,n=e.security;e.data,e.year;return u.a.createElement(s.Fragment,null,u.a.createElement("svg",{width:t.width,height:t.height},u.a.createElement(j,{x:0,y:0,width:t.width,height:t.height,t:n.t,d:n.d,b:n.b,g:n.g,v:n.v,security:n})),u.a.createElement("div",{className:"tooltip tooltip-".concat(n.id),style:{height:"75px"}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.parentWidth,a=t.parentHeight,r={width:Math.max(n,200),height:Math.max(a,200)};return e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=y()(n);"function"==typeof m.a&&(a=a.concat(m()(n).filter(function(t){return f()(n,t).enumerable}))),a.forEach(function(e){Object(g.a)(t,e,n[e])})}return t}({},e,{svgDimensions:r,width:r.width,height:r.height})}}]),e}(s.Component),E=(x=C,function(t){function e(t){var n;return Object(r.default)(this,e),(n=Object(o.default)(this,Object(c.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(w.default)(Object(w.default)(n))),n}return Object(l.default)(e,t),Object(i.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:n}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return u.a.createElement(x,Object(a.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return u.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(s.Component)),k=u.a.memo(function(t){var e=t.security;return u.a.createElement("div",{className:"column is-4"},u.a.createElement("div",{className:"card",style:{display:"flex",flexDirection:"column",height:"100%"}},u.a.createElement("header",{className:"card-header",style:{flexGrow:1}},u.a.createElement("p",{className:"card-header-title"},u.a.createElement("span",null,"Security Name"))),u.a.createElement("div",{className:"card-content has-text-centered"},u.a.createElement(E,{security:e})),u.a.createElement("footer",{className:"card-footer",style:{marginTop:"auto"}},u.a.createElement("a",{className:"card-footer-item"},"View"),e.isIdea?u.a.createElement("a",{className:"card-footer-item"},"Remove"):u.a.createElement("a",{className:"card-footer-item"},"Add to portfolio"))))}),N={b:70,currency:"EUR",d:4,g:3,id:"etozx",isIdea:!0,liveData:{changePercent:-1.0183,cumulativeVolume:33,dateTime:"2019-03-11T15:22:07.766Z",dayHigh:.972,dayLow:.972,last:.972,netChange:-.01,open:.972,totalTurnoverCurrency:32.076},name:"11 88 0 Solutions",sector:"CommercialServices",t:12,ticker:"TGT",v:70},T=function(t){function e(){return Object(r.default)(this,e),Object(o.default)(this,Object(c.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(i.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session;t.navMenu;return u.a.createElement(d.a,Object(a.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),u.a.createElement("div",{className:"content"},u.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),u.a.createElement("p",null,"The Coca-Cola Company is an American ...."),u.a.createElement(k,{security:N})))}}]),e}(s.Component);e.default=T},tvLF:function(t,e,n){t.exports=n("9lmX")},wWMI:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/circular",function(){var t=n("szmd");return{page:t.default||t}}])},zWrT:function(t,e,n){var a=n("T/1i"),r=n("0HwX").f;n("qNvu")("getOwnPropertyDescriptor",function(){return function(t,e){return r(a(t),e)}})}},[["wWMI",1,0]]]);