const divs = document.querySelectorAll('[animated-letters]');
for(let div of divs){
  let delay = 0;
  let letterClass = div.getAttribute("animated-letters");  
  let letters = div.innerText.split("").map(s=>s==" "?"&nbsp;":s);
  let central = div.hasAttribute("animated-letters-centered")?
      Math.floor(letters.length/2):0;
  div.innerHTML = letters.map(l => `<span class="${letterClass}" style="animation-delay:${Math.abs(-central+delay++)*0.1-1000}s;" >${l}</span>`).join("");
}