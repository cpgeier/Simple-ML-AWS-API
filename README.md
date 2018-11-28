# Simple-ML-AWS-API
Create a live custom machine learning endpoint with AWS API Gateway, AWS Lambda, and AWS Machine Learning.


## Dataset and model creation
Keep default for values not specified below
1. Create new AWS S3 bucket
2. Upload black-friday/BlackFriday.csv to S3 bucket
3. Create new Data source + model in AWS Machine Learning
4. Point data source location to uploaded bucket + file
5. Does the first line in your CSV contain the column names? -> Yes
6. Select Target as Purchase column
7. Identifier as User_ID
8. Keep defaults and create model

## Lambda function - Node.js 8.10
1. Create new function
2. Create custom role
3. Navigate to the IAM services and select roles
4. Attach policies to created role
    - AmazonMachineLearningFullAccess
5. Go back to lambda function
6. Add API Gateway as a trigger
7. Create new API with Open security
8. Copy and paste index.js from github repo into lambda function
9. Edit MLModelID parameter to match created machine learning model

## Connecting Lambda + ML
1. Verify Model has "Completed" status
2. Select Create Endpoint under Enable real-time predictions
3. Try real-time predictions to get some example outputs
4. Test Lambda function

## Connecting Lambda + API Gateway
1. Navigate to API in API Gateway service
2. Create POST method on the existing resource
3. Have it execute your lambda function
4. Enable CORS for API
5. Copy from Stages->Default->Invoke URL into api-test.py
6. Test it out!
