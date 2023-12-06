# python - Flask

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return redirect('/about')

@app.route('/about')
def about():
    return 'redirected to about'

@app.route('/test')
def test():
    return redirect(url_for('about'))

if(__name__=='__main__'):
    app.run(debug=False)