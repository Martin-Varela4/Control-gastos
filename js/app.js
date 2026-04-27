const formulario = document.querySelector('#form-gasto')
const listaGastos = document.querySelector('#lista-gastos')
const balanceTotal = document.querySelector('#balance')

const descripcionInput = document.querySelector('#descripcion')
const montoInput = document.querySelector('#monto')
const categoriaInput = document.querySelector('#categoria')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    const descripcion = descripcionInput.value
    const monto = montoInput.value
    const categoria = categoriaInput.value

    if (descripcion === '' || monto === '') {
        alert('Por favor, complete todos los campos')
        return;
    }


    agregarGasto(descripcion,monto,categoria);

    formulario.reset()


});

//array para almacenar los gastos
const gastos = []
//funcion para agregar un gasto a la lista
function agregarGasto(desc, valor, cat) {

    const montoNumero = Number(valor);
    //agregar el gasto al array de gastos
    gastos.push(montoNumero);


    //crear un elemento de lista (li)
    const nuevoGasto = document.createElement('li');
    
    
    nuevoGasto.innerHTML = `
        <strong>${desc}</strong> - $${montoNumero} 
        <small>(${cat})</small>
    `;

    
    listaGastos.appendChild(nuevoGasto);

    //actualizar el balance total
    actualizarBalance();
    
}


function actualizarBalance() {
    let = total = 0;
    
    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i];
    }
    //Mostrar el balance total
    balanceTotal.textContent= `$${total}`;
}


