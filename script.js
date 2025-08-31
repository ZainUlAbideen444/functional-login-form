const usr = document.querySelector("#usr");
const em = document.querySelector("#em");
const psw = document.querySelector("#psw");
const form = document.querySelector("#form");
const emerror = document.querySelector("#emeror");
const pswerror = document.querySelector("#psweror");
const usererror = document.querySelector("#usreror");
const win = document.querySelector("#sukses")


form.addEventListener("submit", function(data){
data.preventDefault();


let IsValid =true;

const UserPattern = /^[A-Za-z]{3,}$/;;
if(!UserPattern.test(usr.value)){
    usererror.style.display ="block"
    IsValid =false;
} else{
usererror.style.display ="none"
}

const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!EmailPattern.test(em.value)){
    emerror.style.display ="block"
    IsValid =false;
} else{
emerror.style.display ="none"
}


const Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
if(!Password.test(psw.value)){
    pswerror.style.display ="block"
    IsValid =false;
} else{
pswerror.style.display ="none"
}

if(IsValid){
    win.style.display = "block"
}else{
    win.style.display= "none"
}});


