const accountId=12345
let accountEmail="anoop@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

let accounState;    //Intitially it is undefined
// accountId=124  // not allowed

accountEmail="anoop1@gmail.com"
accountPassword="123456"
accountCity="Jodhpur"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accounState]);

/*
Prefer not to use var because of issue in block or functional scope
*/