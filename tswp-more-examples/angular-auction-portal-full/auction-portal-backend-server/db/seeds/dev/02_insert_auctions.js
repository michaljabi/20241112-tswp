
exports.seed = function(knex) {
  return knex('auctions').del()
    .then(() => knex('auctions')
      .insert([
        {id: 1, title: 'Części do aparatu', description: 'Jakiś opis', imgUrl: 'https://picsum.photos/id/36/200/200', price: 2000},
        {id: 2, title: 'Mac Book', description: '', imgUrl: 'https://picsum.photos/id/48/200/200', price: 4000},
        {id: 3, title: 'Smartfon', description: '', imgUrl: 'https://picsum.photos/id/160/200/200', price: 800},
        {id: 4, title: 'Samochód', description: 'Zabytkowy ogórek', imgUrl: 'https://picsum.photos/id/183/200/200', price: 12322},
        {id: 5, title: 'Inne auto', description: '', imgUrl: 'https://picsum.photos/id/181/200/200', price: 12999},
      ])
    );
};
