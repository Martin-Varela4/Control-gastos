const formulario = document.querySelector('#form-gasto')
const listaGasos = document.querySelector('#lista-gastos')
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
