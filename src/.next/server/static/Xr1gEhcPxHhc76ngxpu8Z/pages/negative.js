module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}},i=!0;try{e[a].call(r.exports,r,r.exports,n),i=!1}finally{i&&delete t[a]}return r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),i=a(n("KBEF")),o=a(n("J/q3")),l=a(n("3esu")),s=a(n("8m4E")),c=a(n("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=u(n("cDcd")),h=f(n("rf6O")),p=f(n("GeWT")),m=n("p8BD");t.default=function(e){var t=m.getDisplayName(e),n=function(t){function n(){return(0,i.default)(this,n),(0,l.default)(this,(0,s.default)(n).apply(this,arguments))}return(0,c.default)(n,t),(0,o.default)(n,[{key:"render",value:function(){return d.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),n}(d.Component);return n.contextTypes={router:h.default.object},n.displayName="withRouter(".concat(t,")"),p.default(n,e)}},"0i/h":function(e,t){e.exports=require("d3")},"3esu":function(e,t,n){var a=n("NluH"),r=n("oS/Z");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"6Ndq":function(e,t,n){e.exports=n("o5io")},7:function(e,t,n){e.exports=n("8jUH")},"7mTa":function(e,t,n){e.exports=n("aAV7")},"8jUH":function(e,t,n){"use strict";n.r(t);var a,r=n("UrUy"),i=n.n(r),o=n("JYC+"),l=n.n(o),s=n("R3/3"),c=n("z3IF"),u=n("LkAs"),f=n("Moms"),d=n("bMj6"),h=n("hZod"),p=n("tEuJ"),m=n("cDcd"),v=n.n(m),b=n("CXsl"),g=n("YKN3"),y=n("0i/h"),E=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).props,r=a.data,i=a.bandwidth,o=a.xScale,l=a.step_data;return n.state={data:r,bandwidth:i,xScale:o,step_data:l},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.drawBars()}},{key:"componentDidUpdate",value:function(){this.drawBars()}},{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=e.xScale,a=e.bandwidth,r=e.step_data;this.setState({data:t,bandwidth:a,xScale:n,step_data:r})}},{key:"drawBars",value:function(){var e=this.state,t=e.data,n=e.xScale,a=e.bandwidth,r=e.step_data,i=y.scaleBand().domain(t.values.slice(0,4).map(function(e){return e.label})).rangeRound([0,a]),o=100/r.range,l=t.values.slice(0,4).map(function(e){return e.label=e.label,e.value=+e.value,e}),s=t.values.slice(4,5).map(function(e){return e.label=e.label,e.value=+e.value,e}),c=y.scaleOrdinal().range(["#bdbbbc","#63ae2d","#929292","#000700"]);y.select(this.el).selectAll("*").remove(),y.select(this.el).selectAll("rect").data(l).enter().append("rect").attr("rx",5).attr("ry",5).attr("x",function(e){return e.value>0?n(0):n(e.value*o)}).attr("width",function(e){return e.value>0?n(e.value*o-100):n(0)-n(e.value*o)}).attr("height",i.bandwidth()).attr("y",function(e){return i(e.label)}).style("fill",function(e){return c(e.label)}).style("opacity",function(e){return e.label.includes("Ebitda")?0:1}),y.select(this.el).selectAll("path").data(s).enter().append("path").attr("d",function(e){return"M"+n(e.value*o)+" -1 L"+n(e.value*o)+" "+(i.bandwidth()+2)+" Z"}).style("stroke","#de0730").style("stroke-width",3),y.select(this.el).selectAll("text").data(l).enter().append("text").attr("x",function(e){return e.value,n(e.value*o)}).attr("y",function(e){return 0==e.label.includes("Ebitda")?i(e.label)+i.bandwidth()/2:0}).attr("dx",function(e){return e.value>0?5:-5}).text(function(e){return 0==e.value?"":e.value+""}).attr("text-anchor",function(e){return e.value>0?"start":"end"}).attr("alignment-baseline","central").style("font-size",12).style("fill","grey")}},{key:"render",value:function(){var e=this;return v.a.createElement("g",{ref:function(t){return e.el=t}})}}]),t}(v.a.Component),N=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).props,r=a.svgDimen,i=a.margins,o=a.data,l=y.scaleLinear().range([0,r.width-i.left-i.right]).domain([-100,100]),s=y.scaleBand().rangeRound([r.height-i.bottom,0]).padding(.01).domain(o.map(function(e){return e.year}));return n.state={svgDimen:r,margins:i,xScale:l,y0Scale:s,data:o,bandwidth:s.bandwidth(),step_data:n.getRange(o)},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(e){var t=e.svgDimen,n=e.margins,a=e.data,r=y.scaleLinear().range([0,t.width-n.left-n.right]).domain([-100,100]),i=y.scaleBand().rangeRound([t.height-n.bottom,0]).padding(.01).domain(a.map(function(e){return e.year}));this.setState({svgDimen:t,margins:n,xScale:r,y0Scale:i,data:a,bandwidth:i.bandwidth(),step_data:this.getRange(a)})}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var e=this.state,t=e.xScale,n=e.y0Scale,a=e.svgDimen,r=e.margins,i=y.axisBottom(t).tickSize(a.height-r.bottom).ticks(10),o=y.axisLeft(n).tickSize(0);y.select(this.xAxisElement).selectAll("*").remove(),y.select(this.yAxisElement).selectAll("*").remove(),y.select(this.xAxisElement).attr("class","x axis").call(i).select(".domain").remove(),y.select(this.xAxisElement).selectAll(".tick line").attr("stroke","#777").attr("stroke-dasharray","2,2"),y.select(this.yAxisElement).attr("class","y axis").call(o).select(".domain").remove(),y.select(this.yAxisElement).append("text").attr("x",0).attr("y",0).style("text-anchor","middle").style("fill","black")}},{key:"getRange",value:function(e){for(var t=[],n=e.map(function(e){return e.year=e.year,e.values=e.values,e}),a=0;a<n.length;a++)for(var r=0;r<n[a].values.length;r++)n[a].values[r].value||(n[a].values[r].value=0),t.push(n[a].values[r].value);var i=y.min(y.values(t)),o=y.max(y.values(t));return{min:i,max:o,range:Math.abs(o-i)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.xScale,r=t.y0Scale,i=t.step_data,o=t.bandwidth;return v.a.createElement("g",{className:"Axis"},v.a.createElement("g",{className:"xAxis",transform:"translate(50,0)",ref:function(t){return e.xAxisElement=t}}),v.a.createElement("g",{className:"yAxis",transform:"translate(40,0)",ref:function(t){return e.yAxisElement=t}}),n.map(function(e,t){return v.a.createElement("g",{key:t,className:"bar-group".concat(e.year),transform:"translate(50, ".concat(r(e.year),")")},v.a.createElement(E,{key:t,data:e,xScale:a,bandwidth:o,step_data:i}))}))}}]),t}(v.a.Component),w=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).props,r=a.width,i=a.height,o=a.data,l={top:20,right:20,bottom:20,left:60},s={width:r-l.left-l.right,height:i-l.top-l.bottom};return n.state={margins:l,svgDimen:s,data:o},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,n=e.height,a=e.data,r={top:20,right:20,bottom:20,left:60},i={width:t-r.left-r.right,height:n-r.top-r.bottom};this.setState({margins:r,svgDimen:i,data:a})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.data;return v.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},v.a.createElement(N,{svgDimen:t,margins:n,data:a}))}}]),t}(m.Component),x=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).props,r=a.parentWidth,i=a.parentHeight,o=a.data;return n.state={data:o,width:r>850?850:Math.max(r,450),height:Math.max(i,500)},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.parentWidth,n=e.parentHeight,a=e.data;this.setState({data:a,width:t>850?850:Math.max(t,450),height:Math.max(n,500)})}},{key:"render",value:function(){var e=this.state.data,t=[{year:"2019",values:[{label:"NetoperatingCashFlowLY",value:e.NetoperatingCashFlowLY},{label:"NetInvestingCashFlowLY",value:e.NetInvestingCashFlowLYMin},{label:"NetchangeInCashLY",value:e.NetchangeInCashLY},{label:"NetFinancingCashFlowLY",value:e.NetFinancingCashFlowLY},{label:"EbitdaLY",value:e.EbitdaLY}]},{year:"2018",values:[{label:"NetoperatingCashFlowLYMin1",value:e.NetoperatingCashFlowLYMin1},{label:"NetInvestingCashFlowLYMin1",value:e.NetInvestingCashFlowLYMin1},{label:"NetchangeInCashLYMin1",value:e.NetchangeInCashLYMin1},{label:"NetFinancingCashFlowLYMin1",value:e.NetFinancingCashFlowLYMin1},{label:"EbitdaLYMin1",value:e.EbitdaLYMin1}]},{year:"2017",values:[{label:"NetoperatingCashFlowLYMin2",value:e.NetoperatingCashFlowLYMin2},{label:"NetInvestingCashFlowLYMin2",value:e.NetInvestingCashFlowLYMin2},{label:"NetchangeInCashLYMin2",value:e.NetchangeInCashLYMin2},{label:"NetFinancingCashFlowLYMin2",value:e.NetFinancingCashFlowLYMin2},{label:"EbitdaLYMin2",value:e.EbitdaLYMin2}]},{year:"2016",values:[{label:"NetoperatingCashFlowLYMin3",value:e.NetoperatingCashFlowLYMin3},{label:"NetInvestingCashFlowLYMin3",value:e.NetInvestingCashFlowLYMin3},{label:"NetchangeInCashLYMin3",value:e.NetchangeInCashLYMin3},{label:"NetFinancingCashFlowLYMin3",value:e.NetFinancingCashFlowLYMin3},{label:"EbitdaLYMin3",value:e.EbitdaLYMin3}]},{year:"2015",values:[{label:"NetoperatingCashFlowLYMin4",value:e.NetoperatingCashFlowLYMin4},{label:"NetInvestingCashFlowLYMin4",value:e.NetInvestingCashFlowLYMin4},{label:"NetchangeInCashLYMin4",value:e.NetchangeInCashLYMin4},{label:"NetFinancingCashFlowLYMin4",value:e.NetFinancingCashFlowLYMin4},{label:"EbitdaLYMin4",value:e.EbitdaLYMin4}]}];return v.a.createElement(m.Fragment,null,v.a.createElement(w,{data:t,width:this.state.width,height:this.state.height}))}}]),t}(m.Component),C=(a=x,function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(g.a)(Object(g.a)(n))),n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:n}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return v.a.createElement(a,Object(c.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return v.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(m.Component)),M=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session,n=(e.navMenu,e.data);return v.a.createElement(b.a,Object(c.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),v.a.createElement("div",{className:"content"},v.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),v.a.createElement("p",null,"The Coca-Cola Company is an American ...."),v.a.createElement(C,{data:n[0].calculated5Y})))}}],[{key:"getInitialProps",value:function(){var e=Object(s.a)(i.a.mark(function e(t){var n,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=n?n.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:l()({operationName:null,variables:{},query:'\n        {\n          security(id: "xgfr4") {\n            id\n            name\n            calculated5Y {\n              LY\n              SalesOrRevenueLY\n              SalesOrRevenueLYMin1\n              SalesOrRevenueLYMin2\n              DividendPayOutLY\n              DividendPayOutLYMin1\n              DividendPayOutLYMin2\n              NetoperatingCashFlowLY\n              NetoperatingCashFlowLYMin1\n              NetoperatingCashFlowLYMin2\n              NetoperatingCashFlowLYMin3\n              NetoperatingCashFlowLYMin4\n              NetFinancingCashFlowLY\n              NetFinancingCashFlowLYMin1\n              NetFinancingCashFlowLYMin2\n              NetFinancingCashFlowLYMin3\n              NetFinancingCashFlowLYMin4\n              NetchangeInCashLY\n              NetchangeInCashLYMin1\n              NetchangeInCashLYMin2\n              NetchangeInCashLYMin3\n              NetchangeInCashLYMin4\n              NetInvestingCashFlowLY\n              NetInvestingCashFlowLYMin1\n              NetInvestingCashFlowLYMin2\n              NetInvestingCashFlowLYMin3\n              NetInvestingCashFlowLYMin4\n              EbitdaLY\n              EbitdaLYMin1\n              EbitdaLYMin2\n              EbitdaLYMin3\n              EbitdaLYMin4\n              }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return console.log(e.data.security),[e.data.security]});case 4:return r=e.sent,e.abrupt("return",{userAgent:a,data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(m.Component);t.default=M},"8m4E":function(e,t,n){var a=n("jDdP"),r=n("OKNm");function i(t){return e.exports=i=r?a:function(e){return e.__proto__||a(e)},i(t)}e.exports=i},"9CGT":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("JYC+")),i=a(n("NluH")),o=a(n("KBEF")),l=a(n("J/q3")),s=a(n("3esu")),c=a(n("8m4E")),u=a(n("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=n("bzos"),p=f(n("cDcd")),m=(d(n("rf6O")),f(n("dAGg"))),v=n("p8BD");var b=function(e){function t(){var e,n,a,r,l;return(0,o.default)(this,t),(e=(0,s.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,i.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?v.formatWithValidation(t):t}},a=null,r=null,l=null,function(e,t){if(e===a&&t===r)return l;var i=n(e,t);return a=e,r=t,l=i,i}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),o=i.href,l=i.as;if(function(e){var t=h.parse(e,!1,!0),n=h.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var s=window.location.pathname;o=h.resolve(s,o),l=l?h.resolve(s,l):o,t.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](o,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=h.resolve(e,t);m.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),o={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=r||a),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=m.Router._rewriteUrlForNextExport(o.href)),p.default.cloneElement(i,o)}}]),t}(p.Component);t.default=b},CXsl:function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),i=n("U7sd"),o=n.n(i),l=(n("rf6O"),function(e){return r.a.createElement(o.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),s=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},c=n("5dyF"),u=n.n(c),f=n("dAGg"),d=n("LkAs"),h=n("Moms"),p=n("bMj6"),m=n("hZod"),v=n("tEuJ"),b=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),g=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,n=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{session:t,signinBtn:n}))))))});n("aieD"),t.a=function(e){var t=e.title,n=e.description,a=e.session,i=e.children,o=e.navMenu,c=e.signinBtn;return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(l,{title:t,description:n}),o&&r.a.createElement(g,{session:a,signinBtn:c}),o&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},n.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},i),o&&r.a.createElement(s,null))}},GeWT:function(e,t,n){"use strict";var a=n("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={};o[a.ForwardRef]={$$typeof:!0,render:!0};var l=Object.defineProperty,s=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,n,a){if("string"!=typeof n){if(d){var h=f(n);h&&h!==d&&e(t,h,a)}var p=s(n);c&&(p=p.concat(c(n)));for(var m=o[t.$$typeof]||r,v=o[n.$$typeof]||r,b=0;b<p.length;++b){var g=p[b];if(!(i[g]||a&&a[g]||v&&v[g]||m&&m[g])){var y=u(n,g);try{l(t,g,y)}catch(e){}}}return t}return t}},"J/q3":function(e,t,n){var a=n("hHgk");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"JYC+":function(e,t,n){e.exports=n("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},Moms:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("hHgk"),r=n.n(a);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),r()(e,a.key,a)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},NluH:function(e,t,n){var a=n("t+lh"),r=n("XzKa");function i(e){return(i="function"==typeof r&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof r&&"symbol"===i(a)?e.exports=o=function(e){return i(e)}:e.exports=o=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":i(e)},o(t)}e.exports=o},OKNm:function(e,t,n){e.exports=n("Wk4r")},Od8a:function(e,t,n){var a=n("6Ndq"),r=n("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"R3/3":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("ZOIa"),r=n.n(a);function i(e,t,n,a,i,o,l){try{var s=e[o](l),c=s.value}catch(e){return void n(e)}s.done?t(c):r.a.resolve(c).then(a,i)}function o(e){return function(){var t=this,n=arguments;return new r.a(function(a,r){var o=e.apply(t,n);function l(e){i(o,a,r,l,s,"next",e)}function s(e){i(o,a,r,l,s,"throw",e)}l(void 0)})}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,n){e.exports=n("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},UrUy:function(e,t,n){e.exports=n("cu1A")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,n){e.exports=n("vqFK")},YKN3:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},ZOIa:function(e,t,n){e.exports=n("aC71")},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},aieD:function(e,t){},bBV7:function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),i=a(n("NluH")),o=a(n("ied0")),l=a(n("hHgk")),s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=s(n("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],d=["components"],h=["push","replace","reload","back","prefetch","beforePopState"];function p(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return c.default.events}}),d.concat(f).forEach(function(e){(0,l.default)(u,e,{get:function(){return p(),u.router[e]}})}),h.forEach(function(e){u[e]=function(){var t;return p(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){c.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var m=n("/3ze");t.withRouter=m.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.router=(0,o.default)(c.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=c.default,t.makePublicRouterInstance=function(e){for(var t={},n=0;n<f.length;n++){var a=f[n];"object"!==(0,i.default)(e[a])?t[a]=e[a]:t[a]=(0,r.default)({},e[a])}return t.events=c.default.events,d.forEach(function(n){(0,l.default)(t,n,{get:function(){return e[n]}})}),h.forEach(function(n){t[n]=function(){return e[n].apply(e,arguments)}}),t}},bMj6:function(e,t,n){"use strict";var a=n("t+lh"),r=n.n(a),i=n("XzKa"),o=n.n(i);function l(e){return(l="function"==typeof o.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"==typeof o.a&&"symbol"===l(r.a)?function(e){return l(e)}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":l(e)})(e)}var c=n("YKN3");function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?Object(c.a)(e):t}n.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dAGg:function(e,t,n){e.exports=n("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,n){var a=n("OKNm");function r(t,n){return e.exports=r=a||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,n){e.exports=n("TUA0")},hZod:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("jDdP"),r=n.n(a),i=n("OKNm"),o=n.n(i);function l(e){return(l=o.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,n){var a=n("7mTa"),r=n("g9SA");function i(t,n,o){return!function(){if("undefined"==typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=i=function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r(i,n.prototype),i}:e.exports=i=a,i.apply(null,arguments)}e.exports=i},jDdP:function(e,t,n){e.exports=n("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,n){e.exports=n("gHn/")},tEuJ:function(e,t,n){"use strict";var a=n("6Ndq"),r=n.n(a),i=n("OKNm"),o=n.n(i);function l(e,t){return(l=o.a||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}n.d(t,"a",function(){return s})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("U8Yc"),r=n.n(a);function i(){return(i=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}});