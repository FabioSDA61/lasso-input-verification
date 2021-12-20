

document.getElementById('verify').onclick = function () {
    console.log("onClick")
    let email = document.getElementById('email').value

    axios
    .get("https://app.verify-email.org/api/v1/DwmTd6FIsAGDKe7GMi1YpSSESwoLuzO0uG8VOC3NLki2LVzsD5/verify/"+email+"")
    .then(function(response) {
        if (response.data.status == 1) {
            console.log("yay")
            document.getElementById('submit').style.display = "block"
            document.getElementById('pass').style.display = "block"
        } else {
            console.log("nay")
            document.getElementById('fail').style.display = "block"
        }

    console.log(response);
    })
    .catch(function(error) {
    console.log(error);
    });

}





