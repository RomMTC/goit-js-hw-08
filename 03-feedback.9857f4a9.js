!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(T,t),s?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?b(e):(i=o=void 0,u)}function w(){var e=p(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(T,t),b(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),T=document.querySelector(".feedback-form textarea"),h={},w="feedback-form-state";S.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(h))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),h.email=O.value,h.message=T.value,console.log(h),e.currentTarget.reset(),localStorage.removeItem(w)})),function(){var e=JSON.parse(localStorage.getItem(w));if(null===e)return;void 0===e.email?(email.value="",message.value=e.message):void 0===e.message?(email.value=e.email,message.value=""):(email.value=e.email,message.value=e.message)}()}();
//# sourceMappingURL=03-feedback.9857f4a9.js.map
