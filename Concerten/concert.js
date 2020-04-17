var concert = document.getElementsByClassName("fotoitem");

for (var i = 0; i < concert.length; i++) {
  concert[i].addEventListener("click", function () {
    addLink(this.id);
  });
}

function addLink(id) {
  window.location.assign("/Concerten/concert/" + id + ".html");
}
