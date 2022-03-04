const express = require('express');

const Culture = require('./culture-modal');

const router = express.Router();

router.get('/', async (req, res, next) => {
  Culture.getAll()
    .then((images) => {
      res.status(200).json(images);
    })
    .catch(next);
});
router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  Culture.update(id, changes)
    .then((change) => {
      if (change === true) {
        Culture.finById(id).then((item) => {
          res
            .status(200)
            .json({ message: `${item.url} has been changes`, item });
        });
      } else {
        next();
      }
    })
    .catch(next);
});
// router.post('/', async (req, res, next) => {});

module.exports = router;
