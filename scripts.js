const pwd = document.querySelector("#pwd");
const pwd2 = document.querySelector('#pwd2');
const pwdwarning = document.querySelector(".warn");


pwd.addEventListener("change", different);
pwd2.addEventListener("change", different);


function createWarning() {
    pwdwarning.textContent = "* Passwords do not match";
};

function different() {
    if (pwd.value !== pwd2.value) {
        pwdwarning.textContent = "* Passwords do not match";
        pwd.setAttribute("style", "border-color: red");
        pwd2.setAttribute("style", "border-color: red");
    } else {
        pwdwarning.textContent = "";
        pwd.setAttribute("style", "border-color: #f6f6f8");
        pwd2.setAttribute("style", "border-color: #f6f6f8");       
    }
};