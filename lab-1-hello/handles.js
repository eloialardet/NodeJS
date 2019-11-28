const url = require('url')
const qs = require('querystring')

module.exports = {
    serverHandle: function (req, res) {

        const route = url.parse(req.url)
        const path = route.pathname
        const params = qs.parse(route.query)

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log(params)
        if (path === '/') {
            res.write('hello works like this :  \n')
            res.write('by pasting the following url address and entering your name where the xxx is : \n')
            res.write('http://localhost:8080/hello?name=xxx')
            res.write('\n Eloi is the already known name')
            res.write('\n any other url shall produce an error')
        }
        else if (path === '/hello' && 'name' in params) {
            if (params.name == 'eloi') {
                res.write('Hello ' + params['name'] + '\n I am 21 years old, glad to be at ECE')
            }
            else {
                res.write('Hello ' + params['name'])
            }
        }
        else {
            res.write('Error 404 - Not found page')
        }
        res.end();





    }
}