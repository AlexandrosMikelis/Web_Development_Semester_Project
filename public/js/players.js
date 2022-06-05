document.querySelectorAll(".all-players .containerdiv").forEach(item=>{
    item.onclick = function () {
        let tobeUncovered = this.nextElementSibling;

        if(!tobeUncovered.classList.contains("hidden-stats")){
            tobeUncovered.classList.add("hidden-stats");
            item.style.opacity = 1.0;
        }
        else{
            tobeUncovered.classList.remove("hidden-stats");
            item.style.opacity = 0.5;
        }
        
    }
});
function toggle(id){
    elem2show = document.querySelectorAll(`#${id}`);
    elem2hidev1 = document.querySelectorAll(`.x-team-players-container>div:not([id=${id}])`);
    elem2hidev2 = document.querySelectorAll(`.x-team-top-player>div:not([id=${id}])`);
    for(const elem of elem2hidev1){
        elem.style.display = 'none';
    }
    for(const elem of elem2hidev2){
        elem.style.display = 'none';
    }
    for(const elem of elem2show){
        elem.style.display = 'flex';
    }
    
}
window.addEventListener("load", ()=> {
    
    toggle('slide-1');
})