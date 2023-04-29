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
  
