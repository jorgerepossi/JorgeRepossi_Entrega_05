const { Router } = require( 'express' )
const Products = require( './../controllers/products' )
const router = new Router()
const data = new Products( 'products' )

/* This is a route that is being created. It is a get request that is being sent to the root of the
website. It is then rendering the index page and passing in the all variable. */
router.get( '/', async ( req, res ) =>
{
  try {
    const all = await data.getAllProducts()
    res.render( 'index', { all } )
  } catch ( err ) {
    console.log( err )
  }
} )

router.post( '/products', async ( req, res ) =>
{
  try {
    const newProds = await data.createProduct( req.body )
    res.redirect( '/' ).render( newProds )
    return newProds
  } catch ( err ) {
    console.log( err )
  }
} )

module.exports = router
