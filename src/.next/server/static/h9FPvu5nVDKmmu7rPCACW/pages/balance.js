module.exports=function(e){var t=require("../../../ssr-module-cache.js");function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}},i=!0;try{e[n].call(r.exports,r,r.exports,a),i=!1}finally{i&&delete t[n]}return r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("U8Yc")),i=n(a("KBEF")),o=n(a("J/q3")),l=n(a("3esu")),c=n(a("8m4E")),s=n(a("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=u(a("cDcd")),m=f(a("rf6O")),d=f(a("GeWT")),p=a("p8BD");t.default=function(e){var t=p.getDisplayName(e),a=function(t){function a(){return(0,i.default)(this,a),(0,l.default)(this,(0,c.default)(a).apply(this,arguments))}return(0,s.default)(a,t),(0,o.default)(a,[{key:"render",value:function(){return h.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),a}(h.Component);return a.contextTypes={router:m.default.object},a.displayName="withRouter(".concat(t,")"),d.default(a,e)}},"0i/h":function(e,t){e.exports=require("d3")},2:function(e,t,a){e.exports=a("tRqh")},"3esu":function(e,t,a){var n=a("NluH"),r=a("oS/Z");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,a){e.exports=a("9CGT")},"6Ndq":function(e,t,a){e.exports=a("o5io")},"7mTa":function(e,t,a){e.exports=a("aAV7")},"8m4E":function(e,t,a){var n=a("jDdP"),r=a("OKNm");function i(t){return e.exports=i=r?n:function(e){return e.__proto__||n(e)},i(t)}e.exports=i},"9CGT":function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("JYC+")),i=n(a("NluH")),o=n(a("KBEF")),l=n(a("J/q3")),c=n(a("3esu")),s=n(a("8m4E")),u=n(a("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},h=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=a("bzos"),d=f(a("cDcd")),p=(h(a("rf6O")),f(a("dAGg"))),v=a("p8BD");var b=function(e){function t(){var e,a,n,r,l;return(0,o.default)(this,t),(e=(0,c.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(a=function(e,t){return{href:e&&"object"===(0,i.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?v.formatWithValidation(t):t}},n=null,r=null,l=null,function(e,t){if(e===n&&t===r)return l;var i=a(e,t);return n=e,r=t,l=i,i}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,r=a.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),o=i.href,l=i.as;if(function(e){var t=m.parse(e,!1,!0),a=m.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(o)){var c=window.location.pathname;o=m.resolve(c,o),l=l?m.resolve(c,l):o,t.preventDefault();var s=e.props.scroll;null==s&&(s=l.indexOf("#")<0),p.default[e.props.replace?"replace":"push"](o,l,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=m.resolve(e,t);p.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),o={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=r||n),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=p.Router._rewriteUrlForNextExport(o.href)),d.default.cloneElement(i,o)}}]),t}(d.Component);t.default=b},CXsl:function(e,t,a){"use strict";var n=a("cDcd"),r=a.n(n),i=a("U7sd"),o=a.n(i),l=(a("rf6O"),function(e){return r.a.createElement(o.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),c=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},s=a("5dyF"),u=a.n(s),f=a("dAGg"),h=a("LkAs"),m=a("Moms"),d=a("bMj6"),p=a("hZod"),v=a("tEuJ"),b=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),y=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,a=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{session:t,signinBtn:a}))))))});a("aieD"),t.a=function(e){var t=e.title,a=e.description,n=e.session,i=e.children,o=e.navMenu,s=e.signinBtn;return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(l,{title:t,description:a}),o&&r.a.createElement(y,{session:n,signinBtn:s}),o&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},a.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},i),o&&r.a.createElement(c,null))}},FdmI:function(e,t,a){e.exports=a("wa65")},GeWT:function(e,t,a){"use strict";var n=a("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={};o[n.ForwardRef]={$$typeof:!0,render:!0};var l=Object.defineProperty,c=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,a,n){if("string"!=typeof a){if(h){var m=f(a);m&&m!==h&&e(t,m,n)}var d=c(a);s&&(d=d.concat(s(a)));for(var p=o[t.$$typeof]||r,v=o[a.$$typeof]||r,b=0;b<d.length;++b){var y=d[b];if(!(i[y]||n&&n[y]||v&&v[y]||p&&p[y])){var g=u(a,y);try{l(t,y,g)}catch(e){}}}return t}return t}},"J/q3":function(e,t,a){var n=a("hHgk");function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),n(e,r.key,r)}}e.exports=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}},"JYC+":function(e,t,a){e.exports=a("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},Moms:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("hHgk"),r=a.n(n);function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(e,n.key,n)}}function o(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e}},NluH:function(e,t,a){var n=a("t+lh"),r=a("XzKa");function i(e){return(i="function"==typeof r&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof r&&"symbol"===i(n)?e.exports=o=function(e){return i(e)}:e.exports=o=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":i(e)},o(t)}e.exports=o},OKNm:function(e,t,a){e.exports=a("Wk4r")},Od8a:function(e,t,a){var n=a("6Ndq"),r=a("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"R3/3":function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("ZOIa"),r=a.n(n);function i(e,t,a,n,i,o,l){try{var c=e[o](l),s=c.value}catch(e){return void a(e)}c.done?t(s):r.a.resolve(s).then(n,i)}function o(e){return function(){var t=this,a=arguments;return new r.a(function(n,r){var o=e.apply(t,a);function l(e){i(o,n,r,l,c,"next",e)}function c(e){i(o,n,r,l,c,"throw",e)}l(void 0)})}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,a){e.exports=a("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},UrUy:function(e,t,a){e.exports=a("cu1A")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,a){e.exports=a("vqFK")},YKN3:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",function(){return n})},ZOIa:function(e,t,a){e.exports=a("aC71")},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},aieD:function(e,t){},azxR:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},bBV7:function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("U8Yc")),i=n(a("NluH")),o=n(a("ied0")),l=n(a("hHgk")),c=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=c(a("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],h=["components"],m=["push","replace","reload","back","prefetch","beforePopState"];function d(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return s.default.events}}),h.concat(f).forEach(function(e){(0,l.default)(u,e,{get:function(){return d(),u.router[e]}})}),m.forEach(function(e){u[e]=function(){var t;return d(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var p=a("/3ze");t.withRouter=p.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return u.router=(0,o.default)(s.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},a=0;a<f.length;a++){var n=f[a];"object"!==(0,i.default)(e[n])?t[n]=e[n]:t[n]=(0,r.default)({},e[n])}return t.events=s.default.events,h.forEach(function(a){(0,l.default)(t,a,{get:function(){return e[a]}})}),m.forEach(function(a){t[a]=function(){return e[a].apply(e,arguments)}}),t}},bMj6:function(e,t,a){"use strict";var n=a("t+lh"),r=a.n(n),i=a("XzKa"),o=a.n(i);function l(e){return(l="function"==typeof o.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"==typeof o.a&&"symbol"===l(r.a)?function(e){return l(e)}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":l(e)})(e)}var s=a("YKN3");function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?Object(s.a)(e):t}a.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dAGg:function(e,t,a){e.exports=a("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,a){var n=a("OKNm");function r(t,a){return e.exports=r=n||function(e,t){return e.__proto__=t,e},r(t,a)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,a){e.exports=a("TUA0")},hZod:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a("jDdP"),r=a.n(n),i=a("OKNm"),o=a.n(i);function l(e){return(l=o.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,a){var n=a("7mTa"),r=a("g9SA");function i(t,a,o){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=i=function(e,t,a){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return a&&r(i,a.prototype),i}:e.exports=i=n,i.apply(null,arguments)}e.exports=i},jDdP:function(e,t,a){e.exports=a("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,a){e.exports=a("gHn/")},tEuJ:function(e,t,a){"use strict";var n=a("6Ndq"),r=a.n(n),i=a("OKNm"),o=a.n(i);function l(e,t){return(l=o.a||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}a.d(t,"a",function(){return c})},tRqh:function(e,t,a){"use strict";a.r(t);var n,r=a("UrUy"),i=a.n(r),o=a("JYC+"),l=a.n(o),c=a("R3/3"),s=a("z3IF"),u=a("LkAs"),f=a("Moms"),h=a("bMj6"),m=a("hZod"),d=a("tEuJ"),p=a("cDcd"),v=a.n(p),b=a("CXsl"),y=a("YKN3"),g=a("FdmI"),E=a.n(g),x=a("azxR"),w=a("0i/h"),N=function(e){function t(e){var a;Object(u.a)(this,t);var n=(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).props,r=n.data,i=n.width,o=n.height;return a.state={data:r,width:i,height:o},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,n=e.data;this.setState({width:t,height:a,data:n})}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.data,r=20,i={width:t-r-20,height:a-20-20},o=.6*i.width,c=o/514*64,s=.03*i.width,u=.03*i.width,f=[];JSON.parse(l()(n),function(e,t){f.push({label:e,value:t})}),console.log(f,"parsed json");var h=[n[0],n[1],n[2]],m=[n[3],{label:"empty",value:0},n[4]];return v.a.createElement("svg",{width:i.width,height:i.height,transform:"translate(".concat(r,", 0)")},v.a.createElement("g",{className:"chartBase",transform:"translate(".concat(i.width/2," , 0)")},v.a.createElement("g",{className:"topLegend"},v.a.createElement("text",{x:-o/4,y:0,alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Assets"),v.a.createElement("text",{x:o/4,y:0,alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"Total Liabilities")),v.a.createElement("g",{className:"leftLegend",transform:"translate(".concat(-i.width/2," , ").concat(s+u,")")},v.a.createElement("circle",{r:"5",cx:"35",cy:"0",fill:"#63ae2d"}),v.a.createElement("text",{x:"50",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Cash"),v.a.createElement("circle",{r:"5",cx:"35",cy:u,fill:"#ef7d00"}),v.a.createElement("text",{x:"50",y:u,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Fixed"),v.a.createElement("circle",{r:"5",cx:"35",cy:2*u,fill:"#de0730"}),v.a.createElement("text",{x:"50",y:2*u,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Goodwill")),v.a.createElement("g",{className:"rightLegend",transform:"translate(".concat(.3*i.width," , ").concat(s+u,")")},v.a.createElement("circle",{r:"5",cx:"10",cy:"0",fill:"#63ae2d"}),v.a.createElement("text",{x:"30",y:"0",textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Equity"),v.a.createElement("circle",{r:"5",cx:"10",cy:u,fill:"#de0730"}),v.a.createElement("text",{x:"30",y:u,textAnchor:"start",alignmentBaseline:"middle",style:{fontSize:14,fill:"#bdbbbc"}},"Debt")),v.a.createElement("g",{className:"chartBoard",transform:"translate(0 , ".concat(i.height-c-u,")")},v.a.createElement(O,{transX:-o/4,svgDimen:i,bar_height:i.height-c-s-u,data:h}),v.a.createElement(O,{transX:o/4,svgDimen:i,bar_height:i.height-c-s-u,data:m})),v.a.createElement("image",{href:"/static/balance.png",width:o,height:c,x:-o/2,y:i.height-c-u}),v.a.createElement("g",{className:"bottomLegend",transform:"translate(0 , ".concat(i.height-u,")")},v.a.createElement("text",{alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:16,fill:"#bdbbbc",fontWeight:"bold"}},"€ 12,2 mld"))))}}]),t}(p.Component),O=function(e){function t(e){var a;Object(u.a)(this,t);var n=(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).props,r=n.transX,i=n.bar_height,o=n.svgDimen,l=n.data;return a.state={transX:r,bar_height:i,svgDimen:o,data:l},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.drawBar()}},{key:"componentWillReceiveProps",value:function(e){var t=e.transX,a=e.svgDimen,n=e.bar_height,r=e.data;this.setState({transX:t,bar_height:n,svgDimen:a,data:r})}},{key:"componentDidUpdate",value:function(){this.drawBar()}},{key:"drawBar",value:function(){var e=this.state,t=e.svgDimen,a=e.bar_height,n=e.data,r=.25*t.width,i=a/100,o=0,l=w.select(this.el),c=["#63ae2d","#ef7d00","#de0730"];l.selectAll("*").remove();for(var s=0,u=0;u<n.length;u++)o+=n[u].value;o=100/o;for(var f=0;f<n.length;f++)n[f].value=n[f].value*o,s+=n[f].value*i;for(var h=function(e){l.append("rect").attr("x",-r/2).attr("y",function(){for(var t=0,a=0;a<e;a++)t+=n[a].value*i;return-(s-t)}).attr("width",r).attr("height",n[e].value*i).style("fill",c[e]),l.append("text").attr("x",0).attr("y",function(){for(var t=0,a=0;a<e;a++)t+=n[a].value*i;return-(s-t-n[e].value*i/2)}).attr("alignment-baseline","central").style("fill","white").style("opacity",function(){return 0===n[e].value?0:1}).style("text-anchor","middle").style("font-size",16).text(n[e].value.toFixed(2)+"%")},m=0;m<n.length;m++)h(m)}},{key:"render",value:function(){var e=this,t=this.state,a=t.transX,n=.017*t.svgDimen.width;return v.a.createElement("g",{className:"Bar",transform:"translate(".concat(a," , ").concat(n,")"),ref:function(t){return e.el=t}})}}]),t}(p.Component),j=function(e){function t(e){var a;Object(u.a)(this,t);var n=(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).props,r=n.margins,i=n.years,o=n.svgDimen,l=n.initialValue,c=n.xScale;return a.state={svgDimen:o,years:i,margins:r,initialValue:l,xScale:c},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"onMouseOver",value:function(){this.setState({handle:this.props.handle})}},{key:"componentWillReceiveProps",value:function(e){var t=e.initialValue,a=e.years,n=e.margins,r=e.svgDimen,i=e.xScale;this.setState({initialValue:t,years:a,margins:n,svgDimen:r,xScale:i})}},{key:"render",value:function(){var e=this.state,t=e.initialValue,a=e.xScale,n=this.props.handle,r=v.a.createElement("circle",{r:"10px",fill:"#de0730"}),i=v.a.createElement("text",{style:{opacity:1,fontSize:14,fill:"#de0730"}});return v.a.createElement("g",{className:n,transform:"translate(".concat(a(t),", 20)"),onMouseOver:this.onMouseOver.bind(this)},i,r)}},{key:"componentDidUpdate",value:function(e){var t,a,n=this.state,r=n.margins,i=n.svgDimen,o=n.xScale,l=n.initialValue,c=this.props,s=c.onChangeYear,u=c.handle;if(e.svgDimen.width!=this.state.svgDimen.width||e.years!=this.state.years)w.select("."+u).attr("transform","translate("+o(l)+", 20)"),w.select("."+u).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(l);else{var f=function(e){return Math.round(o.invert(e))},h=w.drag().on("start",function(){t=w.mouse(this)[0],a=f(t),w.select("."+u).attr("transform","translate("+t+", 20)"),w.select("."+u).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(a)}).on("drag",function(){t=w.mouse(this)[0],a=f(t),t>r.left&&t<i.width-r.right&&(w.select("."+u).attr("transform","translate("+t+", 20)"),w.select("."+u).select("text").attr("alignment-baseline","middle").attr("dy",-15).style("text-anchor","middle").text(a))}).on("end",function(){w.select("."+u).attr("transform","translate("+o(a)+", 20)"),s(a)});w.select(".rangeSliderGroup").call(h)}}}]),t}(p.Component),C=function(e){function t(e){var a;Object(u.a)(this,t);var n=(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).props,r=n.years,i=n.xScale;return a.state={years:r,xScale:i},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(e){var t=e.years,a=e.xScale;this.setState({years:t,xScale:a})}},{key:"renderAxis",value:function(){var e=this.state,t=e.years,a=e.xScale,n=t[0],r=t[t.length-1];w.select(this.axisElement).call(w.axisBottom().scale(a).ticks(t.length).tickFormat(w.format(""))).selectAll("text").style("opacity",function(e){return e==n||e==r?1:0}).style("font-size","14px").style("fill","black"),w.select(this.axisElement).selectAll("line").attr("stroke","white"),w.select(this.axisElement).select("path").style("d","none")}},{key:"render",value:function(){var e=this;return v.a.createElement("g",{className:"sliderAxis",transform:"translate(0,30)",ref:function(t){return e.axisElement=t}})}}]),t}(v.a.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={width:a.props.width,height:a.props.height,years:a.props.years},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,n=e.years;this.setState({width:t,height:a,years:n})}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.height,n=e.years,r=this.props.onChangeYear,i={top:20,right:50,bottom:20,left:50},o={width:t-i.left-i.right,height:a},l=v.a.createElement("rect",{rx:"5",ry:"5",y:"15",width:o.width-i.left-i.right,transform:"translate(".concat(i.left,", 0)"),height:"10",fill:"grey"}),c=n[0],s=n[n.length-1],u=w.scaleLinear().domain([c,s]).range([i.left,o.width-i.right]).clamp(!0);return v.a.createElement("svg",{className:"rangeSliderSvg",width:o.width,height:o.height,transform:"translate(".concat(i.left,", 0)")},v.a.createElement("g",{className:"rangeSliderGroup",transform:"translate(0, ".concat(o.height-i.bottom-40,")")},l,v.a.createElement(C,{years:n,xScale:u}),v.a.createElement(j,{onChangeYear:r,handle:"handle",initialValue:c,years:n,margins:i,svgDimen:o,xScale:u})))}}]),t}(p.Component),S=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(h.a)(this,Object(m.a)(t).call(this,e)),Object(x.a)(Object(y.a)(Object(y.a)(a)),"handleChangeYear",function(e){for(var t=a.state.data,n=0;n<t.length;n++)if(t[n].year===e){a.setState({balanceChartData:t[n]});break}});var n=a.props,r=n.data,i=n.width,o=n.height;return a.state={data:r,sliderData:a.parseYear(r),balanceChartData:r[0],width:i,height:o},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data,a=e.width,n=e.height;this.setState({sliderData:this.parseYear(t),balanceChartData:t[0],data:t,width:a,height:n})}},{key:"parseYear",value:function(e){return e.map(function(e){return E()(e.Date.split("-")[0])}).sort(w.ascending)}},{key:"render",value:function(){return v.a.createElement("div",{className:"timeslidercharts"},v.a.createElement("div",{className:"rangeSlider"},v.a.createElement(k,{onChangeYear:this.handleChangeYear,width:this.state.width,height:this.state.height/6,years:this.state.sliderData})),v.a.createElement("div",{className:"balanceChart"},v.a.createElement(N,{width:this.state.width,height:5*this.state.height/6,data:this.state.balanceChartData})))}}]),t}(p.Component),D=function(e){function t(e){var a;Object(u.a)(this,t);var n=(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).props,r=n.parentWidth,i=n.parentHeight,o=n.data;return a.state={data:o,width:r>650?650:Math.max(r,480),height:Math.max(i,400)},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.parentWidth,a=e.parentHeight,n=e.data;this.setState({data:n,width:t>650?650:Math.max(t,480),height:Math.max(a,400)})}},{key:"render",value:function(){return v.a.createElement(p.Fragment,null,v.a.createElement(S,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(p.Component),_=(n=D,function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return v.a.createElement(n,Object(s.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return v.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(p.Component)),P=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session,a=(e.navMenu,e.data);return console.log(a,"from first"),v.a.createElement(b.a,Object(s.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),v.a.createElement("div",{className:"content"},v.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),v.a.createElement("p",null,"The Coca-Cola Company is an American ...."),v.a.createElement(_,{data:a[0].last5AnnualTotals})))}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(i.a.mark(function e(t){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,n=a?a.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:l()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            last5AnnualTotals {\n              Date\n              TotalLiabilitiesStockholdersEquity\n              TotalEquity\n              TotalLiabilities\n              TotalCash\n              NonCurrentAssetsNoGoodwill\n              CurrentAssetsNoCash\n              Goodwill\n            } \n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return[e.data.security]});case 4:return r=e.sent,e.abrupt("return",{userAgent:n,data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.Component);t.default=P},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},wa65:function(e,t){e.exports=require("core-js/library/fn/parse-int")},z3IF:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("U8Yc"),r=a.n(n);function i(){return(i=r.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}}});