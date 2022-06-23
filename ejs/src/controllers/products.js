const fs = require( 'fs' )
class Products
{
  /**
   * The constructor function is a special function that is used to create and initialize an object
   * created within a class
   * @param name - The name of the parameter.
   */
  constructor ( name )
  {
    this.name = name
  }

  /**
   * It reads the file, parses the JSON, and returns the parsed JSON
   * @returns An array of objects
   */
  async getAllProducts ()
  {
    try {
      const all = JSON.parse(
        await fs.promises.readFile( `src/db/${ this.name }.json` )
      )
      console.log( all )
      return all
    } catch ( err ) {
      console.log( err )
    }
  }

  // Get Poduct By ID
  /**
   * It gets all products, then finds the one with the matching id
   * @param id - The id of the product you want to get.
   * @returns The product with the id that matches the id passed in as an argument.
   */
  async getProductById ( id )
  {
    try {
      const all = await this.getAllProducts()
      const allProds = all.find( ( item ) => item.id === id )
      return allProds
    } catch ( err ) {
      console.log( err )
    }
  }

  // Create new Product
  /**
   * It takes an object as an argument, gets all the products from the database, adds an id to the
   * object, pushes the object to the array of products, and then writes the array to the database
   * @param objProd - The object that contains the product information.
   * @returns The new product that was created.
   */
  async createProduct ( objProd )
  {
    try {
      const all = await this.getAllProducts()
      const newProd = objProd
      objProd.id = all.length + 1
      all.push( newProd )
      await fs.promises.writeFile(
        `src/db/${ this.name }.json`,
        JSON.stringify( all )
      )
      return all
    } catch ( error ) {
      console.log( error )
    }
  }

  // Update Product
  /**
   * It takes an object as an argument, gets all the products, maps through them, and replaces the
   * product with the same id as the object passed in with the object passed in
   * @param objProd - The product object that we want to update.
   * @returns The updated product.
   */
  async updateProduct ( objProd )
  {
    try {
      let all = await this.getAllProducts()
      all = all.map( ( item ) => ( item.id !== objProd.id ? item : objProd ) )

      await fs.promises.writeFile(
        `src/db/${ this.name }.json`,
        JSON.stringify( all )
      )
      return all
    } catch ( error ) {
      console.log( error )
    }
  }

  // Delete Product By ID
  async deleteProduct ( id )
  {
    try {
      const all = await this.getAllProducts()
      const allFilterproducts = all.filter( ( item ) => item.id !== id )
      if ( JSON.stringify( all ) !== JSON.stringify( allFilterproducts ) ) {
        await fs.promises.writeFile(
          `src/db/${ this.name }.json`,
          JSON.stringify( allFilterproducts )
        )
        return allFilterproducts
      } else {
        return false
      }
    } catch ( err ) {
      console.log( err )
    }
  }
}

module.exports = Products
