(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3096:function(t,e,n){var r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),d=Object.prototype.toString,p=Math.max,h=Math.min,x=function(){return f.Date.now()};function m(t,e,n){var i,o,s,a,l,c,u=0,f=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError(r);function b(e){var n=i,r=o;return i=o=void 0,u=e,a=t.apply(r,n)}function v(t){return u=t,l=setTimeout(w,e),f?b(t):a}function j(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-u>=s}function w(){var t=x();if(j(t))return N(t);l=setTimeout(w,function(t){var n=e-(t-c);return d?h(n,s-(t-u)):n}(t))}function N(t){return l=void 0,m&&i?b(t):(i=o=void 0,a)}function O(){var t=x(),n=j(t);if(i=arguments,o=this,c=t,n){if(void 0===l)return v(c);if(d)return l=setTimeout(w,e),b(c)}return void 0===l&&(l=setTimeout(w,e)),a}return e=g(e)||0,y(n)&&(f=!!n.leading,s=(d="maxWait"in n)?p(g(n.maxWait)||0,e):s,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=o=l=void 0},O.flush=function(){return void 0===l?a:N(x())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=s.test(t);return n||a.test(t)?l(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(t,e,{leading:i,maxWait:e,trailing:o})}},8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},3678:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c},default:function(){return u}});var r=n(5893),i=n(9008),o=n(6878),s=n(7294);function a(t){var e=t.url,n=t.newtab,i=t.text,o=t.hide,s=t.unhideDelay,a=t.isVisible;return console.log(o),(0,r.jsx)("a",{href:e,target:n?"_blank":"",rel:"noreferrer",style:{transitionDelay:s+"ms"},className:"transition duration-500 ease-in-out transform ".concat(o||!a?"-translate-y-32 opacity-0":""," text-gray-500 inline-block bg-gray-300 hover:bg-gray-600 filter drop-shadow-lg hover:text-gray-200 rounded font-semibold px-2 py-1 mt-2 mr-2 w-auto"),children:i})}function l(t){var e=t.url,n=(t.action,t.newtab),i=t.text,o=t.unhideDelay,s=t.isVisible;return(0,r.jsx)("a",{href:e,target:n?"_blank":"",rel:"noreferrer",style:{transitionDelay:o+"ms"},className:"transition duration-500 ease-in-out transform ".concat(s?"":"-translate-y-32 opacity-0"," text-gray-500 inline-block bg-gray-300 hover:bg-gray-600 filter drop-shadow-lg hover:text-gray-200 rounded font-semibold px-2 py-1 mt-2 mr-2 w-full sm:w-3/4 md:w-5/6 sm:text-lg"),children:i})}var c=!0;function u(t){var e=t.featuredProjects,n=t.blogPinnedList,c=(0,s.useState)(!0),u=c[0],f=c[1];return(0,s.useEffect)((function(){return f(!1),function(){f(!0)}}),[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Welcome!"}),(0,r.jsx)("meta",{name:"description",content:"Hello :)"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.png"})]}),(0,r.jsx)("div",{id:"frontpage",className:"px-10 min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12",children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{className:"transition duration-1000 ease-in-out delay-100 transform ".concat(u?"-translate-y-48 opacity-0":""," text-gray-400 sm:text-xl lg:text-2xl"),children:"Hello! I am"}),(0,r.jsx)("p",{className:"transition duration-1000 ease-in-out delay-150 transform ".concat(u?"-translate-y-48 opacity-0":""," text-2xl sm:text-4xl lg:text-7xl font-bold mb-1 text-gray-300 filter drop-shadow-2xl"),children:"Muhammad Isa Al Anshori"}),(0,r.jsx)("p",{className:"transition duration-1000 ease-in-out delay-200 transform ".concat(u?"-translate-y-48 opacity-0":"","  text-gray-400 sm:text-xl lg:text-2xl"),children:"Software Engineering Student"}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a,{unhideDelay:0,url:"https://github.com/misaalanshori",newtab:"1",text:"Github"}),(0,r.jsx)(a,{unhideDelay:50,url:"https://www.linkedin.com/in/muhammad-isa-al-anshori-876ba5193",newtab:"1",text:"LinkedIn"}),(0,r.jsx)(a,{unhideDelay:100,url:"https://instagram.com/misaalanshori",newtab:"1",text:"Instagram"}),(0,r.jsx)(a,{unhideDelay:150,url:"https://twitter.com/misaalanshori03",newtab:"1",text:"Twitter"}),(0,r.jsx)(a,{unhideDelay:200,url:"https://www.youtube.com/misaalanshori",newtab:"1",text:"Youtube"}),(0,r.jsx)(a,{unhideDelay:250,url:"/posts",newtab:"1",text:"Blog"})]})]})}),(0,r.jsxs)("div",{id:"myprojects",className:"px-10 min-h-screen bg-gray-700 py-6 flex flex-col sm:flex-row-reverse justify-center sm:py-12",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center text-center sm:text-right w-full",children:[(0,r.jsx)("p",{className:"text-4xl lg:text-6xl font-bold mb-1 mt-1 text-gray-300 filter drop-shadow-2xl",children:"I love making things"}),(0,r.jsx)("p",{className:"text-gray-400 text-xl lg:text-2xl",children:"From software to hardware"})]}),(0,r.jsx)("div",{className:"flex flex-col justify-center items-center w-full",children:(0,r.jsx)(o.Z,{children:e.map((function(t,e){return(0,r.jsx)(l,{url:t.url,action:"",text:t.title,unhideDelay:25*e},t.key)}))})})]}),(0,r.jsxs)("div",{id:"pinnedblogs",className:"px-10 min-h-screen bg-gray-700 py-6 flex flex-col sm:flex-row justify-center sm:py-12",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center text-center sm:text-left w-full",children:[(0,r.jsx)("p",{className:"text-4xl lg:text-6xl font-bold mb-1 mt-1 text-gray-300 filter drop-shadow-2xl",children:"Check out what I'm working on"}),(0,r.jsx)("p",{className:"text-gray-400 text-xl lg:text-2xl",children:"Maybe its interesting?"})]}),(0,r.jsx)("div",{className:"flex flex-col justify-center items-center w-full",children:(0,r.jsxs)(o.Z,{children:[n.map((function(t,e){return(0,r.jsx)(l,{url:"/posts/".concat(t.slug),action:"",text:t.title,unhideDelay:25*e},t.slug)})),(0,r.jsx)(l,{className:"",url:"/posts",text:(0,r.jsx)("p",{className:"text-center font-bold",children:"More Posts"}),unhideDelay:50*(n.length+1)})]})})]})]})}},9008:function(t,e,n){t.exports=n(5443)},5915:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),i=a(n(5697)),o=a(n(3096)),s=a(n(6774));function a(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var c=function(t){var e,n;function i(e){var n;return(n=t.call(this,e)||this).isVisible=function(t,e,r){var i=t.top,o=t.left,s=t.bottom,a=t.right,l=t.width,c=t.height,u=n.props,f=u.offset,d=u.partialVisibility;if(i+a+s+o===0)return!1;var p=0-f,h=0-f,x=e+f,m=r+f;return d?i+c>=p&&o+l>=h&&s-c<=m&&a-l<=x:i>=p&&o>=h&&s<=m&&a<=x},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var t=document.documentElement,e=n.props.once,r=n.nodeRef.getBoundingClientRect(),i=window.innerWidth||t.clientWidth,o=window.innerHeight||t.clientHeight,s=n.isVisible(r,i,o);s&&e&&n.removeListener(),n.setState({isVisible:s})}}),0)},n.setNodeRef=function(t){return n.nodeRef=t},n.ownProps=Object.keys(i.propTypes),n.state={isVisible:!1},n.throttleCb=(0,o.default)(n.isComponentVisible,n.props.throttleInterval),e.nodeRef&&n.setNodeRef(e.nodeRef),n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=i.prototype;return a.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},a.componentDidUpdate=function(t){(0,s.default)(this.getChildProps(this.props),this.getChildProps(t))||this.isComponentVisible()},a.componentWillUnmount=function(){this.removeListener()},a.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},a.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},a.getChildProps=function(t){var e=this;void 0===t&&(t=this.props);var n={};return Object.keys(t).forEach((function(r){-1===e.ownProps.indexOf(r)&&(n[r]=t[r])})),n},a.getChildren=function(){var t=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,(function(e){return r.default.cloneElement(e,l({},t.getChildProps(),{isVisible:t.state.isVisible}))}))},a.render=function(){var t=this.props,e=t.className,n=t.style,i=t.nodeRef,o=t.tag,s=l({},e&&{className:e},n&&{style:n});return r.default.createElement(o,l({ref:!i&&this.setNodeRef},s),this.getChildren())},i}(r.PureComponent);e.default=c,c.propTypes={once:i.default.bool,throttleInterval:function(t,e,n){var r=t[e];return!Number.isInteger(r)||r<0?new Error("The "+e+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:i.default.oneOfType([i.default.func,i.default.element,i.default.arrayOf(i.default.element)]),style:i.default.object,className:i.default.string,offset:i.default.number,partialVisibility:i.default.bool,nodeRef:i.default.object,tag:i.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},6878:function(t,e,n){"use strict";var r;e.Z=void 0;var i=((r=n(5915))&&r.__esModule?r:{default:r}).default;e.Z=i},6774:function(t){t.exports=function(t,e,n,r){var i=n?n.call(r,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!==typeof t||!t||"object"!==typeof e||!e)return!1;var o=Object.keys(t),s=Object.keys(e);if(o.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(e),l=0;l<o.length;l++){var c=o[l];if(!a(c))return!1;var u=t[c],f=e[c];if(!1===(i=n?n.call(r,u,f,c):void 0)||void 0===i&&u!==f)return!1}return!0}}},function(t){t.O(0,[774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);