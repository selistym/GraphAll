(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+TSP":function(e,t,n){e.exports=window.fetch||(window.fetch=n("CJ1a").default||n("CJ1a"))},CJ1a:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,s=[],o=[],u={},c=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:c,headers:{keys:function(){return s},entries:function(){return o},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var i in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){s.push(t=t.toLowerCase()),o.push([t,n]),u[t]=u[t]?u[t]+","+n:n}),n(c())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(i,t.headers[i]);a.send(t.body||null)})}},gryE:function(e,t,n){"use strict";n.r(t);var r=n("UrUy"),a=n.n(r),s=n("JYC+"),o=n.n(s),u=n("R3/3"),c=n("z3IF"),i=n("LkAs"),l=n("Moms"),d=n("bMj6"),f=n("hZod"),p=n("tEuJ"),h=n("mXGw"),m=n.n(h),g=n("+TSP"),b=n.n(g),w=n("U8Yc"),v=n.n(w),E=n("8ET1"),y=n.n(E),x=n("t1Qi");var j=function(e){var t=e.data,n=Object(h.useRef)(null),r=30,a=x.n(t,function(e){return x.n(e.globalQuotes,function(e){return Math.abs(e.close)})}),s=Date.parse(t[0].globalQuotes[0].date),o=Date.parse(t[0].globalQuotes[t[0].globalQuotes.length-1].date),u=function(e){return x.v[11][e+(e>=0)+5]},c=x.u().domain([s,o]).range([0,1344]),i=x.s().domain([-a,+a]).range([195,-195]),l=x.f(c).ticks(16.8).tickSizeOuter(0),d=x.b().curve(x.h).defined(function(e){return!isNaN(e.close)}).x(function(e){return c(Date.parse(e.date))}).y0(0).y1(function(e){return i(e.close)});return Object(h.useEffect)(function(){x.w(n.current).call(l)}),m.a.createElement("svg",{width:1344,height:300},m.a.createElement("g",null,t.map(function(e,t){var n=y()({length:10},function(t,n){return v()({index:n<5?-n-1:n-5},e)});return m.a.createElement("g",{transform:"translate(0,".concat(40*t+r,")")},m.a.createElement("clipPath",{id:"clip".concat(t)},m.a.createElement("rect",{width:1344,height:39})),m.a.createElement("defs",null,m.a.createElement("path",{id:"path"+t,d:d(e.globalQuotes)})),m.a.createElement("g",{clipPath:"url(#clip".concat(t,")")},n.map(function(e){return m.a.createElement("use",{fill:u(e.index),transform:e.index<0?"scale(1,-1) translate(0,".concat(39*e.index,")"):"translate(0,".concat(39*(e.index+1),")"),xlinkHref:"#path".concat(t)})})),m.a.createElement("text",{x:4,y:19.5,dy:"0.35em"},e.ticker))}),m.a.createElement("g",{ref:n,transform:"translate(0,".concat(r,")")})))},k=n("CXsl"),O=function(e){function t(){return Object(i.default)(this,t),Object(d.default)(this,Object(f.default)(t).apply(this,arguments))}return Object(p.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.session,n=(e.navMenu,e.data),r=n[0];return m.a.createElement(k.a,Object(c.a)({},this.props,{title:"VEB - ".concat(r.name),description:r.name,session:t,navMenu:!0,signinBtn:!0}),m.a.createElement("div",{className:"content"},m.a.createElement("h2",null,"Key figures ",r.name," (",r.ticker,")"),m.a.createElement("p",null,r.longBusinessDescription)),m.a.createElement("hr",null),m.a.createElement(j,{data:n}))}}],[{key:"getInitialProps",value:function(){var e=Object(u.default)(a.a.mark(function e(t){var n,r,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,r=n?n.headers["user-agent"]:navigator.userAgent,e.next=4,b()("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:o()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            longBusinessDescription\n            ticker\n            globalQuotes {\n              date\n              close\n            }\n          }\n        }'})}).then(function(e){return e.json()}).then(function(e){return console.log(e.data.security),[e.data.security]});case 4:return s=e.sent,e.abrupt("return",{userAgent:r,data:s});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.Component);t.default=O},rw6m:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/horizon",function(){var e=n("gryE");return{page:e.default||e}}])}},[["rw6m",1,0]]]);