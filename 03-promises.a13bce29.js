function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("7Y9D8");const i=document.querySelector("form");document.querySelector('button[type="submit"]');function l(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}i.addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:n,step:r,amount:o}}=t.currentTarget;if(n.value<0||r.value<0||o.value<0)e(u).Report.failure("You enter a negative number!","Please enter valid value",{position:"right-top",titleFontSize:"30px"});else for(let t=1;t<=o.value;t+=1)l(t,Number(n.value)+Number(r.value*(t-1))).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)}))}));
//# sourceMappingURL=03-promises.a13bce29.js.map