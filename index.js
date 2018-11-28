var AWS = require('aws-sdk');
var querystring = require('querystring');

exports.handler = (event, context, callback) => {
    var machinelearning = new AWS.MachineLearning();

    var input_json = JSON.parse(event.body);
    console.log(input_json);
    var params = {}; // Required parameters for AWS ML API
    params['MLModelId'] = ''; // Ex: ml-XXXXo5GVmtH
    params['PredictEndpoint'] = 'https://realtime.machinelearning.us-east-1.amazonaws.com';
    params['Record'] = input_json;


    return machinelearning.predict(params, function(err, data) {
      var response = {};
      response['headers'] = { 'Content-Type': 'application/json' }
      if (err) {
          console.log(err, err.stack); // Error occured
          response['statusCode'] = 503;
          callback(null, response);
      }
      else  {
        console.log(data);
        response['statusCode'] = 200;
        response['body'] = JSON.stringify(data);
        callback(null,response);
      }
    });
};
