# python - Flask

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

# Home page
@app.route('/')
def home():
    return redirect('/about')

# Add route
@app.route('/about')
def about():
    return 'redirected to about'

# Add route with redirection
@app.route('/test')
def test():
    print('redirected to : ',url_for('about'))
    return redirect(url_for('about'))

if(__name__=='__main__'):
    app.run(debug=False)