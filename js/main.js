let bebidas = [
    {nombre: "Coca-cola", precio: 10, enStock: 10},
    {nombre: "Pepsi", precio: 10, enStock: 5},
    {nombre: "Manaos", precio: 10, enStock: 12},
    {nombre: "Agua", precio: 10, enStock: 24},
]

let ordenar 
let total
let orden
let dineroEnBilletera = 100
const menu = bebidas.reduce((acc,curr,)=>acc + ""+ curr.nombre, "")

do {
    alert ("Menu: " + menu)
    alert ("Bebida Coins disponibles: $ " + dineroEnBilletera )
    orden = prompt ("Opcion 1: Coca-Cola, Opcion 2: Pepsi, Opcion 3: Manaos, Opcion 4: Agua")
    if (orden == 1){
        alert ("Valor: $" + bebidas[0].valor)
            ordenar = parseInt(prompt("¿Cuantas quiere solicitar?"))
            dineroEnBilletera = dineroEnBilletera - parseInt(bebidas[0].valor * ordenar)
        if(ordenar <= comidas[0].enStock){
            total = parseInt (alert("El total seria: $" + comidas [0].valor * ordenar))
            console.log ('El pedido es: ${comidas[0].nombre} es ${comidas[0].stock - ordenar}')
            console.log ('Stock disponible de ${comidas[0]} es ${comidas [0].stock - ordenar}')
        }else if (ordenar >= comidas [0].enStock){






        }
    }

}while(confirm("realizar otro pedido?") && dineroEnBilletera > 1 ) {
         alert("operacion cancelada o dinero insuficiente")

}


