var username=document.getElementById('username');
var phonenum=document.getElementById('phonenum');
var password=document.getElementById('password');
var checknum=document.getElementById('checknum');
var usernamec=document.getElementById('usernamec');
var phonec=document.getElementById('phonec');
var passwordc=document.getElementById('passwordc');

// 用户名验证
username.onblur=function checkname(){
    if(username.value==""){
        usernamec.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"姓名不能为空"+"</p>";
    }
    else{
        usernamec.innerHTML="";
    }
}

// 密码验证
password.onblur=function checkpwd(){
    if(password.value.length<=6){
        passwordc.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"密码必须大于6位"+"</p>";
    }
    else{
        passwordc.innerHTML="";
    }
}

// 手机号验证
phonenum.onblur=function checkphone(){
    var regMobile=/^1[3,5,8]\d{9}$/;
    var tel=phonenum.value;
    if(regMobile.test(tel)){
        phonec.innerHTML="";
    }else{
        phonec.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"手机号不合法"+"</p>";
        // phonenum.select();
    }    
}

//验证码验证
checknum.onblur=function checkcheck(){
    if(checknum.value==""){
        checknumc.innerHTML="<p style='font-size:5px;color: red;margin-left:70px;'>"+"验证码不能为空"+"</p>";
    }
    else{
        checknumc.innerHTML="";
    }
}
// function checkspace(checkstr){
//     var str="";
//     for(i = 0; i < checkstr.length; i++) {
//         str = str + ' ';
//         }
//         return (str == checkstr);

    
// }

// 发送验证码
var getcheck = document.getElementById ('getcheck');
getcheck.onclick =function(){
    var time=30;
    if (time>0){
        this.disabled = "true";
        this.style.backgroundColor = 'rgb(196, 197, 197)';
        this.value = "重新发送 (" + time-- + ")";
        var interval = setInterval (function (){
            if (time == 0){
                clearInterval (interval);
                time = 30;
                getcheck.removeAttribute ('disabled');
                getcheck.value = "获取验证码";
                getcheck.style.backgroundColor = 'white';
                return false;
            }
            getcheck.value = "重新发送 (" + time-- + ")";
        }, 1000);
    }
}
                    