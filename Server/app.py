from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
from flask_cors import CORS
import numpy as np
import sys
import json

flask_app = Flask(__name__)
CORS(flask_app)

app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Veritas", 
		  description = "Predict trust index of a news")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'inputText': fields.String(required = True, 
				  							   description="Input Text for the Model", 
    					  				 	   help="Input Text cannot be blank")})


@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			req = json.loads(request.data.decode("utf-8"))
			print(type(req))
			print(req)
			stringToSendBack = "This is your returning string!" + req["data"]
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": stringToSendBack
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})