function escopo() {

    function botaoClick() {
        const btn = document.querySelector('.verMais').addEventListener('click', () => {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
        const apoio = document.querySelector('.apoio').addEventListener('click', () => {
            const customAlert = document.getElementById('customAlert');
            customAlert.style.display = 'flex';
        });

        document.getElementById('closeAlert').addEventListener('click', () => {
            document.getElementById('customAlert').style.display = 'none';
        });

        // Fecha o modal ao clicar fora do conteúdo
        window.addEventListener('click', (e) => {
            const customAlert = document.getElementById('customAlert');
            if (e.target === customAlert) {
                customAlert.style.display = 'none';
            }
        });

    }
    botaoClick();

    function menuResponsivo() {
        let menu = document.querySelector('.btn-menu');
        let navList = document.querySelector('#navList');
        menu.onclick = () => {
            menu.classList.toggle('x');
            navList.classList.toggle('open');
        }
    }
    menuResponsivo();
}
escopo();


