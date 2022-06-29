/* //PRACTICA
alert("Bienvenida/o! Le informamos que necesita ser mayor de edad y poseer reprocann para poder inscribirse")
alert("Ambos seran corroborados con el numero de DNI")
let dni = parseInt(prompt("Ingrese su DNI"))
while(dni = ""){
    console.log("Ingrese su DNI (sin puntos)")
};
if(dni >= 45000000){
    console.log("Lo sentimos es menor de edad")
} else {
    let nombre = prompt("Ingrese su nombre");
    console.log("Hola "+nombre+" podra acceder a:");
    function abonoMensual(gramos, precio) {
        let mensual = "$" + gramos * precio;
        console.log(mensual);
    }
    let membresia = parseInt(prompt("Ingrese el numero del tipo de membresia que desea \n1 - Premium \n2 - Clasica\n3 - Gratuita"));
        if(membresia === 3 ){
            console.log("Contenido de la web y primer asesoramiento gratis")
        } else if (membresia === 2){
            console.log("Beneficios exclusivos, hasta 15gr mensuales, asesoramiento gratis por un mes y contenido de la web")
            abonoMensual(5, 900);
            console.log("Abono mensual por 5gr");
            abonoMensual(10, 850);
             console.log("Abono mensual por 10gr");
            abonoMensual(15, 800);
            console.log("Abono mensual por 15gr");
            }
        else if (membresia === 1){
            console.log("Asesoramiento y cursos gratiutos, hasta 30gr mensuales, beneficios premium, contenido de la web")
            abonoMensual(10, 850);
            console.log("Abono mensual por 10gr");
            abonoMensual(20, 800);
             console.log("Abono mensual por 20gr");
            abonoMensual(30, 750);
            console.log("Abono mensual por 30gr");
            }else{
            console.log("Lo sentimos el numero ingresado es incorrecto")
            console.log("Gracias por su visita!")
        } 
} */


