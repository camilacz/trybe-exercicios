const state = document.getElementById('state');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantis'];
const abbrv = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];

function stateOptions() {
  for (let i = 0; i < states.length; i += 1) {
    const stateOption = document.createElement('option');
    stateOption.innerText = states[i];
    stateOption.value = abbrv[i];
    state.appendChild(stateOption);
  }
}

stateOptions();

const clearBtn = document.getElementById('clear-btn');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');

clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = '';
  }
  textArea.value = '';
})