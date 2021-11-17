const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


// Exercício 1
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  
  const message = `Olá ${deliveryPerson}, entrega para: ${customer}, Telefone: ${phone}, R. ${street}, N°: ${number}, AP: ${apartment}`;
  
  console.log(message);
}

customerInfo(order);


// Exercício 2
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${50},00.`);
}

orderModifier(order);

