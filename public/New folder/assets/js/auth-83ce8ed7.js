window.addEventListener("load",function(){const i=document.querySelector("#preloader");setTimeout(()=>{i.classList.add("load-finish")},1e3)});function d(){document.querySelectorAll("fieldset");let i=document.querySelectorAll("fieldset .next"),n=document.querySelectorAll("fieldset .previous"),s=document.querySelector("fieldset .submit");document.getElementById("progress"),s&&s.addEventListener("click",function(e){let t=e.target.closest("fieldset");validateInputs(t)||e.preventDefault()}),i.forEach(e=>{e.addEventListener("click",function(t){let l=e.closest("fieldset"),r=l.nextElementSibling;l.style.right="200%",r.style.right="0"})}),n.forEach(e=>{e.addEventListener("click",function(){let t=e.closest("fieldset"),l=t.previousElementSibling;t.style.right="-200%",l.style.right="0"})})}d();
