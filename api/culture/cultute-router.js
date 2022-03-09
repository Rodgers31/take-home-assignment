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
router.get('/forming', async (req, res, next) => {
  let { forming } = req.body;
  Culture.findBy({ forming });
  console
    .log('forming', forming)
    .then((images) => {
      res.status(200).json(images);
    })
    .catch(next);
});
router.get('/:id', async (req, res, next) => {
  Culture.getById(req.params.id)
    .then((culture) => {
      if (!culture) {
        res.status(404).json({
          message: 'The culture does not exist',
        });
      } else {
        res.status(200).json(culture);
      }
    })
    .catch(next);
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  Culture.update(id, changes)
    .then((change) => {
      if (changes.forming == true) {
        Culture.getById(id).then((item) => {
          res.status(200).json({ message: `item is forming` });
        });
      } else if (changes.forming == false) {
        Culture.getById(id).then((item) => {
          res.status(200).json({ message: `item not forming` });
        });
      } else {
        next();
      }
    })
    .catch(next);
});
// router.post('/', async (req, res, next) => {});

module.exports = router;
