// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    messageDiv.textContent = '';

    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;

    // Basic validation
    if (!email || !password) {
      messageDiv.textContent = 'Email and password are required.';
      return;
    }

    // Dummy login simulation (for testing without backend)
    const dummyUsers = {
      'farmer@example.com': { password: 'farmer123', role: 'farmer' },
      'admin@example.com': { password: 'admin123', role: 'admin' },
      'vendor@example.com': { password: 'vendor123', role: 'vendor' },
      'buyer@example.com': { password: 'buyer123', role: 'buyer' },
      'sheller@example.com': { password: 'sheller123', role: 'sheller' },
    };

    if (dummyUsers[email] && dummyUsers[email].password === password) {
      if (dummyUsers[email].role !== role) {
        messageDiv.textContent = `Role mismatch! You are registered as ${dummyUsers[email].role}.`;
        return;
      }

      // Save token / session if needed
      if (rememberMe) localStorage.setItem('agrotechRole', role);

      messageDiv.style.color = 'green';
      messageDiv.textContent = `Login successful! Redirecting to ${role} dashboard...`;

      setTimeout(() => {
        window.location.href = `${role}-dashboard.html`;
      }, 1000);
      return;
    }

    // Example of API-ready fetch (uncomment when backend is ready)
    /*
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role })
      });
      const data = await response.json();
      if (data.success) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = `Login successful! Redirecting to ${role} dashboard...`;
        setTimeout(() => { window.location.href = `${role}-dashboard.html`; }, 1000);
      } else {
        messageDiv.textContent = data.message || 'Login failed!';
      }
    } catch (err) {
      messageDiv.textContent = 'Network error. Please try again.';
    }
    */
    
    // If dummy login fails
    messageDiv.style.color = 'red';
    if (!dummyUsers[email]) messageDiv.textContent = 'Email not registered in dummy database.';
    else messageDiv.textContent = 'Incorrect password.';
  });
});
