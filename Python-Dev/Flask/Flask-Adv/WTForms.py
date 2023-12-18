# pyton - Flask
# WT Forms

from flask import *;
from wtforms import *;

app = Flask(__name__)

class CustomForm(Form):
    name = TextAreaField("Name Of Student")
    Gender = RadioField('Gender', choices = [('M','Male'),('F','Female')])
    Address = TextAreaField("Address")

    mail = TextAreaField("Email")
    
    Age = IntegerField("age")
    language = SelectField('Languages', choices = [('cpp', 'C++'), 
      ('py', 'Python')])
    submit = SubmitField("Send")

@app.route('/')
def Index():
    myForm = CustomForm()
    return render_template('index.html',form=myForm)

if(__name__=='__main__'):
    app.run(debug=False,host='localhost',port=1000)