const confirmMes = document.createElement("div");

document.querySelector("#conf").addEventListener('change', function() {
    let configOpts = document.querySelectorAll('option');
    let forms = document.querySelectorAll('form');
    

    if ((configOpts[6].selected)&&(!document.querySelector(".co").classList.contains("co2"))) {
        document.querySelector(".co").classList.add("co2");
        confirmMes.classList.add("new-div");
        document.querySelector(".con-opt").appendChild(confirmMes);
        confirmMes.innerHTML = `Proceed? <input type="checkbox" style="width: 5em;">`;  
        document.querySelector("div.new-div input").addEventListener("change",function() {
            if(document.querySelector("div.new-div input").checked){
                for (let i = 0; i < forms.length; i++) {
                    forms[i].reset();
                }
                confirmMes.innerHTML = "Layout Reset"
            }
        })      
    }

    for(let i=0;i<configOpts.length-1;i++){
        if((configOpts[i].selected)&&(document.querySelector(".co").classList.contains("co2"))){
            document.querySelector(".con-opt").removeChild(confirmMes);
            document.querySelector(".co").classList.remove("co2");
        }
    }
    
    if (configOpts[1].selected){
        // document.querySelector("#add-sub").classList.remove(".add-sub");
        document.querySelector("#add-sub").style.visibility = "visible";//display="none"
        document.querySelector("#add-sub").style.height = "fit-content";
        document.querySelector(".fa-user-plus").onclick = () => {
            const newSub = document.createElement('div');
            newSub.innerHTML = `<label for="name">2</label> <input type="text"  placeholder="First Name" required>`;
            newSub.classList.add("mp-form");
            document.querySelector(".sl form").appendChild(newSub);
        }
        
    }
    else{
        document.querySelector("#add-sub").style.visibility = "hidden";
        document.querySelector("#add-sub").style.height = "0";
    }

    if (configOpts[2].selected){
        const slLabel = document.querySelectorAll(".sl label");
        for(let i=0;i<slLabel.length;i++){
            slLabel[i].innerHTML = `<button class="del-b" ><i class="fa-solid fa-user-minus"></i></button>`;
        }
        const delBtn = document.querySelectorAll(".del-b");
        console.log("yes1");
        for(let i=0;i<delBtn.length;i++){
            delBtn[i].onclick = () => {
                delBtn[i].parentElement.parentElement.remove();
            }
        }
    }

    if(!(configOpts[2].selected)){
        const slLabel = document.querySelectorAll(".sl label");
        for(let i=0;i<slLabel.length;i++){
            slLabel[i].innerHTML = i+1;
        }
    }


    // else{
    //     const slLabel = document.querySelectorAll(".sl label");
    //     for(let i=1;i<slLabel.length;i++){
    //         slLabel[i].innerHTML = i;
    //     }
    // }
    // console.log(document.querySelector("div.new-div input").checked);
    // else {
    //     categoryItems.forEach(function(item) {
    //         item.checked = false
    //     })
    // }
});
