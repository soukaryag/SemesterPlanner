import random
from flask import Flask, render_template, request
from urlLoader import getClasses

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/classes')
def classes():
    mjr = request.args.get('mjr')
    return getClasses(mjr)


if __name__ == '__main__':
    app.run()