function verificar(){
    // obtener los 3 inputs
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let input3 = Number(document.getElementById("input3").value);

    console.log(typeof(input1))
    console.log(typeof(input2))
    console.log(typeof(input3))
    //si es vacío vale 0
    if(input1 === '' || input1 === NaN){input1 = 0}
    if(input2 === '' || input2 === NaN){input2 = 0}
    if(input3 === '' || input3 === NaN){input3 = 0}
    console.log(input1)
    console.log(input2)
    console.log(input3)
    
    // validar int
    if(!Number.isInteger(input1)){ 
        alert("La primera casilla no es un número..");
        return;
    }
    if(!Number.isInteger(input2)){ 
        alert("La segunda casilla no es un número.")
        return;
    }
    if(!Number.isInteger(input3)){ 
        alert("La tercera casilla no es un número.")
        return;
    }
    
    //validar negativos
    if(input1 < 0 || input2 < 0 || input3 < 0){
        alert("No puede ingresar cantidades negativas")
        return;
    }

    p = document.getElementsByClassName("mensaje");
    suma = input1 + input2 + input3;
    // calcular la suma
    if(suma > 10){
        p[0].innerText = "Llevas demasiados stickers"
    }
    else{
        p[0].innerText = "Llevas " + suma + " stickers."
    }
    
}