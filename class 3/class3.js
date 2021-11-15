
//CONSIGNA N1
 let number = (parseInt (prompt ("ESCRIBA EL RESULTADO DE 151X10")))
 if (number ==1510) {
     alert("FELICIDADES, USTED RESOLVIO EL CALCULO") 
 }
 else {
     alert ("ESE NO ES EL RESULTADO. SIGA INTENTADOLO")
 }







//CONSIGNA N1
for (i=1;i<=3;i++) {
 let number = (parseInt (prompt ("ESCRIBA UN NUMERO")))
 let number2 = (parseInt(prompt ("ESTE NUMERO SE SUMARA CON EL ANTERIOR")))
 let numero= number + number2
  console.log ("SU NUMERO INGRESADO MAS " +number2 + "ES IGUAL A=" +" "+ numero)
}


//CONSIGNA N2
let nombre = (prompt ("INGRESE ALGUN NOMBRE"))
let apellido = prompt ("INGRESE ALGUN APELLIDO")
let nombrecompleto= nombre + " "+ apellido

while (( nombre!= "ESC") || (apellido!="ESC")) {
    alert ("EL NOMBRE COMPLETO ES" +" " + nombrecompleto)

    nombre = prompt ("INGRESE ALGUN NOMBRE - ESC PARA SALIR")
    apellido = prompt ("INGRESE ALGUN APELLIDO - ESC PARA SALIR" )
    nombrecompleto= nombre + " "+ apellido  
}



//CONSIGNA 3

let texto= prompt ("INGRESE UN TEXTO")
let repeticiones= parseInt (prompt ("INGRESE LA CANTIDAD DE VECES QUE DESEA REPETIRLO"))
for (i=0;i<repeticiones; i++) {
  console.log ("el texto ingresado es:",texto,i,"se repite: ",repeticiones, )

}






    
