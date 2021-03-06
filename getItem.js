var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region: "us-west-2"})

var table = "Movies";

var year = 2013;
var title = "Rush";

var params = {
    TableName: table,
    Key:{
        "year": year,
        "title": title
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});