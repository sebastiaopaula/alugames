function alterarStatus(gameId) {
    let gameItem = document.getElementById(`game-${gameId}`);
    let imagem = gameItem.querySelector('.dashboard__item__img');
    let button = gameItem.querySelector('.dashboard__item__button');

    if (button.textContent === 'Alugar') {
        // Alterar para "Devolver"
        button.textContent = 'Devolver';      
        button.classList.add('dashboard__item__button--return');        
        imagem.classList.add('dashboard__item__img--rented');
    } else if (button.textContent === 'Devolver') {
        // Alterar para "Alugar"
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');                
        imagem.classList.remove('dashboard__item__img--rented');
    }
}

