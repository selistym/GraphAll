module.exports=function(e){var t=require("../../../ssr-module-cache.js");function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}},o=!0;try{e[n].call(r.exports,r,r.exports,a),o=!1}finally{o&&delete t[n]}return r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("U8Yc")),o=n(a("KBEF")),i=n(a("J/q3")),l=n(a("3esu")),s=n(a("8m4E")),c=n(a("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=u(a("cDcd")),p=f(a("rf6O")),h=f(a("GeWT")),d=a("p8BD");t.default=function(e){var t=d.getDisplayName(e),a=function(t){function a(){return(0,o.default)(this,a),(0,l.default)(this,(0,s.default)(a).apply(this,arguments))}return(0,c.default)(a,t),(0,i.default)(a,[{key:"render",value:function(){return m.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),a}(m.Component);return a.contextTypes={router:p.default.object},a.displayName="withRouter(".concat(t,")"),h.default(a,e)}},"0i/h":function(e,t){e.exports=require("d3")},1:function(e,t,a){e.exports=a("3L/t")},"3L/t":function(e,t,a){"use strict";a.r(t);var n,r=a("z3IF"),o=a("LkAs"),i=a("Moms"),l=a("bMj6"),s=a("hZod"),c=a("tEuJ"),u=a("cDcd"),f=a.n(u),m=a("CXsl"),p=a("0i/h"),h=a("YKN3"),d=a("azxR"),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial,columns:a.props.columns},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,partial:e.partial,columns:e.columns})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.partial,r=e.columns;void 0===n.columns&&(n.columns=r);var o=n.columns.slice(1,3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,value:t[e]}})}}),i=o[0].values[0].year,l=o[0].values[o[0].values.length-1].year,s=p.scaleOrdinal().domain(["grey","red"]).range(["rgba(189, 187, 188, 0.7)","rgba(223, 7, 44, 0.7)"]),c=p.scaleLinear().range([a.left,t.width-a.right]).domain([i,l]),u=p.scaleLinear().range([t.height-a.bottom,a.top]).domain([0,100]);s.domain(o.map(function(e){return e.id}));var f=p.area().curve(p.curveMonotoneX).x(function(e){return c(e.year)}).y0(u(0)).y1(function(e){return u(e.value)}),m=p.select(this.el);m.selectAll("*").remove(),m.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(p.axisBottom().scale(c).ticks(o[0].values.length).tickSize(0).tickFormat(p.format(""))).selectAll("text").style("font-size","10px").style("fill","black"),m.append("g").call(p.axisLeft().scale(u).ticks(10).tickSize(0)).select(".domain").style("opacity",0),m.selectAll(".area").data(o).enter().append("path").attr("d",function(e){return f(e.values)}).style("fill",function(e){return s(e.id)})}},{key:"render",value:function(){var e=this,t=this.state.svgDimen;return f.a.createElement("svg",{className:"graphSvg",width:t.width,height:t.height},f.a.createElement("g",{className:"graphPane",ref:function(t){return e.el=t}}))}}]),t}(u.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={handle:a.props.handle,svgDimen:a.props.svgDimen,margins:a.props.margins,years:a.props.years,initValue:a.props.initValue,xScale:a.props.xScale,rangeValues:a.props.rangeValues},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({svgDimen:e.svgDimen,years:e.years,handle:e.handle,xScale:e.xScale,rangeValues:rangeValues})}},{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.initValue,r=e.xScale,o=e.handle,i=f.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:t.height-a.bottom,transform:"translate(-5,0)",fill:"#df072c"});return f.a.createElement("g",{className:o,transform:"translate(".concat(r(n),",0)"),onMouseOver:this.onMouseOver.bind(this)},i)}},{key:"componentDidUpdate",value:function(e,t){var a,n,r=this.state,o=r.margins,i=r.svgDimen,l=r.xScale,s=r.years,c=r.handle,u=r.rangeValues,f=this.props.onChangePeriod,m=this,h=(i.width-o.left-o.right)/s.length,d=p.drag().on("start",function(){a=p.mouse(this)[0],n=v(a)}).on("drag",function(){a=p.mouse(this)[0],n=v(a),"handleLeft"===c?u.h1=a:u.h2=a,u.h2-u.h1>h&&a>o.left&&a<i.width-o.right?(p.select("."+m.state.handle).attr("transform","translate("+a+",0)"),"handleLeft"===c?(u.tempH1=a,u.trueYear1=n):(u.tempH2=a,u.trueYear2=n)):(u.h1=u.tempH1,u.h2=u.tempH2,n="handleLeft"===c?u.trueYear1:u.trueYear2);p.select(".rangeBarFilled").attr("x",u.h1).attr("y",0).attr("width",u.h2-u.h1).attr("height",i.height-o.bottom)}).on("end",function(){u.h1=l(v(u.tempH1)),u.h2=l(v(u.tempH2)),p.select("."+m.state.handle).attr("transform","translate("+l(n)+",0)"),p.select(".rangeBarFilled").attr("x",l(u.trueYear1)).attr("y",0).attr("width",l(u.trueYear2)-l(u.trueYear1)).attr("height",i.height-o.bottom),f(u.trueYear1,u.trueYear2)});function v(e){return Math.round(l.invert(e))}p.select(".graphSliderGroup").call(d)}}]),t}(f.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,total:a.props.total,columns:a.props.columns},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({total:e.total,svgDimen:e.svgDimen})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var e=this.state,t=e.svgDimen,a=e.margins,n=e.total,r=e.columns;void 0===n.columns&&(n.columns=r);var o=n.columns.slice(3).map(function(e){return{id:e,values:n.map(function(t){return{year:t.year,slide:t[e]}})}}),i=o[0].values[0].year,l=o[0].values[o[0].values.length-1].year,s=p.scaleLinear().range([a.left,t.width-a.right]).domain([i,l]),c=p.scaleLinear().range([t.height-a.bottom,a.top]).domain([0,100]),u=p.area().curve(p.curveMonotoneX).x(function(e){return s(e.year)}).y0(c(0)).y1(function(e){return c(e.slide)}),f=p.select(this.GraphAxisElement);f.selectAll("*").remove(),f.append("g").attr("transform","translate(0,"+(t.height-a.bottom)+")").call(p.axisBottom().scale(s).ticks(o[0].values.length).tickFormat(p.format(""))).selectAll("text").style("font-size","10px").style("fill","black"),f.append("g").call(p.axisLeft().scale(c).ticks(10).tickSize(0)).select(".domain").style("opacity",0),f.selectAll(".area").data(o).enter().append("path").attr("d",function(e){return u(e.values)}).style("fill","#ddd")}},{key:"render",value:function(){var e=this,t=this.state,a=t.svgDimen,n=t.total,r=t.margins,o=this.props.onChangePeriod,i=n.map(function(e){return e.year}),l=i[0],s=i[i.length-1],c=p.scaleLinear().range([r.left,a.width-r.right]).domain([l,s]),u={h1:c(l),h2:c(s),tempH1:c(l),tempH2:c(s),trueYear1:l,trueYear2:s};return f.a.createElement("svg",{className:"graphSliderSvg",width:a.width,height:a.height},f.a.createElement("g",{className:"graphSliderGroup"},f.a.createElement("g",{className:"graphSliderAxis",ref:function(t){return e.GraphAxisElement=t}}),f.a.createElement("rect",{x:c(l),y:"0",width:c(s)-c(l),height:a.height-r.bottom,fill:"rgba(54, 174, 175, 0.65)",className:"rangeBarFilled"}),f.a.createElement(g,{className:"handleLeft",onChangePeriod:o,transform:"translate(".concat(c(l),",0)"),svgDimen:a,margins:r,handle:"handleLeft",years:i,rangeValues:u,xScale:c,initValue:l}),f.a.createElement(g,{className:"handleRight",onChangePeriod:o,transform:"translate(".concat(c(s),",0)"),svgDimen:a,margins:r,handle:"handleRight",years:i,rangeValues:u,xScale:c,initValue:s})))}}]),t}(u.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(l.a)(this,Object(s.a)(t).call(this,e)),Object(d.a)(Object(h.a)(Object(h.a)(a)),"changePeriod",function(e,t){for(var n=a.state.total,r=[],o=0;o<n.length;o++)n[o].year>=e&&n[o].year<=t&&r.push(n[o]);r.columns=n.columns,a.setState({partial:r})}),a.state={total:a.props.data,partial:a.props.data,csv_cols:a.props.data.columns,width:a.props.width,height:a.props.height},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({total:e.data,partial:e.data,width:e.width,height:e.height})}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.total,r=e.partial,o=e.csv_cols,i={top:20,right:20,bottom:20,left:20},l={width:t-i.left-i.right,height:a/6},s={width:t-i.left-i.right,height:5*a/6};return f.a.createElement("div",{className:"areaChartPane"},f.a.createElement("div",{className:"areaChart"},f.a.createElement(v,{margins:i,svgDimen:s,partial:r,columns:o})),f.a.createElement("div",{className:"graphSlider"},f.a.createElement(b,{onChangePeriod:this.changePeriod,margins:i,svgDimen:l,total:n,columns:o})))}}]),t}(u.Component),E=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).props,r=n.parentWidth,i=n.parentHeight;return a.state={width:Math.max(r,450),height:Math.max(i,400)},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({width:Math.max(e.parentWidth,450),height:Math.max(e.parentHeight,400)})}},{key:"componentDidMount",value:function(){var e=this;p.csv("/static/area_data.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return f.a.createElement(u.Fragment,null,this.state.data&&f.a.createElement(y,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(u.Component),x=(n=E,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(h.a)(Object(h.a)(a))),a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return f.a.createElement(n,Object(r.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return f.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(u.Component)),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return f.a.createElement(m.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),f.a.createElement("div",{className:"content"},f.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),f.a.createElement("p",null,"The Coca-Cola Company is an American ...."),f.a.createElement(x,null)))}}]),t}(u.Component);t.default=N},"3esu":function(e,t,a){var n=a("NluH"),r=a("oS/Z");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,a){e.exports=a("9CGT")},"6Ndq":function(e,t,a){e.exports=a("o5io")},"7mTa":function(e,t,a){e.exports=a("aAV7")},"8m4E":function(e,t,a){var n=a("jDdP"),r=a("OKNm");function o(t){return e.exports=o=r?n:function(e){return e.__proto__||n(e)},o(t)}e.exports=o},"9CGT":function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("JYC+")),o=n(a("NluH")),i=n(a("KBEF")),l=n(a("J/q3")),s=n(a("3esu")),c=n(a("8m4E")),u=n(a("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},m=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=a("bzos"),h=f(a("cDcd")),d=(m(a("rf6O")),f(a("dAGg"))),v=a("p8BD");var g=function(e){function t(){var e,a,n,r,l;return(0,i.default)(this,t),(e=(0,s.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(a=function(e,t){return{href:e&&"object"===(0,o.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?v.formatWithValidation(t):t}},n=null,r=null,l=null,function(e,t){if(e===n&&t===r)return l;var o=a(e,t);return n=e,r=t,l=o,o}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,r=a.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var t=p.parse(e,!1,!0),a=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(i)){var s=window.location.pathname;i=p.resolve(s,i),l=l?p.resolve(s,l):i,t.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=p.resolve(e,t);d.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=d.Router._rewriteUrlForNextExport(i.href)),h.default.cloneElement(o,i)}}]),t}(h.Component);t.default=g},CXsl:function(e,t,a){"use strict";var n=a("cDcd"),r=a.n(n),o=a("U7sd"),i=a.n(o),l=(a("rf6O"),function(e){return r.a.createElement(i.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),s=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},c=a("5dyF"),u=a.n(c),f=a("dAGg"),m=a("LkAs"),p=a("Moms"),h=a("bMj6"),d=a("hZod"),v=a("tEuJ"),g=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),b=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,a=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{session:t,signinBtn:a}))))))});a("aieD"),t.a=function(e){var t=e.title,a=e.description,n=e.session,o=e.children,i=e.navMenu,c=e.signinBtn;return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(l,{title:t,description:a}),i&&r.a.createElement(b,{session:n,signinBtn:c}),i&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},a.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},o),i&&r.a.createElement(s,null))}},GeWT:function(e,t,a){"use strict";var n=a("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={};i[n.ForwardRef]={$$typeof:!0,render:!0};var l=Object.defineProperty,s=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,a,n){if("string"!=typeof a){if(m){var p=f(a);p&&p!==m&&e(t,p,n)}var h=s(a);c&&(h=h.concat(c(a)));for(var d=i[t.$$typeof]||r,v=i[a.$$typeof]||r,g=0;g<h.length;++g){var b=h[g];if(!(o[b]||n&&n[b]||v&&v[b]||d&&d[b])){var y=u(a,b);try{l(t,b,y)}catch(e){}}}return t}return t}},"J/q3":function(e,t,a){var n=a("hHgk");function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),n(e,r.key,r)}}e.exports=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}},"JYC+":function(e,t,a){e.exports=a("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},Moms:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(e,n.key,n)}}function i(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}},NluH:function(e,t,a){var n=a("t+lh"),r=a("XzKa");function o(e){return(o="function"==typeof r&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof r&&"symbol"===o(n)?e.exports=i=function(e){return o(e)}:e.exports=i=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":o(e)},i(t)}e.exports=i},OKNm:function(e,t,a){e.exports=a("Wk4r")},Od8a:function(e,t,a){var n=a("6Ndq"),r=a("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,a){e.exports=a("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,a){e.exports=a("vqFK")},YKN3:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",function(){return n})},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aieD:function(e,t){},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("hHgk"),r=a.n(n);function o(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},bBV7:function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("U8Yc")),o=n(a("NluH")),i=n(a("ied0")),l=n(a("hHgk")),s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=s(a("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],m=["components"],p=["push","replace","reload","back","prefetch","beforePopState"];function h(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return c.default.events}}),m.concat(f).forEach(function(e){(0,l.default)(u,e,{get:function(){return h(),u.router[e]}})}),p.forEach(function(e){u[e]=function(){var t;return h(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){c.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var d=a("/3ze");t.withRouter=d.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return u.router=(0,i.default)(c.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=c.default,t.makePublicRouterInstance=function(e){for(var t={},a=0;a<f.length;a++){var n=f[a];"object"!==(0,o.default)(e[n])?t[n]=e[n]:t[n]=(0,r.default)({},e[n])}return t.events=c.default.events,m.forEach(function(a){(0,l.default)(t,a,{get:function(){return e[a]}})}),p.forEach(function(a){t[a]=function(){return e[a].apply(e,arguments)}}),t}},bMj6:function(e,t,a){"use strict";var n=a("t+lh"),r=a.n(n),o=a("XzKa"),i=a.n(o);function l(e){return(l="function"==typeof i.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"==typeof i.a&&"symbol"===l(r.a)?function(e){return l(e)}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":l(e)})(e)}var c=a("YKN3");function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?Object(c.a)(e):t}a.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},dAGg:function(e,t,a){e.exports=a("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,a){var n=a("OKNm");function r(t,a){return e.exports=r=n||function(e,t){return e.__proto__=t,e},r(t,a)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,a){e.exports=a("TUA0")},hZod:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a("jDdP"),r=a.n(n),o=a("OKNm"),i=a.n(o);function l(e){return(l=i.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,a){var n=a("7mTa"),r=a("g9SA");function o(t,a,i){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,a){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return a&&r(o,a.prototype),o}:e.exports=o=n,o.apply(null,arguments)}e.exports=o},jDdP:function(e,t,a){e.exports=a("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,a){e.exports=a("gHn/")},tEuJ:function(e,t,a){"use strict";var n=a("6Ndq"),r=a.n(n),o=a("OKNm"),i=a.n(o);function l(e,t){return(l=i.a||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}a.d(t,"a",function(){return s})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("U8Yc"),r=a.n(n);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}}});