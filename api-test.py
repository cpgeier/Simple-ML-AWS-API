import requests
import json

url = "" # Ex: https://f7qafXXXX.execute-api.us-east-1.amazonaws.com/default/{lambda_name}
headers = { 'Content-Type': "application/x-www-form-urlencoded" }

payload = json.dumps({
    "User_ID" : "1000005",
    "Product_ID" : "P00145042",
    "Gender": "M",
    "Age" : "26-35",
    "Occupation" : "20",
    "City_Category" : "A",
    "Stay_In_Current_City_Years" : "1",
    "Marital_Status": "1",
    "Product_Category_1": "1",
    "Product_Category_2": "2",
    "Product_Category_3": "5"
})
response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)