const { Router } = require('express')
const Products = require('./../controllers/products')
const router = new Router()
const data = new Products('products')

router.get('/', async (req, res) => {
  try {
    const all = await data.getAllProducts()
    res.render('layout', { all })
  } catch (err) {
    console.log(err)
  }
})

router.post('/products', async (req, res) => {
  try {
    const newProds = await data.createProduct(req.body)
    res.redirect('/').render(newProds)
    return newProds
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
