(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();const i="/Plushify/",o=document.createElement("dialog");o.id="side-menu";o.className="side-menu";o.setAttribute("aria-labelledby","menu-title");o.innerHTML=`
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
  </nav>`;document.body.append(o);const f=location.pathname.replace(/\/index\.html$/,"/");for(const t of o.querySelectorAll("a"))t.origin===location.origin&&t.pathname===f&&!t.hash&&t.setAttribute("aria-current","page");document.getElementById("menu-open").addEventListener("click",()=>o.showModal());o.addEventListener("click",t=>{(t.target.closest("a")||t.target===o&&t.clientX<o.getBoundingClientRect().left)&&o.close()});const m=matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");let s=0,l,u;document.addEventListener("pointermove",t=>{!m.matches||t.target.closest("#preview")||(l=t.clientX,u=t.clientY,!s&&(s=requestAnimationFrame(()=>{s=0,document.body.style.setProperty("--glow-x",`${l}px`),document.body.style.setProperty("--glow-y",`${u}px`)})))},{passive:!0});
