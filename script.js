const fakeMsg = document.getElementById("fackLetter");
let control = 0;
function textClickFun(){
    if(control == 0){
        fakeMsg.style.display="block";
        control++;
    }
    else{
        fakeMsg.style.display="none";
        control = 0;
    }
}

function imgClickFun(){
    if(control == 0){
        realLetter.style.display="block";
        control++;
    }
    else{
        realLetter.style.display="none";
        control = 0;
    }
}