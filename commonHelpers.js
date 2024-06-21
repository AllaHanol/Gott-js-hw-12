import{a as m,S,i as u}from"./assets/vendor-56bcefdc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/";async function p(s,t){return(await m.get("api/",{params:{key:"44400014-e8ce3fc6f032fabdec0605d2e",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}function f(s,t){const l=s.map(({largeImageURL:n,webformatURL:e,likes:r,comments:i,views:L,downloads:w,tags:E})=>`<li class="gallery-item">
              <a class="link-card" href="${n}">
                  <img class="image-card" src="${e}" alt="${E}"/></a>
                  <ul class="info-list">
                      <li class="info-item">
                          <h3 class="info-title">Likes</h3>
                          <p>${r}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Views</h3>
                          <p>${L}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Comments</h3>
                          <p>${i}</p>
                      </li>
                      <li class="info-item">
                          <h3 class="info-title">Downloads</h3>
                          <p>${w}</p>
                      </li>
                  </ul>
          </li>`).join("");t.insertAdjacentHTML("beforeend",l)}const B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==";let c="",a=1,h;const o={loader:document.querySelector(".loader"),galleryBox:document.querySelector(".gallery-box"),gallery:document.querySelector(".gallery"),form:document.querySelector("form"),btnMore:document.querySelector(".btn-more")},g=new S(".link-card",{captionsData:"alt",captionDelay:250}),d={message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageColor:"#fff",messageLineHeight:"24",title:"Error",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",backgroundColor:"#EF4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#B51B1B",iconUrl:B,imageWidth:24};o.form.addEventListener("submit",async s=>{if(s.preventDefault(),b(),c=o.form.elements.search.value.trim(),c!==""){o.gallery.innerHTML="",a=1;try{A();const t=await p(c,a);y(),h=Math.ceil(t.totalHits/15),t.hits.length>0&&h>1?(f(t.hits,o.gallery),g.refresh(),M()):t.hits.length>0?(f(t.hits,o.gallery),g.refresh()):(d.message="Sorry, there are no images matching your search query. Please try again!",u.show(d),o.gallery.innerHTML="")}catch(t){console.log("Error:",t)}o.form.reset()}});o.btnMore.addEventListener("click",async()=>{a+=1;try{A();const s=await p(c,a);y(),f(s.hits,o.gallery),v(),a===h&&(b(),d.message="We're sorry, but you've reached the end of search results.",u.show(d)),g.refresh()}catch(s){console.log("Error:",s)}});function A(){o.loader.classList.remove("hidden")}function y(){o.loader.classList.add("hidden")}function M(){o.btnMore.classList.remove("hidden")}function b(){o.btnMore.classList.add("hidden")}function v(){window.scrollBy({top:document.querySelector(".gallery-item").getBoundingClientRect().height*5,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
