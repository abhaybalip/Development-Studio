# python - Flask
# Response Object
from flask import *;

app = Flask(__name__)

@app.route('/read')
def Writer():
    Response.stream = 'writing-stream'
    Response.retry_after = 10
    return 'Home Page'

@app.route('/write')
def Reader():
    data = Request.stream
    print('received data=> ',data)
    return 'data received'

if(__name__=='__main__'):
    app.run(host='localhost',port=1000,debug=True)