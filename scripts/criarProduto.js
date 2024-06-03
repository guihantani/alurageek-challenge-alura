import {api} from "./api.js";
const formulario = document.querySelector("[data-formulario]");

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

formulario.addEventListener("submit", evento => criaProduto(evento));