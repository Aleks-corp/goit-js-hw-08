!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,r,a,u,f,l,c=0,s=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(T,t),s?j(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?v(n,a-(e-c)):n}(e))}function h(e){return f=void 0,p&&o?j(e):(o=r=void 0,u)}function w(){var e=g(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(m)return f=setTimeout(T,t),j(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const j="feedback-form-state",O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(e){e.preventDefault();const t={},{elements:{email:n,message:i}}=O;t.email=n.value,t.message=i.value,function(e){localStorage.setItem(j,JSON.stringify(e))}(t)}),500)),O.addEventListener("submit",(function(e){e.preventDefault();const t={},{elements:{email:n,message:i}}=e.currentTarget;t.email=n.value,t.message=i.value,console.log("FormInput",t),localStorage.removeItem(j),O.reset()})),function(){if(JSON.parse(localStorage.getItem(j))){const e=JSON.parse(localStorage.getItem(j)),{elements:{email:t,message:n}}=O;t.value=e.email,n.value=e.message}}()}();
//# sourceMappingURL=03-feedback.3368915b.js.map