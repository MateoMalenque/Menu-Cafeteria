document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("sideMenu");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");

    // Abrir menú
    menuBtn.addEventListener("click", function () {
        menu.style.left = "0";
    });

    // Cerrar menú
    closeBtn.addEventListener("click", function () {
        menu.style.left = "-250px";
    });
});
