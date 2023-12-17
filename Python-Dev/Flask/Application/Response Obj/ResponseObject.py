# python - Flask
# Response Object
from flask import *;

app = Flask(__name__)

@app.route('/')
def Index():
    # set cookie
    Response.set_cookie("session_id", "abc123", max_age=3600, secure=True, httponly=True)
    Response.headers['content-type'] = 'text/html'
    
    return 'Home Page'

@app.route('/json')
def Json_data():
    Response.status = 'OK'
    Response.status_code = 200
    
    return jsonify({
        'id': 103,
        'name': 'myname','age': 20
    })

if(__name__=='__main__'):
    app.run(host='localhost',port=1000,debug=True)