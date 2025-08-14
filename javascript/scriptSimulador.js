const nombreEquipoUser = document.getElementById('nombreEquipoUser');
const formacionUno = document.getElementById("form1");
const formacionDos = document.getElementById("form2");
const formacionTres = document.getElementById("form3");
const nombreBtn = document.getElementById("nombreBtn");

const arquero = document.getElementById("arquero");
const defensores = document.getElementById("defensores");
const mediocampistas = document.getElementById("mediocampistas");
const delanteros = document.getElementById("delanteros");

const jugadores = [
    {
        nombre: "Juan Velazquez",
        valorGeneral: 67,
        posicion: "arquero"
    },
    {
        nombre: "Rodrigo Bueno",
        valorGeneral: 88,
        posicion: "defensor"
    },
    {
        nombre: "Julian Sorin",
        valorGeneral: 79,
        posicion: "defensor"
    },
    {
        nombre: "Pedro Gonzalez",
        valorGeneral: 65,
        posicion: "defensor"
    },
    {
        nombre: "Elias Gomez",
        valorGeneral: 92,
        posicion: "defensor"
    },
    {
        nombre: "Ricky Blanco",
        valorGeneral: 93,
        posicion: "medio"
    },
    {
        nombre: "Jonas Caceres",
        valorGeneral: 79,
        posicion: "medio"
    },
    {
        nombre: "Gerardo Bellavista",
        valorGeneral: 73,
        posicion: "medio"
    },
    {
        nombre: "Lucas Coccaro",
        valorGeneral: 85,
        posicion: "medio"
    },
    {
        nombre: "Horacio Rodriguez",
        valorGeneral: 90,
        posicion: "medio"
    },
    {
        nombre: "Fernando Torres",
        valorGeneral: 73,
        posicion: "medio"
    },
    {
        nombre: "Ulises Bueno",
        valorGeneral: 87,
        posicion: "delantero"
    },
    {
        nombre: "Jean Paul Miller",
        valorGeneral: 81,
        posicion: "delantero"
    },
    {
        nombre: "Joel Gomez",
        valorGeneral: 98,
        posicion: "delantero"
    }
];

const posicionesStr = ["jugadorArq", "jugadorDef", "jugadorMedio", "jugadorDel"]
const posicionesDiv = [arquero, defensores, mediocampistas, delanteros]
let formacionUser;
let globosDiv;

function primeraFormacion() {
    limpiarFormacion()
    formacionUser = [1, 3, 4, 3];
    for (let i = 0; i < formacionUser.length; i++) {
        for (let jug = 0; jug < formacionUser[i]; jug++) {
            globosDiv = document.createElement("div")
            globosDiv.innerHTML = `<div class="globoJugador">
                            <button class="jugador ${posicionesStr[i]}">0</button>
                            <p class="nombreJugador">nombre</p>
                        </div>`;
            posicionesDiv[i].appendChild(globosDiv)
        }
    }
};
function segundaFormacion() {
    limpiarFormacion()
    formacionUser = [1, 4, 4, 2];
    for (let i = 0; i < formacionUser.length; i++) {
        for (let jug = 0; jug < formacionUser[i]; jug++) {
            globosDiv = document.createElement("div")
            globosDiv.innerHTML = `<div class="globoJugador">
                            <button class="jugador ${posicionesStr[i]}">0</button>
                            <p class="nombreJugador">nombre</p>
                        </div>`;
            posicionesDiv[i].appendChild(globosDiv)
        }
    }
};
function terceraFormacion() {
    limpiarFormacion()
    formacionUser = [1, 4, 3, 3];
    for (let i = 0; i < formacionUser.length; i++) {
        for (let jug = 0; jug < formacionUser[i]; jug++) {
            globosDiv = document.createElement("div")
            globosDiv.innerHTML = `<div class="globoJugador">
                            <button class="jugador ${posicionesStr[i]}">0</button>
                            <p class="nombreJugador">nombre</p>
                        </div>`;
            posicionesDiv[i].appendChild(globosDiv)
        }
    }
};
function limpiarFormacion() {
    arquero.innerHTML = "";
    defensores.innerHTML = "";
    mediocampistas.innerHTML = "";
    delanteros.innerHTML = "";
};

formacionUno.addEventListener("click", primeraFormacion);
formacionDos.addEventListener("click", segundaFormacion);
formacionTres.addEventListener("click", terceraFormacion);

// const botonArquero = document.getElementsByClassName("jugadorArq");
// const botonDefensor = document.getElementsByClassName("jugadorDef");
// const botonMedio = document.getElementsByClassName("jugadorMedio");
// const botonDelantero = document.getElementsByClassName("jugadorDel");



const jugadoresPlanilla = document.getElementById("jugadoresPlanilla"); //padre

const nombrePlanilla = document.getElementById("nombrePlanilla") //hijo
const posicionPlanilla = document.getElementById("posicionPlanilla"); //hijo
const valorPlanilla = document.getElementById("valorPlanilla"); //hijo
const botonAgregarPlanilla = document.getElementById("botonAgregarPlanilla"); //hijo


function listaDeJugadores(jugadores) {
    jugadoresPlanilla.innerHTML = "";
    jugadores.forEach((jugador) => {
        const card = document.createElement("div");
        card.innerHTML = `<ul id="nombrePlanilla">
                        <li>${nombrePlanilla.innerText = jugador.nombre}</li>
                    </ul>
                    <ul id="posicionPlanilla">
                        <li>${posicionPlanilla.innerText = jugador.posicion}</li>
                    </ul>
                    <ul id="valorPlanilla">
                        <li>${valorPlanilla.innerText = jugador.valorGeneral}</li>
                    </ul>
                    <ul>
                        <button id="botonAgregar-Planilla" class="btn">Agregar</button>
                    </ul>`;
        jugadoresPlanilla.appendChild(card)
        // console.log(jugadoresPlanilla)
    });
};

listaDeJugadores(jugadores)

