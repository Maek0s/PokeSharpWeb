let currentLanguage = 'es';

// Se ejecuta al inicio
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('english-flag').style.display = 'none';
    document.getElementById('spanish-flag').style.display = 'inline';
   // changeLanguage('es');
   setLanguage('es');
});

// Al hacer clic a la bandera de España
document.getElementById('spanish-flag').addEventListener('click', function() {
    //changeLanguage('en');
    setLanguage('en')
    toggleFlags();
});

// Al hacer clic a la bandera de Estados Unidos
document.getElementById('english-flag').addEventListener('click', function() {
    //changeLanguage('es');
    setLanguage('es')
    toggleFlags();
});

// Función para cargar el archivo JSON del idioma
async function loadTranslations(language) {
    const response = await fetch(`traducciones/${language}.json`);
    const translations = await response.json();
    return translations;
}

// Función para aplicar las traducciones al HTML
async function setLanguage(language) {
    currentLanguage = language;
    const translations = await loadTranslations(language);

    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    // Cambiar el título del documento
    document.title = translations['title'];
}
/*
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
*/

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

