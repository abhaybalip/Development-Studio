# python - Flask

from flask import Flask, render_template
from jinja2 import Template

app = Flask(__name__)
@app.route('/')
def home():
    template = open('./Templates/index.html').read()

    return render_template(Template(template),name='my-name',age=20)

if(__name__=='__main__'):
    app.run(debug=False,host='localhost',port=8080)

# index.html =>

# {% block body %}

# Name: {{ name }}
# Age: {{ age }}

# {% if age >= 18 %}
# <div>Adult person</div>
# {% else %}
# <div>Not adult person</div>
# {% endif %}

# {% endblock %}