// archivo ui.js para manejar la interfaz de usuario

export function mostrarGasto(lista, gasto) {
    const li = document.createElement('li');

    li.innerHTML = `
        <strong>${gasto.descripcion}</strong> - $${gasto.monto}
        <small>(${gasto.categoria})</small>
    `;

    lista.appendChild(li);
}


export function mostrarTodosLosGastos(lista, gastos) {
    lista.innerHTML = '';

    for (let i= 0; i < gastos.length; i++) {
        mostrarGasto(lista, gastos[i]);
    }
}



export function actualizarBalanceUI(elemento, total) {
    elemento.textContent = `$${total}`;
}