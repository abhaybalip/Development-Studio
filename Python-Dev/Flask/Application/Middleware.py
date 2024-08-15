from flask import Flask, request, jsonify

app = Flask(__name__)

# Before request middleware
@app.before_request
def before_request_func():
    print(f"Request started: {request.method} {request.url}")

# After request middleware
@app.after_request
def after_request_func(response):
    print(f"Response status: {response.status}")
    return response

@app.route('/')
def home():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
