!function(e){function t(t){for(var a,s,l=t[0],c=t[1],i=t[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={0:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=c;o.push([50,1]),r()}([,,,,,,,,,function(e,t,r){"use strict";(function(e){var a;r.d(t,"f",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return d})),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,o,s=function(e){return{type:"SET_FAVORITE",payload:e}},l=function(e){return{type:"DELETE_FAVORITE",payload:e}},c=function(e){return{type:"LOGIN_REQUEST",payload:e}},i=function(e){return{type:"LOGOUT_REQUEST",payload:e}},u=function(e){return{type:"REGISTER_REQUEST",payload:e}},d=function(e){return{type:"GET_VIDEO_SOURCE",payload:e}};(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(s,"setFavorite","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/actions/index.js"),n.register(l,"deleteFavorite","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/actions/index.js"),n.register(c,"loginRequest","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/actions/index.js"),n.register(i,"logoutRequest","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/actions/index.js"),n.register(u,"registerRequest","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/actions/index.js"),n.register(d,"getVideoSource","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/actions/index.js")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,r(3)(e))},,function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(5),l=r(10),c=r(19),i=r.n(c),u=r(34),d=r(9),f=(r(61),r(36)),p=r.n(f),m=r(37),j=r.n(m);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var _,b,v=function(e){var t=e.user,r=e.isLogin,a=e.isRegister,n=Object.keys(t).length>0,s=i()("header",{isLogin:r,isRegister:a});return o.a.createElement("header",{className:s},o.a.createElement(l.b,{to:"/"},o.a.createElement("img",{className:"header__img",src:p.a,alt:"Platzi Video"})),o.a.createElement("div",{className:"header__menu"},o.a.createElement("div",{className:"header__menu--profile"},n?o.a.createElement("img",{src:Object(u.a)(t.email),alt:t.email}):o.a.createElement("img",{src:j.a,alt:""}),o.a.createElement("p",null,"Perfil")),o.a.createElement("ul",null,n?o.a.createElement("li",null,o.a.createElement("a",{href:"/"},t.name)):null,n?o.a.createElement("li",null,o.a.createElement("a",{href:"#logout",onClick:function(){e.logoutRequest({})}},"Cerrar Sesión")):o.a.createElement("li",null,o.a.createElement(l.b,{to:"/login"},"Iniciar sesión")))))},y=function(e){return{user:e.user}},g={logoutRequest:d.d},h=Object(s.b)(y,g)(v);t.a=h,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(v,"Header","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Header.jsx"),_.register(y,"mapStateToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Header.jsx"),_.register(g,"mapDispatchToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Header.jsx"),_.register(h,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Header.jsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(3)(e))},,,,,,,,,function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,c=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"No Encontrado"),o.a.createElement("h2",null,"Regresa al Home"))},i=c;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"NotFound","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/NotFound.jsx"),s.register(i,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/NotFound.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n);r(64);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,c=function(e){var t=e.children,r=e.title;return o.a.createElement("div",{className:"categories"},o.a.createElement("h3",{className:"categories__title"},r),t)},i=c;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"Categories","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Categories.jsx"),s.register(i,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Categories.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n);r(65);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,c=function(e){var t=e.children;return o.a.createElement("section",{className:"carousel"},o.a.createElement("div",{className:"carousel__container"},t))},i=c;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"Carousel","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Carousel.jsx"),s.register(i,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Carousel.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(5),l=r(8),c=r.n(l),i=r(10),u=r(9),d=(r(66),r(39)),f=r.n(d),p=r(40),m=r.n(p),j=r(41),_=r.n(j);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b=function(e){var t=e.id,r=e.cover,a=e.title,n=e.year,s=e.contentRating,l=e.duration,c=e.isList;return o.a.createElement("div",{className:"carousel-item"},o.a.createElement("img",{className:"carousel-item__img",src:r,alt:a}),o.a.createElement("div",{className:"carousel-item__details"},o.a.createElement("div",null,o.a.createElement(i.b,{to:"/player/".concat(t)},o.a.createElement("img",{className:"carousel-item__details--img",src:f.a,alt:"Play Icon"})),c?o.a.createElement("img",{className:"carousel-item__details--img",src:_.a,alt:"Plus Icon",onClick:function(){return r=t,void e.deleteFavorite(r);var r}}):o.a.createElement("img",{className:"carousel-item__details--img",src:m.a,alt:"Plus Icon",onClick:function(){e.setFavorite({id:t,cover:r,title:a,year:n,contentRating:s,duration:l})}})),o.a.createElement("p",{className:"carousel-item__details--title"},a),o.a.createElement("p",{className:"carousel-item__details--subtitle"},"".concat(n," ").concat(s," ").concat(l))))};b.propTypes={cover:c.a.string,title:c.a.string,year:c.a.number,contentRating:c.a.string,duration:c.a.number};var v,y,g={setFavorite:u.f,deleteFavorite:u.a},h=Object(s.b)(null,g)(b);t.a=h,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(b,"CarouselItem","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/CarouselItem.jsx"),v.register(g,"mapDispatchToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/CarouselItem.jsx"),v.register(h,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/CarouselItem.jsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,r(3)(e))},,,,,,,,function(e,t,r){"use strict";(function(e){var r;function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,i,u=function(e,t){switch(t.type){case"SET_FAVORITE":return s(s({},e),{},{myList:[].concat(a(e.myList),[t.payload])});case"DELETE_FAVORITE":return s(s({},e),{},{myList:e.myList.filter((function(e){return e.id!==t.payload}))});case"LOGIN_REQUEST":case"LOGOUT_REQUEST":case"REGISTER_REQUEST":return s(s({},e),{},{user:t.payload});case"GET_VIDEO_SOURCE":return s(s({},e),{},{playing:e.trends.find((function(e){return e.id===Number(t.payload)}))||e.originals.find((function(e){return e.id===Number(t.payload)}))||[]});default:return e}},d=u;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(u,"reducer","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/reducers/index.js"),c.register(d,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/reducers/index.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(10),l=r(2),c=r(33),i=r(42),u=r(45),d=r(20),f=r(46),p=r(47);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,j,_=function(){return o.a.createElement(s.a,null,o.a.createElement(p.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:c.a}),o.a.createElement(l.a,{exact:!0,path:"/login",component:i.a}),o.a.createElement(l.a,{exact:!0,path:"/register",component:u.a}),o.a.createElement(l.a,{exact:!0,path:"/player/:id",component:f.a}),o.a.createElement(l.a,{component:d.a}))))},b=_;t.a=b,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(_,"App","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/routes/App.js"),m.register(b,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/routes/App.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(5),l=r(11),c=r(38),i=r(21),u=r(22),d=r(23);r(67),r(68);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,m,j=function(e){var t=e.myList,r=e.trends,a=e.originals;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null),o.a.createElement(c.a,{isHome:!0}),t.length>0&&o.a.createElement(i.a,{title:"Mi Lista"},o.a.createElement(u.a,null,t.map((function(e){return o.a.createElement(d.a,f({key:e.id},e,{isList:!0}))})))),o.a.createElement(i.a,{title:"Tendencias"},o.a.createElement(u.a,null,r.map((function(e){return o.a.createElement(d.a,f({key:e.id},e))})))),o.a.createElement(i.a,{title:"Originales de Platzi Video"},o.a.createElement(u.a,null,a.map((function(e){return o.a.createElement(d.a,f({key:e.id},e))})))))},_=function(e){return{myList:e.myList,trends:e.trends,originals:e.originals}},b=Object(s.b)(_,null)(j);t.a=b,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(j,"Home","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Home.jsx"),p.register(_,"mapStateToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Home.jsx"),p.register(b,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Home.jsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(35),o=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,c=function(e){var t=e.trim().toLowerCase(),r=o()(t,{encoding:"binary"});return"".concat("https://gravatar.com/avatar/").concat(r)},i=c;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"gravatar","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/utils/gravatar.js"),s.register(i,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/utils/gravatar.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(3)(e))},,function(e,t,r){e.exports=r.p+"assets/7104263cc7ae188d7e1275934c32a378.png"},function(e,t,r){e.exports=r.p+"assets/5a89d07e023cabc9bd46b8ef3e33b9c3.png"},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(19),l=r.n(s);r(63);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,i,u=function(e){var t=e.isHome,r=l()("input",{isHome:t});return o.a.createElement("section",{className:"main"},o.a.createElement("h2",{className:"main__title"},"¿Qué quieres ver hoy?"),o.a.createElement("input",{type:"text",className:r,placeholder:"Buscar..."}))},d=u;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(u,"Search","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Search.jsx"),c.register(d,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Search.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},function(e,t,r){e.exports=r.p+"assets/9a1e4bf4f3cb0556c15a96c17808dbf7.png"},function(e,t,r){e.exports=r.p+"assets/82e73f0c9de0d9e64a4f7eb6917fe799.png"},function(e,t,r){e.exports=r.p+"assets/1baf6f54be269d1d45a5ebb09a788ded.png"},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(5),l=r(10),c=r(9),i=r(11),u=(r(69),r(43)),d=r.n(u),f=r(44),p=r.n(f);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e){var t=b(Object(n.useState)({email:""}),2),r=t[0],a=t[1],s=function(e){a(j(j({},r),{},_({},e.target.name,e.target.value)))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{isLogin:!0}),o.a.createElement("section",{className:"login"},o.a.createElement("section",{className:"login__container"},o.a.createElement("h2",null,"Inicia sesión"),o.a.createElement("form",{className:"login__container--form",onSubmit:function(t){t.preventDefault(),e.loginRequest(r),e.history.push("/")}},o.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:s}),o.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:s}),o.a.createElement("button",{className:"button"},"Iniciar sesión"),o.a.createElement("div",{className:"login__container--remember-me"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",id:"cbox1",value:"first_checkbox"})," Recuérdame"),o.a.createElement("a",{href:"/"},"Olvidé mi contraseña"))),o.a.createElement("section",{className:"login__container--social-media"},o.a.createElement("div",null,o.a.createElement("img",{src:d.a})," Inicia sesión con Google"),o.a.createElement("div",null,o.a.createElement("img",{src:p.a})," Inicia sesión con Twitter")),o.a.createElement("p",{className:"login__container--register"},"No tienes ninguna cuenta "," ",o.a.createElement(l.b,{to:"/register"},"Regístrate")))))};y(g,"useState{[form, setValues]({\n    email: '',\n  })}");var h,L,E={loginRequest:c.c},H=Object(s.b)(null,E)(g);t.a=H,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(g,"Login","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Login.jsx"),h.register(E,"mapDispatchToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Login.jsx"),h.register(H,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Login.jsx")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}).call(this,r(3)(e))},function(e,t,r){e.exports=r.p+"assets/87fee39f3ffc377fa871d31587cc532c.png"},function(e,t,r){e.exports=r.p+"assets/0103ef81347edc3344acec319325eb81.png"},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(5),l=r(11),c=r(9),i=r(10);r(70);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},_=function(e){var t=p(Object(n.useState)({email:"",name:"",password:""}),2),r=t[0],a=t[1],s=function(e){a(d(d({},r),{},f({},e.target.name,e.target.value)))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{isRegister:!0}),o.a.createElement("section",{className:"register"},o.a.createElement("section",{className:"register__container"},o.a.createElement("h2",null,"Regístrate"),o.a.createElement("form",{className:"register__container--form",onSubmit:function(t){t.preventDefault(),e.registerRequest(r),e.history.push("/")}},o.a.createElement("input",{name:"name",className:"input",type:"text",placeholder:"Nombre",onChange:s}),o.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:s}),o.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:s}),o.a.createElement("button",{className:"button"},"Registrarme")),o.a.createElement(i.b,{to:"/login"},"Iniciar sesión"))))};j(_,"useState{[form, setValues]({\n    email: '',\n    name: '',\n    password: '',\n  })}");var b,v,y={registerRequest:c.e},g=Object(s.b)(null,y)(_);t.a=g,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(_,"Register","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Register.jsx"),b.register(y,"mapDispatchToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Register.jsx"),b.register(g,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Register.jsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=r(5),l=r(9),c=(r(71),r(20));(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(e){var t=e.match.params.id,r=Object.keys(e.playing).length>0;return Object(n.useEffect)((function(){e.getVideoSource(t)}),[]),r?o.a.createElement("div",{className:"Player"},o.a.createElement("video",{controls:!0,autoPlay:!0},o.a.createElement("source",{src:e.playing.source,type:"video/mp4"})),o.a.createElement("div",{className:"Player-back"},o.a.createElement("button",{type:"button",onClick:function(){return e.history.goBack()}},"Regresar"))):o.a.createElement(c.a,null)};i(u,"useEffect{}");var d,f,p=function(e){return{playing:e.playing}},m={getVideoSource:l.b},j=Object(s.b)(p,m)(u);t.a=j,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"Player","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Player.jsx"),d.register(p,"mapStateToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Player.jsx"),d.register(m,"mapDispatchToProps","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Player.jsx"),d.register(j,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/containers/Player.jsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),s=(r(11),r(48));(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(e){var t=e.children;return o.a.createElement("div",{className:"App"},t,o.a.createElement(s.a,null))},u=i;t.a=u,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"Layout","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Layout.jsx"),l.register(u,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Layout.jsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(3)(e))},function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n);r(72);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,c=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("a",{href:"/"},"Terminos de uso"),o.a.createElement("a",{href:"/"},"Declaración de privacidad"),o.a.createElement("a",{href:"/"},"Centro de ayuda"))},i=c;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"Footer","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Footer.jsx"),s.register(i,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/components/Footer.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(3)(e))},,function(e,t,r){e.exports=r(51)},function(e,t,r){"use strict";r.r(t),function(e){var t,a=r(0),n=r.n(a),o=r(17),s=r.n(o),l=r(5),c=r(16),i=r(49),u=r(2),d=r(31),f=r(32);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,m,j=window.__PRELOADED_STATE__,_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.b,b=Object(c.c)(d.a,j,_()),v=Object(i.a)();delete window.__PRELOADED_STATE__,s.a.hydrate(n.a.createElement(l.a,{store:b},n.a.createElement(u.b,{history:v},n.a.createElement(f.a,null))),document.getElementById("app")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(j,"preloadedState","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/index.js"),p.register(_,"composeEnhancers","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/index.js"),p.register(b,"store","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/index.js"),p.register(v,"history","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/index.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,r(3)(e))},,,,,,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";(function(e){var t,a=r(0);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},l=function(e){var t=n(Object(a.useState)([]),2),r=t[0],o=t[1];return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),r};s(l,"useState{[ videos, setVideos ]([])}\nuseEffect{}");var c,i,u=l;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"useInitialState","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/hooks/useInitialState.js"),c.register(u,"default","/home/juan/juan/projects/platzi/12_curso_server_side_render_js/js-ssr/src/frontend/hooks/useInitialState.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(3)(e))},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){}]);