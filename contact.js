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
  var submit = document.querySelector(".submit-button")
    submit.addEventListener("click", function (event) {
        event.preventDefault()
        var nameRegex = /^[a-z A-Z]+$/
        var phoneRegex = /^\d{10}$/
        var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/
        var validate = true

        var name = document.getElementById("name")
        var phone = document.getElementById("phone")
        var email = document.getElementById("email")
        var msg = document.getElementById("message")
        if (nameRegex.test(name.value) == false) {
            document.querySelector("#nameError").style.display = "inline"
            validate = false
        }
        else {
            document.querySelector("#nameError").style.display = "none"
        }
        if (phoneRegex.test(phone.value) == false) {
            document.querySelector("#phoneError").style.display = "inline"
            validate = false
        }
        else {
            document.querySelector("#phoneError").style.display = "none"
        }
        if (emailRegex.test(email.value) == false) {
            document.querySelector("#emailError").style.display = "inline"
            validate = false
        }
        else 
        {
            document.querySelector("#emailError").style.display = "none"
        }
        if (validate == true) {
            alert("Finished the register")
        }

    })