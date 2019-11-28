express = require('express')
metrics = require('./metrics')
app = express()

app.set('port', 1337)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs')
path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(
    app.get('port'),
    () => console.log(`server listening on ${app.get('port')}`)
)

app.get('/hello', (req, res) =>
    res.render('hello.ejs', { name: req.params.name })
)

app.get("/", (req, res) => {
    console.log(req.body);
    res.status(200).send("Welcome to the home page. Just add /hello in the URL to go get the metrics !");
});

app.get('/metrics.json', (req, res) => {
    metrics.get((err, data) => {
        if (err) throw err
        res.status(200).json(data)
    })
})

app.post('/', (req, res) => {
    // POST
})

app
    .put('/', function (req, res) {
        // PUT
    })
    .delete('/', (req, res) => {
        // DELETE
    })