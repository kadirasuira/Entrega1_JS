/* JUEGO DE ADIVINANZA DE NÚMERO, EL PROGRAMA GENERARÁ UN NÚMERO ALEATORIO DEL 1 AL 50, TENDRÁS CUATRO INTENTOS, 
    PARA AYUDARTE EL PROGRAMA TE DARÁ PISTAS, PODRÁS ELEGIR 3 PISTAS POR PARTIDA.


    PISTAS DE MAYOR O MENOR : Te dirá si el número es mayor o menor al que pusiste
    PISTA CALIENTE Y FRIO : El juego te dirá un rango aleatorio de dónde se encuentra el número.
    PISTA DEL PAR O NOPAR: El juego te dirá si es Par o no.

*/ 


const numAleatorio = Math.floor(Math.random() * 50) + 1;

function menu(){
    alert("¡Bienvenido a Adivina el Número!");

    let opcion = parseInt(prompt("MENU DEL JUEGO \n 1. Empezar a Jugar \n 2. Instrucciones del Juego \n INGRESE EL NÚMERO DE LA OPCION:"));

    if (opcion == 1){
        juego_adivinar();
    }
    else if (opcion == 2){
        instrucciones();
    }
    else{
        alert("Porfavor introduce una opción válida del Menú (Número)");
        menu();
    }
}

function instrucciones(){
    alert("Intrucciones de Adivina el Número \n Tendrás que adivinar el número aleatorio del 1 al 50, tienes sólo 5 intentos.");
    alert("Podrás elegir 2 pistas y no podrás repetirla: PISTA DE PAR O NON, PISTA DE FRIO O CALIENTE, PISTA DE MAYOR O MENOR");

    let opcion = parseInt(prompt("¡BUENA SUERTE! \n 1. Empezar a Jugar \n 2.Regresar a Menú \n INGRESE EL NÚMERO DE LA OPCION:"));

    if (opcion == 1){
        juego_adivinar();
    }
    else if (opcion == 2){
        menu();
    }
    else{
        alert("Opción incorrecta, se le enviará al Menú....");
        menu();
    }
}

function juego_adivinar(){
    let intentos = 0;
    let intentos_MAX = 5;
    let adivinado = false;

    alert("Ya pensé en mi número, intenta adivinarlo ;)")

    while ((adivinado == false)){
        let intento_adiv = parseInt(prompt("Introduce el Número que crees que sea"));

        if ((isNaN(intento_adiv)) || (intento_adiv>50)){
            alert("Por favor ingresa un número válido del 1 al 50")
        }
        else{
            intentos++;
            
            if(intento_adiv == numAleatorio){
                adivinado = true;
                alert("¡Felicidades! HAZ GANADOOOO");
                alert("El Juego se cerrará...")

            }
            else if (intentos == intentos_MAX){
                alert("Ya utilizaste tu última vida :( \n Perdiste");
                alert("El número en mente era: "+numAleatorio);
                break;

            }
            else{
                alert("No es este número, mala suerte, intenta de nuevo.");
                

                while(true){
                    let opcion_pista = parseInt(prompt("Elige una pista: \n 1. PISTA DE PAR O NON \n 2.PISTA DE MAYOR O MENOR \n 3. PISTA DE FRIO O CALIENTE \nINGRESE EL NÚMERO DE LA OPCION:"));
                
                    switch(opcion_pista){
                        case 1:
                            alert("Has elegido la PISTA DE PAR O NON.");
                            
                            if (numAleatorio % 2 == 0){
                                alert("El número que tengo en mente es un número PAR \n El número que eligiste es: "+intento_adiv);
                            }
                            else{
                                alert("El número que tengo en mente NO es un número PAR \n El número que eligiste es: "+intento_adiv);
                            }
                            break;

                        case 2:
                            alert("Has elegido la PISTA DE MAYOR O MENOR.");
                            if(intento_adiv>numAleatorio){
                                alert("El número: "+intento_adiv+" es Mayor al número que tengo en mente.");
                            }
                            else{
                                alert("El número: "+intento_adiv+" es Menor al número que tengo en mente.");
                            }
                            break;

                        case 3:
                            alert("Has elegido la PISTA DE FRIO O CALIENTE.");
                            const diferencia = Math.abs(numAleatorio - intento_adiv);
                            if (diferencia <= 5 ){

                                let rango_min = intento_adiv - 5;
                                let rango_max = intento_adiv+5;

                                if (rango_min<0){
                                    rango_min = 0;
                                }
                                if (rango_max>50){
                                    rango_max =50;
                                }
                

                                alert("Estás súper caliente, el número que pienso puede que esté en este rango ("+rango_min+","+rango_max+")\n El número que eligiste es: "+intento_adiv);
                            }
                            else if ((diferencia>5) && (diferencia <=10)){
                                let rango_min_c = intento_adiv - 10;
                                let rango_max_c = intento_adiv+10;

                                if (rango_min_c<0){
                                    rango_min_c = 0;
                                }

                                if (rango_max_c>50){
                                    rango_max_c =50;
                                }


                                alert("Estás caliente, el número que pienso puede que esté en este rango ("+rango_min_c+","+rango_max_c+")\n El número que eligiste es: "+intento_adiv);

                            }
                            else if ((diferencia>10) && (diferencia <=20)){
                                let rango_min_f = intento_adiv - 20;
                                let rango_max_f = intento_adiv+20;

                                if (rango_min_f<0){
                                    rango_min_f = 0;
                                }

                                if (rango_max_f>50){
                                    rango_max_f =50;
                                }

                                alert("Estás frío, el número que pienso puede que esté en este rango ("+rango_min_f+","+rango_max_f+")\n El número que eligiste es: "+intento_adiv);
                            }
                            else{
                                let rango_min_sf = intento_adiv - 50;
                                let rango_max_sf = intento_adiv + 50;

                                if (rango_min_sf<0){
                                    rango_min_sf = 0;
                                }

                                if (rango_max_sf>50){
                                    rango_max_sf=50;
                                }

                                alert("Estás congelado, el número que pienso puede que esté en este rango ("+rango_min_sf+","+rango_max_sf+")\n El número que eligiste es: "+intento_adiv);
                            }
                            break;

                        default:
                            alert("Opción no válida. Por favor, elige una opción válida del menú de pistas.");
                            continue;
        
                    }
                    break;
                }
            }
        }
    }
    

    
}

menu();