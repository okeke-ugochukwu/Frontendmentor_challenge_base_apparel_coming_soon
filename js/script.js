    var test = "Code works at this point";

    var emailInput = document.getElementById("email");
    var submitBtn = document.getElementById("submit");
    var errorMssgBox = document.getElementById("mssg");

    document.getElementById("submit").addEventListener("click", function(e) {
        e.preventDefault();

        emailFormat =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            //courtsey of edureka.co ;)

        var userEmail = emailInput.value;

        if (userEmail == "") {
            emailInput.classList.add("error");
            errorMssgBox.innerText = "Please provide an email";
            document.getElementById("error-icon").style.display = "block";
            emailInput.focus();
        }
        else if (userEmail.match(emailFormat)) {
            alert("Yay, you've joined the mailing list");
        }
        else {
            emailInput.classList.add("error");
            errorMssgBox.innerText = "Please provide a valid email";
            document.getElementById("error-icon").style.display = "block";
            emailInput.focus();
        }
    })

    document.getElementById("email").addEventListener("keyup", function () {
        document.getElementById("mssg").innerText = "";
            document.getElementById("error-icon").style.display = "none";
            emailInput.classList.remove("error");
    })