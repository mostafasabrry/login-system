let signupName=document.getElementById("signupName");
let signupEmail=document.getElementById("signupEmail");
let signupPassword=document.getElementById("signupPassword");
let incorrectMsg=document.getElementById("incorrect");
let emailmsg=document.getElementById("emailmsg");
let correctMsg=document.getElementById("correct");



let accountInfo=[];
function signup(){
    account={
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value,
    }
   if(vaildationName()&&vaildationEmail()&&vaildationpass()){
    if(isExist(account)==true){
       emailmsg.classList.remove("d-none");
       return;
    }
    accountInfo.push(account);
        correctMsg.classList.remove("d-none");
        setTimeout(() => {
            correctMsg.classList.add("d-none");
        }, 500);
        emailmsg.classList.add("d-none");
        clearForm();
        localStorage.setItem("accounts",JSON.stringify(accountInfo));
   }
}



function clearForm(){
    signupName.value=null;
    signupEmail.value=null;
    signupPassword.value=null;
    signupEmail.classList.remove("is-valid");
    signupPassword.classList.remove("is-valid");
    signupName.classList.remove("is-valid");
    
}

var nameRegex =  /^\w{3,}(\s+\w+)*$/;
function vaildationName(){
    var textName=signupName.value;
    if(nameRegex.test(textName)){
        incorrectMsg.classList.add("d-none");
        signupName.classList.add("is-valid");
        signupName.classList.remove("is-invalid");
        correctMsg.classList.add("d-none");
        return true;
    }else{
        incorrectMsg.classList.remove("d-none");
        signupName.classList.remove("is-valid");
        signupName.classList.add("is-invalid");
        return false;
    }
}



var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function vaildationEmail(){
    var textEmail=signupEmail.value;
    if(emailRegex.test(textEmail)){
        incorrectMsg.classList.add("d-none");
        signupEmail.classList.add("is-valid");
        signupEmail.classList.remove("is-invalid");
        correctMsg.classList.add("d-none");
        return true;
    }else{
        incorrectMsg.classList.remove("d-none");
        signupEmail.classList.remove("is-valid");
        signupEmail.classList.add("is-invalid");
        return false;
    }
}

var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
function vaildationpass(){
    var textpass=signupPassword.value;
    if(passwordRegex.test(textpass)){
        incorrectMsg.classList.add("d-none");
        signupPassword.classList.add("is-valid");
        signupPassword.classList.remove("is-invalid");
        correctMsg.classList.add("d-none");
        return true;
    }else{
        incorrectMsg.classList.remove("d-none");
        signupPassword.classList.remove("is-valid");
        signupPassword.classList.add("is-invalid");
        return false;
    }
}

function isExist(account){
    for(var i=0;i<accountInfo.length;i++){
        if(accountInfo[i].email===account.email){
           return true;
        }
    }
}

