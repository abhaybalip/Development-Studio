# python - Flask
# jinja rendering

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    object = ['name','surname','age']
    return render_template('index.html',display=[1,2,3,4,5],type=3)

if(__name__=='__main__'):
    app.run(debug=False,port=8080,host='localhost')


# index.html ->
# <div class="main">
#         {% block body %}
#         <div class="display">
#             {% for i in display %}
#             <li>{{i}}</li>
#             {% endfor %}
#         </div>

#         <div class="test">
#             Name = 
#             {% if type==1 %}
#             <div>if Case</div>
#             {% elif type==2 %}
#             <div>elif Case</div>
#             {% else %}
#             <div>Else Case</div>
#             {% endif %}
#         </div>

#         {% endblock %}
#     </div>