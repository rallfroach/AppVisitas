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
    let password = 'HV-';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  
const contraseña= generatePasswordModal()

console.log(contraseña)

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


const valor = 25;

valor > 30 ? console.log('valido'): console.log('novalido')

const navegadores = navigator.mediaDevices.getUserMedia

console.log(navegadores)

const nombre = "VerakITcL01UtCxWCpZj31slKmYojGPLgMWlJc+RBvEr/5l/HxKWrQtYO+cPTCjoGa/W/d/Sq0Y1MCof5uZJzIEbV8WjRFs1MPMhrq0GJ/Q="
console.log(nombre.length)



const visitas = [
    {
        d_visita:"HV-6llz",
        fechaVisita: "2025-03-11",
        horaVisita: "14:00:00",
        nombreVisitante: "Rafael",
        apellidoVisitante: "Cabezas",
        compañia: "Azure",
        qrCode: "xsUWzR3liM6wm6d1SUsoJ1SrMPxkqAUFf8kXLsv2kYnqdHvrCVPhXSbpATB20nA05bcoN0O7Wtda9S5d/AgWOxf1p+ZTAXv6OnEtDL1Fj88="
    },
    {
        id_visita: "HV-7tqa",
        fechaVisita: "2025-03-11",
        horaVisita: "08:00:00",
        nombreVisitante: "Rafael",
        apellidoVisitante: "Cabezas",
        compañia: "Azure",
        qrCode: "xsUWzR3liM6wm6d1SUsoJ1SrMPxkqAUFf8kXLsv2kYnqdHvrCVPhXSbpATB20nA05bcoN0O7Wtda9S5d/AgWOxf1p+ZTAXv6OnEtDL1Fj88="
    }
]

const qrBuscado = 'xsUWzR3liM6wm6d1SUsoJ1SrMPxkqAUFf8kXLsv2kYnqdHvrCVPhXSbpATB20nA05bcoN0O7Wtda9S5d/AgWOxf1p+ZTAXv6OnEtDL1Fj88='
const visitasFiltradas = visitas.filter(visita => visita.qrCode === qrBuscado);

if(!visitasFiltradas){
    console.log('Error')
}
else{
    let valor= 0;
    visitasFiltradas.forEach((a)=>{
        console.log(visitasFiltradas[valor].nombreVisitante)
        valor+=1
    })
}

