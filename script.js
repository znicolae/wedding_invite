const $ = (s) => document.querySelector(s);
const dialog = $("#inviteDialog"), envelope = $("#envelope");
$("#openInvite").addEventListener("click", () => { dialog.showModal(); envelope.classList.remove("open"); setTimeout(() => envelope.classList.add("open"), 220); });
$("#closeInvite").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
$("#readLetter").addEventListener("click", () => { dialog.close(); $("#letter").scrollIntoView({behavior:"smooth"}); });
// Optional local music: select a file you own or are licensed to use.
const panel = $("#musicPanel"), toggle = $("#musicToggle"), player = $("#player");
toggle.addEventListener("click", () => { panel.hidden = !panel.hidden; toggle.setAttribute("aria-expanded", String(!panel.hidden)); });
$("#audioFile").addEventListener("change", e => { const file = e.target.files?.[0]; if (!file) return; if (player.dataset.url) URL.revokeObjectURL(player.dataset.url); const url = URL.createObjectURL(file); player.dataset.url = url; player.src = url; player.play().catch(() => {}); });
// Sample wedding date. Change this value when personalizing the invitation.
const weddingDate = new Date("2027-06-19T16:00:00+02:00");
function updateCountdown(){let n=Math.max(0,weddingDate.getTime()-Date.now());const d=Math.floor(n/86400000);n%=86400000;const h=Math.floor(n/3600000);n%=3600000;const m=Math.floor(n/60000);n%=60000;const s=Math.floor(n/1000);$("#days").textContent=d;$("#hours").textContent=String(h).padStart(2,"0");$("#minutes").textContent=String(m).padStart(2,"0");$("#seconds").textContent=String(s).padStart(2,"0");}
updateCountdown(); setInterval(updateCountdown,1000);
// Demo RSVP only: validates input and displays a local confirmation; no data is transmitted.
$("#rsvpForm").addEventListener("submit",e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;const data=new FormData(f),name=data.get("name");$("#response").textContent=data.get("attendance")==="Joyfully accepts"?`Thank you, ${name} — your demo RSVP is ready!`:`Thank you for letting us know, ${name}. You will be missed!`;});
const items=document.querySelectorAll(".reveal");if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});items.forEach(item=>observer.observe(item));}else items.forEach(item=>item.classList.add("visible"));
