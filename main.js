function rellenado(){
    let n = document.getElementById("name").value
    let c = document.getElementById("correo").value
    let m = document.getElementById("mensaje").value
    let aux = checkinput(n,c,m)
    if (!aux){
        alert("El formulario a fallado")
    }else{
        alert("Su solicitud ha sido enviada\nDatos:\n" + n + "\n" + c)
    }
}

function checkinput(n, c, m){
    let v = true
    if(n == ""){
        v = false
    }
    if (c == ""){
        v = false
    }
    if(m == ""){
        v = false
    }
    if (!isLetter(n)){
        v = false
    }
    if(!isEmail(c)){
        v = false
        alert("fue por correo")
    }
    return v
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// ------------------------------------------------
let idx = 1;
showpicture(idx)

function avanzar(n){
    showpicture(idx+=n);
}

function showpicture(n){
    let i;
    let slide = document.getElementsByClassName(".section-slider");
    if (n > slide.length){
        idx = 1;
    }

    if (n < 1){
        idx = slide.length;
    }

    for (i=0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }

    slide[idx-1].style.display = 'block';
}

