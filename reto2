function anagrama(texto1, texto2) {
    // Usando replace para eliminar espacios y la funcion toLowerCase para convertir a minúsculas
    // para que las letras sean detecatdas como iguales
    texto1 = texto1.replace(/\s/g, '').toLowerCase();
    texto2 = texto2.replace(/\s/g, '').toLowerCase();
    if (texto1.length !== texto2.length) {
      return false;
    } //se debe usar la misma cantidad de letras
    let arreglo1 = texto1.split('').sort();
    let arreglo2 = texto2.split('').sort();
    //si en algun punto del arreglo no se cumple la condicion se retorna falso
    for (let i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] !== arreglo2[i]) {
        return false;
      }
    }
    return true;
  }
//val de prueba
  x = anagrama("Istmo de Panama","Tio Sam me da pan");
  console.log(x)
