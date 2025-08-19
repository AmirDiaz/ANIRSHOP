function viewProduct(page) {
  window.location.href = "products/" + page;
}

function searchProducts() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let name = products[i].getAttribute("data-name");
    if (name.includes(input)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}
