from flask import Flask
from flask import jsonify
import json
from flask.helpers import send_file



app = Flask(__name__)

@app.route("https://godomainsih.vercel.app/api/python")
def hello_world():
    # with open('/data.json') as f:
    #     data = json.load(f)
    
    
    # return jsonify(data)


    return send_file('data.json', mimetype='application/json')



    


    