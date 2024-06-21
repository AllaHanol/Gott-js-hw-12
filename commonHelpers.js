import{S as u,i as h}from"./assets/vendor-3fe00192.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function A(s){const t="https://pixabay.com/",i="api/",l=new URLSearchParams({key:"44400014-e8ce3fc6f032fabdec0605d2e",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}${i}?${l}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>console.log("Error:",r))}function c(s,t){const i=s.map(({largeImageURL:l,webformatURL:e,likes:r,comments:n,views:f,downloads:m,tags:g})=>`<li class="gallery-item">
              <a class="link-card" href="${l}">
                  <img class="image-card" src="${e}" alt="${g}"/></a>
                  <ul class="info-list">
                      <li class="info-item">
                          <h3 class="info-title">Likes</h3>
                          <p>${r}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Views</h3>
                          <p>${f}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Comments</h3>
                          <p>${n}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Downloads</h3>
                          <p>${m}</p>
                      </li>
                  </ul>
          </li>`).join("");t.innerHTML=i}const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",o={loader:document.querySelector(".loader"),galleryBox:document.querySelector(".gallery-box"),gallery:document.querySelector(".gallery"),form:document.querySelector("form")},p=new u(".link-card",{captionsData:"alt",captionDelay:250}),y={message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageColor:"#fff",messageLineHeight:"24",title:"Error",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",backgroundColor:"#EF4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#B51B1B",iconUrl:d,imageWidth:24};let a="";o.form.addEventListener("submit",s=>{s.preventDefault(),a=o.form.elements.search.value.trim(),a!==""&&(o.galleryBox.style.display="none",o.loader.style.display="block",A(a).then(t=>{o.loader.style.display="none",o.galleryBox.style.display="block",t.hits.length>0?(c(t.hits,o.gallery),p.refresh()):(h.show(y),c(t.hits,o.gallery))}).catch(t=>console.log("Error:",t)),o.form.reset())});
//# sourceMappingURL=commonHelpers.js.map
