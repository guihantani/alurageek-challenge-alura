async function listaProdutos(){
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(nome, descricao,  valor, imagem){
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            descricao: descricao,
            valor: valor,
            imagem: imagem
        })
    });
    if (!conexao.ok){
        throw new Error("Não foi possível enviar o produto")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id){
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    });
    if (!conexao.ok){
        throw new Error("Não foi possível deletar o produto")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const api = {
    listaProdutos,
    criaProduto,
    deletaProduto
}