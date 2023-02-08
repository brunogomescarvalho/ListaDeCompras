
var compras = [];

const form = document.getElementById('formulario');

var adicionar = addProduto = (event) => {

    event.preventDefault();
    let nome = document.querySelector("#nome").value;
    let preco = document.querySelector("#preco").value;
    let qtd = document.querySelector("#qtd").value;

    let produto = {
        nomeProduto: nome,
        precoProduto: preco,
        quantidade: qtd
    }

    compras.push(produto);

    atualizar();
    calcular();
}

form.addEventListener('submit', adicionar);


function atualizar() {

    document.querySelector("thead").innerHTML = `<tr>
    <th>Produto</th>
    <th>Preço</th>
    <th>Quantidade</th>
    <th>Excluir</th>
</tr>`

    for (let index = 0; index < compras.length; index++) {

        document.querySelector("thead").innerHTML +=
            `<tr>
            <td>${compras[index].nomeProduto}</td>
            <td>R$ ${compras[index].precoProduto}</td>
            <td>${compras[index].quantidade}</td>        
            <td> <button class="btn btn-danger" onclick=" excluir(${index})">x</button></td>        
        </tr>`

    }
}


function calcular() {

    var total = 0;

    for (let index = 0; index < compras.length; index++) {

        let preco = Number(compras[index].precoProduto);
        let quantidade = Number(compras[index].quantidade);

        total += preco * quantidade;

        document.querySelector("#total").innerHTML = " ";
        document.querySelector("#total").innerHTML += `R$: ${total}`;

    }

}

function excluir(index) {

    if (index == 0)
        document.querySelector("#total").innerHTML = "R$: 0,00 ";

    compras.splice(index, 1);
    calcular();
    atualizar();

    if (compras.length == 0)
        window.location.reload();

}

