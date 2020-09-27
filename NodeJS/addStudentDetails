const AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "StudentDetails";

exports.handler = (event, context, callback) => {
    
    var params = {
        TableName : tableName,
		Item:{
		  "Roll" : event.Roll, 
		  "Department" : event.Department, 
		  "FirstName" : event.FirstName, 
		  "LastName" : event.LastName,
		  "Year" : event.Year, 
		  "Mobile" : event.Mobile
		}
	};
    docClient.put(params, function(err,data){
        callback(err, data);
    })
}
