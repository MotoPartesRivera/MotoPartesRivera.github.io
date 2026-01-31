document.addEventListener("DOMContentLoaded", () => {
  const modeloSelect = document.getElementById("modelo");
  const precioSpan = document.getElementById("precio");
  const btnConsultar = document.getElementById("btn-consultar");
  const thumbs = document.querySelectorAll(".thumb");
  const imagenGrande = document.getElementById("imagen-grande");

  // Cambiar precio según modelo
  modeloSelect.addEventListener("change", function() {
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
    const marca = document.getElementById("marca").value;
    const modelo = modeloSelect.value;
    const tipo = document.getElementById("tipo").value;
    const producto = document.querySelector(".producto-titulo").textContent;

    const mensaje = `Hola, me interesa el producto ${producto}, de marca ${marca}, modelo ${modelo}, tipo ${tipo}. ¿Se encuentra disponible?`;
    const numeroWhatsApp = "522211897589"; // tu número con código país
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });
});


