from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/birthday', methods=['POST'])
def birthday():
    name = request.form['name']
    return render_template('birthday.html', name=name)

app.run(host='0.0.0.0', port=8080)


