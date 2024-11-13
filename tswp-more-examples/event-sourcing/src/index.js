const eventStore = require('eventstore');

const es = eventStore();

es.getEventStream('products', (err, stream) => {
	stream.addEvent({ action: 'ADD', name: 'Komputer', price: 2300, id: 1 });
	stream.addEvent({ action: 'ADD', name: 'Smartfon', price: 223, id: 2 });
	stream.addEvent({ action: 'PRICE-CHANGE', price: 2000, id: 1 });
	stream.commit();
});

es.getEventStream('products', (err, stream) => {
	const {events} = stream;
	// Pokaż listę wszystkich elementów dla "agregatu" products
	console.log(events)
	const products = events.reduce((arr, {payload}) => {
		const {action, name, price, id} = payload;
		 switch (action) {
			 case "ADD":
				 arr.push({name, price, id});
			 break;
			 case "PRICE-CHANGE":
				 const product = arr.find(p => p.id === id);
				 product.price = price;
				 break;
		 }
		 return arr;
	}, [])

	console.log('Odbudowany aktualny stan aplikacji:')
	console.log(products)
})
