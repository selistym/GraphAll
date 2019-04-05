module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}},i=!0;try{e[a].call(r.exports,r,r.exports,n),i=!1}finally{i&&delete t[a]}return r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),i=a(n("KBEF")),o=a(n("J/q3")),c=a(n("3esu")),l=a(n("8m4E")),s=a(n("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=u(n("cDcd")),p=f(n("rf6O")),d=f(n("GeWT")),h=n("p8BD");t.default=function(e){var t=h.getDisplayName(e),n=function(t){function n(){return(0,i.default)(this,n),(0,c.default)(this,(0,l.default)(n).apply(this,arguments))}return(0,s.default)(n,t),(0,o.default)(n,[{key:"render",value:function(){return m.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),n}(m.Component);return n.contextTypes={router:p.default.object},n.displayName="withRouter(".concat(t,")"),d.default(n,e)}},"0i/h":function(e,t){e.exports=require("d3")},1:function(e,t,n){e.exports=n("3L/t")},"3L/t":function(e,t,n){"use strict";n.r(t);var a,r=n("z3IF"),i=n("LkAs"),o=n("Moms"),c=n("bMj6"),l=n("hZod"),s=n("tEuJ"),u=n("cDcd"),f=n.n(u),m=n("CXsl"),p=n("0i/h"),d=n("YKN3"),h=n("azxR"),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={margins:n.props.margins,svgDimen:n.props.svgDimen,partial:n.props.partial,columns:n.props.columns},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,partial:e.partial,columns:e.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.partial,r=e.columns;void 0===a.columns&&(a.columns=r);var i=a.columns.slice(1,3).map(function(e){return{id:e,values:a.map(function(t){return{year:t.year,value:t[e]}})}}),o=i[0].values[0].year,c=i[0].values[i[0].values.length-1].year,l=p.scaleOrdinal().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),s=p.scaleLinear().range([n.left,t.width-n.right]).domain([o,c]),u=p.scaleLinear().range([t.height-n.bottom,n.top]).domain([0,100]);l.domain(i.map(function(e){return e.id}));var f=p.area().curve(p.curveMonotoneX).x(function(e){return s(e.year)}).y0(u(0)).y1(function(e){return u(e.value)}),m=p.select(this.el);m.selectAll("*").remove(),m.append("g").attr("transform","translate(0,"+(t.height-n.bottom)+")").call(p.axisBottom().scale(s).ticks(i[0].values.length).tickSize(0).tickFormat(p.format(""))).selectAll("text").style("font-size","10px").style("fill","black"),m.append("g").call(p.axisLeft().scale(u).ticks(10).tickSize(0)).select(".domain").style("opacity",0),m.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return f(e.values)}).style("fill",function(e){return l(e.id)})}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return f.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},f.a.createElement("g",{className:"graphPane",ref:function(t){return e.el=t}}))}}]),t}(u.Component),g=function(e){function t(e){var n;Object(i.a)(this,t);var a=(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).props,r=a.handle,o=a.svgDimen,s=a.margins,u=a.years,f=a.initValue,m=a.xScale;return n.state={handle:r,svgDimen:o,margins:s,years:u,initValue:f,xScale:m},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.handle,n=e.svgDimen,a=e.margins,r=e.years,i=e.rangeStart,o=e.rangeEnd,c=e.xScale;this.setState({handle:t,svgDimen:n,margins:a,years:r,rangeStart:i,rangeEnd:o,xScale:c})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.rangeStart,r=e.rangeEnd,i=e.xScale,o=e.handle,c=f.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-n.bottom,transform:"translate(-5, 0)",fill:"#df072c"});return"handleLeft"==o?f.a.createElement("g",{className:o,transform:"translate(".concat(i(a),", 0)"),onMouseOver:this.onMouseOver.bind(this)},c):f.a.createElement("g",{className:o,transform:"translate(".concat(i(r),", 0)"),onMouseOver:this.onMouseOver.bind(this)},c)}},{key:"componentDidUpdate",value:function(e,t){var n,a=this.state,r=a.margins,i=a.svgDimen,o=a.xScale,c=a.years,l=(a.rangeStart,a.rangeEnd,a.handle),s=this.props,u=(s.onChangePeriod,s.changeHandlerValue,this),f=(i.width,r.left,r.right,c.length,p.drag().on("start",function(){n=p.mouse(this)[0],m(n)}).on("drag",function(){n=p.mouse(this)[0],m(n),"handleLeft"===l?n:n,p.select("."+u.state.handle).attr("transform","translate("+n+",0)"),console.log(n,"from draged")}).on("end",function(){}));function m(e){return Math.round(o.invert(e))}p.select(".graphSliderGroup").call(f)}}]),t}(f.a.Component),b=function(e){function t(e){var n;Object(i.a)(this,t);var a=(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).props,r=a.margins,o=a.svgDimen,s=a.total,u=a.columns,f=s.map(function(e){return e.year});return n.state={margins:r,svgDimen:o,total:s,columns:u,rangeStart:f[0],rangeEnd:f[f.length-1]},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.margins,n=e.svgDimen,a=e.total,r=e.columns,i=a.map(function(e){return e.year});this.setState({margins:t,svgDimen:n,total:a,columns:r,rangeStart:i[0],rangeEnd:i[i.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.svgDimen,n=e.margins,a=e.total,r=e.columns;void 0===a.columns&&(a.columns=r);var i=a.columns.slice(3).map(function(e){return{id:e,values:a.map(function(t){return{year:t.year,slide:t[e]}})}}),o=i[0].values[0].year,c=i[0].values[i[0].values.length-1].year,l=p.scaleLinear().range([n.left,t.width-n.right]).domain([o,c]),s=p.scaleLinear().range([t.height-n.bottom,n.top]).domain([0,100]),u=p.area().curve(p.curveMonotoneX).x(function(e){return l(e.year)}).y0(s(0)).y1(function(e){return s(e.slide)}),f=p.select(this.GraphAxisElement);f.selectAll("*").remove(),f.append("g").attr("transform","translate(0,"+(t.height-n.bottom)+")").call(p.axisBottom().scale(l).ticks(i[0].values.length).tickFormat(p.format(""))).selectAll("text").style("font-size","10px").style("fill","black"),f.append("g").call(p.axisLeft().scale(s).ticks(10).tickSize(0)).select(".domain").style("opacity",0),f.selectAll(".area").data(i).enter().append("path").attr("d",function(e){return u(e.values)}).style("fill","#ddd")}},{key:"changeHandlerValue",value:function(e,t){"leftHandler"==e?this.setState({rangeStart:t}):this.setState({rangeEnd:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.svgDimen,a=t.total,r=t.margins,i=t.rangeStart,o=t.rangeEnd,c=this.props,l=c.onChangePeriod,s=c.changeHandlerValue,u=a.map(function(e){return e.year}),m=u[0],d=u[u.length-1],h=p.scaleLinear().range([r.left,n.width-r.right]).domain([m,d]),v=f.a.createElement("rect",{x:h(m),y:"0",width:h(d)-h(m),height:n.height-r.bottom,fill:"rgba(54, 174, 175, 0.65)",className:"rangeBarFilled"});return f.a.createElement("svg",{className:"graphSliderSvg",width:n.width,height:n.height},f.a.createElement("g",{className:"graphSliderGroup"},f.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),v,f.a.createElement(g,{className:"handleLeft",handle:"handleLeft",onChangePeriod:l,changeHandlerValue:s,svgDimen:n,margins:r,years:u,rangeStart:i,rangeEnd:o,xScale:h}),f.a.createElement(g,{className:"handleRight",handle:"handleRight",onChangePeriod:l,changeHandlerValue:s,svgDimen:n,margins:r,years:u,rangeStart:i,rangeEnd:o,xScale:h})))}}]),t}(u.Component),y=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(c.a)(this,Object(l.a)(t).call(this,e)),Object(h.a)(Object(d.a)(Object(d.a)(n)),"changePeriod",function(e,t){for(var a=n.state.total,r=[],i=0;i<a.length;i++)a[i].year>=e&&a[i].year<=t&&r.push(a[i]);r.columns=a.columns,n.setState({partial:r})});var a=n.props,r=a.data,o=a.width,s=a.height,u=r.sort(function(e,t){return p.ascending(e.year,t.year)});return n.state={total:u,partial:u,csv_cols:r.columns,width:o,height:s},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,n=e.width,a=e.height,r=t.sort(function(e,t){return p.ascending(e.year,t.year)});this.setState({total:r,partial:r,csv_cols:t.columns,width:n,height:a})}},{key:"render",value:function(){var e=this.state,t=e.width,n=e.height,a=e.total,r=e.partial,i=e.csv_cols,o={top:20,right:20,bottom:20,left:20},c={width:t-o.left-o.right,height:n/6},l={width:t-o.left-o.right,height:5*n/6};return f.a.createElement("div",{className:"areaChartPane"},f.a.createElement("div",{className:"areaChart"},f.a.createElement(v,{margins:o,svgDimen:l,partial:r,columns:i})),f.a.createElement("div",{className:"graphSlider"},f.a.createElement(b,{onChangePeriod:this.changePeriod,margins:o,svgDimen:c,total:a,columns:i})))}}]),t}(u.Component),E=function(e){function t(e){var n;Object(i.a)(this,t);var a=(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).props,r=a.parentWidth,o=a.parentHeight;return n.state={width:Math.max(r,450),height:Math.max(o,400)},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({width:Math.max(e.parentWidth,450),height:Math.max(e.parentHeight,400)})}},{key:"componentDidMount",value:function(){var e=this;p.csv("/static/area_data.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return f.a.createElement(u.Fragment,null,this.state.data&&f.a.createElement(y,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(u.Component),x=(a=E,function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(d.a)(Object(d.a)(n))),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:n}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return f.a.createElement(a,Object(r.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return f.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(u.Component)),N=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return f.a.createElement(m.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),f.a.createElement("div",{className:"content"},f.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),f.a.createElement("p",null,"The Coca-Cola Company is an American ...."),f.a.createElement(x,null)))}}]),t}(u.Component);t.default=N},"3esu":function(e,t,n){var a=n("NluH"),r=n("oS/Z");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"6Ndq":function(e,t,n){e.exports=n("o5io")},"7mTa":function(e,t,n){e.exports=n("aAV7")},"8m4E":function(e,t,n){var a=n("jDdP"),r=n("OKNm");function i(t){return e.exports=i=r?a:function(e){return e.__proto__||a(e)},i(t)}e.exports=i},"9CGT":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("JYC+")),i=a(n("NluH")),o=a(n("KBEF")),c=a(n("J/q3")),l=a(n("3esu")),s=a(n("8m4E")),u=a(n("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},m=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("bzos"),d=f(n("cDcd")),h=(m(n("rf6O")),f(n("dAGg"))),v=n("p8BD");var g=function(e){function t(){var e,n,a,r,c;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,i.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?v.formatWithValidation(t):t}},a=null,r=null,c=null,function(e,t){if(e===a&&t===r)return c;var i=n(e,t);return a=e,r=t,c=i,i}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),o=i.href,c=i.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var l=window.location.pathname;o=p.resolve(l,o),c=c?p.resolve(l,c):o,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](o,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),o={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=r||a),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=h.Router._rewriteUrlForNextExport(o.href)),d.default.cloneElement(i,o)}}]),t}(d.Component);t.default=g},CXsl:function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),i=n("U7sd"),o=n.n(i),c=(n("rf6O"),function(e){return r.a.createElement(o.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),l=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},s=n("5dyF"),u=n.n(s),f=n("dAGg"),m=n("LkAs"),p=n("Moms"),d=n("bMj6"),h=n("hZod"),v=n("tEuJ"),g=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),b=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,n=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{session:t,signinBtn:n}))))))});n("aieD"),t.a=function(e){var t=e.title,n=e.description,a=e.session,i=e.children,o=e.navMenu,s=e.signinBtn;return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(c,{title:t,description:n}),o&&r.a.createElement(b,{session:a,signinBtn:s}),o&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},n.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},i),o&&r.a.createElement(l,null))}},GeWT:function(e,t,n){"use strict";var a=n("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={};o[a.ForwardRef]={$$typeof:!0,render:!0};var c=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,a){if("string"!=typeof n){if(m){var p=f(n);p&&p!==m&&e(t,p,a)}var d=l(n);s&&(d=d.concat(s(n)));for(var h=o[t.$$typeof]||r,v=o[n.$$typeof]||r,g=0;g<d.length;++g){var b=d[g];if(!(i[b]||a&&a[b]||v&&v[b]||h&&h[b])){var y=u(n,b);try{c(t,b,y)}catch(e){}}}return t}return t}},"J/q3":function(e,t,n){var a=n("hHgk");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"JYC+":function(e,t,n){e.exports=n("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},Moms:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("hHgk"),r=n.n(a);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),r()(e,a.key,a)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},NluH:function(e,t,n){var a=n("t+lh"),r=n("XzKa");function i(e){return(i="function"==typeof r&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof r&&"symbol"===i(a)?e.exports=o=function(e){return i(e)}:e.exports=o=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":i(e)},o(t)}e.exports=o},OKNm:function(e,t,n){e.exports=n("Wk4r")},Od8a:function(e,t,n){var a=n("6Ndq"),r=n("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,n){e.exports=n("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,n){e.exports=n("vqFK")},YKN3:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aieD:function(e,t){},azxR:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function i(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},bBV7:function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),i=a(n("NluH")),o=a(n("ied0")),c=a(n("hHgk")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(n("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],m=["components"],p=["push","replace","reload","back","prefetch","beforePopState"];function d(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return s.default.events}}),m.concat(f).forEach(function(e){(0,c.default)(u,e,{get:function(){return d(),u.router[e]}})}),p.forEach(function(e){u[e]=function(){var t;return d(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var h=n("/3ze");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.router=(0,o.default)(s.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},n=0;n<f.length;n++){var a=f[n];"object"!==(0,i.default)(e[a])?t[a]=e[a]:t[a]=(0,r.default)({},e[a])}return t.events=s.default.events,m.forEach(function(n){(0,c.default)(t,n,{get:function(){return e[n]}})}),p.forEach(function(n){t[n]=function(){return e[n].apply(e,arguments)}}),t}},bMj6:function(e,t,n){"use strict";var a=n("t+lh"),r=n.n(a),i=n("XzKa"),o=n.n(i);function c(e){return(c="function"==typeof o.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof o.a&&"symbol"===c(r.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":c(e)})(e)}var s=n("YKN3");function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?Object(s.a)(e):t}n.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},dAGg:function(e,t,n){e.exports=n("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,n){var a=n("OKNm");function r(t,n){return e.exports=r=a||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,n){e.exports=n("TUA0")},hZod:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("jDdP"),r=n.n(a),i=n("OKNm"),o=n.n(i);function c(e){return(c=o.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,n){var a=n("7mTa"),r=n("g9SA");function i(t,n,o){return!function(){if("undefined"==typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=i=function(e,t,n){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return n&&r(i,n.prototype),i}:e.exports=i=a,i.apply(null,arguments)}e.exports=i},jDdP:function(e,t,n){e.exports=n("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,n){e.exports=n("gHn/")},tEuJ:function(e,t,n){"use strict";var a=n("6Ndq"),r=n.n(a),i=n("OKNm"),o=n.n(i);function c(e,t){return(c=o.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",function(){return l})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("U8Yc"),r=n.n(a);function i(){return(i=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}});