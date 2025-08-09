class Libro {
  // Implementa la clase Libro aquí
  constructor (titulo,autor,anio){
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.disponible = true;
  }
}

class Biblioteca {
  // Implementa la clase Biblioteca aquí
  constructor(libros = []){
    this.libros = libros;
  }
  agregarLibro(libro){
    this.libros.push(libro);
    console.log(`Se agregó el libro ${libro.titulo}`);  
  }
  buscarPorTitulo(titulo){
    console.log("Títulos buscados en la biblioteca");
    this.libros.forEach(p => {
        const estado = p.disponible ? "Disponible" : "No disponible";
        if (p.titulo.trim().toLowerCase() === titulo.trim().toLowerCase()){
        console.log(`Título: ${p.titulo} de ${p.autor} del año ${p.anio} - ${estado}`);
        }
    })
  }
  prestarLibro(titulo){
    const index = this.libros.findIndex(p => p.titulo === titulo);
    if (index !== -1){
        this.libros[index].disponible = false;
        console.log(`Libro ${titulo} prestado`);
    } else {
        console.log(`Libro ${titulo} no encontrado`);
    }
  }


}

class LibroInfantil extends Libro {
  // Implementa la clase LibroInfantil aquí
  constructor (titular, autor, anio, edadMinima){
    super(titular,autor,anio);
    this.edadMinima = edadMinima;
  }

}

// Crear libros
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const libro2 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943);
const libro3 = new Libro("Don Quijote", "Miguel de Cervantes", 1605);

// Crear libro infantil
const libroInfantil1 = new LibroInfantil("Matilda", "Roald Dahl", 1988, 8);

// Crear biblioteca y agregar libros
const miBiblioteca = new Biblioteca();
miBiblioteca.agregarLibro(libro1);
miBiblioteca.agregarLibro(libro2);
miBiblioteca.agregarLibro(libro3);
miBiblioteca.agregarLibro(libroInfantil1);

// Buscar por título (debería mostrar disponible)
miBiblioteca.buscarPorTitulo("Matilda");

// Prestar un libro infantil
miBiblioteca.prestarLibro("Matilda");

// Buscar por título nuevamente (debería mostrar no disponible)
miBiblioteca.buscarPorTitulo("Matilda");

// Buscar por título de un libro normal
miBiblioteca.buscarPorTitulo("El principito");

// Prestar un libro normal
miBiblioteca.prestarLibro("El principito");

// Buscar por título nuevamente (debería mostrar no disponible)
miBiblioteca.buscarPorTitulo("El principito");

// Intentar prestar un libro que no existe
miBiblioteca.prestarLibro("Harry Potter");