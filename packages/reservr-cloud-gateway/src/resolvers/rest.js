const resolvers = require('./graphql')

module.exports = (app, db) => {

  app.get('/reservations', (req, res, next) => {
    resolvers.Query.reservations(null, null, { db })
      .then(data => {
        if(!data) res.send(404)
        res.send(data)
      })
      .catch(next)
  })
  
  app.get('/reservation/:id', (req, res, next) => {
    const { id } = req.params
    resolvers.Query.reservation(null, { id }, { db })
      .then((data) => {
        if(!data) res.send(404)
        res.send(data)
      })
      .catch(next)
  })
  
  app.post('/reservation', (req, res) => {
    const {
      name,
      hotelName,
      arrivalDate,
      departureDate 
    } = req.params

    resolvers.Query.reservation(null, { name, hotelName, arrivalDate, departureDate }, { db })
      .then((data) => {
        if(!data) res.send(404)
        res.send(data)
      })
      .catch(next)
  })
  
}