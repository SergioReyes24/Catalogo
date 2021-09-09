let Catalogo = {Lista: [] };    // Declaración de objeto "Catalogo" con un arreglo de propiedad de nombre "Lista"

let Laptop = {Producto: "Laptop", Departamento:"Computacion", Precio: 5000};    // Declaración de objeto "Laptop"
let Pinzas = {Producto: "Pinzas",Departamento:"Herramientas", Precio: 800};    // Declaración de objeto "´Pinzas"
let Ethernet = {Producto: "Ethernet",Departamento:"Cables", Precio: 200};    // Declaración de objeto "Ethernet"
let USB = {Producto: "USB",Departamento:"Telefonia", Precio: 300};  // Declaración de objeto "USB"
let Ventiladores = {Producto: "Ventiladores",Departamento:"Electronicos", Precio: 500};  // Declaración de objeto "Ventiladores"
let Nuevo = {}; // Declaración de objeto vacio "Nuevo" para almacenar los datos obtenidos del usuario

Catalogo.Lista = Array(Laptop, Pinzas, Ethernet, USB, Ventiladores);    // Rellena el arreglo "Catalogo.Lista" con los objetos productos

function Producto (departamento, producto, precio, existencia){ // Declaración de la función constructora "Producto" con sus párametros
    this.Departamento = departamento;   // Declaración de propiedad "Departamento" del objeto "Producto" igualado al párametro "departamento"
    this.Producto = producto;   // Declaración de propiedad "Producto" del objeto "Producto" igualado al párametro "producto"
    this.Precio = precio;   // Declaración de propiedad "Precio" del objeto "Producto" igualado al párametro "precio"
    this.Existencia = existencia;   // Declaración de propiedad "Existencia" del objeto "Producto" igualado al párametro "existencia"
    
    this.imprimir = function(){ // Declaración de primer método donde imprime el objeto "Nuevo" que contiene los datos del usuario
        console.log(Nuevo); // Impresión en la consola del objeto "Nuevo"
    }

   this.registro = function(){  // Declaración del segundo método de registro para conocer si existe el producto agregado
    for(i = 0; i < Catalogo.Lista.length; i++){ // Ciclo for que itera siempre y cuando sea menor al total de indices del arreglo "Catalogo.Lista", si se cumple se aumenta el contador en 1
        if(Catalogo.Lista[i] == Nuevo){ // Declación de condicional donde mientras "Nuevo" sea igual que el indice del arreglo "Catalogo.Lista" en las iteraciones del ciclo regresará true = verdadero
            return true;    // Retorna true que es igual a verdadero
        }else{return false;}    // En caso de que no se cumpla la condicional retornará false que es igual a falso
    }
   }
}

function Datos(){   //Función "Datos" que obtiene los valores del formulario al presionar el botón "enviar"
    let departamento = document.getElementById("departamento").value;   // Variable que guarda valores de los departamentos del formulario
    let producto = document.getElementById("productos").value;  // Variable que guarda valores de los productos del formulario
    let precio = document.getElementById("precios").value;  // Variable que guarda valores de los precios del formulario
    let existencia = document.getElementById("existencia").value;   // Variable que guarda valores de la existencia del producto en el formulario

    Nuevo = new Producto(departamento, producto, precio, existencia)    // Variable que guarda y crea un objeto apartir de la clase "Producto" con los datos del formulario
    Catalogo.Lista.push(Nuevo); // El nuevo objeto con los datos del formulario es agregado en el arreglo "Catalogo.Lista"
    console.log(Nuevo)  // Imprime el nuevo objeto para asegurarse de que las propiedades son correctas
}

function Main(){    // Función principal llamada "Main"
    let Arreglo = []    // Declaración de arreglo local vacio llamado "Arreglo"

    for(i = 0; i <= 3; i++){    // Ciclo que se ejecutará 4 veces en total
        Arreglo.push(Nuevo);    // En cada iteración se le agregará el objeto "Nuevo" al arreglo "Arreglo"
    }
}

console.log(Catalogo.Lista) // Impresión del arreglo "Catalogo.Lista" para asegurarse de que guarda los datos correctamente

// Implementar evento y template string para desplegar el resumen del registro

let boton = document.getElementById("registro");    // Variable "boton" que obtiene el elemento "registro" del html

function Registro(){    // Declaración de la función "Registro"
    Catalogo.Lista.forEach(function(element){   // Ciclo foreach del arreglo "Catalogo.Lista"
        let plantilla = `Se registro el producto ${element.Producto} con las siguientes caracteristicas:
        Departamento: ${element.Departamento}
        Precio: ${element.Precio}`; // Variable "plantilla" de tipo template string donde contiene el registro del producto

        console.log(plantilla)  // Impresión en consola de la plantilla de texto
    });
}

boton.addEventListener("click",Registro)    // Evento de click con la función "Registro" añadida a la variable "boton"


/*Lista de cosas de la tienda:

Computadora 14000
Laptop 10000
Impresora 3000
Cámara 2000
Audífonos 10000
Usb 300
Cable 200
Mouse 1000
Aire comprimido 100

*/

