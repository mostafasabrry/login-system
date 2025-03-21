function logout(){
    window.location.href="../login/index.html";
}
let user=localStorage.getItem("users")
let userName=document.getElementById("userName");

userName.innerHTML=`Welcome ${user}`;