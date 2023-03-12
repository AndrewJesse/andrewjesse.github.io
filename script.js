const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

// Load header.html using AJAX
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Add the meta tags and stylesheets to the head element
    document.getElementsByTagName("head")[0].innerHTML = this.responseText;
  }
};
xhttp.open("GET", "header.html", true);
xhttp.send();
