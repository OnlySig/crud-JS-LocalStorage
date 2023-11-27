(function () {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");

  window.addEventListener("load", function () {
    modal.showModal();
  });

  open.addEventListener("click", function () {
    modal.showModal();
  });

  close.addEventListener("click", function () {
    window.location = "index.html"
    modal.close();
  });
})();
