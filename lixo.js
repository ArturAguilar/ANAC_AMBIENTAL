function mostrarConteudo(index) {
    let abas = document.querySelectorAll('.aba');
    let conteudos = document.querySelectorAll('.conteudo');

    abas.forEach((aba, i) => {
        if (i === index) {
            aba.classList.add('ativa');
            conteudos[i].classList.add('ativo');
        } else {
            aba.classList.remove('ativa');
            conteudos[i].classList.remove('ativo');
        }
    });
}