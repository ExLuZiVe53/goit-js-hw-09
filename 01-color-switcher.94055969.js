!function(){var t=document.querySelector("body"),e=document.querySelector("body button[data-start]"),o=document.querySelector("body button[data-stop]");console.log(e),e.addEventListener("click",(function(){e.setAttribute("disabled","true"),r=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor=e}),1e3)}));var r=null;o.addEventListener("click",(function(){clearInterval(r),e.removeAttribute("disabled","true"),e.setAttribute("active","true")}))}();
//# sourceMappingURL=01-color-switcher.94055969.js.map
