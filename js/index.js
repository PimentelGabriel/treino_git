window.popupForm = document.getElementById("popupForm");
window.reclamar = document.getElementById("reclamar");

document.querySelectorAll(".btn-close").forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        evt.target.parentNode.parentNode.hidden = true;
    });
});

document.getElementById("btnSatelite1").addEventListener("click", (evt) => {
    window.popupForm.hidden = !window.popupForm.hidden;
});

document.getElementById("btnSatelite2").addEventListener("click", (evt) => {
    window.reclamar.hidden = !window.reclamar.hidden;
});