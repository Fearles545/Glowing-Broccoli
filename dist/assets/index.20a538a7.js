(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function l(e){return document.querySelector(e)}function a(e){return document.querySelectorAll(e)}function k(e){const c=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return[c,n,r]}function I(e){return Math.round(Math.random()*e)}let p=[];function L(){if(p.length){for(const e of p)e.abort();p=[];return}}function h(e,c){L();for(let n=0;n<e.length;n++){const r=new AbortController;p.push(r),e[n].addEventListener("click",()=>{if(l(`.${c[n].id} .input-range`)){l(`.${c[n].id} .input-range-one`).remove(),l(`.${c[n].id} .input-range-two`).remove();return}const t=document.createElement("input");t.setAttribute("type","range"),t.className="input-range input-range-one";const o=document.createElement("input");o.setAttribute("type","range"),o.className="input-range input-range-two",c[n].parentNode.append(t,o)},{signal:r.signal})}}const $=["#2ab7ca","#ff0000","#5a25f8","#00ff00","#0000ff","#daa520","#f6abb6","#011f4b","#b3cde0","#851e3e","#251e3e","#4a4e4d","#63ace5","#35a79c","#7bc043","#83d0c9","#283655","#bbbbbb","#e0a899","#ff6f69","#96ceb4 ","#ffeead","#88d8b0","#708090"],C=l(".plus"),A=l(".minus");l(".input-range-one");l(".input-range-two");let f;const y=l(".inputs");let S=2;function N(e=1){for(let c=1;c<=e;c++){const n=document.createElement("div");n.className=`color-picker picker${a(".color-picker").length}`;const r=document.createElement("label");r.setAttribute("for",`picker${a(".color-picker").length}`);const t=document.createElement("input");t.setAttribute("type","color"),t.id=`picker${a(".color-picker").length}`,t.setAttribute("value",`${$[I($.length)]}`),t.className="input-picker";const o=document.createElement("button");o.innerText="Color Stop",o.className="color-stop-button",n.append(r,t,o),y.append(n)}f=a(".color-stop-button")}C.addEventListener("click",()=>{N(),v(),d(u,i),h(f,s)});A.addEventListener("click",()=>{let e=a(".color-picker");if(e.length>2){e[e.length-1].remove(),v(),d(u,i),h(f,s);return}});const E=l(".logo"),w=0,O=360,B=1,D=.01;let b,m=!1,i=0;E.addEventListener("click",()=>{m=!m,m?q():M(),E.classList.toggle("logo-clicked")});function q(){b=setInterval(()=>{i=i+D,i>=O&&(i=w),d(u,i)},B),y.style.opacity="0"}function M(){clearInterval(b),b=void 0,y.style.opacity="1"}const T=l("#body");let u=[],s=[];N(S);v();h(f,s);function v(){u=[],s=[];for(const e of a(".input-picker"))s.push(e),u.push(k(e.value));for(let e=0;e<s.length;e++)s[e].addEventListener("input",()=>{u[e]=k(s[e].value),d(u,i)})}function d(e,c){let n=`linear-gradient(${c}deg,`;for(const r of e)e.indexOf(r)===e.length-1?n+=`rgb(${r[0]}, ${r[1]}, ${r[2]}))`:n+=`rgb(${r[0]}, ${r[1]}, ${r[2]}),`;T.style.background=n}d(u,i);
