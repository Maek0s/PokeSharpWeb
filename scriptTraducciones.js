// Se ejecuta al inicio
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('english-flag').style.display = 'none';
    document.getElementById('spanish-flag').style.display = 'inline';
    changeLanguage('es');
});

// Al hacer clic a la bandera de España
document.getElementById('spanish-flag').addEventListener('click', function() {
    changeLanguage('en');
    toggleFlags();
});

// Al hacer clic a la bandera de Estados Unidos
document.getElementById('english-flag').addEventListener('click', function() {
    changeLanguage('es');
    toggleFlags();
});

// Cambia el idioma dependiendo el idioma
function changeLanguage(language) {
    if (language === 'es') {
        document.title = 'PokeSharp - Inicio';
        changeIt('#descargas', 'Descargar');
        changeIt('#notasParche', 'Notas parche');
        changeIt('#discord', 'Discord');
        changeIt('#redesSociales', 'Redes sociales');
        changeIt('#faq', 'FAQ');
        changeIt('#descargar-texto', 'Descargar');
        changeIt('#versionJuego', 'En desarrollo');
        changeIt('#versionTexto','No disponible')
    } else if (language === 'en') {
        document.title = 'PokeSharp - Home';
        changeIt('#descargas','Download')
        changeIt('#notasParche','Patch Notes')
        changeIt('#discord','Discord')
        changeIt('#redesSociales','Social Media')
        changeIt('#faq','FAQ')
        changeIt('#descargar-texto','Download')
        changeIt('#versionJuego','In development')
        changeIt('#versionTexto','Unavailable')
    }
}

// Función para hacer el proceso de cambio y depurarlo
function changeIt(id, text) {
    const htmlElement = document.querySelector(id);
    if (htmlElement) {
        console.log(`Cambiando texto de ${id} a ${text}`);
        htmlElement.textContent = text;
    } else {
        console.error(`No se pudo encontrar el elemento con id: ${id}`);
    }
}

function changeIt2(padre, hijo, texto) {
    const container = document.getElementById(padre);
    if (container) {
        console.log("Contenedor encontrado:", container);
        console.log("Elementos dentro de " + padre + ":", container.children);

        const versionTexto = container.querySelector(`#${hijo}`);
        if (versionTexto) {
            versionTexto.textContent = texto;
        } else {
            console.error(`No se encontró el elemento ${hijo} dentro de ${padre}`);
        }
    } else {
        console.error(`No se encontró el contenedor con id: ${padre}`);
    }
}


// Cambio de banderas visualmente
function toggleFlags() {
    var spanishFlag = document.getElementById('spanish-flag');
    var englishFlag = document.getElementById('english-flag');
    console.log("Alternando banderas...");

    if (spanishFlag.style.display === 'none') {
        spanishFlag.style.display = 'inline';
        englishFlag.style.display = 'none';
    } else {
        spanishFlag.style.display = 'none';
        englishFlag.style.display = 'inline';
    }
}

