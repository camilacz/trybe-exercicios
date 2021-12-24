// EXERCÍCIO 1
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
    const obj = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
    }
    fetch(API_URL, obj)
      .then(response => response.json())
      .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();
