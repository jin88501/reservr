module.exports = {
  Query: {
    reservation: (obj, { id }, { db }) => db.Reservations.findById(id),
    reservations: (obj, args, { db }) => db.Reservations.getAll()
  },
  Mutation: {
    createReservation: (obj, { name, hotelName, arrivalDate, departureDate }, { db }) => {
      return db.Reservations.create({
        name,
        hotelName,
        arrivalDate,
        departureDate
      })
      .then(result => result.dataValues.id)
      .catch(e => console.error('create failed'))
    },
  }
}