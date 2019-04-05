module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}},o=!0;try{e[a].call(r.exports,r,r.exports,n),o=!1}finally{o&&delete t[a]}return r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),o=a(n("KBEF")),i=a(n("J/q3")),l=a(n("3esu")),c=a(n("8m4E")),u=a(n("Od8a")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=s(n("cDcd")),p=f(n("rf6O")),d=f(n("GeWT")),h=n("p8BD");t.default=function(e){var t=h.getDisplayName(e),n=function(t){function n(){return(0,o.default)(this,n),(0,l.default)(this,(0,c.default)(n).apply(this,arguments))}return(0,u.default)(n,t),(0,i.default)(n,[{key:"render",value:function(){return m.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),n}(m.Component);return n.contextTypes={router:p.default.object},n.displayName="withRouter(".concat(t,")"),d.default(n,e)}},"0i/h":function(e,t){e.exports=require("d3")},"3esu":function(e,t,n){var a=n("NluH"),r=n("oS/Z");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},4:function(e,t,n){e.exports=n("rXUM")},"5dyF":function(e,t,n){e.exports=n("9CGT")},"6Ndq":function(e,t,n){e.exports=n("o5io")},"7mTa":function(e,t,n){e.exports=n("aAV7")},"8m4E":function(e,t,n){var a=n("jDdP"),r=n("OKNm");function o(t){return e.exports=o=r?a:function(e){return e.__proto__||a(e)},o(t)}e.exports=o},"9CGT":function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("JYC+")),o=a(n("NluH")),i=a(n("KBEF")),l=a(n("J/q3")),c=a(n("3esu")),u=a(n("8m4E")),s=a(n("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},m=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("bzos"),d=f(n("cDcd")),h=(m(n("rf6O")),f(n("dAGg"))),v=n("p8BD");var b=function(e){function t(){var e,n,a,r,l;return(0,i.default)(this,t),(e=(0,c.default)(this,(0,u.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:e&&"object"===(0,o.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,o.default)(t)?v.formatWithValidation(t):t}},a=null,r=null,l=null,function(e,t){if(e===a&&t===r)return l;var o=n(e,t);return a=e,r=t,l=o,o}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=p.resolve(c,i),l=l?p.resolve(c,l):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=l.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),d.default.cloneElement(o,i)}}]),t}(d.Component);t.default=b},CXsl:function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),o=n("U7sd"),i=n.n(o),l=(n("rf6O"),function(e){return r.a.createElement(i.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),c=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},u=n("5dyF"),s=n.n(u),f=n("dAGg"),m=n("LkAs"),p=n("Moms"),d=n("bMj6"),h=n("hZod"),v=n("tEuJ"),b=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(s.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),y=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,n=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{session:t,signinBtn:n}))))))});n("aieD"),t.a=function(e){var t=e.title,n=e.description,a=e.session,o=e.children,i=e.navMenu,u=e.signinBtn;return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(l,{title:t,description:n}),i&&r.a.createElement(y,{session:a,signinBtn:u}),i&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},n.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},o),i&&r.a.createElement(c,null))}},GeWT:function(e,t,n){"use strict";var a=n("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={};i[a.ForwardRef]={$$typeof:!0,render:!0};var l=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,a){if("string"!=typeof n){if(m){var p=f(n);p&&p!==m&&e(t,p,a)}var d=c(n);u&&(d=d.concat(u(n)));for(var h=i[t.$$typeof]||r,v=i[n.$$typeof]||r,b=0;b<d.length;++b){var y=d[b];if(!(o[y]||a&&a[y]||v&&v[y]||h&&h[y])){var E=s(n,y);try{l(t,y,E)}catch(e){}}}return t}return t}},"J/q3":function(e,t,n){var a=n("hHgk");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"JYC+":function(e,t,n){e.exports=n("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},Moms:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("hHgk"),r=n.n(a);function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),r()(e,a.key,a)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},NluH:function(e,t,n){var a=n("t+lh"),r=n("XzKa");function o(e){return(o="function"==typeof r&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof r&&"symbol"===o(a)?e.exports=i=function(e){return o(e)}:e.exports=i=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":o(e)},i(t)}e.exports=i},OKNm:function(e,t,n){e.exports=n("Wk4r")},Od8a:function(e,t,n){var a=n("6Ndq"),r=n("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"R3/3":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("ZOIa"),r=n.n(a);function o(e,t,n,a,o,i,l){try{var c=e[i](l),u=c.value}catch(e){return void n(e)}c.done?t(u):r.a.resolve(u).then(a,o)}function i(e){return function(){var t=this,n=arguments;return new r.a(function(a,r){var i=e.apply(t,n);function l(e){o(i,a,r,l,c,"next",e)}function c(e){o(i,a,r,l,c,"throw",e)}l(void 0)})}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,n){e.exports=n("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},UrUy:function(e,t,n){e.exports=n("cu1A")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,n){e.exports=n("vqFK")},YKN3:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},ZOIa:function(e,t,n){e.exports=n("aC71")},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},aieD:function(e,t){},bBV7:function(e,t,n){"use strict";var a=n("PL1w"),r=a(n("U8Yc")),o=a(n("NluH")),i=a(n("ied0")),l=a(n("hHgk")),c=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=c(n("qxCs")),s={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],m=["components"],p=["push","replace","reload","back","prefetch","beforePopState"];function d(){if(!s.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(s,"events",{get:function(){return u.default.events}}),m.concat(f).forEach(function(e){(0,l.default)(s,e,{get:function(){return d(),s.router[e]}})}),p.forEach(function(e){s[e]=function(){var t;return d(),(t=s.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){s.ready(function(){u.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(s[t])try{s[t].apply(s,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=s;var h=n("/3ze");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.router=(0,i.default)(u.default,t),s.readyCallbacks.forEach(function(e){return e()}),s.readyCallbacks=[],s.router},t.Router=u.default,t.makePublicRouterInstance=function(e){for(var t={},n=0;n<f.length;n++){var a=f[n];"object"!==(0,o.default)(e[a])?t[a]=e[a]:t[a]=(0,r.default)({},e[a])}return t.events=u.default.events,m.forEach(function(n){(0,l.default)(t,n,{get:function(){return e[n]}})}),p.forEach(function(n){t[n]=function(){return e[n].apply(e,arguments)}}),t}},bMj6:function(e,t,n){"use strict";var a=n("t+lh"),r=n.n(a),o=n("XzKa"),i=n.n(o);function l(e){return(l="function"==typeof i.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"==typeof i.a&&"symbol"===l(r.a)?function(e){return l(e)}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":l(e)})(e)}var u=n("YKN3");function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?Object(u.a)(e):t}n.d(t,"a",function(){return s})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},dAGg:function(e,t,n){e.exports=n("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,n){var a=n("OKNm");function r(t,n){return e.exports=r=a||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,n){e.exports=n("TUA0")},hZod:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("jDdP"),r=n.n(a),o=n("OKNm"),i=n.n(o);function l(e){return(l=i.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,n){var a=n("7mTa"),r=n("g9SA");function o(t,n,i){return!function(){if("undefined"==typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o}:e.exports=o=a,o.apply(null,arguments)}e.exports=o},jDdP:function(e,t,n){e.exports=n("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rXUM:function(e,t,n){"use strict";n.r(t);var a,r=n("UrUy"),o=n.n(r),i=n("JYC+"),l=n.n(i),c=n("R3/3"),u=n("z3IF"),s=n("LkAs"),f=n("Moms"),m=n("bMj6"),p=n("hZod"),d=n("tEuJ"),h=n("cDcd"),v=n.n(h),b=n("CXsl"),y=n("YKN3"),E=n("0i/h"),g=function(e){function t(e){var n;Object(s.a)(this,t);var a=(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).props,r=a.width,o=a.height,i=a.data,l=a.dataRange,c={width:r-20-20,height:o-0-0};return i[0].value>l.max?i[0].value=l.max:i[0].value<l.min&&(i[0].value=l.min),i[1].value>l.max?i[1].value=l.max:i[1].value<l.min&&(i[1].value=l.min),i[2].value>l.max?i[2].value=l.max:i[2].value<l.min&&(i[2].value=l.min),i[0].value=i[0].value-l.min,i[1].value=i[1].value-l.min,i[2].value=i[2].value-l.min,null==i[0].value&&(i[0].value=l.min),null==i[1].value&&(i[1].value=l.min),null==i[2].value&&(i[2].value=l.min),n.state={svgDimen:c,data:i,dataRange:l},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,n=e.height,a=e.data,r=e.dataRange,o={width:t-20-20,height:n-0-0};a[0].value>r.max?a[0].value=r.max:a[0].value<r.min&&(a[0].value=r.min),a[1].value>r.max?a[1].value=r.max:a[1].value<r.min&&(a[1].value=r.min),a[2].value>r.max?a[2].value=r.max:a[2].value<r.min&&(a[2].value=r.min),a[0].value=a[0].value-r.min,console.log(a[0].value),a[1].value=a[1].value-r.min,a[2].value=a[2].value-r.min,null==a[0].value&&(a[0].value=r.min),null==a[1].value&&(a[1].value=r.min),null==a[2].value&&(a[2].value=r.min),this.setState({svgDimen:o,data:a,dataRange:r})}},{key:"componentDidMount",value:function(){this.drawChart()}},{key:"componentDidUpdate",value:function(){this.drawChart()}},{key:"formatData",value:function(){}},{key:"drawChart",value:function(){var e=this.state,t=e.svgDimen,n=e.data,a=e.dataRange,r=60,o=60,i=Math.min((.9*t.width-o-r)/2,t.height/2),l=i-2*i/5,c=.15*i,u=Math.PI,s=u/2,f=u/2,m=-f,p=E.range(m,f,u/100),d=E.scaleLinear().domain([0,100]).range([m,f]),h=Math.abs(a.max-a.min),v=100/h,b=E.scaleLinear().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,h/2,h]);b=1==a.direction?E.scaleLinear().range(["#e2062a","#ee7e00","#66ad2b"]).domain([0,h/2,h]):E.scaleLinear().range(["#66ad2b","#ee7e00","#e2062a"]).domain([0,h/2,h]),E.select(this.el).selectAll("*").remove();var y=E.arc().innerRadius(i-i/5).outerRadius(i).startAngle(function(e,t){return d(t)}).endAngle(function(e,t){return d(t+1)});E.select(this.el).append("g").selectAll("path").data(p).enter().append("path").attr("stroke",function(e,t){return t+1<=n[0].value*v?b(n[0].value):"#e4e7ec"}).attr("fill",function(e,t){return t+1<=n[0].value*v?b(n[0].value):"#e4e7ec"}).attr("d",y),E.select(this.el).append("path").attr("class","needle").attr("d",function(e){var t=d(n[0].value*v)-s,a=t-s,r=t+s,o=l*Math.cos(t),i=l*Math.sin(t),u=c*Math.cos(a);return"M "+o+" "+i+" L "+u+" "+c*Math.sin(a)+" A "+u+" "+u+" 1 0 0 "+c*Math.cos(r)+" "+c*Math.sin(r)+" Z"}).attr("fill",b(n[0].value));var g=d.ticks(100);E.select(this.el).append("g").attr("class","label").selectAll("text.label").data(g).enter().append("text").attr("transform",function(e){var t=d(e)-s;return"translate("+(i+10)*Math.cos(t)+","+(i+10)*Math.sin(t)+")"}).style("text-anchor",function(e){return e<50?"end":"start"}).style("font-size",.05*t.width).attr("fill","#929292").text(function(e){return e===Math.floor(n[1].value*v)?"Branche":e===Math.floor(n[2].value*v)?"Market":""}),E.select(this.el).append("g").attr("class","marker").selectAll("path.marker").data(g).enter().append("path").style("stroke","#929292").style("stroke-width",function(e){return e===Math.floor(n[1].value*v)?6:e===Math.floor(n[2].value*v)?6:0}).attr("d",function(e){var t=d(e)-s;return"M "+(i+5)*Math.cos(t)+" "+(i+5)*Math.sin(t)+" L "+(4*i/5-5)*Math.cos(t)+" "+(4*i/5-5)*Math.sin(t)+" Z"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.svgDimen,a=t.data,r=t.dataRange,o=100/Math.abs(r.max-r.min);return v.a.createElement("svg",{width:n.width,height:n.height},v.a.createElement("g",{width:n.width,className:"gaugeChart",transform:"translate(".concat(n.width/2,", ").concat(.6*n.height,")"),ref:function(t){return e.el=t}}),v.a.createElement("g",{className:"legendBottom",transform:"translate(".concat(n.width/2,", ").concat(7*n.height/8,")")},v.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"baseline",textAnchor:"middle",style:{fontSize:.06*n.width,fill:"#929292"}},a[0].value*o==0?a[0].value*o:(a[0].value*o).toFixed(2),"%"),v.a.createElement("text",{x:"0",y:"10",alignmentBaseline:"hanging",textAnchor:"middle",style:{fontSize:.05*n.width,fill:"#929292"}},r.title)))}}]),t}(h.Component),x=[{title:"PE-ratio",min:0,max:40,direction:0},{title:"ROIC",min:0,max:.5,direction:1},{title:"Return on equity",min:0,max:.5,direction:1},{title:"Revenue Growth",min:-30,max:60,direction:1},{title:"N.t.b",min:0,max:4,direction:0},{title:"N.t.b",min:0,max:4,direction:1}],w=function(e){function t(e){var n;Object(s.a)(this,t);var a=(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).props,r=(a.parentWidth,a.parentHeight,a.data);return n.state={data:r,dataRange:x,width:350,height:300},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.parentWidth,e.parentHeight;var t=e.data;this.setState({data:t,dataRange:x,width:350,height:300})}},{key:"render",value:function(){var e=this,t=this.state.data,n=[],a=[],r=1;return JSON.parse(l()(t),function(e,t){n.push({label:e,value:t}),r%3==0&&(a.push(n),n=[]),r++}),v.a.createElement(h.Fragment,null,a.map(function(t,n){return v.a.createElement(g,{key:n,data:t,dataRange:x[n],width:e.state.width,height:e.state.height})}))}}]),t}(h.Component),N=(a=w,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},n.fitParentContainer=n.fitParentContainer.bind(Object(y.a)(Object(y.a)(n))),n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,n=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:n}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return v.a.createElement(a,Object(u.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return v.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(h.Component)),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session,n=(e.navMenu,e.data);return console.log(n[0].calculated),v.a.createElement(b.a,Object(u.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),v.a.createElement("div",{className:"content"},v.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),v.a.createElement("p",null,"The Coca-Cola Company is an American ...."),v.a.createElement(N,{data:n[0].calculated})))}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(o.a.mark(function e(t){var n,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=n?n.headers["user-agent"]:navigator.userAgent,e.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:l()({operationName:null,variables:{},query:'\n        {\n          security(id: "xgfr4") {\n            id\n            name\n            calculated {\n              PERatioCompany\n              PERatioBranche\n              PERatioMarket\n              ROICCompany\n              ROICBranche\n              ROICMarket\n              ROECompany\n              ROEBranche\n              ROEMarket\n              RevenueGrowthCompany\n              RevenueGrowthBranche\n              RevenueGrowthMarket\n              DebtRatioCompany\n              DebtRatioBranche\n              DebtRatioMarket\n              NettDEBTEBITDACompany\n              NettDEBTEBITDABranche\n              NettDEBTEBITDAMarket\n              }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return console.log(e.data.security),[e.data.security]});case 4:return r=e.sent,e.abrupt("return",{userAgent:a,data:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=O},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,n){e.exports=n("gHn/")},tEuJ:function(e,t,n){"use strict";var a=n("6Ndq"),r=n.n(a),o=n("OKNm"),i=n.n(o);function l(e,t){return(l=i.a||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}n.d(t,"a",function(){return c})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("U8Yc"),r=n.n(a);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}}});