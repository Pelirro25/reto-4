function teclaDisplay(value) {
    document.getElementById('resultado').value+=value
}

function borrarDisplay() {
    document.getElementById('resultado').value = ''
}

function Calcular() {
    try {
        const result = eval(document.getElementById('resultado').value)
        document.getElementById("resultado").value=result
    } catch (error) {
        document.getElementById("resultado").value = 'Error';
    }
}