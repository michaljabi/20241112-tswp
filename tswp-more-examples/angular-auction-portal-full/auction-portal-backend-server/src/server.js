import app from './app'
const {SERVER_PORT, NODE_ENV} = process.env;

app.listen(SERVER_PORT, () => {
	console.log(`Server listening at: http://localhost:${SERVER_PORT}`)
	console.log(NODE_ENV)
})
