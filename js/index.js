(function () {
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const modal = document.getElementById("modal");
  
    open.addEventListener("click", function () {
      modal.showModal();
    });
  
    close.addEventListener("click", function () {
      modal.close();
    });
})();