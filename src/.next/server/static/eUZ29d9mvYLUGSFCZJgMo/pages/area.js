module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}},o=!0;try{e[a].call(r.exports,r,r.exports,n),o=!1}finally{o&&delete t[a]}return r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),o=a(n("KBEF")),i=a(n("J/q3")),c=a(n("3esu")),l=a(n("8m4E")),s=a(n("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=u(n("cDcd")),p=f(n("rf6O")),d=f(n("GeWT")),h=n("p8BD");t.default=function(e){var t=h.getDisplayName(e),n=function(t){function n(){return(0,o.default)(this,n),(0,c.default)(this,(0,l.default)(n).apply(this,arguments))}return(0,s.default)(n,t),(0,i.default)(n,[{key:"render",value:function(){return m.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),n}(m.Component);return n.contextTypes={router:p.default.object},n.displayName="withRouter(".concat(t,")"),d.default(n,e)}},"0i/h":function(e,t){e.exports=require("d3")},1:function(e,t,n){e.exports=n("3L/t")},"3L/t":function(e,t,n){"use strict";n.r(t);var a,r=n("UrUy"),o=n.n(r),i=n("JYC+"),c=n.n(i),l=n("R3/3"),s=n("z3IF"),u=n("LkAs"),f=n("Moms"),m=n("bMj6"),p=n("hZod"),d=n("tEuJ"),h=n("cDcd"),v=n.n(h),g=n("CXsl"),y=n("0i/h"),b=n("YKN3"),E=n("azxR"),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={margins:n.props.margins,svgDimen:n.props.svgDimen,partial:n.props.partial,columns:n.props.columns},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,partial:e.partial,columns:e.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.partial,r=e.columns;void 0===a.columns&&(a.columns=r);var o=a.columns.slice(1,3).map(function(e){return{id:e,values:a.map(function(t){return{year:t.year,value:t[e]}})}}),i=o[0].values[0].year,c=o[0].values[o[0].values.length-1].year,l=y.scaleOrdinal().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),s=y.scaleLinear().range([n.left,t.width-n.right]).domain([i,c]),u=y.scaleLinear().range([t.height-n.bottom,n.top]).domain([0,100]);l.domain(o.map(function(e){return e.id}));var f=y.area().curve(y.curveMonotoneX).x(function(e){return s(e.year)}).y0(u(0)).y1(function(e){return u(e.value)}),m=y.select(this.el);m.selectAll("*").remove(),m.append("g").attr("transform","translate(0,"+(t.height-n.bottom)+")").call(y.axisBottom().scale(s).ticks(o[0].values.length).tickSize(0).tickFormat(y.format(""))).selectAll("text").style("font-size","10px").style("fill","black"),m.append("g").call(y.axisLeft().scale(u).ticks(10).tickSize(0)).select(".domain").style("opacity",0),m.selectAll(".area").data(o).enter().append("path").attr("d",function(e){return f(e.values)}).style("fill",function(e){return l(e.id)})}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return v.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},v.a.createElement("g",{className:"graphPane",ref:function(t){return e.el=t}}))}}]),t}(h.Component),N=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).props,r=a.handle,o=a.svgDimen,i=a.margins,c=a.rangeStart,l=a.rangeEnd,s=a.xScale;return n.state={handle:r,svgDimen:o,margins:i,rangeStart:c,rangeEnd:l,xScale:s},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.handle,n=e.svgDimen,a=e.margins,r=e.rangeStart,o=e.rangeEnd,i=e.xScale;this.setState({handle:t,svgDimen:n,margins:a,rangeStart:r,rangeEnd:o,xScale:i})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.rangeStart,r=e.rangeEnd,o=e.xScale,i=e.handle,c=v.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-n.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==i?v.a.createElement("g",{className:i,transform:"translate(".concat(o(a),", 0)"),onMouseOver:this.onMouseOver.bind(this)},c):v.a.createElement("g",{className:i,transform:"translate(".concat(o(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},c)}},{key:"shouldComponentUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(){var e,t=this.state,n=t.xScale,a=(t.rangeStart,t.rangeEnd,t.handle),r=this.props.changeHandlerValue,o=this,i=y.drag().on("start",function(){e=c(y.mouse(this)[0])}).on("drag",function(){e=c(y.mouse(this)[0]),y.select("."+o.state.handle).attr("transform","translate("+n(e)+", 0)"),r(a,e)}).on("end",function(){y.select("."+o.state.handle).attr("transform","translate("+n(e)+",0)"),r(a,e)});function c(e){return Math.round(n.invert(e))}y.select(".graphSliderGroup").call(i)}}]),t}(v.a.Component),w=function(e){function t(e){var n;Object(u.a)(this,t),n=Object(m.a)(this,Object(p.a)(t).call(this,e)),Object(E.a)(Object(b.a)(Object(b.a)(n)),"changeHandlerValue",function(e,t){var a=n.state,r=a.total,o=a.rangeStart,i=a.rangeEnd,c=a.csv_cols,l=[];if(l.columns=c,"handleLeft"==e){for(var s=0;s<r.length;s++)r[s].year>=t&&r[s].year<=i&&l.push(r[s]);n.setState({rangeStart:t,partial:l})}else{for(var u=0;u<r.length;u++)r[u].year>=o&&r[u].year<=t&&l.push(r[u]);n.setState({rangeEnd:t,partial:l})}});var a=n.props,r=a.data,o=a.width,i=a.height;console.log(r,"from index");var c=r.sort(function(e,t){return y.ascending(e.year,t.year)}),l=c.map(function(e){return e.year});return n.state={total:c,partial:c,csv_cols:r.columns,width:o,height:i,rangeStart:l[0],rangeEnd:l[l.length-1]},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=e.width,a=e.height,r=t.sort(function(e,t){return y.ascending(e.year,t.year)}),o=r.map(function(e){return e.year});this.setState({total:r,partial:r,csv_cols:t.columns,width:n,height:a,rangeStart:o[0],rangeEnd:o[o.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.width,n=e.height,a=e.total,r=e.csv_cols,o=20,i=20,c=20,l=20,s=t-l-i,u=n/6;void 0===a.columns&&(a.columns=r);var f=a.columns.slice(3).map(function(e){return{id:e,values:a.map(function(t){return{year:t.year,slide:t[e]}})}}),m=f[0].values[0].year,p=f[0].values[f[0].values.length-1].year,d=y.scaleLinear().range([l,s-i]).domain([m,p]),h=y.scaleLinear().range([u-c,o]).domain([0,100]),v=y.area().curve(y.curveMonotoneX).x(function(e){return d(e.year)}).y0(h(0)).y1(function(e){return h(e.slide)}),g=y.select(this.GraphAxisElement);g.selectAll("*").remove(),g.append("g").attr("transform","translate(0,"+(u-c)+")").call(y.axisBottom().scale(d).ticks(f[0].values.length).tickFormat(y.format(""))).selectAll("text").style("font-size","10px").style("fill","black"),g.append("g").call(y.axisLeft().scale(h).ticks(10).tickSize(0)).select(".domain").style("opacity",0),g.selectAll(".area").data(f).enter().append("path").attr("d",function(e){return v(e.values)}).style("fill","#ddd")}},{key:"render",value:function(){var e=this,t=this.state,n=t.width,a=t.height,r=t.total,o=t.partial,i=t.csv_cols,c=t.rangeStart,l=t.rangeEnd,s={top:20,right:20,bottom:20,left:20},u={width:n-s.left-s.right,height:a/6},f={width:n-s.left-s.right,height:5*a/6},m={width:n-s.left-s.right,height:a},p=r.map(function(e){return e.year}),d=p[0],h=p[p.length-1],g=y.scaleLinear().range([s.left,m.width-s.right]).domain([d,h]).clamp(!0),b=v.a.createElement("rect",{x:g(c),y:"0",width:g(l)-g(c),height:u.height-s.bottom,fill:"rgba(54, 174, 175, 0.65)"});return v.a.createElement("svg",{className:"areaChartSvg",width:m.width,height:m.height},v.a.createElement("g",{className:"Chart"},v.a.createElement(x,{margins:s,svgDimen:f,partial:o,columns:i})),v.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*a/6,")")},v.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),b,v.a.createElement(N,{className:"handleLeft",handle:"handleLeft",changeHandlerValue:this.changeHandlerValue,rangeStart:c,rangeEnd:l,svgDimen:u,margins:s,xScale:g}),v.a.createElement(N,{className:"handleRight",handle:"handleRight",changeHandlerValue:this.changeHandlerValue,rangeStart:c,rangeEnd:l,svgDimen:u,margins:s,xScale:g})))}}]),t}(h.Component),O=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).props,r=a.parentWidth,o=a.parentHeight,i=a.data;return n.state={width:Math.max(r,450),height:Math.max(o,400),data:n.convertData(i)},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({width:Math.max(e.parentWidth,450),height:Math.max(e.parentHeight,400),data:this.convertData(e.data)})}},{key:"convertData",value:function(e){e.map(function(e){});return jarr}},{key:"componentDidMount",value:function(){y.csv("/static/area_data.csv").then(function(e){console.log(e,"from csv")})}},{key:"render",value:function(){return v.a.createElement(h.Fragment,null,this.state.data&&v.a.createElement(w,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(h.Component),j=(a=O,function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:n}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return v.a.createElement(a,Object(s.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return v.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(h.Component)),k=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session,n=(e.navMenu,e.data);return v.a.createElement(g.a,Object(s.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),v.a.createElement("div",{className:"content"},v.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),v.a.createElement("p",null,"The Coca-Cola Company is an American ...."),v.a.createElement(j,{data:n[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=n?n.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:c()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return[e.data.security]});case 4:return r=e.sent,e.abrupt("return",{userAgent:a,data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=k},"3esu":function(e,t,n){var a=n("NluH"),r=n("oS/Z");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"6Ndq":function(e,t,n){e.exports=n("o5io")},"7mTa":function(e,t,n){e.exports=n("aAV7")},"8m4E":function(e,t,n){var a=n("jDdP"),r=n("OKNm");function o(t){return e.exports=o=r?a:function(e){return e.__proto__||a(e)},o(t)}e.exports=o},"9CGT":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("JYC+")),o=a(n("NluH")),i=a(n("KBEF")),c=a(n("J/q3")),l=a(n("3esu")),s=a(n("8m4E")),u=a(n("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},m=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("bzos"),d=f(n("cDcd")),h=(m(n("rf6O")),f(n("dAGg"))),v=n("p8BD");var g=function(e){function t(){var e,n,a,r,c;return(0,i.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,o.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?v.formatWithValidation(t):t}},a=null,r=null,c=null,function(e,t){if(e===a&&t===r)return c;var o=n(e,t);return a=e,r=t,c=o,o}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,c=o.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=p.resolve(l,i),c=c?p.resolve(l,c):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),d.default.cloneElement(o,i)}}]),t}(d.Component);t.default=g},CXsl:function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),o=n("U7sd"),i=n.n(o),c=(n("rf6O"),function(e){return r.a.createElement(i.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),l=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},s=n("5dyF"),u=n.n(s),f=n("dAGg"),m=n("LkAs"),p=n("Moms"),d=n("bMj6"),h=n("hZod"),v=n("tEuJ"),g=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),y=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,n=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{session:t,signinBtn:n}))))))});n("aieD"),t.a=function(e){var t=e.title,n=e.description,a=e.session,o=e.children,i=e.navMenu,s=e.signinBtn;return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(c,{title:t,description:n}),i&&r.a.createElement(y,{session:a,signinBtn:s}),i&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},n.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},o),i&&r.a.createElement(l,null))}},GeWT:function(e,t,n){"use strict";var a=n("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={};i[a.ForwardRef]={$$typeof:!0,render:!0};var c=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,a){if("string"!=typeof n){if(m){var p=f(n);p&&p!==m&&e(t,p,a)}var d=l(n);s&&(d=d.concat(s(n)));for(var h=i[t.$$typeof]||r,v=i[n.$$typeof]||r,g=0;g<d.length;++g){var y=d[g];if(!(o[y]||a&&a[y]||v&&v[y]||h&&h[y])){var b=u(n,y);try{c(t,y,b)}catch(e){}}}return t}return t}},"J/q3":function(e,t,n){var a=n("hHgk");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"JYC+":function(e,t,n){e.exports=n("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},Moms:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),r()(e,a.key,a)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},NluH:function(e,t,n){var a=n("t+lh"),r=n("XzKa");function o(e){return(o="function"==typeof r&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof r&&"symbol"===o(a)?e.exports=i=function(e){return o(e)}:e.exports=i=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":o(e)},i(t)}e.exports=i},OKNm:function(e,t,n){e.exports=n("Wk4r")},Od8a:function(e,t,n){var a=n("6Ndq"),r=n("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"R3/3":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("ZOIa"),r=n.n(a);function o(e,t,n,a,o,i,c){try{var l=e[i](c),s=l.value}catch(e){return void n(e)}l.done?t(s):r.a.resolve(s).then(a,o)}function i(e){return function(){var t=this,n=arguments;return new r.a(function(a,r){var i=e.apply(t,n);function c(e){o(i,a,r,c,l,"next",e)}function l(e){o(i,a,r,c,l,"throw",e)}c(void 0)})}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,n){e.exports=n("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},UrUy:function(e,t,n){e.exports=n("cu1A")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,n){e.exports=n("vqFK")},YKN3:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},ZOIa:function(e,t,n){e.exports=n("aC71")},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},aieD:function(e,t){},azxR:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("hHgk"),r=n.n(a);function o(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},bBV7:function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),o=a(n("NluH")),i=a(n("ied0")),c=a(n("hHgk")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(n("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],m=["components"],p=["push","replace","reload","back","prefetch","beforePopState"];function d(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return s.default.events}}),m.concat(f).forEach(function(e){(0,c.default)(u,e,{get:function(){return d(),u.router[e]}})}),p.forEach(function(e){u[e]=function(){var t;return d(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var h=n("/3ze");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.router=(0,i.default)(s.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},n=0;n<f.length;n++){var a=f[n];"object"!==(0,o.default)(e[a])?t[a]=e[a]:t[a]=(0,r.default)({},e[a])}return t.events=s.default.events,m.forEach(function(n){(0,c.default)(t,n,{get:function(){return e[n]}})}),p.forEach(function(n){t[n]=function(){return e[n].apply(e,arguments)}}),t}},bMj6:function(e,t,n){"use strict";var a=n("t+lh"),r=n.n(a),o=n("XzKa"),i=n.n(o);function c(e){return(c="function"==typeof i.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof i.a&&"symbol"===c(r.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":c(e)})(e)}var s=n("YKN3");function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?Object(s.a)(e):t}n.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dAGg:function(e,t,n){e.exports=n("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,n){var a=n("OKNm");function r(t,n){return e.exports=r=a||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,n){e.exports=n("TUA0")},hZod:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("jDdP"),r=n.n(a),o=n("OKNm"),i=n.n(o);function c(e){return(c=i.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,n){var a=n("7mTa"),r=n("g9SA");function o(t,n,i){return!function(){if("undefined"==typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o}:e.exports=o=a,o.apply(null,arguments)}e.exports=o},jDdP:function(e,t,n){e.exports=n("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,n){e.exports=n("gHn/")},tEuJ:function(e,t,n){"use strict";var a=n("6Ndq"),r=n.n(a),o=n("OKNm"),i=n.n(o);function c(e,t){return(c=i.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",function(){return l})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("U8Yc"),r=n.n(a);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}});