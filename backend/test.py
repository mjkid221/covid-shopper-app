from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/htdocs/test')
def test():
    return "Test Endpoint"

