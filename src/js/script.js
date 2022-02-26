// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');
const ulTeste = document.querySelector('.descPrincipal');




function montarListaProdutos(listaProdutos) {
    let somaValor = 0; 
    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ulAdd = document.createElement('ol');
        

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        
       

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);


        // Adicionando li ao HTML
        ul.appendChild(li);
        

        // Calculando Preço
        let preco = produto.preco;
        somaValor += preco;
        console.log(somaValor)

        // Adicionando lista de propriedades adicionais

        for(let i = 0; i < produto.componentes.length; i++){
            
            const liAdd = document.createElement('li');
            liAdd.innerText = produto.componentes[i];
            ulAdd.appendChild(liAdd);
            li.appendChild(ulAdd);            
        }

        ulAdd.classList.add("nutrientes")

        const button = document.createElement('button');
        button.innerText = 'Adicionar ao Carrinho';
        li.appendChild(button);


        



    });
    
    ul.appendChild(ulDescAditional);
    const campoPreco = document.getElementById('precoTotal');
    campoPreco.innerHTML = somaValor.toFixed(2);

}

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);


}


const buttonShowAll = document.getElementById('showAll');
const buttonFilterHortifruti = document.getElementById('hortifruti');



buttonShowAll.addEventListener("click", function(){
    montarListaProdutos(produtos)
});


buttonFilterHortifruti.addEventListener("click", filtrarPorHortifruti);

function textoNome() {
    const inputNome = document.getElementById('inputNome');
    const textName = inputNome.value;
    return textName
}


function filtrarPorNome() {
    const inputNome = document.getElementById('inputNome').value.toLowerCase();
    const listaNome = produtos.filter((produto) => {
        return produto.nome === inputNome;
    });
    montarListaProdutos(listaNome);
}
const botaoFiltraNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

botaoFiltraNome.addEventListener('click', filtrarPorNome);
