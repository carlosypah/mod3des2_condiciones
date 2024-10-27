function verificar(){
    // obtener los 3 inputs
    input1 = document.getElementById("input1").value
    input2 = document.getElementById("input2").value
    input3 = document.getElementById("input3").value
    console.log(input1)
    //si es vacío vale 0
    if(input1 === ''){input1 = 0}
    if(input2 === ''){input2 = 0}
    if(input3 === ''){input3 = 0}
    console.log(input1)
    
    // validar int
    if(!Number.isInteger(input1)){ alert("El valor "+ input1 + " no es un número.")}
    if(!Number.isInteger(input2)){ alert("El valor "+ input2 + " no es un número.")}
    if(!Number.isInteger(input3)){ alert("El valor "+ input3 + " no es un número.")}
    console.log(input1)
    
    // calcular la suma
    // si es 0
    // si es > 10
    // si está en rango
}