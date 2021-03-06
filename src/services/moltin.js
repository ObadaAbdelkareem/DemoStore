import { gateway as MoltinGateway } from '@moltin/sdk'

const Moltin = MoltinGateway({
  client_id: 'RLaZ99Fup3KVjuogbT52n8yYvVSIFJO27Kg1aHunIu'// 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4'
})

export default {

  getHomepageProducts () {
    return Moltin.Products.Filter({}).With('files').Limit(8).All()
  },

  findBySlug (slug) {
    return Moltin.Products.Filter({
      eq: {
        slug: slug
      }
    }).With(['files', 'brands']).Limit(1).All()
  },

  getCart () {
    return Moltin.Cart.Items()
  },

  addToCart (productId) {
    return Moltin.Cart.AddProduct(productId)
  },

  checkout (checkoutData) {
    return Moltin.Cart.Checkout(checkoutData)
  },

  pay (orderId, paymentData) {
    return Moltin.Orders.Payment(orderId, paymentData)
  }

}
