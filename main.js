const API_URL = 'https://api.adviceslip.com/advice';

const loadAdvice = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  const {id, advice} = data.slip;

  const adviceId = document.getElementById('advice-id');
  adviceId.textContent = `Advice #${id}`;

  const adviceText = document.querySelector('.advice__blockquote');
  adviceText.textContent = `${advice}`
}

const diceButton = document.querySelector('.advice__dice');

diceButton.addEventListener('click', loadAdvice);