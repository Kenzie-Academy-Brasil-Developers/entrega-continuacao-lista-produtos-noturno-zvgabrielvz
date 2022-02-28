// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');
const ulTeste = document.querySelector('.descPrincipal');
let arrayClassName = [];


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
        const nomeProduto = produto.nome;
        const nomeClassButton = "bt" + nomeProduto;
        button.classList.add(nomeClassButton);
        li.classList.add(nomeProduto);
        arrayClassName.push(nomeClassButton);
        li.appendChild(button);
    });
    
    //const campoPreco = document.getElementById('precoTotal');
    //campoPreco.innerHTML = somaValor.toFixed(2);
    //console.log(listaProdutos)
   
    
   
}

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'hortifruti';
    });
    montarListaProdutos(listaHortifruti);
    //nodeButton();
    

}


const buttonShowAll = document.getElementById('showAll');
const buttonFilterHortifruti = document.getElementById('hortifruti');



buttonShowAll.addEventListener("click", function(){
    montarListaProdutos(produtos);
    //nodeButton();
    
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
    const listaCategoria = produtos.filter((produto) => {
        return produto.categoria === inputNome;
    });
    const listaSecao = produtos.filter((produto) => {
        return produto.secao === inputNome;
    });
    
    montarListaProdutos(listaNome);
    //montarListaProdutos(listaCategoria);
    //montarListaProdutos(listaSecao);

}


const botaoFiltraNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

botaoFiltraNome.addEventListener('click', function(){
    filtrarPorNome;
    console.log("teste")
});


const ulCarrinho = document.querySelector('.containerCarrinho ul');


function nodeButton(){
    const btn = document.querySelectorAll("ul button");
    btn[0].addEventListener("click", function() {    
        const parent = this.parentNode;        
        console.log(parent);
        console.log(parent.classList);
      });
     btn[1].addEventListener("click", function() {    
        const parent = this.parentNode;        
        console.log(parent);
        console.log(parent.classList);
      });
      btn[2].addEventListener("click", function() {    
        const parent = this.parentNode;        
        console.log(parent);
        console.log(parent.classList);
      });
     btn[3].addEventListener("click", function() {    
        const parent = this.parentNode;        
        console.log(parent);
        console.log(parent.classList);
      });
      btn[4].addEventListener("click", function() {    
        const parent = this.parentNode;        
        console.log(parent);
        console.log(parent.classList);
      });
     btn[5].addEventListener("click", function() {    
        const parent = this.parentNode;        
        console.log(parent);
        console.log(parent.classList);
      });
}



/*
  btn[3].addEventListener("click", function() {
    
    var parent = this.parentNode;
    
    console.log(parent);
    console.log(parent.classList);
  });

  btn[4].addEventListener("click", function() {
    
    var parent = this.parentNode;
    
    console.log(parent);
    console.log(parent.classList);
  });

  btn[5].addEventListener("click", function() {
    
    var parent = this.parentNode;
    
    console.log(parent);
    console.log(parent.classList);
  });
*/
