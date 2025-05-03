let eyeicon=document.getElementById("eyeicon");
let password=document.getElementById("password");

eyeicon.onclick=function(){
    if(password.type=="password"){
        password.type="text"
        eyeicon.src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-vector-eye-icon-png-image_5159210.jpg"
    }else{
        password.type="password"
        eyeicon.src="https://cdn.icon-icons.com/icons2/1416/PNG/512/basic-eye-closed_98240.png"
    }
}