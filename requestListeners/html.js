const fs = require('fs').promises;

const filePath = "./html/simple.html"
console.log(`file path: ${filePath}`)

const requestListener = function(req, res){
  fs.readFile(filePath)
    .then(data => {
      res.setHeader("Content-Type", "text/html")
      res.writeHead(200);
      res.end(data)
    })
    .catch(err => {
      res.writeHead(500)
      res.end(err)
      return;
    })
  
}

// Seems like this is the way modules/ functions/ variables are exported. You have to manually control it.
module.exports = {
  requestListener
}