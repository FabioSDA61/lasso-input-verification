
document.getElementById('calculate-button-flexpay').onclick = function () {

    let downpayment = document.getElementById('downpayment').value
    let weeks = parseInt(document.getElementById('weeks').value);
    let householdMembers = document.getElementById('household-members-flexpay').value ? parseInt(document.getElementById('household-members-flexpay').value) : 3;
    let deadline = document.getElementById('paymentplan-deadline-date').innerText
    let str = document.getElementById('price').innerText
	  let price = parseInt(str.slice(1, str.length - 4).replace(/,/g, ''))-downpayment;
    let remainingMonths = Date.parse(new Date(deadline)) - Date.parse(new Date());
    let sec = Math.floor(remainingMonths / 1000),
      min = Math.floor(sec / 60),
      hrs = Math.floor(min / 60),
      days = Math.floor(hrs / 24),
      months  = Math.floor(days / 30),
      payments = weeks*months
      
    let rate = (price/payments).toFixed(2);

    document.getElementById('plan-duration').innerText = months;
    document.getElementById('plan-rate').innerText = rate;
    document.getElementById('c02-saving-flexplay').innerText = householdMembers*61;
    document.getElementById('cash-return-flexplay').innerText = householdMembers*350;
    document.getElementById('total-savings-flexpay').innerText = price-householdMembers*350*10;
};

document.getElementById('calculate-button-cash').onclick = function () {

  let householdMembers = document.getElementById('household-members-cash').value ? parseInt(document.getElementById('household-members-flexpay').value) : 3;
  let str = document.getElementById('price').innerText
  let price = parseInt(str.slice(1, str.length - 4).replace(/,/g, ''))-downpayment;

  document.getElementById('plan-duration').innerText = months;
  document.getElementById('plan-rate').innerText = rate;
  document.getElementById('c02-saving-cash').innerText = householdMembers*61;
  document.getElementById('cash-return-cash').innerText = householdMembers*350;
  document.getElementById('total-savings-cash').innerText = price-householdMembers*350*10;
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



