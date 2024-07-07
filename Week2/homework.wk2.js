const pizzaPlace = "Azzip's Pizza";
const numberOfToppings = 1;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace}, we only have ${numberOfToppings} topping: pineapple.`
);

if (numberOfToppings < 10) {
  console.log('Quality, not quantity.');
} else {
  console.log('A whole lot of pizza.');
}

// bonus
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
