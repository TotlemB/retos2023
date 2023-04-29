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
  
