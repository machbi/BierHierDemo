var sporten = document.getElementsByClassName("griditem");

for (var i = 0; i < sporten.length; i++) {
  sporten[i].addEventListener("click", function () {
    addLink(this.id);
  });
}

function addLink(id) {
  window.location.assign("/Sport/sportItems/" + id + ".html");
}
