// Lenguaje por defecto
let currentLanguage = 'es';

// Se ejecuta al inicio
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('english-flag').style.display = 'none';
    document.getElementById('spanish-flag').style.display = 'inline';
   setLanguage('es');
});

// Al hacer clic a la bandera de España
document.getElementById('spanish-flag').addEventListener('click', function() {
    setLanguage('en')
    toggleFlags();
});

// Al hacer clic a la bandera de Estados Unidos
document.getElementById('english-flag').addEventListener('click', function() {
    setLanguage('es')
    toggleFlags();
});

// Función para cargar el archivo JSON del idioma
async function loadTranslations(language) {
    // Esto hace que solo se base en las traducciones súbidas a GitHub, para evitar problemas.
    const response = await fetch(`https://raw.githubusercontent.com/Maek0s/PokeSharpWeb/main/traducciones/${language}.json`);

    console.log(`../traducciones/${language}.json`);
    if (!response.ok) {
        console.log(`Error al cargar el archivo de traducción: ${response.status}`);
    }
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
            console.log(`Traduciendo ${key}: ${translations[key]}`);
            element.textContent = translations[key];
        } else {
            console.warn(`Clave no encontrada en el JSON: ${key}`);
        }
    });

    // Cambiar el título del documento
    document.title = translations['title'];
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