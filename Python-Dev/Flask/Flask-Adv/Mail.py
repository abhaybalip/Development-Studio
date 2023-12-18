# python - Flask
# Flask Mail server

from flask import *;
from flask_mail import *;

app = Flask(__name__)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'mail-id@gmail.com'
app.config['MAIL_PASSWORD'] = 'password'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/')
def Index():
   msg = Message('Hello', sender = 'abhay.balip01@gmail.com', recipients = ['abhay.balip@gmail.com'])
   msg.body = 'Test mail sent by flask app'
   mail.send(msg)
   return 'mail sent'

if(__name__=='__main__'):
    app.run(debug=False,host='localhost',port=1000)