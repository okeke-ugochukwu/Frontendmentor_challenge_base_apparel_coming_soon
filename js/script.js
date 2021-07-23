    var test_Text = "Code works at this point";


    document.getElementById("submit").addEventListener("click", function(e) {
        e.preventDefault();
        
        emailFormat =  /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

        var userEmail = document.getElementById("email").value;

        if (userEmail == "") {
        document.getElementById("mssg").innerText = "Please provide an email";
        }
        else if (userEmail.match(emailFormat)) {
            document.getElementById("form").submit();
        }

    })

    document.getElementById("email").addEventListener("keyup", function () {
        document.getElementById("mssg").innerText = "";
    })