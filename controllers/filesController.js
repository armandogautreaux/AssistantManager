const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.File.find(req.query)
      .sort({ sate: -1 })
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  findById: function(req, res) {
    db.File.findById(req.params.id)
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  findByTwoQueries: function(req, res) {
    db.File.find(
      {
        client: req.query.client,
        fileNumber: req.query.fileNumber
      },
      function(err, result) {
        if (err) {
          res.status(422).json(err);
        } else if (!result.length) {
          res.status(404).send('Not found');
        } else {
          res.json(result);
        }
      }
    );
  },
  create: function(req, res) {
    db.File.create(req.body)
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.File.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  remove: function(req, res) {
    db.File.findById({ _id: req.params.id })
      .then(function(dbModel) {
        dbModel.remove();
      })
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  }
};
