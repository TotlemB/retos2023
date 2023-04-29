document.querySelector('#reto1').addEventListener('submit', function(event) {
	event.preventDefault();
	var arregloF = document.querySelector('#array').value.split(',').map(Number);
	var numero = parseInt(document.querySelector('#numero').value);

    let paresCercanos = [arregloF[0],arregloF[1]];
    let paresCercanos2 = [arregloF[0],arregloF[1]];
    let numeroCerca = arregloF[0]+arregloF[1];
    let valorAnterior = 0;
    //For anidado para recorrer los valores del array y sus posibles conbinaciones
    for (i = 0;i<arregloF.length;i++){
        for (u = 0;u<arregloF.length;u++){
            if (i != u){//el arreglo no puede tener un par que sea el mismo
                valor = arregloF[i] + arregloF[u];
                //condicion para el segundo par mas cercano
                if(Math.abs(valor-numero) >= Math.abs(numeroCerca-numero) && Math.abs(valor-numero) <= Math.abs(valorAnterior-numero)){
                    paresCercanos2 = [arregloF[i],arregloF[u]];  
                    numeroCerca = valor
                    valorAnterior = arregloF[i] + arregloF[u];
                }
                else if (Math.abs(valor-numero) <= Math.abs(numeroCerca-numero)){//par mas cercano
                    paresCercanos = [arregloF[i],arregloF[u]];  
                    numeroCerca = valor                              
                }
            }  
        }  
    }
    document.getElementById("par1").textContent = paresCercanos;
    document.getElementById("par2").textContent = paresCercanos2;
});
//Segundo reto
document.querySelector('#reto2').addEventListener('submit', function(event) {
    event.preventDefault();
	var texto1 = document.querySelector('#texto1').value.toLowerCase();
	var texto2 = document.querySelector('#texto2').value.toLowerCase();
    x = false;
    texto1 = texto1.replace(/\s/g, '');
    texto2 = texto2.replace(/\s/g, '');
    if (texto1.length !== texto2.length) {
        x = false;
    } //se debe usar la misma cantidad de letras
    let arreglo1 = texto1.split('').sort();
    let arreglo2 = texto2.split('').sort();
    //si en algun punto del arreglo no se cumple la condicion se retorna falso
    for (let i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] !== arreglo2[i]) {
        x = false;
      }else{
        x = true;
      }
    }
    if (x == false){
        document.getElementById("anagrama").textContent = "No son anagramas";
    }
    if (x == true){
        document.getElementById("anagrama").textContent = "Son anagramas";
    }

});
//Tercer reto
document.querySelector('#reto3').addEventListener('submit', function(event) {
	event.preventDefault();
	var arreglo = document.querySelector('#arreglo3').value.split(',');

    let caracterNoEspecial = [];
    let posicionNoCE = [];
    let caracterEspecial = [];
    let posicionCE = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].match(/[^\w\s]/)) { //Si no corresponde a un caracter no especial
        caracterEspecial.push(arreglo[i]);
        posicionCE.push(i);
      } else {
        caracterNoEspecial.push(arreglo[i]);
        posicionNoCE.push(i);
      }
    }
    caracterNoEspecial.reverse();
    let arregloReverse = [];
    /*Usando dos for se llena un nuevo array el cual mantiene las posiciones de los
    caracteres especiales e inviterte los caracteres normales */
    for (let i = 0;i<caracterEspecial.length;i++){
        arregloReverse[posicionCE[i]]=caracterEspecial[i];
    }
    for (let i = 0;i<caracterNoEspecial.length;i++){
        arregloReverse[posicionNoCE[i]]=caracterNoEspecial[i];
    }

    document.getElementById("arregloI").textContent = arregloReverse;

})
//Reto 4
function analizarTexto() {
    // Obtener el texto ingresado por el usuario
    const texto = document.getElementById("texto").value.trim();
    //Haciendo uso de \s+ y split separa por cada espacio

    // Número de palabras
    const numPalabras = texto.split(/\s+/).length;
  
    // Primera palabra
    const primeraPalabra = texto.split(/\s+/)[0];
  
    // Última palabra
    const ultimaPalabra = texto.split(/\s+/).pop();
  
    // Invertir la oración
    const oracionInvertida = texto.split(/\s+/).reverse().join(" ");
  
    // Mostrar la información en la página
    document.getElementById("numPalabras").textContent = numPalabras;
    document.getElementById("primeraPalabra").textContent = primeraPalabra;
    document.getElementById("ultimaPalabra").textContent = ultimaPalabra;
    document.getElementById("oracionInvertida").textContent = oracionInvertida;
  }
  //Reto 5
  const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const NUMEROS = "0123456789";

function validarContrasena(contrasena) {
  //La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número (Agregado debe tener caracteres especiales)
  const minus = /^(?=.*[a-z])/;
  const mayus = /^(?=.*[A-Z])/;
  const especial = /^(?=.*[!@#$%&*])/;
  const numero = /^(?=.*[0-9])/;
  const caracteres = contrasena.length
  if (minus.test(contrasena) && mayus.test(contrasena) && especial.test(contrasena) && numero.test(contrasena) && caracteres >= 8){
    return true;
  }else{
    return false
  }
  
} 
function validarCorreoElectronico(correo) {
  // Valida el correo electrónico
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(correo);
}

function encriptarContrasena(contrasena) {
  // Aplicar el cifrado César a la contraseña
  //Solo las letras son codificadas
  const desplazamiento = 3;
  let encriptado = "";
  for (let i = 0; i < contrasena.length; i++) {
    const caracter = contrasena[i];
    const indice = ALFABETO.indexOf(caracter);
    if (indice !== -1) {
      const nuevoIndice = (indice + desplazamiento) % ALFABETO.length;
      encriptado += ALFABETO.charAt(nuevoIndice);
    } else {
      encriptado += caracter;
    }
  }
  return encriptado,console.log(encriptado); //Console.log para ver la contraseña cifrada.
}

const formulario = document.getElementById("registro");
formulario.addEventListener("submit", function(event) {
  // Prevenir el envío del formulario por defecto
  event.preventDefault();

  //Obtener los valores ingresados
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value;

  /// Validar la contraseña y el correo electrónico
  if (!validarContrasena(contrasena)) {
    alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.");
    return;
  }
  if (!validarCorreoElectronico(correo)) {
    alert("El correo electrónico no tiene un formato válido.");
    return;
  }

  // Encriptacion de la contraseña
  const contrasenaEncriptada = encriptarContrasena(contrasena);

  // Prueba de los datos obtenidos
  datosNombre = [];
  datosNombre.push(`${nombre}`);
  console.log(datosNombre); //Alternativa para almacenar (preferiblemente en una funcion aparte)
})
