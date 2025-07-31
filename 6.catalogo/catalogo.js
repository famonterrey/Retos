let catalogo = []; //1.Declaro un arreglo vacío

function agregarProducto(nombre,precio){ //2Función de declaración con la que agregamos un producto al catálogo
    catalogo.push({nombre: nombre, precio: precio});
    console.log("Producto " + nombre + " agregado");
}

const eliminarProducto = function(nombre){
    const index = catalogo.findIndex(catalogo => catalogo.nombre === nombre);
    if (index !== -1){
        catalogo.splice(index,1);
        console.log("Producto " + nombre + " eliminada");
    } else {
        console.log("Producto " + nombre + " no encontrado");
    }
};

const buscarProducto = function(nombre){
    const index = catalogo.findIndex(catalogo => catalogo.nombre === nombre);
    if (index !== -1){
        console.log("Producto " + nombre + " encontrado");
    } else {
        console.log("Producto " + nombre + " no encontrado")
    }
}; 

const mostrarProducto = () => {
    console.log("Productos en el catálogo:");
    catalogo.forEach(catalogo => {
        console.log(`- Nombre: ${catalogo.nombre} | Precio: ${catalogo.precio} `);
    });
};


function menu(){
    let aux = true;
    while(aux === true){
        let opcion = prompt("¿Qué deseas hacer? ¿Agregar, Eliminar, Buscar, Mostrar'");
        switch(opcion){
            case "agregar":
                let nombre = prompt("ingresa nombre").toLowerCase(); //Recuerda siempre agregar () para toLowerCase
                let precio = parseInt(prompt("ingresa precio"));
                agregarProducto(nombre,precio);
                break;
            case "eliminar":
                let nombreEliminar = prompt("ingresa el nombre del producto a eliminar").toLowerCase();
                eliminarProducto(nombreEliminar);
                break;
            case "buscar":
                let nombreBuscar = prompt("ingresa el nombre del producto a buscar").toLowerCase();
                buscarProducto(nombreBuscar);
                break;
            case "mostrar":
                mostrarProducto();
                break;
            default:
                alert("Opción no existe");
        }

        let continuar = prompt("¿Deseas hacer algo más? Si o No").toLowerCase();
        if (continuar === "si"){
            aux = true;
        } else {
            aux = false;
        }
    }    
}

menu();