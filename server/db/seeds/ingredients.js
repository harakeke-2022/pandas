exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'brioche', type: 'bun', price: '4' },
        { id: 2, name: 'sesame', type: 'bun', price: '4' },
        { id: 3, name: 'bao', type: 'bun', price: '4' },
        { id: 4, name: 'whole grain', type: 'bun', price: '4' },
        { id: 5, name: 'beef', type: 'patty', price: '4' },
        { id: 6, name: 'fried chicken', type: 'patty', price: '4' },
        { id: 7, name: 'tofu', type: 'patty', price: '3.5' },
        { id: 8, name: 'fish', type: 'patty', price: '4.5' },
        { id: 9, name: 'falafel', type: 'patty', price: '3.5' },
        { id: 10, name: 'lettuce', type: 'topping', price: '0' },
        { id: 11, name: 'tomato', type: 'topping', price: '0.5' },
        { id: 12, name: 'red onion', type: 'topping', price: '0.5' },
        { id: 13, name: 'pickles', type: 'topping', price: '0.5' },
        { id: 14, name: 'egg', type: 'topping', price: '1.0' },
        { id: 15, name: 'bacon', type: 'topping', price: '1.5' },
        { id: 16, name: 'jalapeno', type: 'topping', price: '0.5' },
        { id: 17, name: 'mushroom', type: 'topping', price: '1.0' },
        { id: 18, name: 'chorizo', type: 'topping', price: '2.5' },
        { id: 19, name: 'avocado', type: 'topping', price: '2.0' },
        { id: 20, name: 'cheddar', type: 'cheese', price: '2.0' },
        { id: 21, name: 'parmesan', type: 'cheese', price: '2.0' },
        { id: 22, name: 'provolone', type: 'cheese', price: '2.0' },
        { id: 23, name: 'brie', type: 'cheese', price: '2.0' },
        { id: 24, name: 'swiss', type: 'cheese', price: '2.0' },
        { id: 25, name: 'tomato sauce', type: 'cheese', price: '0' },
        { id: 26, name: 'mayo', type: 'sauce', price: '0' },
        { id: 27, name: 'sriracha mayo', type: 'sauce', price: '0.5' },
        { id: 28, name: 'bbq', type: 'sauce', price: '0' },
        { id: 29, name: 'mustard', type: 'sauce', price: '0' },
        { id: 30, name: 'chipotle', type: 'sauce', price: '0' },
        { id: 31, name: 'truffle aioli', type: 'sauce', price: '0.5' },
        { id: 32, name: 'ranch', type: 'sauce', price: '0.5' }
      ])
    })
}
