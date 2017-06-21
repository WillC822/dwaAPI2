const url = require('../src/tools/url.js');

module.exports = (express) => {
  const router = express.Router();

  router.get('/', (req,res) => {
    res.json({hello:'world'});
    //console.log('hello');
  });

  router.get('/status', (req,res) => {
    res.json({healthy:'true'});
    //console.log('status');
  });

  router.post('/urls', (req,res) => {
    console.log(req.body);

    const urlInfo = {
      shortURL: url.genURL()
    };

    res.json({urlInfo});
  });

return router;
}
