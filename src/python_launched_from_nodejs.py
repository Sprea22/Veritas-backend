from flask import Flask
from yourmodule import function_that_return_xml
app = Flask(__name__)

@app.route("/")
def hello():
    xml = function_that_return_xml()
    # make fancy operations if you want
    return xml

if __name__ == "__main__":
    app.run()