/*
I did a function within function. I know it’s not efficient, but was playing around.  The function of uberRate(customerCity, index), I'm gaining access to uberRate's array index by passing in the same index as customerCity.  It works until one day someone adds more cities and/or more rates, or some cities share same rate.
*/
 
let baseFee = .40
let cities = ["Thiruchirappalli", "Central Busstop", "Chathiram Busstop", ]
let uberRates = [250, 300, 400]
let customerName = "Rubila Krishnan" 
let customerCity = "Central Busstop" 
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
function getRate(customerCity) {
  function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
getRate(customerCity)
