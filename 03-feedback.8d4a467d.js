!function(){var t={switchIcon:document.getElementById("switch-icon"),body:document.querySelector("body"),iconDay:document.getElementById("icon-day"),iconNight:document.getElementById("icon-night")};t.switchIcon.addEventListener("click",(function(){t.switchIcon.classList.toggle("icon-day"),t.switchIcon.classList.toggle("icon-night"),t.body.classList.toggle("bkg-dark");var e=t.body.classList.contains("bkg-dark");console.log(e),c(o,e)})),window.addEventListener("DOMContentLoaded",(function(){var c=e(o);console.log(c),c&&(t.body.classList.add("bkg-dark"),t.switchIcon.classList.remove("icon-day"),t.switchIcon.classList.add("icon-night"))}));var o="background";var c=function(t,o){try{var c=JSON.stringify(o);localStorage.setItem(t,c)}catch(t){console.error("Set state error: ",t.message)}},e=function(t){try{var o=localStorage.getItem(t);return null===o?void 0:JSON.parse(o)}catch(t){console.error("Get state error: ",t.message)}}}();
//# sourceMappingURL=03-feedback.8d4a467d.js.map
