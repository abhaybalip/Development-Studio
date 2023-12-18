# python - Flask
# Flash Message

from flask import *;

app = Flask(__name__)

@app.route('/Test')
def Test():
    return 'Flash Message tested'

@app.route('/')
def Index():
    if(request.method==['GET','POST']):
        flash('Logged in','login')
        return redirect(url_for('login'))

if(__name__=='__main__'):
    app.run(debug=False,host='localhost',port=1000)

# <div class="flash">
#   {% with messages = get_flashes() %}
#       {% for msg in messages %}
#           {{msg}}
#       {% endfor %}
#   {% endwith %}
# </div>