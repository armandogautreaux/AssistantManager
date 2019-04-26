const router = require('express').Router();
const filesController = require('../../controllers/filesController');

router
  .route('/')
  .get(filesController.findAll)
  .post(filesController.create);

router.route('/search').get(filesController.findByTwoQueries);

router
  .route('/:id')
  .get(filesController.findById)
  .patch(filesController.update)
  .delete(filesController.remove);

module.exports = router;
