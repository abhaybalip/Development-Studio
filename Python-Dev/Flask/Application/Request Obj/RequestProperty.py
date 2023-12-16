# python - Flask
# Request Property

from flask import *;

app = Flask(__name__)

@app.route('/')
def Home():
    print('charset=>',request.accept_charsets)
    print('encoding=>',request.accept_encodings)
    print('language=>',request.accept_languages)
    print('mimetypes=>',request.accept_mimetypes)

    print('access route=>',request.access_route)

    print('request enviorn=>',request.environ)

    print('request date=>',request.date)

    return render_template('index.htmml')

if(__name__=='__main__'):
    app.run(debug=False,host='localhost',port=1000)