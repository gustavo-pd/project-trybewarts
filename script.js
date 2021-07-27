const login = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('enter');
const buttonsbt = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');

button.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

buttonsbt.disabled = true;
agree.addEventListener('click', () => {
  if (agree.checked === true) {
    buttonsbt.disabled = false;
  } else if (agree.checked === false) {
    buttonsbt.disabled = true;
  }
});
