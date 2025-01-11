// (Actualizaciones) Cambiar ícono al abrir details

document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", (event) => {
        const icon = detail.querySelector("summary i");

        if (detail.open) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        } else {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        }
    });
});