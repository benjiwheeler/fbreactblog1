var express = require('express');
var app = express();

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';


app.all('/*',function(req,res,next){
  // necessary in order to allow cross domain/origin requests/responses
  res.append('Access-Control-Allow-Origin', '*');
  next(); // http://expressjs.com/guide.html#passing-route control
});

app.get('/pg', function (req, res) {
  var results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err});
      }

  // i need to figure out how to create pg table in the first place!
  //var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');

      // SQL Query > Insert Data
//      client.query("INSERT INTO items(text, complete) values($1, $2)", [data.text, data.complete]);

      // SQL Query > Select Data
      var query = client.query("SELECT * FROM items ORDER BY id ASC");

      // Stream results back one row at a time
      query.on('row', function(row) {
          results.push(row);
      });

      // After all data is returned, close connection and return results
      query.on('end', function() {
          done();
          return res.json(results);
      });


  });
});

app.get('/abc', function (req, res) {
  var retObj = {a: "b", c: "d"};
  res.format({
    'application/json': function(){
      res.send(retObj);
    },

    'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
    }
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

