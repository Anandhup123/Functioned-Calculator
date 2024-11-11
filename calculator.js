function display(val){
    document.getElementById('screenOut').value+=val
}

function equate(){
    let x=document.getElementById('screenOut').value;
    let y=eval(x);
    document.getElementById('screenOut').value= y;
}


function clr(){
    document.getElementById('screenOut').value = "";
}


function backspace(){
    string = document.getElementById('screenOut').value
    string = string.substring(0, string.length-1);
    document.getElementById('screenOut').value = string
}