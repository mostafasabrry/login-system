let emailLogin=document.getElementById("signinEmail");
let passLogin=document.getElementById("signinPassword");
let incorrectmsg=document.getElementById("incorrect");

let account=[];
if(localStorage.getItem("accounts")!==null){
 account=JSON.parse(localStorage.getItem("accounts"));

}
let accountsLogin=[];
function login(){
    let users={
        email:emailLogin.value,
        password:passLogin.value,
    }
    if(vaildationLogin(users)){
       window.location.href="../welcome/index.html";
       incorrectmsg.classList.add("d-none")
    }else{
        incorrectmsg.classList.remove("d-none");
    }
}




function vaildationLogin(users){
    for(let i=0;i<account.length;i++){
        if(users.email.toLowerCase()===account[i].email.toLowerCase()&&users.password.toLowerCase()===account[i].password.toLowerCase()){
            localStorage.setItem("users",account[i].name);
            return true;
           
        }
    }
}





