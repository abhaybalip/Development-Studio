# python - Flask

from flask import Flask, render_template

app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')

if(__name__=='__main__'):
    app.run(debug=False,host='localhost',port=8080)




# index.html =>
# <body>
#     <div class="test1">
#         test 1 class code
#     </div>

#     <div class="main">
#         {% extends "base.html" %}

#         line before code body

#         {% block content %}

#         line between code body

#         {% endblock %}

#         line after code body
#     </div>

#     <div class="test2">
#         test 2 class code
#     </div>
# </body>


# base file =>
# <div class="main">
#         base file code block
#     </div>