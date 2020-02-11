const nombreTienda = "Catyland"; 
const nombreProducto1 = "oink oink (Alimento para gatos por 3kg)";
const nombreProducto2 = "Pampers (Piedritas sanitarias para gatos por 3kg)";
const precioProducto1 = Number("500");
const precioProducto2 = Number("300");
const codigoDeDescuento = "soymamádeungato";
const valorDeDescuento = Number("200");
let unidadescompra1 = Number('0');
let unidadescompra2 = Number('0');
let precioFinalTarjeta = Number('0');
let detalleDeCompra = ''; 
let detalleFinal = ''; 
let precioTotal = 0;
let codigoIngresado = '';

//1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta

const nombreclienta = prompt(`¡Bienvenida a la tienda online de ${nombreTienda}! Ingresá tu nombre:`);

//2. Mostrarle los productos en promoción (2 productos)

alert(`${nombreclienta} ${nombreTienda} tiene dos promos para vos:
-${nombreProducto1} por solo $${precioProducto1}
-${nombreProducto2} por solo $${precioProducto2}`);

//3. Preguntarle si quiere comprar el producto 1.
   //a. Si acepta preguntar cuántas unidades va a llevar

const compra1 = confirm(`Queres llevar ${nombreProducto1} por solo $${precioProducto1}`);
if (compra1) {
    unidadescompra1 = prompt("¿Cuantas unidades queres comprar?");
}

//4. Preguntarle si quiere comprar el producto 2.
   //a. Si acepta preguntar cuántas unidades va a llevar

const compra2 = confirm(`Queres llevar ${nombreProducto2} por solo $${precioProducto2}`);
if (compra2) {
    unidadescompra2 = prompt("¿Cuantas unidades queres comprar?");
}
//5. Si no quiere llevar ningún producto, terminar el programa y mostrar un saludo de despedida
if (!compra1 && !compra2) {
    alert(`${nombreclienta} gracias por visitar la tienda online de ${nombreTienda}! Te esperamos pronto con más promos para vos!`);
}
//6. Si lleva alguno, mostrar el detalle de la compra con:
   //- subtotales de cada producto (precio x cantidad) 
  // - total (suma de subtotales)

else {
    const precioPorCantidadProducto1 = Number(precioProducto1 * unidadescompra1);
    const precioPorCantidadProducto2 = Number(precioProducto2 * unidadescompra2);
    precioTotal = Number(precioPorCantidadProducto1 + precioPorCantidadProducto2)
    
    detalleDeCompra = `Detalle de tu compra:
    -${nombreProducto1} X ${unidadescompra1} = ${precioPorCantidadProducto1}
    -${nombreProducto2} X ${unidadescompra2} = ${precioPorCantidadProducto2}
   PRECIO TOTAL = `;
    confirm(detalleDeCompra + precioTotal);

    //7. Preguntar si desea abonar con tarjeta de crédito

    const tarjeta = confirm(`${nombreclienta}: ¿Queres pagar con tarjeta de crédito?`);

    //a. Si acepta preguntar en cuántas cuotas desea abonar
        // - Sólo puede pagar en 3, 6 o 12 cuotas

    let cuotas = tarjeta && Number(prompt("¿En cuantas cuotas queres pagar? Podes hacer tu pago en 3, 6 o 12 cuotas"));

    //- Si ingresa un número equivocado, debe continuar el programa como si no utilizara tarjeta de crédito.
    //- 3 cuotas tiene un interés de 5%, 6 de 10% y 12 de 25%
    //8. Mostrar el detalle de la compra con:
    //- subtotales de cada producto (precio x cantidad) 
    //- total (suma de subtotales)
    //- si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar

    if (cuotas === 3) {
        precioFinalTarjeta = precioTotal + precioTotal * 0.05;
        confirm(`En ${cuotas} cuotas tenes un recargo del 5% 
        ${detalleDeCompra}${precioFinalTarjeta}`);   
    }
    else if (cuotas === 6) {
        precioFinalTarjeta = precioTotal + precioTotal * 0.10;
        confirm(`En ${cuotas} cuotas tenes un recargo del 10% 
        ${detalleDeCompra}${precioFinalTarjeta}`);
    }
    else if (cuotas === 12) {
        precioFinalTarjeta =  precioTotal + precioTotal * 0.25;
        confirm(`En ${cuotas} cuotas tenes un recargo del 25% 
        ${detalleDeCompra}${precioFinalTarjeta}`);
    }
    else {
        precioFinalTarjeta = precioTotal;
        cuotas = 1;
        confirm(detalleDeCompra + precioFinalTarjeta); 
    }

    //9. Preguntar si tiene un código de descuento

    const tieneCodigoDescuento = confirm(`¿Tenes el codigo de descuento de ${nombreTienda}?`); 

    //- si dice que sí, pedir que ingrese el código
        //- mostrar si el código ingresado es correcto o incorrecto

    if (tieneCodigoDescuento) {
        codigoIngresado = prompt(`Ingresa el codigo de descuento`);
        if (codigoIngresado === codigoDeDescuento) {
            alert("Código ingresado con exito");
        }
        else {
            alert("Código invalido");
        }
    }

    //10. Mostrar el detalle de la compra con:
    //- subtotales de cada producto (precio x cantidad) 
    //- total (suma de subtotales)
    //- si tiene código y lo ingresó bien, mostrar el descuento y el total final
    //- si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar

    if (codigoIngresado === codigoDeDescuento && tarjeta) {
        precioFinalTarjeta -= valorDeDescuento;
        const valorCuotas = precioFinalTarjeta / cuotas;
        confirm(`Tenes un descuento de $${valorDeDescuento}
        ${detalleDeCompra}${precioFinalTarjeta}
        Vas a pagar ${cuotas} cuotas de $${valorCuotas}`);
    }
    else if (codigoIngresado === codigoDeDescuento && !tarjeta) {
        precioTotal -= valorDeDescuento;
        confirm (`Tenes un descuento de $${valorDeDescuento}
        ${detalleDeCompra}${precioTotal}`);
    }
    else if (tarjeta){
        confirm(`Tu compra en ${cuotas} cuotas 
        ${detalleDeCompra}${precioFinalTarjeta}`);
    }
    else {
        confirm(detalleDeCompra + precioTotal);
    }

    //11. Mostrar un saludo de despedida 

    alert(`${nombreclienta} muchas gracias por visitar la tienda online de ${nombreTienda}.Te esperamos pronto nuevamente para seguir comprando.`);
}