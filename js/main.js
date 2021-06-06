var valora;
var valorb;
var operacion;

function calculadora(){

    var pantalla = document.getElementById("pantalla");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");
    var clear = document.getElementById("clear");
    var igual = document.getElementById("igual");

// eventos numeros

    uno.onclick = function(e){

        pantalla.textContent = pantalla.textContent + "1";
    }
    
    dos.onclick = function(e){
    
        pantalla.textContent = pantalla.textContent + "2";
    }
    tres.onclick = function(e){
    
        pantalla.textContent = pantalla.textContent + "3";
    }
    cuatro.onclick = function(e){
    
        pantalla.textContent = pantalla.textContent + "4";
    }
    cinco.onclick = function(e){
    
        pantalla.textContent = pantalla.textContent + "5";
    }
    seis.onclick = function(e){
    
        pantalla.textContent = pantalla.textContent + "6";
    }
    siete.onclick = function(e){
    
        pantalla.textContent = pantalla.textContent + "7";
    }
    
    ocho.onclick = function(e){
    
        pantalla.textContent = pantalla.textContent + "8";
    }
    
    nueve.onclick = function (e){
    
        pantalla.textContent = pantalla.textContent + "9";
    }
    

    cero.onclick = function (e){
    
        pantalla.textContent = pantalla.textContent + "0";
    }

    // Operaciones
    sumar.onclick = function(){
    
        valora = pantalla.textContent;
        operacion = "+";
        limp();
    }
   
    restar.onclick = function(){
    
        valora = pantalla.textContent;
        operacion = "-";
        limp();
    }

    multiplicar.onclick = function(){
    
        valora = pantalla.textContent;
        operacion = "*";
        limp();
    }

    dividir.onclick = function(){
    
        valora = pantalla.textContent;
        operacion = "/";
        limp();
    }

    clear.onclick = function() {
        resetear();
        
    }

    igual.onclick = function(){
        valorb = pantalla.textContent;
        solucion();

    }
    

}

// funciones



function limp() {
    pantalla.textContent = "";
}
    
    
    
function resetear(){
    pantalla.textContent = "";
    valora = 0;
    valorb = 0;
    operacion = "";
}

function solucion() {
    var resultado = 0;
    switch (operacion) {
    case "+":
        resultado  = parseFloat(valora) + parseFloat(valorb);
        break;

        case "-":
        resultado  = parseFloat(valora) - parseFloat(valorb);
        break;

        case "*":
        resultado  = parseFloat(valora) * parseFloat(valorb);
        break;

        case "/":
        resultado  = parseFloat(valora) / parseFloat(valorb);
        break;

    default:
        break;
}
pantalla.textContent = resultado
}