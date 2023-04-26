function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("foto");
    var agora = new Date();
    var hora = agora.getHours();
    msg.innerHTML = `agora são ${hora} horas `;

    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="cafedamanha.png">';
        document.body.style.background = "#8D5524";
    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="fotomidday.png">';
        document.body.style.background = "#ED9900";
    } else {
        img.innerHTML = '<img src="fotonoite.png">';
        document.body.style.background = "#D9C8B2";
    }
}
