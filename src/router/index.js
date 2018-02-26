import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Payment from '@/components/Payment'
import HelpCenter from '@/components/HelpCenter'
import returnAndRefund from '@/components/returnAndRefund'
import privacyPolicy from '@/components/privacyPolicy'
import aboutUs from '@/components/aboutUs'
import shippingFAQ from '@/components/shippingFAQ'
import shippingMethods from '@/components/shippingMethods'
import paymentMethods from '@/components/paymentMethods'
import bloggerProgram from '@/components/bloggerProgram'
import affiliateProgram from '@/components/affiliateProgram'
import showVipIllustrate from '@/components/showVipIllustrate'
import wholesaleProgram from '@/components/wholesaleProgram'
import dropshiProgram from '@/components/dropshiProgram'
import orderFAQ from '@/components/orderFAQ'
import termsAndConditions from '@/components/termsAndConditions'
// import sliderimage from '@/components/sliderimage'
import homeHeader from '@/components/homeHeader'
import imagesliderHomePage from '@/components/imagesliderHomePage'
import categoryHomePage from '@/components/categoryHomePage'
import ShoppingPage from '@/components/ShoppingPage'
import mainCategory from '@/components/mainCategory'
import homePage from '@/components/homePage'
import PlaceOrder from '@/components/PlaceOrder'
import PaymentDetailsVisaMaster from '@/components/PaymentDetailsVisaMaster'
import LoginRegister from '@/components/LoginRegister'
import ProductPage from '@/components/ProductPage'
import homefooter from '@/components/homefooter'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Home',
      component: Home
    },*/
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/products/:slug',
      name: 'Product',
      component: Product
    },
    {
      path: '/payments/:orderId',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/homeHeader',
      name: 'header',
      component: homeHeader
    },
    {
      path: '/imagesliderHomePage',
      name: 'imagesliderHomePage',
      component: imagesliderHomePage
    },
    {
      path: '/categoryHomePage',
      name: 'categoryHomePage',
      component: categoryHomePage
    },
    {
      path: '/ShoppingPage',
      name: 'ShoppingPage',
      component: ShoppingPage
    },
    {
      path: '/mainCategory',
      name: 'mainCategory',
      component: mainCategory
    },
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/PlaceOrder',
      name: 'PlaceOrder',
      component: PlaceOrder
    },
    {
      path: '/PaymentDetailsVisaMaster',
      name: 'PaymentDetailsVisaMaster',
      component: PaymentDetailsVisaMaster
    },
    {
      path: '/LoginRegister',
      name: 'LoginRegister',
      component: LoginRegister
    },
    {
      path: '/ProductPage',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/homefooter',
      name: 'homefooter',
      component: homefooter
    },
    {
      path: '/helpCenter',
      name: 'help_center',
      component: HelpCenter,
      children: [
        {
          path: '',
          name: 'about-us',
          component: aboutUs
        },
        {
          path: 'returnAndRefund',
          name: 'returnAndRefund',
          component: returnAndRefund
          
        },
        {
          path: 'privacyPolicy',
          name: 'privacyPolicy',
          component: privacyPolicy
          
        },
        {
          path: 'shippingFAQ',
          name: 'shippingFAQ',
          component: shippingFAQ
          
        },
        {
          path: 'orderFAQ',
          name: 'orderFAQ',
          component: orderFAQ
          
        },
        {
          path: 'termsAndConditions',
          name: 'termsAndConditions',
          component: termsAndConditions
          
        },
        {
          path: 'shippingMethods',
          name: 'shippingMethods',
          component: shippingMethods
          
        },
        {
          path: 'paymentMethods',
          name: 'paymentMethods',
          component: paymentMethods
          
        },
        {
          path: 'wholesaleProgram',
          name: 'wholesaleProgram',
          component: wholesaleProgram
          
        },
        
      ]
    },
    {
      path: '/bloggerProgram',
      name: 'bloggerProgram',
      component: bloggerProgram
      
    },
    {
      path: '/affiliateProgram',
      name: 'affiliateProgram',
      component: affiliateProgram
      
    },
    {
      path: '/showVipIllustrate',
      name: 'showVipIllustrate',
      component: showVipIllustrate
      
    },
    {
      path: '/dropshiProgram',
      name: 'dropshiProgram',
      component: dropshiProgram
      
    },
    { path: '*', component: NotFound }

  ]
})
