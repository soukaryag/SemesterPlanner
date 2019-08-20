import random
from flask import Flask, render_template, request
from urlLoader import getClasses
import json

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/classes')
def classes():
    mjr = request.args.get('mjr')   # Returns an array of arrays [[Class Abbrv, Class name], ...., [Class Abbrv, Class name]]
    classes = getClasses(mjr)
    names = []
    for c in classes:
        names.append(c[1])

    formatted_names = json.dumps(names)
    return formatted_names

if __name__ == '__main__':
    app.run()