// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');
const ulTeste = document.querySelector('.descPrincipal');
const campoPrecoTotal = document.getElementById('precoTotalValor')
let arrayClassName = [];
let arrayPreco = [];



function montarListaProdutos(listaProdutos) { 
    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ulAdd = document.createElement('ol');
        
        // Arredondando Preco
        const precoArr = produto.preco.toFixed(2);

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = precoArr
        span.innerText = produto.secao;
        
       

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);


        // Adicionando li ao HTML
        ul.appendChild(li);
        


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
        const nomeProduto = produto.nome;
        const nomeClassButton = "bt" + nomeProduto;
        button.classList.add(nomeClassButton);
        li.classList.add(nomeProduto);
        arrayClassName.push(nomeClassButton);
        li.appendChild(button);
    });
    

}

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'hortifruti';
    });
    montarListaProdutos(listaHortifruti);

}


const buttonShowAll = document.getElementById('showAll');
const buttonFilterHortifruti = document.getElementById('hortifruti');



buttonShowAll.addEventListener("click", function(){
    montarListaProdutos(produtos);
    nodeButton();
});


buttonFilterHortifruti.addEventListener("click", function(){
    filtrarPorHortifruti();
    nodeButton();
});

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
    const listaCategoria = produtos.filter((produto) => {
        return produto.categoria === inputNome;
    });
    const listaSecao = produtos.filter((produto) => {
        return produto.secao === inputNome;
    });
    if(listaCategoria.length === 0 && listaSecao.length === 0){
        montarListaProdutos(listaNome);
        nodeButton();
    }
    if(listaNome.length === 0 && listaSecao.length ===0){
        montarListaProdutos(listaCategoria);
        nodeButton();
    } else{
        montarListaProdutos(listaSecao);
        nodeButton();
    }



    //montarListaProdutos(listaCategoria);
    //montarListaProdutos(listaSecao);
    

}


const botaoFiltraNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

botaoFiltraNome.addEventListener('click', function(){
    filtrarPorNome();
    
});


const ulCarrinho = document.querySelector('.containerCarrinho ul');


function nodeButton(){
    const btn = document.querySelectorAll("ul button");
    btn[0].addEventListener("click", function() {    
        const parent = this.parentNode;        
        //console.log(parent);
        //console.log(parent.classList);
        ulCarrinho.appendChild(parent.cloneNode(true));
        arrayPreco.push(Number(btn[0].parentNode.children[2].innerText));
        somaTotal();


      });
     btn[1].addEventListener("click", function() {    
        const parent = this.parentNode;        
        //console.log(parent);
        //console.log(parent.classList);
        ulCarrinho.appendChild(parent.cloneNode(true));
        arrayPreco.push(Number(btn[1].parentNode.children[2].innerText));
        somaTotal();


      });
      btn[2].addEventListener("click", function() {    
        const parent = this.parentNode;        
        //console.log(parent);
        //console.log(parent.classList);
        ulCarrinho.appendChild(parent.cloneNode(true));

        arrayPreco.push(Number(btn[2].parentNode.children[2].innerText));
        somaTotal();
      });
     btn[3].addEventListener("click", function() {    
        const parent = this.parentNode;        
        //console.log(parent);
        //console.log(parent.classList);
        ulCarrinho.appendChild(parent.cloneNode(true));

        arrayPreco.push(Number(btn[3].parentNode.children[2].innerText));
        somaTotal();
      });
      btn[4].addEventListener("click", function() {    
        const parent = this.parentNode;        
        //console.log(parent);
        //console.log(parent.classList);
        ulCarrinho.appendChild(parent.cloneNode(true));

        arrayPreco.push(Number(btn[4].parentNode.children[2].innerText));
        somaTotal();
      });
     btn[5].addEventListener("click", function() {    
        const parent = this.parentNode;        
        //console.log(parent);
        //console.log(parent.classList);
        ulCarrinho.appendChild(parent.cloneNode(true));

        arrayPreco.push(Number(btn[5].parentNode.children[2].innerText));
        somaTotal();
      });
          
}

function pre??o() {
const campoPreco = document.getElementById('precoTotal')
let preco = produto.preco;
somaValor += preco;
//console.log(somaValor)
campoPreco.innerHTML = somaValor

}


function somaTotal(){

    let sum = 0;
    for(let i = 0; i < arrayPreco.length; i++){
        sum = sum + arrayPreco[i];
    }
    campoPrecoTotal.innerText = sum
    //console.log(sum)
}


const btLimparCarrinho = document.getElementById('limparCarrinho');

btLimparCarrinho.addEventListener("click", function(){
    document.location.reload(true)

})