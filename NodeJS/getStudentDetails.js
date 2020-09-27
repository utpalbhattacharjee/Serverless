const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "StudentDetails";

exports.handler = (event, context, callback) => {
    
    var params = {
        TableName : tableName,
        Key:{ 
            "Roll" : event.Roll
        }
    }
    docClient.get(params, function(err,data){
        callback(err, data);
    })
}
