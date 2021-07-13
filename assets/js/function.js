function getMenuItems() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "../../menuItems.json", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Response
      var response = this.responseText;
      response = JSON.parse(response);
      for (let index = 0; index < response.length; index++) {
          const element = response[index];
          document.getElementById("menuItems").innerHTML+=` <div class="col-lg-6 menu-item filter-starters">
          <img
            src="${element.image}"
            class="menu-img"
            alt=""
          />
          <div class="menu-content">
            <a href="#">${element.title}</a><span>${element.price}</span>
          </div>
          <div class="menu-ingredients">
           ${element.description}
          </div>
        </div>`
      }
    }
  };
  xhttp.send();
}

window.onload = function () {
//   getMenuItems();
};
