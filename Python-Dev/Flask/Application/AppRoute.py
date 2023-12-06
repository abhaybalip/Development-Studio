# python - Flask
# App routes

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'welcome to home'

# passing argument via path
@app.route('/greet/<str:name>')
def greet(name: str):
    return f'Hello {name}'

if(__name__=='__main__'):
    app.run(debug=False)