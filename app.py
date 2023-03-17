from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    return render_template('login.html')

@app.route('visualization')
def visualization():
    return render_template('visualization.html')

if __name__ == "main":
    app.run(debug=True)
