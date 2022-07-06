alert("Bienvenida/o! Le informamos que necesita ser mayor de edad y poseer reprocann para poder inscribirse");
alert("Ambos seran corroborados con el numero de DNI");
const abonoMensual = (gramos, precio) => gramos * precio;
let dni = prompt("Ingrese su DNI (sin puntos)");
while(dni.length >= 7){
    if(dni >= 45000000){
        console.log("Lo sentimos es menor de edad")
    } else {
        let nombre = prompt("Ingrese su nombre");
        console.log("Hola "+nombre+" podra acceder a:");
        let membresia = Number(prompt("Ingrese el numero del tipo de membresia que desea \n1 - Premium \n2 - Clasica\n3 - Gratuita"));
            if(membresia === 3 ){
                console.log("Contenido de la web y primer asesoramiento gratis")
                dni=3; 
            } else if (membresia === 2){
                console.log("Beneficios exclusivos, hasta 15gr mensuales, asesoramiento gratis por un mes y contenido de la web")
                const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 5,10 o 15"));
                if(gramos1 === 5){
                    console.log(`Abono mensual por 5gr $${abonoMensual (gramos1, 900)}`)
                } else if (gramos1 === 10) {
                    console.log(`Abono mensual por 10gr $${abonoMensual (gramos1, 850)}` )
                } else {
                    console.log(`Abono mensual por 15gr $${abonoMensual (gramos1, 800)}`)
                }
                dni=3; 
            } else if (membresia === 1){
                console.log("Asesoramiento y cursos gratiutos, hasta 30gr mensuales, beneficios premium, contenido de la web")
                const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 10,20 o 30"));
                if(gramos1 === 10){
                    console.log(`Abono mensual por 10gr $${abonoMensual (gramos1, 850)}`)
                } else if (gramos1 === 20) {
                    console.log(`Abono mensual por 20gr $${abonoMensual (gramos1, 750)}`)
                } else {
                    console.log(`Abono mensual por 30gr $${abonoMensual (gramos1, 650)}`)
                }
                dni=3; 
            }else{
                console.log("Lo sentimos el numero ingresado es incorrecto")
                console.log("Gracias por su visita!")
                dni=3; 
            } 
    } 
    
};


class Usuarios {
constructor(nombre, edad, membresia, comentario){
    this.nombre = nombre;
    this.edad = edad;
    this.membresia = membresia;
    this.comentario = comentario;
    }
}

const experiencias = [];

experiencias.push(new Usuarios("Eli", "30", "Premium", 'Comentario: "100% recomendada!!"'));
experiencias.push(new Usuarios("Carlos", "45", "Clasica", 'Comentario: "La calidad es exelente y el servicio tmb."'));
experiencias.push(new Usuarios("Juan", "24", "Gratuita", 'Comentario: "La consulta gratuita fue muy buena, voy por una membresia Premium!!"'));

console.log("Te dejamos algunas experiencias de nuestro/as socios/as:");
for (const objeto of experiencias){
    console.log(`${objeto.nombre} \n ${objeto.edad} \n ${objeto.membresia} \n ${objeto.comentario}`);
};


