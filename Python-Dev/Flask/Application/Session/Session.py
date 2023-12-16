# python - Flask
# Session Property

from flask import *;

app = Flask(__name__)

@app.route('/')
def Home():
    print('session accessed=>',session.accessed)
    print('session modified=>',session.modified)
    print('session new=>',session.new)
    print(session)
    # print(session.keys())

    return render_template('index.html')

if(__name__=='__main__'):
    app.run(debug=False,host='localhost',port=1000)