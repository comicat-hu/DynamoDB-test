var AWS = require("aws-sdk");
//AWS.config.loadFromPath(__dirname + './config.json');

var dynamodb = new AWS.DynamoDB({region: "us-west-2"});

var params = {
    TableName : "Movies",
    KeySchema: [ //Hash-Range
        { AttributeName: "year", KeyType: "HASH"},  //Partition key(hash attribute)
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key(range attribute)
    ],
    AttributeDefinitions: [
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" },

    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});



