
//HACER REPO EN GITHUB//


let nombre = prompt("Bienvenido! Ingrese su nombre");
console.log("Hola "+nombre+" ");
let edad = parseFloat(prompt("Ingrese su edad"))
if(edad >= 18){
    console.log("Acceso aceptado")
}else{
    alert("Lo sentimos es menor de edad")
}

let membresia = prompt("Ingrese el tipo de membresia que desea (sin el numero) \n1 - Premium \n2 - Clasica\n3 - Gratuita \n4 - Ninguna");
if(membresia != "Ninguna"){
    if(membresia === "Gratiuta" ){
        console.log("Contenido de la web y primero asesoramiento gratis")
    } else if (membresia === "Clasica"){
        console.log("Beneficios exclusivos, hasta 15gr mensuales, asesoramiento gratis por un mes y contenido de la web")
        for (let index = 5; index < 16; index = index + 5) {
            let precio = 1000;
            console.log("Abono mensual segun cantidad de gramos (5,10 o 15)");
            console.log("$" + precio * index);
        }
    } else if (membresia === "Premium"){
        console.log("Asesoramiento y cursos gratiutos, hasta 30gr mensuales, beneficios premium, contenido de la web")
        for (let index = 10; index < 31; index = index + 10) {
            let precio = 850;
            console.log("Abono mensual segun cantidad de gramos (10,20 o 30)");
            console.log("$" + precio * index);
        }
    }else{
        console.log("Lo sentimos la palabra ingresa es incorrecta")
    }
} else {

    console.log("Gracias por su visita!")
}


