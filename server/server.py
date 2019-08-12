import random
from flask import Flask, render_template
from urlLoader import getClasses

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/getClasses')
def hello():
    return getClasses('CS B.S.')


if __name__ == '__main__':
    app.run()