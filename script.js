```javascript
// BOTÓN CAMBIAR TÍTULO
document.getElementById("btnTitulo").addEventListener("click", function() {
    let titulo = document.getElementById("titulo");
    titulo.textContent = "¡JavaScript en acción!";
    titulo.style.color = "blue";
});

// MOSTRAR / OCULTAR PÁRRAFO
document.getElementById("btnParrafo").addEventListener("click", function() {
    let p = document.getElementById("parrafo");

    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
});

// VALIDACIÓN FORMULARIO
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    let valido = true;

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorMensaje").textContent = "";
    document.getElementById("exito").textContent = "";

    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio";
        valido = false;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        document.getElementById("errorCorreo").textContent = "Correo inválido";
        valido = false;
    }

    if (mensaje.length < 10) {
        document.getElementById("errorMensaje").textContent = "Mínimo 10 caracteres";
        valido = false;
    }

    if (valido) {
        document.getElementById("exito").textContent = "¡Formulario enviado correctamente!";
    }
});

// PRODUCTOS
let productos = [
    { nombre: "Hamburguesa", categoria: "comida", precio: 15000 },
    { nombre: "Pizza", categoria: "comida", precio: 20000 },
    { nombre: "Audífonos", categoria: "tecnologia", precio: 80000 },
    { nombre: "Mouse", categoria: "tecnologia", precio: 40000 }
];

function mostrarProductos(lista) {
    let ul = document.getElementById("listaProductos");
    ul.innerHTML = "";

    lista.forEach(p => {
        let li = document.createElement("li");
        li.textContent = p.nombre + " - " + p.categoria + " - $" + p.precio;
        ul.appendChild(li);
    });
}

function cargarCategorias() {
    let select = document.getElementById("categoria");
    let categorias = ["comida", "tecnologia"];

    categorias.forEach(cat => {
        let option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

document.getElementById("filtrar").addEventListener("click", function() {
    let categoria = document.getElementById("categoria").value;

    if (categoria === "todas") {
        mostrarProductos(productos);
    } else {
        let filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
    }
});

cargarCategorias();
mostrarProductos(productos);
```
