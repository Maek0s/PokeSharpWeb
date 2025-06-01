/*// Función para cargar las versiones desde un archivo JSON
async function loadVersions(language) {
    // Cargar el archivo JSON de versiones
    try {
        const response = await fetch('/PokeSharpWeb/scripts/jsons/versions.json');  // Ruta al archivo JSON
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        
        // Obtener los contenedores de las versiones
        const latestContainer = document.getElementById('latest-version-container');
        const previousContainer = document.getElementById('previous-versions-container');

        // Limpiar los contenedores antes de agregar contenido
        latestContainer.innerHTML = '';
        previousContainer.innerHTML = '';

        const versionData = data[language];

        // Mostrar la última versión
        const latestVersion = versionData.find(v => v.isLatest);
        if (latestVersion) {
            const latestHTML = `
                <div class="update">
                    <details>
                        <summary>
                            <span>${latestVersion.version}</span>
                            <i class="fa-solid fa-plus"></i>
                        </summary>
                        <p>${latestVersion.description}</p>
                    </details>
                </div>
            `;
            latestContainer.innerHTML = latestHTML;
        }

        // Mostrar versiones anteriores
        const previousVersions = versionData.filter(v => !v.isLatest);
        previousVersions.forEach(version => {
            const previousHTML = `
                <div class="update">
                    <details>
                        <summary>
                            <span>${version.version}</span>
                            <i class="fa-solid fa-plus"></i>
                        </summary>
                        <p>${version.description}</p>
                    </details>
                </div>
            `;
            previousContainer.innerHTML += previousHTML;
        });

    } catch (error) {
        console.error("Hubo un error cargando el archivo JSON: ", error);
    }
}

// Llamar a la función para cargar las versiones en español (o en inglés)
loadVersions('es'); // O 'en' para cargar la versión en inglés
*/