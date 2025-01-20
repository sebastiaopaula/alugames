let contador=1;

function alterarStatus(gameId) {
    let gameItem = document.getElementById(`game-${gameId}`);
    let imagem = gameItem.querySelector('.dashboard__item__img');
    let button = gameItem.querySelector('.dashboard__item__button');

    if (button.textContent === 'Alugar') {
        if(confirm("Deseja Realmente Alugar")){
            // Alterar para "Devolver"
        button.textContent = 'Devolver';      
        button.classList.add('dashboard__item__button--return');        
        imagem.classList.add('dashboard__item__img--rented');
        contador++;
        }
        
    } else if (button.textContent === 'Devolver') {
        if (confirm("Deseja Realmente Devolver")){
        // Alterar para "Alugar"
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');                
        imagem.classList.remove('dashboard__item__img--rented');
        contador --;
        }
        
    }
    contadors();
}
function contadors(){
    if (contador==1){
        alert(`Você Tem  ${contador} Jogo Alugado`);
    }else if(contador > 1){
        alert(`Você Tem  ${contador} Jogos Alugado`);
    }else{
        alert(`Você Não Tem Jogo Alugado`);
    }
}
