const passField = document.getElementById("pass");
const confPassField = document.getElementById("passConf");


//const submit = document.getElementById("submit");
const err = document.getElementById("error");

function sub (){
    if(passField.value != confPassField.value){
        err.classList.remove("invisible");
    }
    else{
        document.getElementById("form").submit();
    }
}


const subbtn = document.getElementById("btnSubmit");
subbtn.onclick = function (){
    sub();
};
