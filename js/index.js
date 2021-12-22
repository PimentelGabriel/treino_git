document.querySelectorAll(".btn-close").forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        evt.target.parentNode.parentNode.hidden = true;
    });
});