'use strict';
var AWS = require("aws-sdk");
var sns = new AWS.SNS();

exports.handler = (event, context, callback) => {
    event.Records.forEach((record) => {
        console.log('Stream record: ', JSON.stringify(record, null, 2));

        if (record.eventName == 'INSERT') {
            var roll = JSON.stringify(record.dynamodb.NewImage.Roll);
            var fname = JSON.stringify(record.dynamodb.NewImage.FirstName);
            var lname = JSON.stringify(record.dynamodb.NewImage.LastName);
            var dept = JSON.stringify(record.dynamodb.NewImage.Department);
            var year = JSON.stringify(record.dynamodb.NewImage.Year);
            var mobile = JSON.stringify(record.dynamodb.NewImage.Mobile);
            var rl=roll;
            var params = {
                Subject: 'A new entry from roll- ' + roll ,
                Message: 'New student added with roll ' + roll + ' with the name ' + fname + lname + ' with the following details ' + dept + year + mobile ,
                TopicArn: 'arn:aws:sns:us-east-1:164638708675:StudentDetails'
            };
            sns.publish(params, function(err, data) {
                if (err) {
                    console.error("Unable to send message. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Results from sending message: ", JSON.stringify(data, null, 2));
                }
            });
        }
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);
};  
