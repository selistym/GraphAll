module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}},o=!0;try{e[a].call(r.exports,r,r.exports,n),o=!1}finally{o&&delete t[a]}return r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),o=a(n("KBEF")),i=a(n("J/q3")),c=a(n("3esu")),l=a(n("8m4E")),s=a(n("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=u(n("cDcd")),d=f(n("rf6O")),p=f(n("GeWT")),h=n("p8BD");t.default=function(e){var t=h.getDisplayName(e),n=function(t){function n(){return(0,o.default)(this,n),(0,c.default)(this,(0,l.default)(n).apply(this,arguments))}return(0,s.default)(n,t),(0,i.default)(n,[{key:"render",value:function(){return m.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),n}(m.Component);return n.contextTypes={router:d.default.object},n.displayName="withRouter(".concat(t,")"),p.default(n,e)}},"0i/h":function(e,t){e.exports=require("d3")},"3esu":function(e,t,n){var a=n("NluH"),r=n("oS/Z");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"6Ndq":function(e,t,n){e.exports=n("o5io")},"7mTa":function(e,t,n){e.exports=n("aAV7")},8:function(e,t,n){e.exports=n("BtDg")},"8m4E":function(e,t,n){var a=n("jDdP"),r=n("OKNm");function o(t){return e.exports=o=r?a:function(e){return e.__proto__||a(e)},o(t)}e.exports=o},"9CGT":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("JYC+")),o=a(n("NluH")),i=a(n("KBEF")),c=a(n("J/q3")),l=a(n("3esu")),s=a(n("8m4E")),u=a(n("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},m=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=n("bzos"),p=f(n("cDcd")),h=(m(n("rf6O")),f(n("dAGg"))),v=n("p8BD");var b=function(e){function t(){var e,n,a,r,c;return(0,i.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,o.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?v.formatWithValidation(t):t}},a=null,r=null,c=null,function(e,t){if(e===a&&t===r)return c;var o=n(e,t);return a=e,r=t,c=o,o}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,c=o.as;if(function(e){var t=d.parse(e,!1,!0),n=d.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=d.resolve(l,i),c=c?d.resolve(l,c):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=d.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),p.default.cloneElement(o,i)}}]),t}(p.Component);t.default=b},BtDg:function(e,t,n){"use strict";n.r(t);var a,r=n("UrUy"),o=n.n(r),i=n("JYC+"),c=n.n(i),l=n("R3/3"),s=n("z3IF"),u=n("LkAs"),f=n("Moms"),m=n("bMj6"),d=n("hZod"),p=n("tEuJ"),h=n("cDcd"),v=n.n(h),b=n("CXsl"),y=n("YKN3"),g=n("0i/h"),E=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).props,r=a.svgDimen,o=a.top_margin,i=a.bottom_margin,c=a.data,l=g.timeFormat("%Y"),s=g.max(c.map(function(e){return e.ConsolidatedNetIncome})),f=g.scaleBand().range([0,r.width-60]).domain(c.map(function(e){return l(new Date(e.Date))})),p=g.scaleLinear().domain([0,s]).range([r.height-o-i,0]);return n.state={svgDimen:r,top_margin:o,bottom_margin:i,x:f,y:p,max:s,data:c},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(e){var t=e.svgDimen,n=e.top_margin,a=e.bottom_margin,r=e.data,o=g.max(r.map(function(e){return e.ConsolidatedNetIncome})),i=g.timeFormat("%Y"),c=g.scaleBand().range([0,t.width-60]).domain(r.map(function(e){return i(new Date(e.Date))})),l=g.scaleLinear().domain([0,o]).range([t.height-n-a,0]);this.setState({svgDimen:t,top_margin:n,bottom_margin:a,x:c,y:l,max:o,data:r})}},{key:"renderAxis",value:function(){var e=this.state,t=e.x,n=e.y,a=g.axisBottom(t).tickSize(0).tickPadding(15),r=g.axisLeft(n).tickSize(10).ticks(10);g.select(this.xAxisElement).selectAll("*").remove(),g.select(this.yAxisElement).selectAll("*").remove(),g.select(this.xAxisElement).attr("class","x axis").call(a).selectAll("text").style("font-size",16),g.select(this.yAxisElement).attr("class","y axis").call(r)}},{key:"render",value:function(){var e=this,t=this.state,n=t.svgDimen,a=t.top_margin,r=t.bottom_margin,o=t.data,i=t.x,c=t.max,l=n.height-a-r;return v.a.createElement("g",{className:"Axis"},v.a.createElement("g",{className:"xAxis",transform:"translate(40,".concat(n.height-r,")"),ref:function(t){return e.xAxisElement=t}}),v.a.createElement("g",{className:"yAxis",transform:"translate(40,".concat(a,")"),ref:function(t){return e.yAxisElement=t}}),o.map(function(e,t){return v.a.createElement("g",{key:t,className:"bar".concat(e.Date),transform:"translate(".concat(40+i.bandwidth()*t+i.bandwidth()/2," ,").concat(n.height-r,")")},v.a.createElement(x,{key:t,data:e,max:c,bar_width:i.bandwidth(),bar_height:l}))}))}}]),t}(v.a.Component),x=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).props,r=a.data,o=a.bar_width,i=a.bar_height,c=a.max;return n.state={data:r,bar_width:o,bar_height:i,max:c},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.drawBar()}},{key:"componentDidUpdate",value:function(){this.drawBar()}},{key:"componentWillReceiveProps",value:function(e){var t=e.bar_width,n=e.bar_height,a=e.data,r=e.max;this.setState({bar_height:n,bar_width:t,data:a,max:r})}},{key:"drawBar",value:function(){var e=this.state,t=(e.bar_width,e.bar_height),n=e.data,a=t/e.max,r=n.ConsolidatedNetIncome/100*(100-n.DividendPayoutRatio)*a,o=n.ConsolidatedNetIncome/100*n.DividendPayoutRatio*a;g.select(this.el).selectAll("*").remove(),g.select(this.el).append("rect").attr("x",-20).attr("y",-r).attr("width",40).attr("height",r).style("fill","#bdbbbc"),g.select(this.el).append("rect").attr("x",-20).attr("y",-(r+o)).attr("width",40).attr("height",o).style("fill","#df072c"),g.select(this.el).append("line").style("stroke-width",3).style("stroke","black").attr("x1",0).attr("y1",-r-10).attr("x2",0).attr("y2",10-r),g.select(this.el).append("line").style("stroke-width",3).style("stroke","black").attr("x1",0).attr("y1",-(r+o)-10).attr("x2",0).attr("y2",10-(r+o)),g.select(this.el).append("text").attr("x",30).attr("y",-r).attr("alignment-baseline","central").attr("text-anchor","start").style("font-size",18).style("fill","#bdbbbc").text(Math.floor(n.ConsolidatedNetIncome/100*n.DividendPayoutRatio))}},{key:"render",value:function(){var e=this;return v.a.createElement("g",{ref:function(t){return e.el=t}})}}]),t}(h.Component),w=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).props,r=a.width,o=a.height,i=a.data,c={top:20,right:20,bottom:20,left:60},l={width:r-c.left-c.right,height:o-c.top-c.bottom};return n.state={svgDimen:l,margin:c,data:i},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,n=e.height,a=e.data,r={top:20,right:20,bottom:20,left:60},o={width:t-r.left-r.right,height:n-r.top-r.bottom};this.setState({svgDimen:o,margin:r,data:a})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,n=e.data,a=.8*t.width,r=.1*t.height,o=.25*t.height;return v.a.createElement("svg",{width:t.width,height:t.height},v.a.createElement("g",{className:"topLegend",transform:"translate(".concat(t.width/2,", 0)")},v.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"text-before-edge",textAnchor:"middle",style:{fontSize:22,fill:"#bdbbbc",fontWeight:"bold"}},"*Net Income")),v.a.createElement(E,{svgDimen:t,top_margin:r,bottom_margin:o,data:n}),v.a.createElement("g",{className:"bottomLegend",transform:"translate(".concat((t.width-a)/2,", ").concat(t.height-o,")")},v.a.createElement("g",{className:"leftLegend",transform:"translate(0, ".concat(o/2,")")},v.a.createElement("circle",{r:"5",cx:"5",cy:"0",fill:"#de0730"}),v.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Dividend")),v.a.createElement("g",{className:"centerLegend",transform:"translate(".concat(t.width/3,", ").concat(o/2,")")},v.a.createElement("circle",{r:"5",cx:"5",cy:"0",fill:"#bdbbbc"}),v.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Retained"),v.a.createElement("text",{x:"15",dy:"15",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Earnings")),v.a.createElement("g",{className:"rightLegend",transform:"translate(".concat(2*t.width/3,", ").concat(o/2,")")},v.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"%  Pay-out"),v.a.createElement("text",{x:"40",dy:"15",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"ratio"))))}}]),t}(h.Component),N=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).props,r=a.parentWidth,o=a.parentHeight,i=a.data;return console.log(i,"from index"),n.state={data:i,width:r>600?600:Math.max(r,400),height:Math.max(o,400)},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.parentWidth,n=e.parentHeight,a=e.data;this.setState({data:a,width:t>600?600:Math.max(t,400),height:Math.max(n,400)})}},{key:"render",value:function(){return v.a.createElement(h.Fragment,null,v.a.createElement(w,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(h.Component),j=(a=N,function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(y.a)(Object(y.a)(n))),n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:n}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return v.a.createElement(a,Object(s.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return v.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(h.Component)),O=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session,n=(e.navMenu,e.data);return v.a.createElement(b.a,Object(s.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),v.a.createElement("div",{className:"content"},v.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),v.a.createElement("p",null,"The Coca-Cola Company is an American ...."),v.a.createElement(j,{data:n[0].last3YearsDividend})))}}],[{key:"getInitialProps",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=n?n.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:c()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            ticker\n \n            last3YearsDividend {\n            Date\n            ConsolidatedNetIncome\n            ConsolidatedNetIncomeEUR\n            DividendPayoutRatio\n            RetainedEarningsEUR\n            Currency\n            RateEUR\n            }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return[e.data.security]});case 4:return r=e.sent,e.abrupt("return",{userAgent:a,data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=O},CXsl:function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),o=n("U7sd"),i=n.n(o),c=(n("rf6O"),function(e){return r.a.createElement(i.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),l=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},s=n("5dyF"),u=n.n(s),f=n("dAGg"),m=n("LkAs"),d=n("Moms"),p=n("bMj6"),h=n("hZod"),v=n("tEuJ"),b=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),y=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,n=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{session:t,signinBtn:n}))))))});n("aieD"),t.a=function(e){var t=e.title,n=e.description,a=e.session,o=e.children,i=e.navMenu,s=e.signinBtn;return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(c,{title:t,description:n}),i&&r.a.createElement(y,{session:a,signinBtn:s}),i&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},n.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},o),i&&r.a.createElement(l,null))}},GeWT:function(e,t,n){"use strict";var a=n("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={};i[a.ForwardRef]={$$typeof:!0,render:!0};var c=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,a){if("string"!=typeof n){if(m){var d=f(n);d&&d!==m&&e(t,d,a)}var p=l(n);s&&(p=p.concat(s(n)));for(var h=i[t.$$typeof]||r,v=i[n.$$typeof]||r,b=0;b<p.length;++b){var y=p[b];if(!(o[y]||a&&a[y]||v&&v[y]||h&&h[y])){var g=u(n,y);try{c(t,y,g)}catch(e){}}}return t}return t}},"J/q3":function(e,t,n){var a=n("hHgk");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"JYC+":function(e,t,n){e.exports=n("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},Moms:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),r()(e,a.key,a)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},NluH:function(e,t,n){var a=n("t+lh"),r=n("XzKa");function o(e){return(o="function"==typeof r&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof r&&"symbol"===o(a)?e.exports=i=function(e){return o(e)}:e.exports=i=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":o(e)},i(t)}e.exports=i},OKNm:function(e,t,n){e.exports=n("Wk4r")},Od8a:function(e,t,n){var a=n("6Ndq"),r=n("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"R3/3":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("ZOIa"),r=n.n(a);function o(e,t,n,a,o,i,c){try{var l=e[i](c),s=l.value}catch(e){return void n(e)}l.done?t(s):r.a.resolve(s).then(a,o)}function i(e){return function(){var t=this,n=arguments;return new r.a(function(a,r){var i=e.apply(t,n);function c(e){o(i,a,r,c,l,"next",e)}function l(e){o(i,a,r,c,l,"throw",e)}c(void 0)})}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,n){e.exports=n("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},UrUy:function(e,t,n){e.exports=n("cu1A")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,n){e.exports=n("vqFK")},YKN3:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},ZOIa:function(e,t,n){e.exports=n("aC71")},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},aieD:function(e,t){},bBV7:function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),o=a(n("NluH")),i=a(n("ied0")),c=a(n("hHgk")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(n("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],m=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function p(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return s.default.events}}),m.concat(f).forEach(function(e){(0,c.default)(u,e,{get:function(){return p(),u.router[e]}})}),d.forEach(function(e){u[e]=function(){var t;return p(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var h=n("/3ze");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.router=(0,i.default)(s.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},n=0;n<f.length;n++){var a=f[n];"object"!==(0,o.default)(e[a])?t[a]=e[a]:t[a]=(0,r.default)({},e[a])}return t.events=s.default.events,m.forEach(function(n){(0,c.default)(t,n,{get:function(){return e[n]}})}),d.forEach(function(n){t[n]=function(){return e[n].apply(e,arguments)}}),t}},bMj6:function(e,t,n){"use strict";var a=n("t+lh"),r=n.n(a),o=n("XzKa"),i=n.n(o);function c(e){return(c="function"==typeof i.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof i.a&&"symbol"===c(r.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":c(e)})(e)}var s=n("YKN3");function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?Object(s.a)(e):t}n.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dAGg:function(e,t,n){e.exports=n("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,n){var a=n("OKNm");function r(t,n){return e.exports=r=a||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,n){e.exports=n("TUA0")},hZod:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("jDdP"),r=n.n(a),o=n("OKNm"),i=n.n(o);function c(e){return(c=i.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,n){var a=n("7mTa"),r=n("g9SA");function o(t,n,i){return!function(){if("undefined"==typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o}:e.exports=o=a,o.apply(null,arguments)}e.exports=o},jDdP:function(e,t,n){e.exports=n("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,n){e.exports=n("gHn/")},tEuJ:function(e,t,n){"use strict";var a=n("6Ndq"),r=n.n(a),o=n("OKNm"),i=n.n(o);function c(e,t){return(c=i.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",function(){return l})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("U8Yc"),r=n.n(a);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}});