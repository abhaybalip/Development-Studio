# python - Flask

from flask import Flask

# flask application
app = Flask(__name__)

# application route - bind function using decorator function
@app.route('/')
def greet():
    return 'hello world'

# run app on mail file
if __name__ == '__main__':
    app.run()