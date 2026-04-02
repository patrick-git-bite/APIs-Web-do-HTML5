// Web Worker — roda em thread separada (background)
// Este arquivo é executado independente da thread principal

self.onmessage = function (e) {
    const { tipo, dados } = e.data;

    if (tipo === 'fibonacci') {
        const n = dados;
        const inicio = performance.now();
        const resultado = fibonacci(n);
        const tempo = (performance.now() - inicio).toFixed(2);
        self.postMessage({ tipo: 'fibonacci', resultado, tempo, n });
    }

    if (tipo === 'primos') {
        const limite = dados;
        const inicio = performance.now();
        const primos = encontrarPrimos(limite);
        const tempo = (performance.now() - inicio).toFixed(2);
        self.postMessage({ tipo: 'primos', quantidade: primos.length, tempo, limite });
    }

    if (tipo === 'ordenar') {
        const tamanho = dados;
        const inicio = performance.now();
        // Gerar array aleatório
        const arr = Array.from({ length: tamanho }, () => Math.random());
        // Ordenar (Bubble sort propositalmente lento para demonstração)
        bubbleSort(arr);
        const tempo = (performance.now() - inicio).toFixed(2);
        self.postMessage({ tipo: 'ordenar', tamanho, tempo });
    }

    if (tipo === 'progresso') {
        const total = dados;
        for (let i = 0; i <= total; i++) {
            // Simular trabalho
            let x = 0;
            for (let j = 0; j < 100000; j++) { x += Math.sqrt(j); }

            // Reportar progresso
            if (i % Math.floor(total / 100) === 0 || i === total) {
                self.postMessage({
                    tipo: 'progresso',
                    atual: i,
                    total,
                    percentual: Math.round((i / total) * 100)
                });
            }
        }
        self.postMessage({ tipo: 'progresso-fim' });
    }
};

// Fibonacci recursivo (propositalmente lento para demonstrar)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Encontrar números primos (Crivo de Eratóstenes)
function encontrarPrimos(limite) {
    const crivo = new Array(limite + 1).fill(true);
    crivo[0] = crivo[1] = false;
    for (let i = 2; i * i <= limite; i++) {
        if (crivo[i]) {
            for (let j = i * i; j <= limite; j += i) {
                crivo[j] = false;
            }
        }
    }
    return crivo.reduce((acc, val, idx) => val ? [...acc, idx] : acc, []);
}

// Bubble sort (propositalmente ineficiente para demonstrar carga de CPU)
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
