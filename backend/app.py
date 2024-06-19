from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
from model import *
app=Flask(__name__)
CORS(app)
@app.route('/')
def hello():
    return "Hello"
# postSurveyData method is used to fetch the data entered by user  in survey form and predicts whether he/she is mental or not based on that data.
#surveyDatas() = serves as the endpoint for receiving data from the user, processing it and returning a prediction to the client side
#request.get_json() = receives the POST request and extracts the JSON data
#jsonify =function to send data back to the client
@app.route('/postSurveyData', methods=['POST'])
def surveyDatas():
    surveyDa = request.get_json()
    list=[]
    for x in surveyDa:
        list.append(surveyDa[x])
    # print(list)
    predicted_value=classifier.predict([list])
    predicted_value=predicted_value.tolist()
    # print("Prediction value: ",predicted_value)
    if not surveyDa:
    #     return predicted_value, 400
    # return predicted_value, 200
        return jsonify({'msg': predicted_value}), 400 #400=Error : Bad Request
    return jsonify({'msg': predicted_value}), 200 #200=OK
if __name__=='__main__':
    app.run(debug=True)