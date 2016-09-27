"use strict";
const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 8080;
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const vidsyURL = "https://api.flickr.com/services/rest/?";


/* ----------------------------------
 * -----   Global Middleware   ------
 * ---------------------------------- */
app.use(express.static('./'));
app.use(cors());
// app.use(bodyParser.json());


/* ----------------------------------
 * -----        Routes         ------
 * ---------------------------------- */

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendFile(path.join(`${__dirname}/index.html`))
});

/* GET Search Route*/
app.get('/search/:searchValue', (req,res)=>{

  const { searchValue } = req.params;
  const formData = {
    method: "flickr.photos.search",
    api_key: "6830d6484081ae8eb2e69154319ffdf4",
    text: searchValue,
    content_type: "1",
    nojsoncallback: "1",
    format: "json",
    secret: "cb70ec2eb5cc6de1"
  }

  const filterPhotoData = (result) => {
    return {
      id: result.id,
      farmId: result.farm,
      serverId:result.server,
      secret: result.secret
    }
  };

  request.post({url:vidsyURL, formData: formData}, function(err, httpResponse, body){
    if(err) {
      console.log(err);
      res.send(500);
      return;
    }

    let data = JSON.parse(body);
    let photos = data.photos;
    let photoList = photos.photo;

    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

    let filteredResults = photoList.map(filterPhotoData);

    res.send(filteredResults);
  });

});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
