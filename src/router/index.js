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
import myAccount from '@/components/myAccount'
import myAccountIndex from '@/components/myAccountIndex'
import myOrders from '@/components/myOrders'
import ordersList from '@/components/ordersList'
import unPaidOrders from '@/components/unPaidOrders'
import proccessingOrders from '@/components/proccessingOrders'
import shippedOrders from '@/components/shippedOrders'
import myAccountPoints from '@/components/myAccountPoints'
import myCoupons from '@/components/myCoupons'
import myAccountWishList from '@/components/myAccountWishList'
import myAccountOutFits from '@/components/myAccountOutFits'
import myAccountReviews from '@/components/myAccountReviews'
import myAccountQuestions from '@/components/myAccountQuestions'
import myAccountPersonalInfo from '@/components/myAccountPersonalInfo'
import myAccountChangePassword from '@/components/myAccountChangePassword'
import myAccountAddressBook from '@/components/myAccountAddressBook'
import myAccountPrograms from '@/components/myAccountPrograms'
import myAccountAffProgram from '@/components/myAccountAffProgram'
import myAccountWholeSaleProgram from '@/components/myAccountWholeSaleProgram'
import myAccountReffProgram from '@/components/myAccountReffProgram'
import myAccountDopShipProgram from '@/components/myAccountDopShipProgram'
import contactUs from '@/components/contactUs'
import Survey from '@/components/Survey'
import LingerieNewArrival from '@/components/LingerieNewArrival'
import VintagePrintedDresses from '@/components/VintagePrintedDresses'
import FashionSportShoes from '@/components/FashionSportShoes'
import DailyFashionApparel from '@/components/DailyFashionApparel'
import MensNewArrival from '@/components/MensNewArrival'


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
import testApi from '@/components/testApi'
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
      path: '/survey',
      name: 'Survey',
      component: Survey
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
        {
          path: 'contactUs',
          name: 'contactUs',
          component: contactUs
          
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
    {
      path: '/myAccount',
      name: 'myAccount',
      component: myAccount,
      children: [
        {
          path: '',
          name: 'myAccountIndex',
          component: myAccountIndex

        },
        {
          path: 'myAccountPoints',
          name: 'myAccountPoints',
          component: myAccountPoints

        },
        {
          path: 'myCoupons',
          name: 'myCoupons',
          component: myCoupons,
          

        },
        {
          path: 'wishList',
          name: 'myAccountWishList',
          component: myAccountWishList,
          

        },
        {
          path: 'outFits',
          name: 'myAccountOutFits',
          component: myAccountOutFits,
          

        },
        {
          path: 'reviews',
          name: 'myAccountReviews',
          component: myAccountReviews,
          

        },
        {
          path: 'personalInfo',
          name: 'myAccountPersonalInfo',
          component: myAccountPersonalInfo,
          

        },
        {
          path: 'changePassword',
          name: 'myAccountChangePassword',
          component: myAccountChangePassword,
          

        },
        {
          path: 'questions',
          name: 'myAccountQuestions',
          component: myAccountQuestions,
          

        },
        {
          path: 'addressBook',
          name: 'myAccountAddressBook',
          component: myAccountAddressBook,
          

        },
        {
          path: 'myOrders',
          name: 'myOrders',
          component: myOrders,
          children: [
            {
                path:'ordersList',
                name: 'ordersList',
                component: ordersList
            },
            {
                path:'unPaidOrders',
                name: 'unPaidOrders',
                component: unPaidOrders
            },
            {
                path:'proccessingOrders',
                name: 'proccessingOrders',
                component: proccessingOrders
            },
            {
                path:'shippedOrders',
                name: 'shippedOrders',
                component: shippedOrders
            }
          ]

        },
        {
          path: 'programs',
          name:'myAccountPrograms',
          component: myAccountPrograms,
          children: [
            
             {
               path: 'WholeSaleProgram',
               name: 'myAccountWholeSaleProgram',
               component: myAccountWholeSaleProgram
             },
             {
               path: 'DropShipProgram',
               name: 'myAccountDopShipProgram',
               component: myAccountDopShipProgram
             }
            
          ]
        }
      ]
    },
    {
      path: '/account/AffProgram',
      name: 'myAccountAffProgram',
      component: myAccountAffProgram
    },
    {
      path: '/account/ReffProgram',
      name: 'myAccountReffProgram',
      component: myAccountReffProgram
    },
    {
      path: '/Trending/LingerieNewArrival',
     name: 'LingerieNewArrival',
     component: LingerieNewArrival
    },
    {
      path: '/Trending/VintagePrintedDresses',
     name: 'VintagePrintedDresses',
     component: VintagePrintedDresses
    },
    {
      path: '/Trending/DailyFashionApparel',
     name: 'DailyFashionApparel',
     component: DailyFashionApparel
    },
    {
      path: '/Trending/FashionSportShoes',
     name: 'FashionSportShoes',
     component: FashionSportShoes
    },
    {
      path: '/Trending/MensNewArrival',
     name: 'MensNewArrival',
     component: MensNewArrival
    },
    { path: '*', component: NotFound },
    { path: '/testApi' , component : testApi}
  ]
})
