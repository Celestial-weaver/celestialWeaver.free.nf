function one(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "1";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"1";
    }
}

function two(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "2";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"2";
    }
}

function three(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "3";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"3";
    }
}

function four(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "4";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"4";
    }
}


function five(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "5";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"5";
    }
}

function six(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "6";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"6";
    }
}

function seven(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "7";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"7";
    }
}

function eight(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "8";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"8";
    }
}

function nine(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "9";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"9";
    }
}

function zero(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = "0";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +"0";
    }
}

function decimal(){
    let n=document.getElementById('result-input').value;
    if (n = ""){
        document.getElementById('result-input').value = ".";
    }
    else{
        document.getElementById('result-input').value = document.getElementById('result-input').value +".";
    }
}

function cut(){
    let n=document.getElementById('result-input').value;
    n=n.slice(0,-1)
    document.getElementById('result-input').value = n;
}

let old_value;
parseInt(old_value);

function equal(){
    let op=document.getElementById('operator-input').value;
    document.getElementById('operator-input').value = "=";
    let n = parseInt(document.getElementById('result-input').value)
    let dd="";
    if(op=="%"){
        document.getElementById('result-input').value = old_value*(n/100);
    }
    else if(op=="/"){
        document.getElementById('result-input').value = old_value / n;
    }
    else if(op=="x"){
        document.getElementById('result-input').value = old_value * n;
    }
    else if(op=="-"){
        document.getElementById('result-input').value = old_value - n;
    }
    else if(op=="+"){
        document.getElementById('result-input').value = old_value + n;
    }
    else if(document.getElementById('result-input').value=="click = to all clear"){
        document.getElementById('result-input').value = dd;
    }
    else{
        document.getElementById('result-input').value = "click = to all clear";
    }
}


function subtract(){
    old_value=parseInt(document.getElementById('result-input').value);
    document.getElementById('operator-input').value = "-";
    document.getElementById('result-input').value = "";
}

function percentage(){
    old_value=parseInt(document.getElementById('result-input').value);
    document.getElementById('operator-input').value = "%";
    document.getElementById('result-input').value = "";
}

function divide(){
    old_value=parseInt(document.getElementById('result-input').value);
    document.getElementById('operator-input').value = "/";
    document.getElementById('result-input').value = "";
}

function add(){
    old_value=parseInt(document.getElementById('result-input').value);
    document.getElementById('operator-input').value = "+";
    document.getElementById('result-input').value = "";
}

function multiply(){
    old_value=parseInt(document.getElementById('result-input').value);
    document.getElementById('operator-input').value = "x";
    document.getElementById('result-input').value = "";
}
