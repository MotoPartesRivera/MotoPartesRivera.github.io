document.addEventListener("DOMContentLoaded", () => {
  const productoSelect = document.getElementById("producto");
  const precioSpan = document.getElementById("precio");
  const btnConsultar = document.getElementById("btn-consultar");
  const thumbs = document.querySelectorAll(".thumb");
  const imagenGrande = document.getElementById("imagen-grande");

  // Cambiar precio según producto
  productoSelect.addEventListener("change", function() {
    const precio = this.options[this.selectedIndex].dataset.precio;
    precioSpan.textContent = precio;
  });

  // Cambiar imagen principal al pasar/click en miniatura
  thumbs.forEach(thumb => {
    thumb.addEventListener("mouseover", () => {
      imagenGrande.src = thumb.src;
    });
    thumb.addEventListener("click", () => {
      imagenGrande.src = thumb.src;
    });
  });

  // Botón WhatsApp
  btnConsultar.addEventListener("click", function() {
    const producto = document.querySelector(".producto-titulo").textContent;
    const seleccion = productoSelect.value; // Ej: "ITALIKA-central-F11020160"

    // Dividir en partes: [marca, tipo, modelo]
    const partes = seleccion.split("-");
    const marca = partes[0];
    const tipo = partes[1];
    const modelo = partes.slice(2).join("-"); // por si el modelo tiene guiones

    const mensaje = `Hola, me interesa el producto ${producto}, de marca ${marca}, tipo ${tipo}, modelo ${modelo}. ¿Se encuentra disponible?`;
    const numeroWhatsApp = "522211897589"; // tu número con código país
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });
});



