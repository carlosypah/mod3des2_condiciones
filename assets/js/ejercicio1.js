function changeBorder(){
    // console.log('entra a la funcion')
    stateBorder = document.getElementById("img1");

    if(stateBorder.style.border === ''){
        stateBorder.style.border = "2px solid red" ;
    }
    else{
        stateBorder.style.border = '';
    }
};