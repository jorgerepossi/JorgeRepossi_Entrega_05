const express = require('express');
const path = require('path')

class Server {
    constructor() {
        this.app = express()
        this.port = 8080
        this.productRouter = require( './routes/product.js' )
        this.router()
    }

    router() {
        this.app.set('view engine', 'ejs')
        this.app.set('views', 'src/views')

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