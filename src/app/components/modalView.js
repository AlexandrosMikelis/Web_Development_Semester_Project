window.addEventListener("load", () => {
    CreateModal();
})

function CreateModal(){
    modalContainer = document.querySelector(".modal-sign");

    loginForm = document.createElement("form");
    loginForm.className = "signin modal-sign-content";
    loginForm.method = "POST";
    loginForm.action = "/login";

    span = document.createElement('span');
    span.className = "close-sign";
    span.innerHTML = "&times;";

    fieldset = document.createElement("fieldset")

    img = document.createElement('img');
    img.src = "/src/assets/images/Logo@2x.png";
    img.width = "99";
    img.height = "99";

    fieldset.appendChild(img);

    div = document.createElement('div');
    div.className = "name";
    div.innerHTML = "Patras League";

    fieldset.appendChild(div);

    titleDiv = document.createElement('div');
    titleDiv.className = "title";
    titleDiv.innerHTML = "Login";

    fieldset.appendChild(titleDiv);

    for(var input of ["email","password"]){
        wrapper = document.createElement("div");
        wrapper.className = "input-wrapper";

        Input = document.createElement('input');
        Input.className = "pl-input";
        Input.type = input;
        Input.placeholder = " ";
        Input.id = input + "-login-input";
        Input.required = true;
        
        label = document.createElement('label')
        label.for = input + "-login-input";
        label.innerHTML = input.charAt(0).toUpperCase() + input.slice(1) + "*";

        wrapper.appendChild(Input);
        wrapper.appendChild(label);

        fieldset.appendChild(wrapper);
    }

    forgotPass = document.createElement("div");
    forgotPass.className = "forgot-password";

    forgotPassLink = document.createElement("a");
    forgotPassLink.href = "";
    forgotPassLink.id = "forgot-pass";
    forgotPassLink.innerHTML = "Forgot Password";

    forgotPass.appendChild(forgotPassLink);
    fieldset.appendChild(forgotPass);
    
    submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.className = "submit-btn";

    submitBtnText = document.createElement('div');
    submitBtnText.className = "submit-btn-text";
    submitBtnText.innerHTML = "Sign in";

    submitBtn.appendChild(submitBtnText);

    fieldset.appendChild(submitBtn);
    
    noAccountContainer = document.createElement('div');
    noAccountContainer.className = "no-account";

    p = document.createElement('p');
    p.className = "no-account-text";
    p.innerHTML = "Don't have an account?";

    aLink = document.createElement('a');
    aLink.id = "sign-up";
    aLink.href = "";
    aLink.innerHTML = "Sign up";

    noAccountContainer.appendChild(p);
    noAccountContainer.appendChild(aLink);

    fieldset.appendChild(noAccountContainer);

    loginForm.appendChild(span);
    loginForm.appendChild(fieldset);
    
    modalContainer.appendChild(loginForm);

}
