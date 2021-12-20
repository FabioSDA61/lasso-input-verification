axios
 .get("https://app.verify-email.org/api/v1/DwmTd6FIsAGDKe7GMi1YpSSESwoLuzO0uG8VOC3NLki2LVzsD5/verify/support@verify-email.org")
 .then(function(response) {
  console.log(response);
 })
 .catch(function(error) {
  console.log(error);
 });