# app.py
from flask import Flask, session, redirect, url_for, request
from flask_session import Session
import os

app = Flask(__name__)

# Configure session to use filesystem (server-side)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_FILE_DIR'] = os.path.join(os.getcwd(), 'flask_session_files')
app.config['SESSION_FILE_THRESHOLD'] = 100  # Number of files after which to start deleting old ones
app.config['SESSION_FILE_MODE'] = 0o600  # File permissions for session files
app.config['SECRET_KEY'] = 'your-secret-key'  # Change this to a secure, randomly generated key

# Initialize the session extension
Session(app)

@app.route('/')
def index():
    if 'username' in session:
        username = session['username']
        return f'Logged in as {username} <a href=''/logout''>Logout</a>'
    return 'You are not logged in <a href=''/login''>Login</a>'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    return '''
        <form method="post">
            <p><input type="text" name="username" placeholder="Username"></p>
            <p><input type="submit" value="Login"></p>
        </form>
    '''

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
