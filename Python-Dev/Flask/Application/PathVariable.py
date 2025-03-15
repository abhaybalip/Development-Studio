from flask import Flask, render_template

app = Flask(__name__)

@app.route('/user/<int:user_id>')
def user_profile(user_id):
    # Fetch user data based on user_id
    user = get_user_data(user_id)  # Replace with your data retrieval logic
    if user:
        return render_template('user_profile.html', user=user)
    else:
        return "User not found"

def get_user_data(user_id):
    users = {
        1: {'name': 'Alice', 'city': 'New York'},
        2: {'name': 'Bob', 'city': 'London'},
        3: {'name': 'Charlie', 'city': 'Tokyo'}
    }
    return users.get(user_id)

if __name__ == '__main__':
    app.run(debug=True)