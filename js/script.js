var test_Text = "Code works at this point"
document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();

    var userEmail = document.getElementById("email").innerText;
    console.log(test_Text);

    if (userEmail == " ") {
       alert(userEmail)
    }
})