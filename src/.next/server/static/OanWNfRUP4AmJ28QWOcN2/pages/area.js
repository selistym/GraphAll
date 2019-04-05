module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}},i=!0;try{e[a].call(r.exports,r,r.exports,n),i=!1}finally{i&&delete t[a]}return r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),i=a(n("KBEF")),o=a(n("J/q3")),c=a(n("3esu")),l=a(n("8m4E")),s=a(n("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=u(n("cDcd")),d=f(n("rf6O")),h=f(n("GeWT")),p=n("p8BD");t.default=function(e){var t=p.getDisplayName(e),n=function(t){function n(){return(0,i.default)(this,n),(0,c.default)(this,(0,l.default)(n).apply(this,arguments))}return(0,s.default)(n,t),(0,o.default)(n,[{key:"render",value:function(){return m.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),n}(m.Component);return n.contextTypes={router:d.default.object},n.displayName="withRouter(".concat(t,")"),h.default(n,e)}},"0i/h":function(e,t){e.exports=require("d3")},1:function(e,t,n){e.exports=n("3L/t")},"3L/t":function(e,t,n){"use strict";n.r(t);var a,r=n("UrUy"),i=n.n(r),o=n("JYC+"),c=n.n(o),l=n("R3/3"),s=n("z3IF"),u=n("LkAs"),f=n("Moms"),m=n("bMj6"),d=n("hZod"),h=n("tEuJ"),p=n("cDcd"),v=n.n(p),g=n("CXsl"),b=n("0i/h"),y=n("YKN3"),E=n("azxR"),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={margins:n.props.margins,svgDimen:n.props.svgDimen,partial:n.props.partial},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,margins:e.margins,partial:e.partial})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.partial,r=a.columns.slice(2).map(function(e){return{id:e,values:a.map(function(t){return{date:t.Date,value:t[e]}})}}),i=b.timeParse("%Y-%m-%d"),o=r[0].values.map(function(e){return i(e.date)}),c=b.max(r[0].values,function(e){return e.value}),l=b.scaleTime().range([n.left,t.width-n.right]).domain([o[0],o[o.length-1]]).clamp(!0),s=b.scaleLinear().range([t.height-n.bottom,n.top]).domain([0,c]),u=b.area().curve(b.curveMonotoneX).x(function(e){return l(i(e.date))}).y0(s(0)).y1(function(e){return s(e.value)}),f=b.select(this.el);f.selectAll("*").remove(),f.append("g").attr("transform","translate(0,"+(t.height-n.bottom)+")").call(b.axisBottom(l).ticks(10).tickSize(3).tickFormat(b.timeFormat("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black"),f.append("g").call(b.axisLeft(s).tickSize(0)).select(".domain").style("opacity",0),f.selectAll(".area").data(r).enter().append("path").attr("d",function(e){return u(e.values)}).style("fill","#df072c")}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return v.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height,ref:function(t){return e.el=t}})}}]),t}(p.Component),w=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).props,r=a.handle,i=a.svgDimen,o=a.margins,c=a.rangeStart,l=a.rangeEnd,s=a.xScale;return n.state={handle:r,svgDimen:i,margins:o,rangeStart:c,rangeEnd:l,xScale:s},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.handle,n=e.svgDimen,a=e.margins,r=e.rangeStart,i=e.rangeEnd,o=e.xScale;this.setState({handle:t,svgDimen:n,margins:a,rangeStart:r,rangeEnd:i,xScale:o})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.rangeStart,r=e.rangeEnd,i=e.xScale,o=e.handle,c=v.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-n.bottom,transform:"translate(-5, 0)",fill:"#777"});return"handleLeft"==o?v.a.createElement("g",{className:o,transform:"translate(".concat(i(a),", 0)"),onMouseOver:this.onMouseOver.bind(this)},c):v.a.createElement("g",{className:o,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},c)}},{key:"componentDidUpdate",value:function(){var e,t=this.state,n=t.xScale,a=t.handle,r=this.props.changeHandlerValue,i=this,o=b.drag().on("start",function(){e=c(b.mouse(this)[0])}).on("drag",function(){i.state.rangeEnd-i.state.rangeStart>432e6&&(e=c(b.mouse(this)[0]),b.select("."+a).attr("transform","translate("+n(e)+", 0)"),r(a,e))}).on("end",function(){i.state.rangeEnd-i.state.rangeStart>432e6?(b.select("."+a).attr("transform","translate("+n(e)+", 0)"),r(a,e)):"handleLeft"==a?r("handleLeft",i.state.rangeStart-1e8):r("handleRight",i.state.rangeEnd+1e8)});function c(e){return Math.round(n.invert(e))}b.select(".graphSliderGroup").call(o)}}]),t}(v.a.Component),N=function(e){function t(e){var n;Object(u.a)(this,t),n=Object(m.a)(this,Object(d.a)(t).call(this,e)),Object(E.a)(Object(y.a)(Object(y.a)(n)),"changeHandlerValue",function(e,t){var a=n.state,r=a.total,i=a.rangeStart,o=a.rangeEnd,c=b.timeParse("%Y-%m-%d"),l=[];if("handleLeft"==e){for(var s=0;s<r.length;s++)c(r[s].Date)>=t&&c(r[s].Date)<=o&&l.push(r[s]);l.columns=r.columns,n.setState({rangeStart:t,partial:l})}else{for(var u=0;u<r.length;u++)c(r[u].Date)<=t&&c(r[u].Date)>=i&&l.push(r[u]);l.columns=r.columns,n.setState({rangeEnd:t,partial:l})}});var a=n.props,r=a.data,i=a.width,o=a.height,c=b.timeParse("%Y-%m-%d"),l=r.sort(function(e,t){return b.ascending(c(e.Date),c(t.Date))}),s=l.map(function(e){return c(e.Date)});return n.state={total:l,partial:l,width:i,height:o,rangeStart:s[0],rangeEnd:s[s.length-1]},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=e.width,a=e.height,r=b.timeParse("%Y-%m-%d"),i=t.sort(function(e,t){return b.ascending(r(e.Date),r(t.Date))}),o=i.map(function(e){return r(e.Date)});this.setState({total:i,partial:i,width:n,height:a,rangeStart:o[0],rangeEnd:o[o.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.width,n=e.height,a=e.total,r=20,i=20,o=20,c=20,l=t-c-i,s=n/6,u=b.timeParse("%Y-%m-%d"),f=a.columns.slice(2).map(function(e){return{id:e,values:a.map(function(t){return{date:u(t.Date),value:t[e]}})}}),m=b.max(f[0].values,function(e){return e.value}),d=f[0].values.map(function(e){return e.date}),h=b.scaleTime().range([c,l-i]).domain([d[0],d[d.length-1]]),p=b.scaleLinear().range([s-o,r]).domain([0,m]),v=b.area().curve(b.curveMonotoneX).x(function(e){return h(e.date)}).y0(p(0)).y1(function(e){return p(e.value)}),g=b.select(this.GraphAxisElement);g.selectAll("*").remove(),g.append("g").attr("transform","translate(0,"+(s-o)+")").call(b.axisBottom(h).ticks(4).tickSize(3).tickFormat(b.timeFormat("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").select(".domain").style("opacity",0),g.append("g").call(b.axisLeft(p).tickSize(3)).select(".domain").style("opacity",0),g.selectAll(".area").data(f).enter().append("path").attr("d",function(e){return v(e.values)}).style("fill","#ddd")}},{key:"getTextWidth",value:function(e,t,n){var a=document.createElement("canvas").getContext("2d");return a.font=t+"px "+n,a.measureText(e).width}},{key:"render",value:function(){var e=this,t=this.state,n=t.width,a=t.height,r=t.total,i=t.partial,o=t.rangeStart,c=t.rangeEnd,l={top:20,right:20,bottom:20,left:20},s={width:n-l.left-l.right,height:a/6},u={width:n-l.left-l.right,height:4*a/6},f={width:n-l.left-l.right,height:a},m=b.timeParse("%Y-%m-%d"),d=r.map(function(e){return m(e.Date)}),h=b.scaleTime().range([l.left,f.width-l.right]).domain([d[0],d[d.length-1]]).clamp(!0),p=this.getTextWidth("Coca-Cola Company",16,"Arial"),g=this.getTextWidth("Industry",16,"Arial"),y=v.a.createElement("rect",{x:h(o),y:"0",width:h(c)-h(o),height:s.height-l.bottom,fill:"rgba(150, 150, 150, 0.65)"});return v.a.createElement("svg",{className:"areaChartSvg",width:f.width,height:f.height},v.a.createElement("g",{className:"TopPane",transform:"translate(".concat(l.left,", ").concat(a/12,")")},v.a.createElement("rect",{x:"10",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),v.a.createElement("rect",{x:"50",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),v.a.createElement("rect",{x:"90",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),v.a.createElement("rect",{x:"130",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),v.a.createElement("rect",{x:"170",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(222,7,48)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),v.a.createElement("circle",{r:"5",cx:f.width-l.left-g-p-60,cy:"0",fill:"#de0730"}),v.a.createElement("text",{x:f.width-l.left-g-40,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Coca-Cola Company"),v.a.createElement("circle",{r:"5",cx:f.width-l.left-g-20,cy:"0",fill:"#bdbbbc"}),v.a.createElement("text",{x:f.width-l.left,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Industry")),v.a.createElement("g",{className:"Chart",transform:"translate(0, ".concat(a/6,")")},v.a.createElement(x,{margins:l,svgDimen:u,partial:i})),v.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*a/6,")")},v.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),y,v.a.createElement(w,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:o,rangeEnd:c,svgDimen:s,margins:l,xScale:h}),v.a.createElement(w,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:o,rangeEnd:c,svgDimen:s,margins:l,xScale:h})))}}]),t}(p.Component),O=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).props,r=a.parentWidth,i=a.parentHeight,o=a.data;return o.columns=n.getColumns(o),n.state={width:Math.max(r,450),height:Math.max(i,400),data:o},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.parentWidth,n=e.parentHeight,a=e.data;a.columns=this.getColumns(a),this.setState({width:Math.max(t,450),height:Math.max(n,400),data:a})}},{key:"getColumns",value:function(e){var t=[];for(var n in e[0])t.push(n);return t}},{key:"render",value:function(){return v.a.createElement(p.Fragment,null,this.state.data&&v.a.createElement(N,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(p.Component),j=(a=O,function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(y.a)(Object(y.a)(n))),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:n}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return v.a.createElement(a,Object(s.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return v.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(p.Component)),k=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session,n=(e.navMenu,e.data);return v.a.createElement(g.a,Object(s.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),v.a.createElement("div",{className:"content"},v.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),v.a.createElement("p",null,"The Coca-Cola Company is an American ...."),v.a.createElement(j,{data:n[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var e=Object(l.a)(i.a.mark(function e(t){var n,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=n?n.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:c()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return[e.data.security]});case 4:return r=e.sent,e.abrupt("return",{userAgent:a,data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.Component);t.default=k},"3esu":function(e,t,n){var a=n("NluH"),r=n("oS/Z");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"6Ndq":function(e,t,n){e.exports=n("o5io")},"7mTa":function(e,t,n){e.exports=n("aAV7")},"8m4E":function(e,t,n){var a=n("jDdP"),r=n("OKNm");function i(t){return e.exports=i=r?a:function(e){return e.__proto__||a(e)},i(t)}e.exports=i},"9CGT":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("JYC+")),i=a(n("NluH")),o=a(n("KBEF")),c=a(n("J/q3")),l=a(n("3esu")),s=a(n("8m4E")),u=a(n("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},m=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=n("bzos"),h=f(n("cDcd")),p=(m(n("rf6O")),f(n("dAGg"))),v=n("p8BD");var g=function(e){function t(){var e,n,a,r,c;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,i.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?v.formatWithValidation(t):t}},a=null,r=null,c=null,function(e,t){if(e===a&&t===r)return c;var i=n(e,t);return a=e,r=t,c=i,i}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),o=i.href,c=i.as;if(function(e){var t=d.parse(e,!1,!0),n=d.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var l=window.location.pathname;o=d.resolve(l,o),c=c?d.resolve(l,c):o,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),p.default[e.props.replace?"replace":"push"](o,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=d.resolve(e,t);p.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),o={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=r||a),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=p.Router._rewriteUrlForNextExport(o.href)),h.default.cloneElement(i,o)}}]),t}(h.Component);t.default=g},CXsl:function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),i=n("U7sd"),o=n.n(i),c=(n("rf6O"),function(e){return r.a.createElement(o.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),l=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},s=n("5dyF"),u=n.n(s),f=n("dAGg"),m=n("LkAs"),d=n("Moms"),h=n("bMj6"),p=n("hZod"),v=n("tEuJ"),g=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),b=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,n=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{session:t,signinBtn:n}))))))});n("aieD"),t.a=function(e){var t=e.title,n=e.description,a=e.session,i=e.children,o=e.navMenu,s=e.signinBtn;return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(c,{title:t,description:n}),o&&r.a.createElement(b,{session:a,signinBtn:s}),o&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},n.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},i),o&&r.a.createElement(l,null))}},GeWT:function(e,t,n){"use strict";var a=n("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={};o[a.ForwardRef]={$$typeof:!0,render:!0};var c=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,a){if("string"!=typeof n){if(m){var d=f(n);d&&d!==m&&e(t,d,a)}var h=l(n);s&&(h=h.concat(s(n)));for(var p=o[t.$$typeof]||r,v=o[n.$$typeof]||r,g=0;g<h.length;++g){var b=h[g];if(!(i[b]||a&&a[b]||v&&v[b]||p&&p[b])){var y=u(n,b);try{c(t,b,y)}catch(e){}}}return t}return t}},"J/q3":function(e,t,n){var a=n("hHgk");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"JYC+":function(e,t,n){e.exports=n("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},Moms:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("hHgk"),r=n.n(a);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),r()(e,a.key,a)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},NluH:function(e,t,n){var a=n("t+lh"),r=n("XzKa");function i(e){return(i="function"==typeof r&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof r&&"symbol"===i(a)?e.exports=o=function(e){return i(e)}:e.exports=o=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":i(e)},o(t)}e.exports=o},OKNm:function(e,t,n){e.exports=n("Wk4r")},Od8a:function(e,t,n){var a=n("6Ndq"),r=n("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"R3/3":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("ZOIa"),r=n.n(a);function i(e,t,n,a,i,o,c){try{var l=e[o](c),s=l.value}catch(e){return void n(e)}l.done?t(s):r.a.resolve(s).then(a,i)}function o(e){return function(){var t=this,n=arguments;return new r.a(function(a,r){var o=e.apply(t,n);function c(e){i(o,a,r,c,l,"next",e)}function l(e){i(o,a,r,c,l,"throw",e)}c(void 0)})}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,n){e.exports=n("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},UrUy:function(e,t,n){e.exports=n("cu1A")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,n){e.exports=n("vqFK")},YKN3:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},ZOIa:function(e,t,n){e.exports=n("aC71")},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},aieD:function(e,t){},azxR:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function i(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},bBV7:function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),i=a(n("NluH")),o=a(n("ied0")),c=a(n("hHgk")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(n("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],m=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function h(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return s.default.events}}),m.concat(f).forEach(function(e){(0,c.default)(u,e,{get:function(){return h(),u.router[e]}})}),d.forEach(function(e){u[e]=function(){var t;return h(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var p=n("/3ze");t.withRouter=p.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.router=(0,o.default)(s.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},n=0;n<f.length;n++){var a=f[n];"object"!==(0,i.default)(e[a])?t[a]=e[a]:t[a]=(0,r.default)({},e[a])}return t.events=s.default.events,m.forEach(function(n){(0,c.default)(t,n,{get:function(){return e[n]}})}),d.forEach(function(n){t[n]=function(){return e[n].apply(e,arguments)}}),t}},bMj6:function(e,t,n){"use strict";var a=n("t+lh"),r=n.n(a),i=n("XzKa"),o=n.n(i);function c(e){return(c="function"==typeof o.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof o.a&&"symbol"===c(r.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":c(e)})(e)}var s=n("YKN3");function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?Object(s.a)(e):t}n.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dAGg:function(e,t,n){e.exports=n("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,n){var a=n("OKNm");function r(t,n){return e.exports=r=a||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,n){e.exports=n("TUA0")},hZod:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("jDdP"),r=n.n(a),i=n("OKNm"),o=n.n(i);function c(e){return(c=o.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,n){var a=n("7mTa"),r=n("g9SA");function i(t,n,o){return!function(){if("undefined"==typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=i=function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r(i,n.prototype),i}:e.exports=i=a,i.apply(null,arguments)}e.exports=i},jDdP:function(e,t,n){e.exports=n("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,n){e.exports=n("gHn/")},tEuJ:function(e,t,n){"use strict";var a=n("6Ndq"),r=n.n(a),i=n("OKNm"),o=n.n(i);function c(e,t){return(c=o.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",function(){return l})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("U8Yc"),r=n.n(a);function i(){return(i=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}});