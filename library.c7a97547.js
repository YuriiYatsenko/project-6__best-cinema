!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("e3qpK"),r("6li5c");var o,i=r("bpxeT"),s=r("2TvXO"),c=r("fC0zd"),l=document.querySelector(".library__cards"),d=document.querySelector("body"),u=document.querySelector("[data-close-modal]"),p=document.querySelector("[data-backdrop]"),v=(document.querySelector(".modal"),document.querySelector(".wrap")),f=(document.querySelector(".gallery"),new(0,c.MovieDatabaseAPI));function m(e){e.target===p&&b()}function y(){p.classList.remove("backdrop--hidden"),d.classList.add("modal-open")}function b(){p.classList.add("backdrop--hidden"),d.classList.remove("modal-open")}function g(){return(g=e(i)(e(s).mark((function t(a){var n,r,o,i,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.fetchMovieDetails(a);case 3:for(_(n=e.sent),r=document.querySelector(".add-to-library"),o=localStorage.getItem("library"),i=o?JSON.parse(o):[],c=0;c<i.length;c++)i[c].id===n.id&&(r.innerText="Delete from my library");r.addEventListener("click",(function(){if("Add to my library"===r.innerText)i.push(n),localStorage.setItem("library",JSON.stringify(i)),r.innerText="Delete from my library";else{var e=i.findIndex((function(e){return e.id===n.id}));-1!==e&&(i.splice(e,1),localStorage.setItem("library",JSON.stringify(i)),r.innerText="Add to my library")}})),y(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.dir(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function _(e){var t=e.poster_path,a=e.original_title,n=e.vote_average,r=e.vote_count,i=e.popularity,s=e.genres,c=e.overview;o="\n    <div class='container-image-wrap'>".concat(t?'<img src="https://image.tmdb.org/t/p/w342/'.concat(t,'" alt="tizer">'):"","</div>\n    <div class='container-content-wrap'>\n      <h3 class='title'>").concat(a,"</h3>\n      <div class='content-wrap'>\n        <div class='features-wrap'>\n          <p class='feature-name'>Vote / Votes</p>\n          <p class='feature-name'>Popularity</p>\n          <p class='feature-name'>Genre</p>\n        </div>\n        <div class='features-values-wrap'>\n          <p class='feature-value'><span class=\"vote-numbers\">").concat(n,'</span><span class="slash"> / </span><span class="vote-numbers">').concat(r,"</span></p>\n          <p class='feature-value'>").concat(i,"</p>\n          <p class='feature-value'>").concat(Object.values(s).map((function(e){return e.name})).join(" "),"</p>\n        </div>\n      </div>\n      <p class='feature-name feature-name-uppercase'>About</p>\n      <p class='feature-value feature-value-description'>").concat(c,'</p>\n      <button class="add-to-library" type="button">Add to my library</button>\n    </div>\n    '),v.innerHTML=o}u.addEventListener("click",b),p.addEventListener("click",m),document.addEventListener("keydown",(function(e){"Escape"===e.key&&b()})),u.addEventListener("click",b),p.addEventListener("click",m),l.addEventListener("click",(function(e){if("ARTICLE"===e.target.nodeName){!function(e){g.apply(this,arguments)}(e.target.dataset.id)}})),document.addEventListener("DOMContentLoaded",(function(){var e,t=document.querySelector(".library__cards"),a=document.querySelector(".container-button"),n=localStorage.getItem("library"),r=n?JSON.parse(n):[];console.log(r),r.length>0?(a.remove(),e=r,t.innerHTML="",e.forEach((function(e){var a,n,r,o,i,s,c,l,d,u;t.innerHTML+=(r=(n=e).poster_path,n.original_title,o=n.vote_average,n.vote_count,n.popularity,i=n.genres,n.overview,s=n.title,n.genre_ids,c=n.release_date,l=n.id,d="url('https://image.tmdb.org/t/p/w500".concat(r,"')"),u=i.map((function(e){return e.name})).join(" "),'\n    <article class="library__card" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), '.concat(d,'" data-id=').concat(l,'>\n      <div class="library__about">\n        <h3 class="lib-gallery-item__about__title">').concat(s,'</h3>\n        <p class="lib-gallery-item__about__p">').concat(u," | ").concat(c.slice(0,4),'</p>\n      </div>\n      <div class="vote-cinemas ').concat(10===(a=Number(o.toFixed(1)))?"ten-stars":a<10&&a>8?"nine-stars":8===a?"eight-stars":a<8&&a>6?"seven-stars":6===a?"six-stars":a<6&&a>4?"five-stars":4===a?"four-stars":a<4&&a>2?"three-stars":2===a?"two-stars":a<2&&a>0?"one-star":0===a?"zero-star":a?void 0:"No rating",'"></div>\n    </article>'))}))):t.innerHTML='<p class="library__message">\n      OOPS...<br />\n      We are very sorry!<br />\n      You don’t have any movies at your library.\n    </p>'}))}();
//# sourceMappingURL=library.c7a97547.js.map
