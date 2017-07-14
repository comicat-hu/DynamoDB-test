var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region: "us-west-2"});


var params = {
    TableName : "Movies",
    KeyConditionExpression: "#yr = :yyyy and title between :t1 and :t2",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy":2014,
        ":t1":"A",
        ":t2":"Z",
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(item.year + ' - ' + item.title);
        });
    }
});