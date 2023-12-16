# python Flask - Request

from flask import *;

app = Flask(__name__)

@app.route('/<name>')
def Home(name):
    # request object is generated upon receving
    # request from client 
    # request object contains request related data

    print(request)
    print('request methode =>',request.method)
    print('request headers =>',request.headers)
    print('request cookies =>',request.cookies)

    return f'welcome {name}'

if(__name__=='__main__'):
    app.run(host='localhost',port=1000,debug=False)