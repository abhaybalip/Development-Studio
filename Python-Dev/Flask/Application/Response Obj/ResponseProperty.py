# python - Flask
# Response Object
from flask import *;

app = Flask(__name__)

def Index():
    Response.set_cookie('key','value',max_age=100)
    Response.headers.add('key','value')

    file = Response.files['file-name']
    
    return 'Home Page'
app.add_url_rule('/','Index',Index)

@app.route('/file')
def file():
    Response.status = 'OK'
    Response.status_code = 200
    return send_file('index.html',download_name='test_file',max_age=100)

if(__name__=='__main__'):
    app.run(host='localhost',port=1000,debug=True)