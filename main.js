const textarea = document.getElementById("textarea");

function f1(e){
    let value = e.value;
    textarea.style.fontSize = value + "px";
    console.log(value);
}

function f2(e){
    if(textarea.style.fontWeight == "normal"){
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }else{
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
}

function f3(e){
    if(textarea.style.fontStyle == "normal"){
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }else{
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
}

function f4(e){
    if(textarea.style.textDecoration == "none"){
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }else{
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
}

function f5(e){
    textarea.style.textAlign = "left";
}
function f6(e){
    textarea.style.textAlign = "center";
}
function f7(e){
    textarea.style.textAlign = "right";
}

function f8(e){
    if(textarea.style.textTransform == "lowercase"){
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }else{
        textarea.style.textTransform = "lowercase";
        e.classList.remove("active");
    }
}

function f9(e){
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e){
    let value = e.value;
    textarea.style.color = value;
}