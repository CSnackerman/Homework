const pizzaToppings = ['jalepeños', 'anchovies', 'pineapple', 'pepperoni'];

function listToppings(arr) {
  let out = '';
  const lastIdx = arr.length - 1;
  for (let i = 0; i < lastIdx; i++) {
    out += arr[i] + ', ';
  }

  return out + 'and ' + arr[lastIdx] + '.';
}

function greetCustomer() {
  console.log(
    'Hello, customer. These are our toppings:',
    listToppings(pizzaToppings)
  );
}

function getPizzaOrder(size, crust, ...toppings) {
  for (let i = 0; i < toppings.length; i++) {
    if (!pizzaToppings.includes(toppings[i])) {
      console.log(
        `Sorry. We don't carry ${toppings[i]} as a topping.`,
        'Please order again.'
      );
      return;
    }
  }

  if (toppings.length === 0) {
    console.log(`One ${size} ${crust} crust cheeze pizza. ...Coming up!`);
    return;
  }

  console.log(
    `One ${size} ${crust} crust pizza with`,
    listToppings(toppings),
    '...Coming up!'
  );
}

function preparePizza(items) {
  console.log('...Cooking pizza...');
  return {
    size: items[0],
    crust: items[1],
    toppings: [...items.slice(2)],
  };
}

function servePizza(pizza) {
  if (pizza.toppings.length === 0) {
    console.log(
      `Order up! Here's your ${pizza.size} ${pizza.crust} crust cheeze pizza. ...Enjoy!`
    );
    return pizza;
  }

  console.log(
    `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with`,
    listToppings(pizza.toppings),
    '...Enjoy!'
  );

  return pizza;
}

greetCustomer();
getPizzaOrder('large', 'pan', 'jalepeños', 'pepperoni', 'anchovies');

servePizza(
  preparePizza(['large', 'thick', 'jalepeños', 'pepperoni', 'anchovies'])
);
