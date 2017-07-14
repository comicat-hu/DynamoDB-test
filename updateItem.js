var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region: "us-west-2"})

var table = "Movies";

var year = 2014;
var title = "Rush";

// Update the item, unconditionally,

var params = {
    TableName:table,
    Key:{
        "year": year,
        "title": title
    },
    ExpressionAttributeNames: {"#rank":"rank"},
    UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a, info.#rank=:ra",
    ExpressionAttributeValues:{
        ":r":5.5,
        ":p":"Everything happens all at once.",
        ":a":["Larry", "Moe", "Curly"],
        ":ra":7
       
    },
    ReturnValues:"ALL_NEW" //UPDATE_NEW
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});