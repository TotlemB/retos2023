function invertirCaracterNoEspecial(arreglo) {
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
    return arregloReverse;
  }
  
  //Valores de prueba
  console.log(invertirCaracterNoEspecial(['h', 't', 'u', 'f', '*', '%', '&', 'a']));
