class Curso {
  constructor(nombre, profesor, precio, imagen) {
    this.nombre = nombre;
    this.profesor = profesor;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#cursos");
const contenedorCarrito = document.querySelector("#carrito div");
const limpiarCarrito = document.querySelector("#vaciarCarrito");

let articulosCarrito = [];

listaCursos.addEventListener("click", cargarCurso);
carrito.addEventListener("click", eliminarCurso);

function cargarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar")) {
    let curso = e.target.parentElement.parentElement;
    cargarDatosCurso(curso);
  }
}
function cargarDatosCurso(curso) {
  let nombre = curso.querySelector("h3").textContent;
  let profesor = curso.querySelector("p").textContent;
  let precio = curso.querySelector("p + p").textContent;
  let imagen = curso.querySelector("img").src;

  const c = new Curso(nombre, profesor, precio, imagen);

  articulosCarrito = [...articulosCarrito, c];
  insertarCarrito(articulosCarrito);
}

function insertarCarrito(curso) {
  console.log(curso);
  const block = document.createElement("ul");
  curso.forEach((curso) => {
    block.innerHTML = `
    <li><img src="${curso.imagen}" style="width:50px; heigth:50px" ></li>
    <li>${curso.nombre}</li>
    <li>${curso.precio}</li>
    <li>
    <a href="#" class=quitarCurso> X </a>
    </li>
    `;
  });
  contenedorCarrito.appendChild(block);
}
function eliminarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("quitarCurso")) {
    const curso = e.target.parentElement.parentElement;
    curso.remove();
  }
}

limpiarCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  contenedorCarrito.innerHTML = "";
});
