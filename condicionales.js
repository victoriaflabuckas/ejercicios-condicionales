//1 Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error.

let  medidametro  =  parseFloat ( prompt ( "Ingrese medida en metros" ));
if  ( isNaN ( medidametro )){
    alert("El dato ingresado no es válido, por favor ingrese un valor numérico");
} mas ; {
    const  medidacentimetro  =  100 ;
    const  medidapies  =  3.281 ;
    const  medidapulgadas  =  39.37 ;

    let  centimetro  =  medidametro  *  medidacentimetro ;
    let tartas  =  medidametro  *  medidapies ;
    let  pulgadas  =  medidametro  *  medidapulgadas ;

    consola . log ( "Tartas:"  +  tartas ) ;
    consola . log ( "Centímetros:"  +  centimetro ) ;
    consola . log ( "Pulgadas:"  +  pulgadas ) ;
}

/* //2 Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor.

let  edad  =  parseInt ( prompt ( "Ingrese su edad" ) ) ;
si  ( edad  <  18 ); { 
    alert ( "Usted es menor de edad" ) ;
}  más ; {
    alert ( "Usted es mayor de edad" ) ;
} */

/* //3 Contexto: Una panaderia. Solicitar al usuario la variedad de café en un solo input. Luego preguntar si quiere con leche o sin. Si dice Sí, mostrar el valor del café con leche 140 con el pedido completo: “Su café con leche….  cuesta $ 140 ”. En caso de que no la requiera, será lo mismo pero sin leche y el valor es de $ 120.

let  cafe  =  prompt ( "¿Qué café desea?" ) ;
let  leche  =  prompt ( "¿Desea agregarle café? (si / no)" ) ;
if  ( leche  ===  "si" )  {
    alert ( "Su café"  +  cafe  +  "con leche cuesta $ 140" ) ;
}  más ; {
    alert ( "Su cafe"  +  cafe  +  "sin leche cuesta $ 120" ) ;
}
 */
/* //4 Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número obtenido es par o impar.

let  num1  =  parseInt ( prompt ( "Ingrese un número" ) ) ;
let  num2  =  parseInt ( prompt ( "Ingrese otro número" ) ) ;
let  suma=  num1  +  num2 ;
consola . log ( suma ) ;
alerta ( suma ) ;
si  ( suma  %  2  ===  0 ) ; {
    consola . log ( "El número es Par" ) ;
    alert ( "El número resultante es Par" ) ;
}  más ; {
    consola . log ( "El número es Impar" ) ;
    alert ( "El número es Impar" ) ;
}
 */

/* //5 Solicitar al usuario un número e indicar si es positivo, negativo o cero. * /

let  num  =  parseInt ( prompt ( "Ingrese un número" ) ) ;
if  ( num  >= 1 )  {
    alert ( "El número ingresado es positivo" ) ;
}  más ; si  ( num  <=  - 1 ) ; {
    alert ( "El número ingresado es negativo" ) ;
}  más ; {
    alerta ( "El número ingresado es cero" ) ;
}
 */

/* //6 Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

let  monto  =  parseFloat ( prompt ( "Ingrese un monto" ) ) ;
si  ( monto  >  3500 ) ; {
    monto  =  monto  -  ( monto  *  0.1 ) ; 
    alert ( "El total con su 10% de descuento a pagar es: $"  +  monto ) ;
}  mas ; {
    alert ( "Para acceder al descuento debe superar los $ 35000, por lo que su total a pagar es: $"  +  monto ) ;
} */

/* //7 Solicitar al usuario que ingrese una cadena de texto y luego una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)

let  texto  =  prompt ( "Ingrese un texto" ) ;
let  posicion  =  parseInt ( prompt ( "Ingrese una posición (número)" ) ) ;
let  posiciontexto  =  texto . charAt ( posicion ) ;  // Lo obtengo para ver de que caracter se trata la posición.
if  ( posiciontexto  ===  "a"  ||  posiciontexto  ===  "e"  ||  posiciontexto  ===  "i"  ||  posiciontexto  ===  "o"  ||  posiciontexto  ===  "u" )  {
    alerta ( "El dígito de la s posición"  +  posicion  +  "ingresada Es Una vocal y corresponde a la letra:"  +  posiciontexto ) ;
}  más ; {
    alerta ( "El dígito de la s posición"  +  posicion  +  "ingresada no Es Una vocal y corresponde al caracter:"  +  posiciontexto ) ;
}
 */

/* //8 Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 respondedor: Aplazado, si está entre 4 y 5 respondedor: Reprobado, y 6 o más aprobado.

let  nota  =  parseInt ( prompt ( "Ingrese una nota del 1 al 10" ) ) ;
if  ( nota  >=  1  &&  nota  <=  3 )  {
    alert ( "El alumno se encuentra aplazado" ) ;
}  más ; si ( nota  ===  4  ||  nota  ===  5 ) ; {
    alert ( "El alumno se encuentra reprobado" ) ;
} if  ( nota  >=  6  &&  nota  <=  10 )  {
    alert ( "El alumno se encuentra aprobado" ) ;
}  más ; {
    alert ( "La nota ingresada no es del 1 al 10" ) ;
}
 */

/* //9 Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

let  num1  =  parseInt ( prompt ( "Ingrese número 1" ) ) ;
let  num2  =  parseInt ( prompt ( "Ingrese número 2" ) ) ;
if  ( num1  >  num2 )  {
    alerta ( "El número"  +  num1  +  "es mayor que"  +  num2 ) ;
}  más ; si  ( num2  >  num1 ) ; {
    alerta ( "El número"  +  num2  +  "es mayor que"  +  num1 ) ;
}  más ; {
    alert ( "Los números"  +  num1  +  "y"  +  num2  +  "son iguales" ) ;
} */

/* //10 Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.

let  nromes  =  parseInt ( prompt ( "Ingrese un mes del 1 al 12" ) ) ;
switch  ( nromes )  {
    case 1 : 
        alert ( "El mes de enero tiene 31 días" ) ;
        romper ;
    case  2 :
        alert ( "El mes de febrero tiene 28/29 días" ) ;
        romper ;
    case  3 :
        alert ( "El mes de Marzo tiene 31 días" ) ;
        romper ;
    case  4 :
        alert ( "El mes de Abril tiene 30 días" ) ;
        romper ;
    case  5 :
        alert ( "El mes de Mayo tiene 31 días" ) ;
        romper ;
    case  6 :
        alert ( "El mes de junio tiene 30 días" ) ;
        romper ;
    case  7 :
        alert ( "El mes de Julio tiene 31 días" ) ;
        romper ;
    case  8 :
        alert ( "El mes de Agosto tiene 31 días" ) ;
        romper ;
    case  9 :
        alert ( "El mes de Septiembre tiene 30 días" ) ;
        romper ;
    case  10 :
        alert ( "El mes de Octubre tiene 31 días" ) ;
        romper ;
    case  11 :
        alert ( "El mes de Noviembre tiene 30 días" ) ;
        romper ;
    case 12 :
        alert ( "El mes de Diciembre tiene 31 días" ) ;
        romper ;
    defecto :
        alert ( "Debe ingresar un nro de mes válido. (Del 1 al 12)" ) ;
} */

/* //11 Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.

let  num1  =  parseInt ( prompt ( "Ingrese el primer número" ) ) ;
let  num2  =  parseInt ( prompt ( "Ingrese el segundo número" ) ) ;
let  num3  =  parseInt ( prompt ( "Ingrese el tercer número" ) ) ;

if  ( num1  >  num2  &&  num1  >  num3 )  {
    alert ( "El mayor de los 3 números ingresados ​​es:"  +  num1 ) ;
}  else  if  ( num2  >  num1  &&  num2  >  num3 )  {
    alert ( "El mayor de los 3 números ingresados ​​es:"  +  num2 ) ;
}  más ; {
    alert ( "El mayor de los 3 números ingresados ​​es:"  +  num3 ) ;
}
 */

/* //12 Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto.

let  edad  =  parseInt ( prompt ( "Ingrese su edad" ) ) ;
let  bebida  =  prompt ( "Ingrese su bebida: Puede ser cerveza, jugo o agua" ) ;
let  costo  =  0 ;
 const cerveza = 180 ;
 const jugo  =  120 ;
 const agua  =  70 ;

if  ( bebida  ===  "cerveza"  &&  edad  <  18 )  {
    alert ( "Usted es menor, no puede comprar alcohol" ) ;
}  más ; {
    if  ( bebida  ===  "cerveza" )  {
        alerta ( "El cerveza cuesta: $"  +  cerveza ) ;
        costo  =  cerveza ;
    }  else  if  ( bebida  ===  "jugo" )  {
        alert ( "El jugo cuesta: $"  +  jugo ) ;
        costo  =  jugo ;
    }  else  if  ( bebida  ===  "agua" )  {
        alert ( "El agua cuesta: $"  +  agua ) ;
        costo  =  agua ;
    }

    let  abona =  parseInt ( prompt ( "¿Con cuánto dinero va a abonar?" ) ) ;
    let  vuelto  =  0 ;
    if  ( abona  <  costo )  {
        alerta ( "usted abonó: $"  +  abona  +  "es menor a: $"  +  costo  +  "que es el costo de tu"  +  bebida ) ;
    }  más ; {
        vuelto  =  abona  -  costo ;
        alert ( "Su vuelto es: $"  +  vuelto ) ;
    }
} */

/* //13 Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).

let  nummes  =  parseInt ( prompt ( "Ingrese un mes del 1 al 12" ) ) ;
switch  ( nummes )  {
    case  1 :
        alert ( "El mes ingresado corresponde a Enero" ) ;
        romper ;
    case  2 :
        alerta ( "El mes ingresado corresponde a Febrero" ) ;
        romper ;
    case  3 :
        alerta ( "El mes ingresado corresponde a Marzo" ) ;
        romper ;
    case  4 :
        alert ( "El mes ingresado corresponde a Abril" ) ;
        romper ;
    case  5 :
        alert ( "El mes ingresado corresponde a Mayo" ) ;
        romper ;
    case  6 :
        alert ( "El mes ingresado corresponde a Junio" ) ;
        romper ;
    case  7 :
        alert ( "El mes ingresado corresponde a Julio" ) ;
        romper ;
    case  8 :
        alerta ( "El mes ingresado corresponde a Agosto" ) ;
        romper ;
    case  9 :
        alerta ( "El mes ingresado corresponde a Septiembre" ) ;
        romper ;
    case  10 :
        alerta ( "El mes ingresado corresponde a Octubre" ) ;
        romper ;
    case  11 :
        alert ( "El mes ingresado corresponde a Noviembre" ) ;
        romper ;
    case  12 :
        alerta ( "El mes ingresado corresponde a Diciembre" ) ;
        romper ;
    defecto :
        alert ( "Debe ingresar un nro de mes válido. (Del 1 al 12)" ) ;
} */
