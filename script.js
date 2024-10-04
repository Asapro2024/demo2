const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    document.getElementById('display').innerText = buttonText;
  });
});
