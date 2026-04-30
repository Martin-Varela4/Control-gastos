// app.js

import { agregarGasto, calcularBalance, cargarGastos, obtenerGastos} from './gastos.js';
import { mostrarGasto, actualizarBalanceUI, mostrarTodosLosGastos } from './ui.js';

const formulario = document.querySelector('#form-gasto');
const listaGastos = document.querySelector('#lista-gastos');
const balanceTotal = document.querySelector('#balance');

const descripcionInput = document.querySelector('#descripcion');
const montoInput = document.querySelector('#monto');
const categoriaInput = document.querySelector('#categoria');

//al iniciar cargar los gastos guardados 
cargarGastos();

const gastos = obtenerGastos();
mostrarTodosLosGastos(listaGastos, gastos);

const total = calcularBalance();
actualizarBalanceUI(balanceTotal, total);


// eventos

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const descripcion = descripcionInput.value;
    const monto = montoInput.value;
    const categoria = categoriaInput.value;

    if (descripcion === '' || monto === '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    // lógica
    const gasto = agregarGasto(descripcion, monto, categoria);

    // UI
    mostrarGasto(listaGastos, gasto);

    const total = calcularBalance();
    actualizarBalanceUI(balanceTotal, total);

    formulario.reset();
});

