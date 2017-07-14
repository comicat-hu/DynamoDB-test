var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region: "us-west-2"});

var table = "Movies";

var year = 2014;
var title = "Rush2";

var params = {
    TableName:table,
    Key:{
        "year":year,
        "title":title
    },
    // ConditionExpression:"info.rating <= :val",
    // ExpressionAttributeValues: {
    //     ":val": 5.0
    // }
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});