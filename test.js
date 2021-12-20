function testThatEmail () {
    let email = document.getElementById('email')

    axios
    .get("https://app.verify-email.org/api/v1/DwmTd6FIsAGDKe7GMi1YpSSESwoLuzO0uG8VOC3NLki2LVzsD5/verify/"+email+"")
    .then(function(response) {
        if (response.data.status == 1) {
            console.log("yay")
        } else if (response.data.status == 0) {
            console.log("nay")
        } else {
            console.log("neither")
        }

    console.log(response);
    })
    .catch(function(error) {
    console.log(error);
    });

}

document.getElementById('verify').setAttribute("onclick","testThatEmail()");




