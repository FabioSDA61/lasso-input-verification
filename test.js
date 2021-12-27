document.getElementById('calculate-button-cash').onclick = function () {
    console.log('click')
    let downpayment = document.getElementById('downpayment').value
    let weeks = document.getElementById('weeks').value
    let householdMembers = document.getElementById('household-members-flexpay').value
    let price = document.getElementById('price').value

    let duration = (price/weeks)-downpayment;
    console.log(duration)
    
    document.getElementById('plan-duration').innerText = duration;
    document.getElementById('plan-duration-years').innerText = duration/52;
    document.getElementById('c02-saving-flexplay').innerText = householdMembers*61;
    document.getElementById('cash-return-flexplay').innerText = householdMembers*350;
    document.getElementById('total-savings-flexpay').innerText = householdMembers*350*10;

};




/*
document.getElementById('verify').onclick = function () {
    
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
*/


 /* 
  setTimeout(function(){ 
  	let colorChoice = document.getElementById("color-choice").innerText;
    if (colorChoice == "White") {
      document.querySelector(".icecap-white").click();
    } else if (colorChoice == "Cream") {
      document.querySelector(".beach-creme").click();
    } else if (colorChoice == "Matte Grey") {
      document.querySelector(".pebble-grey").click();
    } else if (colorChoice == "Silver Metallic") {
      document.querySelector(".silver-metallic").click();
    } else if (colorChoice == "Canary") {
      document.querySelector(".lasso-canary").click();
    } else {
      document.querySelector(".bear-black").click();
    } 
  }, 1000);
*/



