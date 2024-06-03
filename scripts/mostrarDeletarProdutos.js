import { api } from "./api.js";

const lista = document.querySelector('[data-produtos]');

export default function constroiCard(nome, descricao, valor, imagem, id){
    const produto = document.createElement('div');
    produto.className = 'produto';
    produto.innerHTML = `<img class="produto__imagem" src="${imagem}" alt="${descricao}" style="width:176px;height:176px">
    <div class="produto__descricao">
        <h3 class="produto__nome">${nome}</h3>
        <div class="produto__preco__deletar">
            <h3 class="produto__preco">${valor}</h3>
            <button class="produto__deletar" data-id="${id}"><img src="/assets/trash-slash-alt-svgrepo-com.svg" alt="Lata de lixo" style="width:20px;height:20px"></button>
        </div>
    </div>` 

    return produto;
}

async function deletarProduto(id){
    try{
        await api.deletaProduto(id);
        alert("Produto deletado com sucesso!")
        location.reload();
    }catch (e){
        alert(e);
    }
}

async function listaProdutos(){
    try{
        const listaApi = await api.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.nome, elemento.descricao, elemento.valor, elemento.imagem, elemento.id)));
        const listaBotoes = document.querySelectorAll(".produto__deletar");
        listaBotoes.forEach(elemento => elemento.addEventListener("click", function () {
            const id = this.getAttribute('data-id');
            deletarProduto(id);
        }));
    } catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>`
    }
    
}

listaProdutos();