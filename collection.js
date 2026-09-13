var close = document.getElementById("offerclose")
var offer = document.getElementById("offer")
var hide = document.getElementById("hide")
var menu = document.getElementById("menuicon")
var side = document.getElementById("sidenav")
var sideclose = document.getElementById("sideclose")
close.addEventListener("click", function () {
  offer.style.display = "none"
})
menu.addEventListener("click", function () {
  side.style.display = "flex"

})
sideclose.addEventListener("click", function () {
  side.style.display = "none"
})
let apply = document.getElementById("apply");

let products = document.querySelectorAll(".product");


apply.addEventListener("click", function () {

    let selectedColors = document.querySelectorAll(".color:checked");

    let selectedTypes = document.querySelectorAll(".type:checked");

    let selectedPrices = document.querySelectorAll(".price:checked");


    products.forEach(function (product) {

        let colorMatch = false;
        let typeMatch = false;
        let priceMatch = false;

        if (selectedColors.length == 0) {

            colorMatch = true;

        }
        else {

            selectedColors.forEach(function (color) {

                if (product.dataset.color == color.value) {

                    colorMatch = true;

                }

            });

        }

        if (selectedTypes.length == 0) {

            typeMatch = true;

        }
        else {

            selectedTypes.forEach(function (type) {

                if (product.dataset.type == type.value) {

                    typeMatch = true;

                }

            });

        }

        if (selectedPrices.length == 0) {

            priceMatch = true;

        }
        else {

            selectedPrices.forEach(function (price) {

                if (product.dataset.price == price.value) {

                    priceMatch = true;

                }

            });

        }

        if (colorMatch && typeMatch && priceMatch) {

            product.style.display = "block";

        }
        else {

            product.style.display = "none";

        }

    });

});