(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function f(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=f(e);fetch(e.href,r)}})();const i="/Plushify/",o=document.createElement("dialog");o.id="side-menu";o.className="side-menu";o.setAttribute("aria-labelledby","menu-title");o.innerHTML=`
  <div class="menu-heading">
    <h2 id="menu-title">Plushify</h2>
    <form method="dialog"><button class="tool-button action-button" type="submit" autofocus>Close menu</button></form>
  </div>
  <nav aria-label="Site navigation">
    <a href="${i}">Creator</a>
    <a href="${i}#how-it-works">How it works</a>
    <a href="${i}privacy.html">Privacy</a>
    <a href="${i}license.html">Copyright &amp; license</a>
    <hr>
    <a href="https://github.com/N3tu/Plushify">GitHub</a>
    <a href="https://modrinth.com/resourcepack/plushify">Modrinth</a>
  </nav>`;document.body.append(o);const p=location.pathname.replace(/\/index\.html$/,"/");for(const t of o.querySelectorAll("a"))t.origin===location.origin&&t.pathname===p&&!t.hash&&t.setAttribute("aria-current","page");document.getElementById("menu-open").addEventListener("click",()=>o.showModal());o.addEventListener("click",t=>{(t.target.closest("a")||t.target===o&&t.clientX<o.getBoundingClientRect().left)&&o.close()});const m=matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");let l=0,c,u,s;document.addEventListener("pointermove",t=>{!m.matches||t.target.closest("#preview")||(c=t.clientX,u=t.clientY,s=t.target.closest(".settings .panel"),!l&&(l=requestAnimationFrame(()=>{l=0;const n=s?.getBoundingClientRect();n&&(s.style.setProperty("--panel-x",`${c-n.left}px`),s.style.setProperty("--panel-y",`${u-n.top}px`)),document.body.style.setProperty("--glow-x",`${c}px`),document.body.style.setProperty("--glow-y",`${u}px`)})))},{passive:!0});
