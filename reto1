function paresNumerosCercanos (arregloF,numero){
    //Se definen las variables
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
                if(Math.abs(valor-numero) >= Math.abs(numeroCerca-numero) && Math.abs(valor-numero) < Math.abs(valorAnterior-numero)){
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
    return [paresCercanos,paresCercanos2]; //retorna un array con las parejas de val cercanos
}
//valores de prueba
valores = paresNumerosCercanos([1,2,3,4,5,6,7,8],6)
console.log(valores[0],valores[1]);

