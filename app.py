
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Dummy users for demonstration
users = {
    'farmer': {'username': 'farmer', 'password': '1234'},
    'vendor': {'username': 'vendor', 'password': '1234'},
    'buyer': {'username': 'buyer', 'password': '1234'},
    'admin': {'username': 'admin', 'password': '1234'}
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        role = request.form['role']
        username = request.form['username']
        password = request.form['password']
        if role in users and users[role]['username'] == username and users[role]['password'] == password:
            return redirect(f'/{role}-dashboard')
        else:
            return 'Invalid credentials'
    return render_template('login.html')

@app.route('/farmer-dashboard')
def farmer_dashboard():
    return render_template('farmer-dashboard.html')

@app.route('/vendor-dashboard')
def vendor_dashboard():
    return render_template('vendor-dashboard.html')

@app.route('/buyer-dashboard')
def buyer_dashboard():
    return render_template('buyer-dashboard.html')

@app.route('/admin-dashboard')
def admin_dashboard():
    return render_template('admin-dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
