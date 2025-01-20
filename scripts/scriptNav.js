class Color {
    constructor(lienzo, scrollAbajo) {
      this.lienzo = lienzo
      this.scrollAbajo = scrollAbajo
    }
    
    cambiaColor() {
      document.addEventListener("scroll", () => {
      let scrollAbajo = window.scrollY;
      (scrollAbajo >= 0 && scrollAbajo <= 500) ? this.lienzo.setAttribute("class", "color-rojo")
      : (scrollAbajo > 500) ? this.lienzo.setAttribute("class", "nav")
      : this.lienzo.setAttribute("class", "color-amarillo")
      })
    }
  }

let lienzo = document.querySelector(".contenedor-menu__contenedor")
let scrollAbajo = window.scrollY
const color = new Color(lienzo, scrollAbajo)
color.cambiaColor()