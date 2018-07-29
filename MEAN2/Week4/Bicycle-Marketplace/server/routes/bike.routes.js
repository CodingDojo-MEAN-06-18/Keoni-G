const { bikeController } = require('../controllers');
const router = require('express').Router();


module.exports = router
  .get('/', bikeController.index)
  .post('/', bikeController.create)
  .get('/:bike_id', bikeController.show)
  .put('/:bike_id', bikeController.update)
  .delete('/:bike_id', bikeController.destroy);
