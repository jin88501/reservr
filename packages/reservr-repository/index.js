const Sequelize = require('sequelize');
const { times } = require('ramda')
const { createReservation } = require('reservr-domain/entities/reservations/mocks')

const db = new Sequelize('reservr', null, null, {
  dialect: 'sqlite',
  storage: './reservations.sqlite'
});

const Reservations = db.define('reservations', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  hotelName: {
    type: Sequelize.STRING
  },
  arrivalDate: {
    type: Sequelize.DATE,
  },
  departureDate: {
    type: Sequelize.DATE,
  }
});

db.sync({ force: true }).then(()=> {
  times(() => {
    Reservations
      .create(createReservation())
      .then(result => result.dataValues.id)
      .catch(e => { console.error('mock data population failed') })
  }, 10);
});

module.exports = { 
  Reservations
}