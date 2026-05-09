// archivo ui.js para manejar la interfaz de usuario

export function mostrarGasto(lista, gasto) {
    const li = document.createElement('li');
    li.dataset.id = gasto.id;

    li.innerHTML = `
        <strong>${gasto.descripcion}</strong> - $${gasto.monto}
        <small>(${gasto.categoria})</small>
        <button class="btn-eliminar">Eliminar</button>
        <button class="btn-editar">Editar</button> 
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