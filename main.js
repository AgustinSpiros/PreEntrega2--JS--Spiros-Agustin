
class TipoDeCripto{
    constructor (tipo, precio) {
        this.tipo = tipo;
        this.precio = precio; 
    }
}

const BTC = new TipoDeCripto ("BTC", 23753);
const DOGE = new TipoDeCripto ("DOGE",  33.5);
const ETH = new TipoDeCripto ( "ETH", 1640);
const BNB = new TipoDeCripto ("BNB",  315);

const TiposDeCripto = [BTC, DOGE, ETH, BNB];
console.log (TiposDeCripto);

const valorBTC = 23753;
const valorDOGE = 33.5;
const valorETH = 1640;
const valorBNB = 315;



let resultado = 0;
let nombre = prompt("ingrese su nombre"); 
let edad = parseInt(prompt("ingrese su edad"));


while (isNaN(edad)) {
    edad = parseInt(prompt("datos incorrectos, vuelva a ingresar su año de nacimiento "));
}

if (edad > 18) {
    inicio();
} else {
    alert("No puede operar en este sitio")
}



function inicio() {
    let crypto = prompt(nombre + ", " + "ingrese la moneda que quiere comprar ( BTC, DOGE, ETH o BNB )");

    switch (crypto) {
        case "BTC": {
            let montoBTC = prompt("ingrese el monto de BTC que quiere adquirir");
            while (isNaN(montoBTC)) {
                montoBTC = parseInt(prompt("datos incorrectos, ingrese el valor expresado en numeros "));
            }
            resultado = cambioBTC (montoBTC, valorBTC);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese ( si ) para confirmar, ( no ) para cancelar");

            if (montoTotal === "si") {
                alert("Ha comprado" + " " + montoBTC + " " + "BTC, muchas gracias!");
                break;

            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }

                    case "no": {
                        salir();
                        
                    }

                    

                }
            }
        }

        case "DOGE": {
            let montoDOGE = prompt("ingrese el monto de DOGE que quiere adquirir");
            while (isNaN(montoDOGE)) {
                montoDOGE = parseInt(prompt("datos incorrectos, ingrese el valor expresado en numeros "));
            }
            resultado = cambioDOGE(montoDOGE, valorDOGE);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese (si) para confirmar  ( no ) para cancelar");

            if (montoTotal === "si") {
                alert("Ha comprado" + montoDOGE + " " + "DOGE, muchas gracias!");
                break;

            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }
                    case "no": {
                        salir();
                        
                    }

                }
            }
        }

        case "ETH": {
            let montoETH = prompt("ingrese el monto de ETH que quiere adquirir");
            while (isNaN(montoETH)) {
                montoETH = parseInt(prompt("datos incorrectos, ingrese el valor expresado en numeros "));
            }
            resultado = cambioETH(montoETH, valorETH);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese (si) para confirmar ( no ) para cancelar ");

            if (montoTotal === "si") {
                alert("Ha comprado" + montoETH + " " + "ETH, muchas gracias!");
                break;
            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }

                    case "no": {
                        salir();
                        
                    }

                }
            }
        }

        case "BNB": {
            let montoBNB = prompt("ingrese el monto de BNB que quiere adquirir");
            while (isNaN(montoBNB)) {
                montoBNB = parseInt(prompt("datos incorrectos, ingrese el valor expresado en numeros "));
            }
            resultado = cambioBNB(montoBNB, valorBNB);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese (si) para confirmar ( no ) para cancelar");

            if (montoTotal === "si") {
                alert("Ha comprado" + montoBNB + " " + "BNB, muchas gracias!");
                break;
            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }

                    case "no": {
                        salir();
                    }

                }
            }
        }

    }

}






function cambioBTC(valor1, valor2) {
    return (valor1 * valor2);
}

function cambioDOGE(valor1, valor2) {
    return (valor1 * valor2);
}

function cambioETH(valor1, valor2) {
    return (valor1 * valor2);
}

function cambioBNB(valor1, valor2) {
    return (valor1 * valor2);
}

function realizarCambio() {
    monto = resultado;
}

function salir() {
    alert("Gracias, vuelva prontos");
}