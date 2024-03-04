import{S as u,i as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="42600049-cf2a2f9bce39b2068dfff6d8c";function p(r){const s=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${d}?key=${m}&${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log(o))}const g={getImages:p};function h(r){return r.map(({webformatURL:s,largeImageURL:o,tags:n,likes:e,views:t,comments:a,downloads:f})=>`<li class ='gallery-item'>
        <a class="gallery-link" href="${o}">
            <img class="gallery-image"
                src="${s}"
                alt="${n}"
                width="360"/>
        </a>
        <div class='image-info'>
            <div class="info">
                <h3 class = "info-likes">Likes</h3>
                <p>${e}</p>
            </div>
            <div class="info">
                <h3 class = "info-views">Views</h3>
                <p>${t}</p>
            </div>
            <div class="info">
                <h3 class = "info-comments">Comments</h3>
                <p>${a}</p>
            </div>
            <div class="info">
                <h3 class = "info-downloads">Downloads</h3>
                <p>${f}</p>
            </div>
        </div>
    </li>`).join("")}let y=new u(".gallery a",{captionsData:"alt",captionDelay:250});const i={form:document.getElementById("form"),searchInput:document.getElementById("input"),loader:document.getElementById("loader"),gallery:document.getElementById("gallery")};i.form.addEventListener("submit",b);function b(r){r.preventDefault(),i.loader.style.display="inline-block";const s=r.currentTarget,o=s.elements.input.value.trim();if(o===""){c.warning({message:"Please enter a search query",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3});return}g.getImages(o).then(({hits:n})=>(console.log(n),n.length===0&&l(),h(n))).then(v).catch(l).finally(()=>{s.reset(),i.loader.style.display="none"})}function v(r){i.gallery.innerHTML=r,y.refresh()}function l(r){console.log(r),c.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})}
//# sourceMappingURL=commonHelpers.js.map
