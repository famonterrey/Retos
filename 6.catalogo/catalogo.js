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
}

const buscarProducto = function(nombre){
    const index = catalogo.findIndex(catalogo => catalogo.nombre === nombre);
    if (index !== -1){
        console.log("Producto " + nombre + " encontrado");
        console.log(catalogo[index])
    } else {
        console.log("Producto " + nombre + " no encontrado")
    }
}; 

function mostarCatalogo(){
    let nombre = prompt("ingresa nombre").toLowerCase(); //Recuerda siempre agregar () para toLowerCase
    let precio = parseInt(prompt("ingresa precio"));
    agregarProducto(nombre,precio);
    console.log(catalogo);
    let nombreEliminar = prompt("ingresa el nombre del producto a eliminar").toLowerCase();
    buscarProducto(nombreEliminar);
    console.log(catalogo);
}

mostarCatalogo();