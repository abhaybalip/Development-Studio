# python - Flask
# App routes

from flask import Flask

app = Flask(__name__)

# define route via function decoration
@app.route('/')
def home():
    return 'welcome to home'

# passing argument via path
@app.route('/greet/<str:name>')
def greet(name: str):
    return f'Hello {name}'


# Add path via url rule function
def About():
    return 'About Page'

app.add_url_rule('/about','about',About)

if(__name__=='__main__'):
    app.run(debug=False)