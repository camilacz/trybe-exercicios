const  fetchCoins = () =>
  fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error);

function li(name, symbol, price) {
  const ul = document.querySelector('#coins-list');
  const li = document.createElement('li');
  li.innerText = `${name} (${symbol}): ${Number(price).toFixed(2)}`
  ul.appendChild(li);
}

async function showCoins() {
  const coins = await fetchCoins();
  coins
    .filter((_, i) => i < 10)
    .forEach(({ symbol, name, priceUsd }) => li(name, symbol, priceUsd));
}

window.onload = () => {
  showCoins();
}
