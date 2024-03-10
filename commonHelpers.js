import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d="42766029-567d6e2a9026e1efb72d58ec2",m="https://pixabay.com/api/";function p(r){const o={key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0},t=new URLSearchParams(o),n=`${m}?${t}`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Search failed");return e.json()}).then(e=>(e.total===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e.hits),e.hits)).catch(e=>{console.log(`${e}`)})}function h(r){return r.map(t=>`
            <li class="images-list-item">
                <a class="item-link" href="${t.largeImageURL}">
                    <img 
                        class="item-image" 
                        src="${t.webformatURL}" 
                        alt="${t.tags}" 
                        />
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${t.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${t.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${t.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${t.downloads}</span></p>
                    </div>
                </a>
            </li>`).join("")}const a=document.querySelector(".images-list"),g=document.querySelector(".search-form"),c=document.querySelector(".search-settings"),l=document.querySelector(".loading-text");g.addEventListener("submit",y);function y(r){r.preventDefault(),l.classList.toggle("visually-hidden");const o=c.value.trim();p(o).then(t=>{l.classList.toggle("visually-hidden"),a.innerHTML="",a.insertAdjacentHTML("beforeend",h(t)),new f(".images-list a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:200}).refresh()}).catch(t=>{console.log(t)}),c.value=""}
//# sourceMappingURL=commonHelpers.js.map
