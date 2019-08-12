var express = require('express');
var router = express.Router();

router.get('/', function(req, resp) {
    resp.send('wiki home page');
});
router.get('/about', function(req, resp) {
    resp.render('modelViews/newmodel', {title: 'about us'});
});
module.exports = router;