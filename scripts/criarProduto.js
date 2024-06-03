import {api} from "./api.js";
const formulario = document.querySelector("[data-formulario]");
const botaoApagar = document.querySelector(".formulario__apagar");

async function criaProduto(evento){
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const nome = document.querySelector("[data-nome]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const valor = document.querySelector("[data-valor]").value;
    const valorConvertido = `R$${parseFloat(valor).toFixed(2)}`;

    try{
        await api.criaProduto(nome, descricao, valorConvertido, imagem);
    }catch (e){
        alert(e);
    }
}

function limparFormulario(){
    document.querySelector("[data-nome]").value = "";
    document.querySelector("[data-descricao]").value = "";
    document.querySelector("[data-valor]").value;
    document.querySelector("[data-imagem]").value = "";
}

formulario.addEventListener("submit", evento => criaProduto(evento));
botaoApagar.addEventListener("click", evento => formulario.reset())
