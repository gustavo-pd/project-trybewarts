const login = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('enter');

button.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
