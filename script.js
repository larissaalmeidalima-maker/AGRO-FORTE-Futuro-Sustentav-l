function calcularImpacto() {
    // Obter valores dos inputs
    const fertilizante = Number(document.getElementById('fertilizante').value);
    const agua = Number(document.getElementById('agua').value);
    const energia = Number(document.getElementById('energia').value);

    // Fórmula educativa simples para estimativa de impacto ambiental
    const impacto = (fertilizante * 2) + (agua * 0.5) + (energia * 1.5);

    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O impacto ambiental estimado é: ${impacto.toFixed(2)} pontos.`;
}