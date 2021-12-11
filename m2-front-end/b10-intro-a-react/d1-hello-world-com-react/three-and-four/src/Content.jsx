import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composição de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <main className='content'>
        {conteudos.map(({ conteudo, bloco, status }) => (
          <div key={conteudo} className='card'>
            <h2>{`O conteúdo é: ${conteudo}`}</h2>
            <p>{`status: ${status}`}</p>
            <p>{`bloco: ${bloco}`}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default Content;
