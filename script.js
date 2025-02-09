const menu = document.querySelector('.menu'); // pega o elemento com a classe menu 
const NavMenu = document.querySelector('.nav-menu'); // pega o elemento com a classe nav-menu

        menu.addEventListener('click', () => { // adiciona um evento de click no elemento menu
            menu.classList.toggle('ativo'); // adiciona a classe ativo ao elemento menu
            NavMenu.classList.toggle('ativo'); // adiciona a classe ativo ao elemento nav-menu
        });

        function fecharMenu() { // função para fechar o menu
            document.querySelector(".nav-menu").classList.remove("ativo"); // remove a classe ativo do elemento nav-menu
            document.querySelector(".menu").classList.remove("ativo"); // remove a classe ativo do elemento menu

            menu.addEventListener('click' , () => { // adiciona um evento de click no elemento menu
                menu.classList.toggle('desativar'); // adiciona a classe desativar ao elemento menu
                NavMenu.classList.toggle('desativar'); // adiciona a classe desativar ao elemento nav-menu
                });
}