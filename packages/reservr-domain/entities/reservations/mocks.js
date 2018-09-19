const casual = require('casual')


function getRandomDate() {
  const start = Date.now()
  const date = new Date(+start + Math.floor(Math.random()*10000000000));
  console.log(date)
  return date.getTime();
}

module.exports.createReservation = () => {
  const randomDate = getRandomDate()
  return {
    name: casual.first_name + ' ' + casual.last_name,
    hotelName: casual.company_name,
    arrivalDate: randomDate,
    departureDate: randomDate + 8.64e+7
  }
}