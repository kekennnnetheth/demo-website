const requestListener = function(req, res){
  res.writeHead(200);
  res.end('Received request! HELLO WORLD')
}

// Seems like this is the way modules/ functions/ variables are exported. You have to manually control it.
module.exports = {
  requestListener
}