/* function mostrarMensaje(callback) {
    console.log("Mensaje 1");
    callback(); // Llamamos a la función callback
}

function mensajeFinal() {
    console.log("Mensaje 2 (Desde el callback)");
}


function detalleSaludo(){
    console.log("testing NODE.js")
}
mostrarMensaje(detalleSaludo); */

/* 
function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback(); // Se ejecuta el callback
}

function despedida() {
    console.log("Adiós, hasta luego!");
}

// Llamamos a saludar y le pasamos despedida como callback
saludar("Juan", despedida);
 */







let promesa = new Promise((resolve, reject) => {
    let exito = true; 
    const a = 5;
    const b = 10;
    let resultado = '';

    setTimeout(() => {
        if (exito) {
            resolve( ` el resultado se ejecuto ${resultado =a + b}`);
        } else {
            reject("Error: La promesa falló.");
        }
    }, 2000);
});

promesa
    .then((data) => console.log(data)) 
    .catch((error) => console.error(error)); 






/* Arreglos con diccionarios */

let personas = [
    { nombre: "Juan", edad: 30, ciudad: "Madrid" },
    { nombre: "Ana", edad: 25, ciudad: "Barcelona" },
    { nombre: "Carlos", edad: 35, ciudad: "Valencia" }
];
personas.forEach((element)=>{
    console.log(element.nombre)
})



/* Diccionarios */

let test= { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let clave in test){
    console.log(`${clave} -${test[clave]}`)
}



function generatePasswordModal() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  
const registros = [];
for (let a=0; a<10; a++){
    const contraseña= generatePasswordModal();
    if(contraseña in registros){
        registros.push(contraseña);
    }
    else{
        continue;
    }
}

console.log(registros);


const servidores = ["SRVDC","HAUSSERVER"];

const newServer = "SRVDC";

console.log(newServer in servidores);