var AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient({region: "us-west-2"});


var params = {
  RequestItems: {
    "Movies": [
      {
        DeleteRequest: {
          Key: { year: 2013, title: "Rush" }
        }
      },
      {
        PutRequest: {
          Item: {
            year: 1994,
            title: "I born",
            hi: {msg:"Hello World"}
          }
        }
      }
    ]
  }
};


docClient.batchWrite(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});