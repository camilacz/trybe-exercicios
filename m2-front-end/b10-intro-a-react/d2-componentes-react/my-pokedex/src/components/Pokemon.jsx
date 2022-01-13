import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, image, averageWeight } } = this.props;
    const { value, measurementUnit } = averageWeight;
    // desestruturar pq pelamor essa coisa enorme lá embaixo 🙃

    return (
      // chamar a div de pokeball pq tá guardando o pokemon shuashuashua
      <div className="pokeball">
        <h2 className="name">{ name }</h2>
        <ul>
          <li className="type">{ type }</li>
          <li className="weight">{ `Average weight: ${value} ${measurementUnit}` }</li>
        </ul>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

export default Pokemon;