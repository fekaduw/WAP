window.onload = pageLoad;

function pageLoad() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("close");

  btn.onclick = function() {
    modal.style.display = "none";
  };
}
