const requestListener = function(req, res){
  res.setHeader("Content-Type", "application/json")
  res.writeHead(200);
  res.end(JSON.stringify({
    "test": "json-data",
    "data": {
      "json": "json",
    }
  }))
}

// Seems like this is the way modules/ functions/ variables are exported. You have to manually control it.
module.exports = {
  requestListener
}