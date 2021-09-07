const express = require("express")
const app = express()


app.set('view engine', 'ejs')
app.use(express.json({
  type: '*/*',
}));

app.use(express.static('public'))
// app.use((req, res) => {
// 	console.log("We got a new request!")
// 	res.send("Hello there!")

// })


// app.get('/shop/:name', (req, res) => {
// 	console.log(req.params);
// 	const {name} = req.params;

// 	if (name == "brand")
// 		res.send("Checkout our brand list");
// 	else if (name == "hair")
// 		res.send("Checkout our hair products");
// 	else if (name == "fragrance")
// 		res.send("Checkout our awesome fragrance");
// })

// app.get('/product/:productId', (req, res) => {
// 	const {productId} = req.params;

// 	res.send(`Greetting ${productId} for you`);
// })

// app.get('/search', (req, res) => {
// 	const {q} = req.query;

// 	res.send(`Searching for ${q} ...`);
// })

// app.post('/cats', (req, res) => {
// 	res.send("SHOULD USE Get REQUEST")
// })

// curl -XPOST -d '{"name": "bar"}' -i localhost:3005/createUser
// curl -XPOST -i localhost:3005/createUser
app.post("/createUser", (req, res) => {
  console.log(req.body);

  if (req.body == undefined || req.body["name"] == undefined)
  	res.status(400).send({"erorrMsg" : "name missing"});

  res.send({"clientId" : "981b5ad5-9fcf-4494-b623-741e1270d933"})
}); 


// curl -XPOST -d '{"clientId": "981b5ad5-9fcf-4494-b623-741e1270d933", "transactions": [{}]}' -i localhost:3005/addTransactions
app.post("/addTransactions", (req, res) => {
  console.log(req.body);

  if (req.body == undefined || req.body["clientId"] == undefined
  	|| req.body["clientId"] != "981b5ad5-9fcf-4494-b623-741e1270d933" 
  	|| req.body["transactions"] == undefined
  	|| req.body["transactions"].length == 0 )
  	res.status(400).send({"erorrMsg" : "invalidRequest"});

  res.send({})
}); 

// app.get('/dogs', (req, res) => {
// 	res.send("WOOF!")
// })

// app.get('/cats', (req, res) => {
// 	res.send("MEOW!")
// })

app.get('/', (req, res) => {
	res.render('home.ejs')
})

// app.get('*', (req, res) => {
// 	res.send("unknown routes")
// })

app.listen(3005, () => {
	console.log("listening on port 3005!")
})