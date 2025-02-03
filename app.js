const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }
    
    let embaralhado = [...amigos];
    embaralhado.sort(() => Math.random() - 0.5);
    
    let resultado = [];
    for (let i = 0; i < embaralhado.length; i++) {
        let amigo1 = embaralhado[i];
        let amigo2 = embaralhado[(i + 1) % embaralhado.length];
        resultado.push(`${amigo1} -> ${amigo2}`);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(lista) {
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";
    lista.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        resultadoElemento.appendChild(li);
    });
}
