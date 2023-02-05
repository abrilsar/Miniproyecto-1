let idx = 1;

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

    for (i=0; i <slide.length; i++){
        slide[i].style.display = none;
    }

    slide[idx-1].style.display = 'block';
}