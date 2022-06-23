const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars').engine

class Server {
    constructor() {
        this.app = express();
        this.port = 8080;
        this.productRouter = require('./routes/product.js')
        this.routes();
        this.config();
    }

    config() {
        this.app.engine(
            'hbs',
            exphbs({
                extname: 'hbs',
                defaultLayout: 'index.hbs',
            })
        )
        this.app.set('view engine', '.hbs')
        this.app.set('views', 'src/views')

       
    }

    routes() {
        this.app.use(express.static(path.join(__dirname, '../public')))
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
        this.app.use('/', this.productRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

module.exports = Server;