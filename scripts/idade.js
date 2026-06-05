function verIdade() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");

    // 1. Primeiro, fazemos o texto atual SUMIR (Fade Out)
    resultado.classList.remove('mostrar');

    // 2. Esperamos 250 milissegundos (o tempo do Fade Out terminar) para mudar o texto e aparecer
    setTimeout(() => {
        
        // --- LÓGICA DAS MENSAGENS (Acontece enquanto o elemento está invisível) ---
        if (idade === "" || idade < 0) {
            resultado.innerHTML = "Digite um valor aceito";
        } 
        else if (idade >= 21) {
            resultado.innerHTML = "Emancipado";
        } 
        else if (idade >= 18) {
            resultado.innerHTML = "Maior de idade";
        } 
        else {
            resultado.innerHTML = "Menor de idade";
        }

        // Força o navegador a processar a mudança
        void resultado.offsetWidth; 

        // 3. Faz o novo texto APARECER (Fade In)
        resultado.classList.add('mostrar'); 

    }, 250); // 250ms é o tempo exato da transição do CSS
}
