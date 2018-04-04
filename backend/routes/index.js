var express = require('express');
var router = express.Router();
var path = require('path');

// Load routes
var hello = require('./api/hello');

// Main router
router.get('/api/hello', hello);

// Vuejs 
router.get('/*', function(req, res){
  
  var staticUrl = req.originalUrl.match(/\/dist\/(.+)\s*/gi);
  staticUrl = (staticUrl) ? staticUrl[0] : '';
 
  if(!staticUrl)
    res.sendFile(path.resolve(process.cwd(), '..', 'frontend', 'index.html'));
});


// Export
module.exports = router;
