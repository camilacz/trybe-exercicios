// EXERCÍCIO 4 - Suponhamos que o robô Curiosity envia a temperatura atual de Marte em até 5 segundos. Crie a função sendMarsTempertature, que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const temperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${temperature} degree Celsius`), messageDelay());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo