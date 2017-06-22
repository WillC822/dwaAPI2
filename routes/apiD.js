//const url = require('../src/models/db.js');


module.exports = (express) => {
  const router = express.Router();

  //Create
  router.post('urls', (req,res) => {
    url.create(req.body, (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });
  //Read All
  router.get('/urls', (req, res) => {
      user.findAll( (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Read One(find only one user)
  router.get('/urls/:id', (req, res) => {
      req.body.id = req.params.id;
      user.findAll(req.body, (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Update
  router.post('/urls/:id', (req, res) => {
      req.body.id = req.params.id;
      user.update(req.body, (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Destroy(find only one user)
  router.delete('/urls/:id', (req, res) => {
      req.body.id = req.params.id;
      user.destroy(req.body, (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      });
  });
}
