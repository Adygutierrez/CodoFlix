document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form");
    const warnings = document.getElementById("warnings");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        warnings.innerHTML = "";
        let mensajes = "";
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email) {
            mensajes += "El campo email es obligatorio.<br>";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            mensajes += "El email no es válido.<br>";
        }

        if (!password) {
            mensajes += "El campo contraseña es obligatorio.<br>";
        }

        if (mensajes) {
            warnings.innerHTML = mensajes;
        } else {
            window.location.href = "../index.html";
        }
    });
});
  




