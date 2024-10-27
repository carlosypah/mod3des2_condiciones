function revisarPasswords(){
    // console.log('entra')
    // leer selects
    let p1 = document.getElementById('pass1').value;
    let p2 = document.getElementById('pass2').value;
    let p3 = document.getElementById('pass3').value;

    // console.log(p1)
    // console.log(p2)
    // console.log(p3)
    // console.log(p1,p2, p3)
    // console.log(p1 === '9')
    // console.log(p2 === '1')
    // console.log(p3 === '1')

    p = document.getElementById('mensaje');
    
    // comparar con password 1 911
    if(p1 === '9' && p2 === '1' && p3 === '1'){
        p.innerText="Password 1 correcto";
        return;
    }
    // comparar con password 2 714
    else if(p1 === '7' && p2 === '1' && p3 === '4'){
        p.innerText="Password 2 es correcto"
        return
    }
    else{
        p.innerText = "Password incorrecto"
    }

}