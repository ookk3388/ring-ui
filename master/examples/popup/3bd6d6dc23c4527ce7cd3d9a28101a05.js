!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1065)}({10:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1065:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function s(n,e){return!e||"object"!==o(e)&&"function"!=typeof e?f(n):e}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&l(n,e)}function l(n,e){return(l=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function f(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}Object.defineProperty(e,"__esModule",{value:!0});var d=t(5),h=(t.n(d),t(4)),b=(t.n(h),t(6)),g=(t.n(b),t(9)),y=(t.n(g),t(12)),m=(t.n(y),t(3)),v=t.n(m),T=t(20),O=(t.n(T),t(11)),_=t.n(O),w=t(195),x=w.a.PopupProps.Directions,E={topLeft:x.BOTTOM_RIGHT,topRight:x.BOTTOM_LEFT,bottomLeft:x.TOP_RIGHT,bottomRight:x.TOP_LEFT},S=Object.keys(E),C=S.reduce(function(n,e){return n[e]=!0,n},{}),k=function(n){function e(){var n,t;r(this,e);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=s(this,(n=c(e)).call.apply(n,[this].concat(i))),p(f(f(t)),"state",C),p(f(f(t)),"renderPopup",function(n){return v.a.createElement("div",{className:_()("anchor",n),key:n},v.a.createElement(w.a,{hidden:!t.state[n],onCloseAttempt:function(){return t.setState(p({},n,!1))},directions:[E[n]]},v.a.createElement("span",null,"Hello, world!")))}),p(f(f(t)),"showAgain",function(){return setTimeout(function(){t.setState({bottomLeft:!0})})}),t}return u(e,n),a(e,[{key:"render",value:function(){return v.a.createElement("div",null,S.map(this.renderPopup),v.a.createElement("button",{className:"button",onClick:this.showAgain},"Show again"))}}]),e}(m.Component);t.i(T.render)(v.a.createElement(k,null),document.getElementById("example"))},11:function(n,e,t){n.exports=t(2)(247)},12:function(n,e,t){n.exports=t(2)(374)},13:function(n,e,t){n.exports=t(2)(362)},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=b[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],e));b[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],u=i[3],l={css:s,media:c,sourceMap:u};o[a]?o[a].parts.push(l):t.push(o[a]={id:a,parts:[l]})}return t}function i(n,e){var t=m(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=O[O.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),O.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=m(n.insertAt.before,t);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=O.indexOf(n);e>=0&&O.splice(e,1)}function s(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=l();t&&(n.attrs.nonce=t)}return u(e,n.attrs),i(n,e),e}function c(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",u(e,n.attrs),i(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function l(){return t.nc}function f(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var u=T++;t=v||(v=s(e)),o=p.bind(null,t,u,!1),r=p.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(e),o=h.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=d.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function p(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function h(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=_(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var b={},g=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(n,e){return e?e.querySelector(n):document.querySelector(n)},m=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=y.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),v=null,T=0,O=[],_=t(64);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a],c=b[s.id];c.refs--,i.push(c)}n&&o(r(n,e),e);for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete b[c.id]}}}};var w=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},19:function(n,e,t){n.exports=t(2)(331)},195:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){d(n,e,t[e])})}return n}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function s(n,e,t){return e&&a(n.prototype,e),t&&a(n,t),n}function c(n,e){return!e||"object"!==o(e)&&"function"!=typeof e?p(n):e}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function p(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return N});var h=t(5),b=(t.n(h),t(4)),g=(t.n(b),t(22)),y=(t.n(g),t(9)),m=(t.n(y),t(12)),v=(t.n(m),t(6)),T=(t.n(v),t(3)),O=t.n(T),_=t(20),w=(t.n(_),t(7)),x=t.n(w),E=t(11),S=t.n(E),C=t(36),k=(t.n(C),t(39)),R=t(85),P=t(37),M=t(53),j=t(21),L=t(197),H=t(243),I=t.n(H),A=function(n){return n.stopPropagation()},N=function(n){function e(){var n,o;i(this,e);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return o=c(this,(n=u(e)).call.apply(n,[this].concat(s))),d(p(p(o)),"state",{shortcuts:o.props.shortcuts&&!o.props.hidden,display:L.a.SHOWING}),d(p(p(o)),"listeners",new P.c),d(p(p(o)),"redrawScheduler",t.i(R.a)()),d(p(p(o)),"uid",t.i(k.a)("popup-")),d(p(p(o)),"calculateDisplay",function(n){return r({},n,{display:o.props.hidden?L.a.SHOWING:L.a.SHOWN})}),d(p(p(o)),"portalRef",function(n){o.node=n,o.parent=n&&n.parentElement,n&&o.getContainer()&&o._redraw()}),d(p(p(o)),"popupRef",function(n){o.popup=n,o._redraw()}),d(p(p(o)),"containerRef",function(n){o.container=n}),d(p(p(o)),"_updatePosition",function(){if(o.popup){if(o.isVisible()){var n=o.position();Object.keys(n).forEach(function(e){var t=n[e];o.popup.style[e]="number"==typeof t?"".concat(t,"px"):t.toString()})}o.setState(o.calculateDisplay)}}),d(p(p(o)),"_redraw",function(){o.isVisible()&&o.redrawScheduler(o._updatePosition)}),d(p(p(o)),"_onEscPress",function(n){o.props.onEscPress(n),o._onCloseAttempt(n,!0)}),d(p(p(o)),"_onDocumentClick",function(n){o.container&&o.container.contains(n.target)||!o._listenersEnabled||o.props.dontCloseOnAnchorClick&&o._getAnchor()&&o._getAnchor().contains(n.target)||(o.props.onOutsideClick(n),o._onCloseAttempt(n,!1))}),d(p(p(o)),"shortcutsScope",o.uid),d(p(p(o)),"shortcutsMap",{esc:o._onEscPress}),o}return l(e,n),s(e,[{key:"getChildContext",value:function(){return{ringPopupTarget:this.uid}}},{key:"componentDidMount",value:function(){this.setState({client:!0}),this.props.hidden||this._setListenersEnabled(!0)}},{key:"componentWillUpdate",value:function(n){var e=n.shortcuts&&!n.hidden;this.state.shortcuts!==e&&this.setState({shortcuts:e})}},{key:"componentDidUpdate",value:function(n){if(this.props!==n){var e=this.props.hidden;n.hidden!==e&&this._setListenersEnabled(!e),this._redraw()}}},{key:"componentWillUnmount",value:function(){this._setListenersEnabled(!1),this.popup=null}},{key:"getContainer",value:function(){var n=this.props.target||this.context.ringPopupTarget;return n&&document.querySelector("[data-portaltarget=".concat(n,"]"))}},{key:"position",value:function(){var n=this,e=L.b.reduce(function(e,t){return e[t]=n.props[t],e},{}),o=this.getContainer();return t.i(L.c)(r({popup:this.popup,container:o&&"static"!==t.i(P.d)(o).position?o:null,anchor:this._getAnchor()},e))}},{key:"_getAnchor",value:function(){return this.props.anchorElement||this.parent}},{key:"_setListenersEnabled",value:function(n){var e=this;if(n&&!this._listenersEnabled)return void setTimeout(function(){e._listenersEnabled=!0,e.listeners.add(window,"resize",e._redraw),e.listeners.add(window,"scroll",e._redraw),e.listeners.add(document,"click",e._onDocumentClick);for(var n=e._getAnchor();n;)e.listeners.add(n,"scroll",e._redraw),n=n.parentElement},0);!n&&this._listenersEnabled&&(this.listeners.removeAll(),this._listenersEnabled=!1)}},{key:"isVisible",value:function(){return!this.props.hidden}},{key:"_onCloseAttempt",value:function(n,e){this.props.onCloseAttempt(n,e)}},{key:"getInternalContent",value:function(){return this.props.children}},{key:"render",value:function(){var n,e=this.props,o=e.className,r=e.style,i=e.hidden,a=e.attached,s=e.keepMounted,c=e.onMouseDown,u=e.onMouseUp,l=e.onMouseOver,f=e.onMouseOut,p=e.onContextMenu,h=e["data-test"],b=this.state.display===L.a.SHOWING,g=S()(o,I.a.popup,(n={},d(n,I.a.attached,a),d(n,I.a.hidden,i),d(n,I.a.showing,b),n));return O.a.createElement("span",{onClick:A,ref:this.portalRef},this.state.shortcuts&&O.a.createElement(M.a,{map:this.shortcutsMap,scope:this.shortcutsScope}),this.state.client&&(s||!i)&&t.i(_.createPortal)(O.a.createElement("div",{"data-portaltarget":this.uid,ref:this.containerRef,onMouseOver:l,onMouseOut:f,onContextMenu:p},O.a.createElement("div",{"data-test":t.i(j.a)("ring-popup",h),"data-test-shown":!i&&!b,ref:this.popupRef,className:g,style:r,onMouseDown:c,onMouseUp:u},this.getInternalContent())),this.getContainer()||document.body))}}]),e}(T.Component);d(N,"PopupProps",{Directions:L.d,Dimension:L.e,MinWidth:L.f,MaxHeight:L.g}),d(N,"propTypes",{anchorElement:x.a.instanceOf(Node),target:x.a.string,className:x.a.string,style:x.a.object,hidden:x.a.bool.isRequired,onOutsideClick:x.a.func,onEscPress:x.a.func,onCloseAttempt:x.a.func,children:x.a.oneOfType([x.a.arrayOf(x.a.node),x.a.node]),dontCloseOnAnchorClick:x.a.bool,shortcuts:x.a.bool,keepMounted:x.a.bool,"data-test":x.a.string,directions:x.a.arrayOf(x.a.string),autoPositioning:x.a.bool,autoCorrectTopOverflow:x.a.bool,left:x.a.number,top:x.a.number,maxHeight:x.a.number,minWidth:x.a.number,sidePadding:x.a.number,attached:x.a.bool,onMouseDown:x.a.func,onMouseUp:x.a.func,onMouseOver:x.a.func,onMouseOut:x.a.func,onContextMenu:x.a.func}),d(N,"contextTypes",{ringPopupTarget:x.a.string}),d(N,"childContextTypes",{ringPopupTarget:x.a.string}),d(N,"defaultProps",{shortcuts:!0,hidden:!1,onOutsideClick:function(){},onEscPress:function(){},onCloseAttempt:function(){},dontCloseOnAnchorClick:!1,keepMounted:!1,directions:L.h,autoPositioning:!0,autoCorrectTopOverflow:!0,left:0,top:0,offset:0,sidePadding:8,attached:!1,legacy:!1})},197:function(n,e,t){"use strict";function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n){return null!==n?{top:n.scrollTop,left:n.scrollLeft}:{top:t.i(b.e)(),left:t.i(b.f)()}}function i(n,e,t,r,i){var a,s=n.clientWidth,c=n.clientHeight,u=r+e.height,l=t+e.width,f=t-s,p=r-c,d=l-s,h=t+e.width/2-s/2,b=r+e.height/2-c/2,y=u-c;return a={},o(a,g.BOTTOM_RIGHT,{left:t,top:u+i}),o(a,g.BOTTOM_LEFT,{left:d,top:u+i}),o(a,g.BOTTOM_CENTER,{left:h,top:u+i}),o(a,g.TOP_RIGHT,{left:t,top:p-i}),o(a,g.TOP_LEFT,{left:d,top:p-i}),o(a,g.TOP_CENTER,{left:h,top:p-i}),o(a,g.LEFT_BOTTOM,{left:f-i,top:r}),o(a,g.LEFT_TOP,{left:f-i,top:y}),o(a,g.LEFT_CENTER,{left:f-i,top:b}),o(a,g.RIGHT_BOTTOM,{left:l+i,top:r}),o(a,g.RIGHT_TOP,{left:l+i,top:y}),o(a,g.RIGHT_CENTER,{left:l+i,top:b}),a}function a(n,e,o){var r=null!==o.container?o.container.clientHeight:t.i(b.g)(),i=e.top+o.sidePadding,a=e.top+r-o.sidePadding,s=Math.max(i-n.top,0),c=o.popup.clientHeight,u=n.top+c-a;return s+Math.max(u,0)}function s(n,e,t){var o=null!==t.container?t.container.clientWidth:window.innerWidth,r=e.left+t.sidePadding,i=e.left+o-t.sidePadding,a=Math.max(r-n.left,0),s=t.popup.clientWidth,c=n.left+s-i;return a+Math.max(c,0)}function c(n){var e=n.sidePadding,t=n.styles,o=n.anchorRect,r=n.maxHeight,i=n.popupScrollHeight,a=n.direction,s=g.TOP_LEFT,c=g.TOP_RIGHT,u=g.TOP_CENTER;if(![s,c,u,g.RIGHT_TOP,g.LEFT_TOP].includes(a))return t;var l=[s,u,c].includes(a),f=l?o.top:o.bottom;return f-(r?Math.min(i,r):i)<=e&&(t.top=e,t.maxHeight=f-e+1),t}function u(n,e,t){t=t||document.documentElement;var o=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.max(o.top-r.top,0),a=Math.max(r.height,t===document.documentElement?t.clientHeight:0),s=Math.max(a-(i+o.height),0);switch(n){case g.TOP_LEFT:case g.TOP_CENTER:case g.TOP_RIGHT:return i;case g.BOTTOM_LEFT:case g.BOTTOM_CENTER:case g.BOTTOM_RIGHT:case g.LEFT_BOTTOM:case g.RIGHT_BOTTOM:return s;case g.LEFT_TOP:case g.RIGHT_TOP:return o.height+s;case g.RIGHT_CENTER:case g.LEFT_CENTER:return o.height/2+s;default:return null}}function l(n){var e=n.popup,o=n.anchor,u=n.container,l=n.directions,f=n.autoPositioning,p=n.sidePadding,d=n.top,h=n.left,g=n.offset,y=n.maxHeight,O=n.minWidth,_=n.autoCorrectTopOverflow,x=void 0===_||_,E={top:0,left:0},S=null,C=null!==u?t.i(b.a)(u):w,k=null!==u?u:document.body,R=t.i(b.a)(t.i(b.h)(o)?o:k),P=r(u),M=R.left+P.left+h-C.left,j=R.top+P.top+d-C.top;if(e){var L=i(e,R,M,j,g);if(f&&1!==l.length){var H=l.concat(l[0]).filter(function(n){return L[n]}).map(function(n){return{styles:L[n],direction:n}}).sort(function(e,t){var o=e.styles,r=t.styles;return a(o,P,n)+s(o,P,n)-(a(r,P,n)+s(r,P,n))});E=H[0].styles,S=H[0].direction}else E=L[l[0]],S=l[0]}return y===T.SCREEN||"screen"===y?E.maxHeight=window.innerHeight+P.top-E.top-m.MARGIN:y&&(E.maxHeight=y),x&&(E=c({sidePadding:p,styles:E,anchorRect:R,maxHeight:y,direction:S,popupScrollHeight:e.scrollHeight})),O===v.TARGET||"target"===O?E.minWidth=R.width:O&&(E.minWidth=R.width<O?O:R.width),E}t.d(e,"d",function(){return g}),t.d(e,"h",function(){return y}),t.d(e,"e",function(){return m}),t.d(e,"f",function(){return v}),t.d(e,"g",function(){return T}),t.d(e,"a",function(){return O}),t.d(e,"b",function(){return _}),e.i=u,e.c=l;var f=t(79),p=(t.n(f),t(80)),d=(t.n(p),t(82)),h=(t.n(d),t(36)),b=(t.n(h),t(37)),g={BOTTOM_RIGHT:"BOTTOM_RIGHT",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_CENTER:"BOTTOM_CENTER",TOP_LEFT:"TOP_LEFT",TOP_RIGHT:"TOP_RIGHT",TOP_CENTER:"TOP_CENTER",RIGHT_TOP:"RIGHT_TOP",RIGHT_BOTTOM:"RIGHT_BOTTOM",RIGHT_CENTER:"RIGHT_CENTER",LEFT_TOP:"LEFT_TOP",LEFT_BOTTOM:"LEFT_BOTTOM",LEFT_CENTER:"LEFT_CENTER"},y=[g.BOTTOM_RIGHT,g.BOTTOM_LEFT,g.TOP_LEFT,g.TOP_RIGHT,g.RIGHT_TOP,g.RIGHT_BOTTOM,g.LEFT_TOP,g.LEFT_BOTTOM],m={MARGIN:16,BORDER_WIDTH:1},v={TARGET:-1},T={SCREEN:-1},O={HIDDEN:0,SHOWING:1,SHOWN:2},_=["directions","autoPositioning","autoCorrectTopOverflow","sidePadding","top","left","offset","maxHeight","minWidth"],w={top:0,left:0}},199:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var c=t(5),u=(t.n(c),t(4)),l=(t.n(u),t(200)),f=(t.n(l),t(54)),p=(t.n(f),t(19)),d=(t.n(p),t(13)),h=(t.n(d),t(36)),b=(t.n(h),t(202)),g=t.n(b),y=t(46),m=function(){function n(){var e=this;r(this,n),s(this,"ALLOW_SHORTCUTS_SELECTOR",".ring-js-shortcuts"),s(this,"ROOT_SCOPE",{scopeId:"ROOT",options:{}}),s(this,"_scopes",{}),s(this,"combokeys",new g.a(document.documentElement)),s(this,"trigger",function(n){return e.combokeys.trigger(n)}),s(this,"_dispatcher",function(n,t){for(var o,r=e._scopeChain.length-1;r>=0;r--){var i=e._scopeChain[r];if((o=e._scopes[i.scopeId])&&o[t]){var a=o[t](n,t,i.scopeId);if(!0!==a)return a}if(i.options.modal)return!0}}),s(this,"_defaultFilter",function(n,t){return t!==document&&!t.matches(e.ALLOW_SHORTCUTS_SELECTOR)&&!t.closest(e.ALLOW_SHORTCUTS_SELECTOR)&&(t.matches("input,select,textarea")||t.contentEditable&&"true"===t.contentEditable)}),this.setFilter(),this.setScope()}return a(n,[{key:"bind",value:function(n){if(!(n instanceof Object)||"function"!=typeof n.handler)throw new Error("Shortcut handler should exist");if(n.scope||(n.scope=this.ROOT_SCOPE.scopeId),Array.isArray(n.key))for(var e=0;e<n.key.length;e++)this.bind(Object.assign({},n,{key:n.key[e]}));else{if("string"!=typeof n.key)throw new Error("Shortcut key should exist");this._scopes[n.scope]||(this._scopes[n.scope]={}),this._scopes[n.scope][n.key]=n.handler,this.combokeys.bind(n.key,this._dispatcher,this._getKeyboardEventType(n))}}},{key:"bindMap",value:function(n,e){if(!(n instanceof Object))throw new Error("Shortcuts map shouldn't be empty");for(var t in n)n.hasOwnProperty(t)&&this.bind(Object.assign({},e||{},{key:t,handler:n[t]}))}},{key:"unbindScope",value:function(n){this._scopes[n]=null}},{key:"getScope",value:function(){return this._scopeChain.slice(1)}},{key:"hasScope",value:function(n){return-1!==this.indexOfScope(n)}},{key:"pushScope",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n){var t=this.indexOfScope(n);-1!==t&&this._scopeChain.splice(t,1),this._scopeChain.push(this.wrapScope(n,e))}}},{key:"popScope",value:function(n){if(n){var e=this.indexOfScope(n);if(-1!==e)return this._scopeChain.splice(e,this._scopeChain.length-1)}}},{key:"spliceScope",value:function(n){if(n){var e=this.indexOfScope(n);-1!==e&&this._scopeChain.splice(e,1)}}},{key:"setScope",value:function(n){var e=this;if(n){var t;if(t="string"==typeof n||!Array.isArray(n)&&"object"===o(n)&&null!==n?[n]:n,!Array.isArray(t))return;t=t.map(function(n){return"string"==typeof n?e.wrapScope(n):n}),this._scopeChain=[this.ROOT_SCOPE].concat(t)}else this._scopeChain=[this.ROOT_SCOPE]}},{key:"wrapScope",value:function(n){return{scopeId:n,options:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}}},{key:"hasKey",value:function(n,e){return!(!this._scopes[e]||!this._scopes[e][n])}},{key:"_getKeyboardEventType",value:function(n){return!n.type&&"windows"===y.a.os.name&&n.key.match(/ctrl/i)&&n.key.match(/shift/i)&&n.key.match(/[0-9]/)?"keyup":n.type}},{key:"setFilter",value:function(n){this.combokeys.stopCallback="function"==typeof n?n:this._defaultFilter}},{key:"indexOfScope",value:function(n){return this._scopeChain.findIndex(function(e){return e.scopeId===n})}},{key:"reset",value:function(){this._scopes={},this.setScope(),this.combokeys.reset()}}]),n}();e.a=new m},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(250)},200:function(n,e,t){n.exports=t(2)(308)},202:function(n,e,t){n.exports=t(2)(248)},21:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n){return s(n)||a(n)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function s(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function c(n,e){return f(n)||l(n,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(n,e){var t=[],o=!0,r=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return t}function f(n){if(Array.isArray(n))return n}function p(n){return Object.entries(n).reduce(function(n,e){var t=c(e,2),o=t[0];return t[1]?r(n).concat([o]):n},[])}function d(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(function(n){return!!n}).reduce(function(n,e){return"object"===o(e)?r(n).concat(r(p(e))):r(n).concat([e])},[]).join(" ")}e.a=d;var h=t(24),b=(t.n(h),t(63)),g=(t.n(b),t(22)),y=(t.n(g),t(5)),m=(t.n(y),t(4)),v=(t.n(m),t(6)),T=(t.n(v),t(9)),O=(t.n(T),t(38));t.n(O)},22:function(n,e,t){n.exports=t(2)(400)},24:function(n,e,t){n.exports=t(2)(414)},242:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.i(t(8),void 0),e.push([n.i,".popup_b24 {\n\n  position: absolute;\n  z-index: 5;\n  z-index: var(--ring-overlay-z-index);\n  top: -100vh;\n  left: -100vw;\n\n  overflow-y: auto;\n\n  box-sizing: border-box;\n\n  border: 1px solid rgba(0, 42, 76, .1);\n\n  border: 1px solid var(--ring-popup-border-color);\n  border-radius: 3px;\n  border-radius: var(--ring-border-radius);\n\n  background-color: #fff;\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 2px 16px 0 rgba(0, 42, 76, .15);\n  box-shadow: 0 2px 16px 0 var(--ring-popup-shadow-color);\n}\n\n.hidden_2b7 {\n  display: none;\n}\n\n.showing_152 {\n  opacity: 0;\n}\n\n.attached_ebc {\n  border-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n",""]),e.locals={popup:"popup_b24 "+t(8).locals.font,hidden:"hidden_2b7",showing:"showing_152",attached:"attached_ebc"}},243:function(n,e,t){var o=t(242);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(15)(o,r),o.locals&&(n.exports=o.locals)},27:function(n,e,t){n.exports=t(2)(399)},3:function(n,e,t){n.exports=t(2)(57)},36:function(n,e,t){n.exports=t(2)(249)},37:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function c(n){if(n instanceof Range||s(n)){var e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return Object.assign({},_)}function u(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function l(){return window.innerHeight}function f(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function p(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function d(n){n.preventDefault&&n.preventDefault()}t.d(e,"d",function(){return O}),e.h=s,e.a=c,e.b=u,e.g=l,e.e=f,e.f=p,t.d(e,"l",function(){return w}),t.d(e,"j",function(){return x}),t.d(e,"k",function(){return E}),t.d(e,"c",function(){return S}),e.i=d;var h=t(24),b=(t.n(h),t(81)),g=(t.n(b),t(9)),y=(t.n(g),t(38)),m=(t.n(y),t(27)),v=(t.n(m),t(6)),T=(t.n(v),t(13)),O=(t.n(T),window.getComputedStyle.bind(window)),_={top:0,right:0,bottom:0,left:0,width:0,height:0},w=function(n){return function(e,t){t.split(/\s+/g).forEach(function(t){return e[n](t)})}},x=w("add"),E=w("remove"),S=function(){function n(){o(this,n),a(this,"_all",new Set)}return i(n,[{key:"add",value:function(n,e,t,o){n.addEventListener(e,t,o);var r=function(){return n.removeEventListener(e,t,o)};return this._all.add(r),r}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(e){return n.remove(e)})}}]),n}()},38:function(n,e,t){n.exports=t(2)(439)},39:function(n,e,t){"use strict";function o(n){if(!n)throw Error('Argument "name" is required in getUID()');return r[n]||(r[n]=0),n+String(r[n]++)}e.a=o;var r={}},4:function(n,e,t){n.exports=t(2)(424)},46:function(n,e,t){"use strict";var o=t(76),r=t.n(o),i=new r.a;i.sniff(),e.a=i},5:function(n,e,t){n.exports=t(2)(445)},53:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function s(n,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(n):e}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return v});var d=t(5),h=(t.n(d),t(4)),b=(t.n(h),t(3)),g=(t.n(b),t(7)),y=t.n(g),m=t(199),v=function(n){function e(){return r(this,e),s(this,u(e).apply(this,arguments))}return l(e,n),a(e,[{key:"componentWillMount",value:function(){var n=this.props,e=n.map,t=n.scope,o=n.options;m.a.bindMap(e,this.props),m.a.pushScope(t,o)}},{key:"componentWillUnmount",value:function(){var n=this.props.scope;m.a.unbindScope(n),m.a.spliceScope(n)}},{key:"render",value:function(){return this.props.children||null}}]),e}(b.Component);p(v,"propTypes",{map:y.a.object.isRequired,scope:y.a.string.isRequired,options:y.a.object,children:y.a.node}),p(v,"defaultProps",{options:{}})},54:function(n,e,t){n.exports=t(2)(396)},6:function(n,e,t){n.exports=t(2)(446)},63:function(n,e,t){n.exports=t(2)(311)},64:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},7:function(n,e,t){n.exports=t(2)(84)},76:function(n,e,t){n.exports=t(2)(253)},79:function(n,e,t){n.exports=t(2)(402)},8:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},80:function(n,e,t){n.exports=t(2)(438)},81:function(n,e,t){n.exports=t(2)(401)},82:function(n,e,t){n.exports=t(2)(412)},85:function(n,e,t){"use strict";function o(){var n,e;return function(t){n=t,e||(e=window.requestAnimationFrame(function(){n(),e=null,n=null}))}}e.a=o},9:function(n,e,t){n.exports=t(2)(83)}});