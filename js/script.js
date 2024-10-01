let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// CONTATO
const button = document.getElementById('btn-form');

const enviar = () => {
    button.innerHTML = 'Enviar'
}

const addLoading = () => {
    button.style.background = 'black';
    button.style.border = '2px solid var(--main - color)';
    button.innerHTML = '<img src="./assets/svg/loading.png" alt="SVG de loading" class="loading" id="loading">';
};

const removeLoading = () => {
    button.style.background = 'var(--main-color)';
    button.style.border = '2px solid transparent';
    button.innerHTML = '<img src="./assets/svg/check.svg" alt="SVG de loading" class="loading" id = "loading" style = "animation: none" > ';
};

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const name = document.querySelector('input[name=Nome]').value;
    const email = document.querySelector('input[name=Email]').value;
    const whatsapp = document.querySelector('input[name=WhatsApp]').value;
    const sobre = document.querySelector('input[name=Sobre]').value;
    const mensagem = document.querySelector('textarea[name=Mensagem]').value;

    fetch('https://api.sheetmonkey.io/form/58UUSyNjo15oDQs8yZf2S2', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
        },

        body: JSON.stringify({ name, email, whatsapp, sobre, mensagem }),
    }).then(() => {
        removeLoading();
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit)