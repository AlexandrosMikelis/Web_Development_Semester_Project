const logos = [
    '/public/images/team-logos/boston.jpg',
    '/public/images/team-logos/cavalry.jpg',
    '/public/images/team-logos/ccut.jpg',
    '/public/images/team-logos/dragons.jpg',
    '/public/images/team-logos/evergreen.jpg',
    '/public/images/team-logos/hammerheads.jpg',
    '/public/images/team-logos/ny.jpg',
    '/public/images/team-logos/weston.jpg'
]

shuffleArray(logos);



for(let item of logos){
    const im = document.createElement("img");
    document.querySelector(".mikrografies").appendChild(im);
    im.setAttribute("src",item);
}

let id = 0;

document.querySelector(".draw").addEventListener('click', ()=> {
    id++;
    const firstTeam = document.querySelector(".mikrografies img:first-child");
    const ftImg = firstTeam.src;
    firstTeam.remove();
    shuffleArray(logos);
    const secondTeam = document.querySelector(".mikrografies img:first-child");
    const stImg = secondTeam.src;
    secondTeam.remove();
    let el = document.createElement("div");
    document.querySelector(".panel").appendChild(el);
    el.innerHTML = `<br><br> <img class="imgsz" src="${ftImg}"> 
    <span id="${id}"; style="font-family:Black Ops One; font-size:90px; text-align:center; display:inline;" >
    VS</span> <img class="imgsz" src="${stImg}"> `;
    // el.style.textAlign = "center";
    el.classList.add("matchdiv");
    document.querySelector(`.panel div span[id="${id}"]`).scrollIntoView();
})




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }