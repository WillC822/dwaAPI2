const url = require('../src/models/db.js');
const app = express();

module.exports = (express) => {
  const router = express.Router();

  //Create
  app.post('urls', (req,res) => {
    url.create(req.body, (err) => {
            res.status(500).json(err);
        }, (data) => {
            res.status(200).json(data);
        })
    });
  //Read All
  app.get('/urls', (req, res) => {
      user.findAll( (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Read One(find only one user)
  app.get('/urls/:id', (req, res) => {
      req.body.id = req.params.id;
      user.findAll(req.body, (err) => {
          res.status(500).json(err);
      }, (data) => {
          res.status(200).json(data);
      })
  });

  //Update
  app.post('/urls/:id', (req, res) => {
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
