
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const messageDiv = document.getElementById('message');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dummyUsers = {
      'farmer@example.com': { password: 'farmer123', role: 'farmer' },
      'admin@example.com': { password: 'admin123', role: 'admin' },
      'vendor@example.com': { password: 'vendor123', role: 'vendor' },
      'buyer@example.com': { password: 'buyer123', role: 'buyer' },
      'sheller@example.com': { password: 'sheller123', role: 'sheller' },
    };
    if(dummyUsers[email] && dummyUsers[email].password===password){
      if(dummyUsers[email].role!==role){messageDiv.textContent=`Role mismatch! You are ${dummyUsers[email].role}.`; return;}
      messageDiv.style.color='green';
      messageDiv.textContent=`Login successful! Redirecting to ${role} dashboard...`;
      setTimeout(()=>{window.location.href=`${role}-dashboard.html`;},1000);
      return;
    }
    messageDiv.style.color='red'; messageDiv.textContent='Invalid credentials';
  });
});
