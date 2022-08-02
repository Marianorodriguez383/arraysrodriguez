let bebidas = [{
        nombre: "Coca-cola",
        precio: 10,
        enStock: 10
    },
    {
        nombre: "Pepsi",
        precio: 10,
        enStock: 10
    },
    {
        nombre: "Manaos",
        precio: 10,
        enStock: 10
    },
    {
        nombre: "Agua",
        precio: 10,
        enStock: 24
    },
]

let ordenar
let total
let orden
let dineroEnBilletera = 100
const menu = bebidas.reduce((acc, curr, ) => acc + "" + curr.nombre, "")

do {
    alert("Menu: " + menu)
    alert("Coins disponibles: $ " + dineroEnBilletera)
    orden = prompt("Opcion 1: Coca-Cola, Opcion 2: Pepsi, Opcion 3: Manaos, Opcion 4: Agua")
    if (orden == 1) {
        alert("Valor: $" + bebidas[0].precio)
        ordenar = parseInt(prompt("¿Cuantas quiere solicitar?"))
        dineroEnBilletera = dineroEnBilletera - parseInt(bebidas[0].precio * ordenar)
        if (ordenar <= bebidas[0].enStock) {
            total = parseInt(alert("El total seria: $" + bebidas[0].precio * ordenar))
            console.log(`El pedido es: ${bebidas[0].nombre}, cantidad ${bebidas[0].enStock - ordenar}`)
            console.log(`Stock disponible de ${bebidas[0]} es ${bebidas[0].enStock - ordenar}`)
        } else if (ordenar >= bebidas[0].enStock) {
            alert("No se puede realizar la operación por falta de stock - pedimos disculpas !")
            break

        }
    }else if (orden == 2) {
        alert("valor por unidad: $" + bebidas[1].precio)
        ordenar = parseInt(prompt("unidades que desea ordenar?"))
        dineroEnBilletera = dineroEnBilletera - parseInt(bebidas[1].precio * ordenar)
        if (ordenar <= bebidas[1].stock) {
            total = parseInt(alert("El total seria: $" + bebidas[1].precio * ordenar))
            console.log(`El pedido es: ${bebidas[1].nombre}, cantidad ${ordenar} con un valor de $${bebidas[1].precio * ordenar}`)
            console.log(`stock restante de ${bebidas[1].nombre} es ${bebidas[1].enStock - ordenar}`)
        } else if (ordenar >= bebidas[1].enStock) {
            alert("la operacion no puede ser procesada por falta de stock")
            break

        }


    }else if (orden == 3) {
        alert("valor por unidad: $" + bebidas[2].precio)
        ordenar = parseInt(prompt("¿Cuantas unidades que desea ordenar?"))
        dineroEnBilletera = dineroEnBilletera - parseInt(bebidas[2].precio * ordenar)
        if (ordenar <= bebidas[2].enStock) {
            total = parseInt(alert("el total seria: $" + bebidas[2].precio * ordenar))
            console.log(`el pedido es: ${bebidas[2].nombre}, cantidad  ${ordenar} con un valor de $${bebidas[2].precio * ordenar}`)
            console.log(`stock restante de ${bebidas[2].nombre} es ${bebidas[2].enStock - ordenar}`)
        } else if (ordenar >= bebidas[2].enStock) {
            alert("la operacion no puede ser procesada por falta de stock")
            break
        }
    }else if (orden == 4) {
        alert("valor por unidad: $" + bebidas[3].precio)
        ordenar = parseInt(prompt("¿Cuantas unidades que desea ordenar?"))
        dineroEnBilletera = dineroEnBilletera - parseInt(bebidas[3].precio * ordenar)
        if (ordenar <= bebidas[3].enStock) {
            total = parseInt(alert("el total seria: $" + bebidas[2].precio * ordenar))
            console.log(`el pedido es: ${bebidas[3].nombre}, cantidad  ${ordenar} con un valor de $${bebidas[3].precio * ordenar}`)
            console.log(`stock restante de ${bebidas[3].nombre} es ${bebidas[3].enStock - ordenar}`)
        }else if (ordenar >= bebidas[3].enStock) {
            alert("la operacion no puede ser procesada por falta de stock")
            break
        }
    }

    alert("dinero restante: $" + dineroEnBilletera)


} while (confirm("realizar otro pedido?") && dineroEnBilletera > 1) {
    alert("operacion cancelada o dinero insuficiente")

}
















