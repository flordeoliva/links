function linkToInstagram() {
    window.open("https://www.instagram.com/flordeoliva_boutique", "_blank");
}

function linkToWhatsapp() {
    const mensagem = 'Olá, gostaria de saber mais sobre os produtos!';
    const fone = '65996493682';

    window.open(`https://api.whatsapp.com/send?phone=${fone}&text=${mensagem}`, "_blank");
}
