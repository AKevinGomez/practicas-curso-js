// no puede haber nada por fuera de la clase 4

// -Variables, conts

// -Arrays

// -Minimo 3 funciones CON parametros

// -Todo integramente con console,
//  prompt y alert, NADA de dom,
//  eventos ni excedente de clases futuras

// -Minimo 1 condicional

// -Minimo 1 ciclo (for/while)

// -script en head con defer (clase 1)

// -Se entrega via github

//supermercado

const listaDeCompras = ["Tomate", "Leche", "Gaseosa", "Papas fritas", "Galletitas dulces", "Huevos", "1 Kg de pan"];
const productos = [
    { nombre: "Tomate", precio: 5 },
    { nombre: "Leche", precio: 15 },
    { nombre: "Gaseosa", precio: 30 },
    { nombre: "Papas fritas", precio: 25 },
    { nombre: "Galletitas dulces", precio: 20 },
    { nombre: "Huevos", precio: 10 },
    { nombre: "1 kg de pan", precio: 12 }
];
const saldoDisponible = 100;

alert("Llegas a la caja del supermercado!");
const compraUser = prompt(`Necesitas comprar lo siguiente: ${listaDeCompras.join(", ")} y dispones de $${saldoDisponible}. Presiona '1' para llevar todo a la caja 1 o pulsa '2' para cambiar a la caja 2.`);

function caja1() {
    alert("Ingresando a la caja 1...")
    if (Number(compraUser) === 1) {
        let productosRegistrados = [];
        let preciosRegistrados = [];
        let saldoAGastar = 0;
        for (let producto of productos) {
            productosRegistrados.push([producto.nombre, producto.precio].join(" $"));
            preciosRegistrados.push(producto.precio);
        }
        for (let i = 0; i < preciosRegistrados.length; i++) {
            saldoAGastar += Number(preciosRegistrados[i]);
        }
        while (saldoAGastar > 100) {
            saldoCaja1 = saldoAGastar;
            alert(`Oh no! Nos faltan $${saldoAGastar - saldoDisponible} para poder pagar! Ahora el cajero nos quitara algunos productos para poder llegar con el dinero.`)
            saldoAGastar -= preciosRegistrados.pop();
        }
        alert(`Ya pagamos todo! Gastamos $${saldoAGastar} y nos sobro un total de $${saldoCaja1 - saldoDisponible
            }. Recarga la pagina y explora la caja 2, quizas ahi no me pelaban como aca ;(`)
    }
}

function caja2() {
    alert("Ingresando a la caja 2...")
    let productosRegistrados = [];
    let preciosRegistrados = []
    let saldoAGastar = 0;
    let descuentoSecreto = 0.75; //75% de descuento
    let saldoConDescuento;

    for (let producto of productos) {
        productosRegistrados.push([producto.nombre, producto.precio].join(" $"));
        preciosRegistrados.push(producto.precio);
    }
    for (let i = 0; i < preciosRegistrados.length; i++) {
        saldoAGastar += Number(preciosRegistrados[i]);
    }
    while (saldoAGastar > 100) {
        alert(`Oh no, son $${saldoAGastar}! Nos faltan $${saldoAGastar - saldoDisponible} para poder pagar!`);
        alert(`Sin embargo...`);
        alert(`El chico de la caja resulto ser mi amigo de la infancia y me ofrecio un descuento del ${descuentoSecreto * 100}% !!!`);
        saldoConDescuento = saldoAGastar * descuentoSecreto;
        alert(`Ya pagamos todo! Gastamos un total de $${saldoConDescuento}, de no haber sido por mi amigo, habriamos gastado unos $${saldoAGastar} !! Encima nos sobro un total de $${saldoDisponible - saldoConDescuento}. Recarga la pagina y explora la caja 1. Tal vez hayamos tenido mas suerte ahi!!`)
        saldoAGastar = saldoConDescuento;
    }
}

let decision = true;
while (decision === true) {
    if (Number(compraUser) === 1) {
        caja1();
        decision = false
    } else if (Number(compraUser) === 2) {
        caja2()
        decision = false
    } else {
        alert("No elegiste ninguna opcion, recarga la pagina.");
        decision = false
    }
}

// while(saldoAGastar > 100){
//             alert(`Oh no! Parece que nos sale mas caro de lo esperado por una diferencia de $${saldoAGastar - saldoDisponible}`)
//             const decision = prompt(`Tenemos que dejar algunos productos, aqui esta la lista de los productos que fueron registrados en la caja: ${productosRegistrados.join(" // ")}. Escribe el nombre del producto que deseas eliminar (por ejemplo, tipea: 'Leche' para eliminar.)`)

//             if(decision === ){
//                 break
//             }
//         }