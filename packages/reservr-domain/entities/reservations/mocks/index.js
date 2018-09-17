const casual = require('casual')

module.exports.createReservation = () => ({
  name: casual.first_name + ' ' + casual.last_name,
  hotelName: casual.company_name,
  arrivalDate: Date.now(),
  departureDate: Date.now() + casual.integer(from = 86400000, to = 864000000)
})