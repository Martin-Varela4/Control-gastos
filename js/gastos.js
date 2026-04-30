// archivo para manejar la lógica de gastos

let gastos = [];

export function agregarGasto(desc, monto, cat) {
    const nuevoGasto = {
        id: Date.now(),
        descripcion: desc,
        monto: Number(monto),
        categoria: cat
    };

    gastos.push(nuevoGasto);
    guardarGastos();
    return nuevoGasto;
}

export function obtenerGastos() {
    return gastos;
}

export function calcularBalance() {
    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        total = total + gastos[i].monto;
    }

    return total;
}

//LocalStorage (para persistencia de datos)




//cargar desde localStorage
export function cargarGastos() {
    const gastosGuardados = localStorage.getItem("gastos");

    if (gastosGuardados) {
        gastos = JSON.parse(gastosGuardados);
    } else {
        gastos = [];
    }
}


//guardar en local

export function guardarGastos() {
    const LocalStorageGastos = localStorage.setItem("gastos", JSON.stringify(gastos));
}




 
