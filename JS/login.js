window.onload=function(){

let user = localStorage.getItem("user")

if(!user){
window.location.href="login.html"
}

render()

}

function login(){

let name=document.getElementById("username").value

if(name==""){
alert("Masukkan nama dulu")
return
}

localStorage.setItem("user",name)

window.location.href="index.html"

}

window.onload=function(){


}