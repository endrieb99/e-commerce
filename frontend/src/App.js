import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact/Contact'
import ProductPage from './pages/Product/ProductPage'
import CartPage from './pages/Cart/CartPage'
import Footer from './pages/Footer/Footer'
import LoginScreen from './pages/Login/LoginScreen'
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import ScrollIntoView from "./components/Scrollintoview";
import HashLoader from "react-spinners/HashLoader";
import RegisterScreen from './components/RegisterScreen'
import ProfileScreen from './components/ProfileScreen'
import Checkout from "./pages/Checkout/Checkout";
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import OrderPage from './pages/Order/OrderPage'
import Users from './pages/Userslist/Users'
import NotFoundPage from './components/Notfoundpage'
import Edituser from './pages/Useredit/Edituser'
import Products from './pages/products/products'
import EditProduct from './pages/EditProduct/EditProduct'
import Orders from './pages/Orders/Orders'


 const App = () => { 
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])

  return (
    <div className = 'main'>
<ChakraProvider>
       <Router>
         <ScrollIntoView>
         {loading ?   
            <div className='loading'>
                 <HashLoader   color={"#1e1e2c"}  loading={loading} size={90} />
            </div>
          :
         <>
                 <NavBar/>
                 <Switch>              
                 <Route path="/" exact component={Home}/>
                 <Route path="/about" component={About}/>
                 <Route path="/shop" component={Shop}/>
                 <Route path="/contact" component={Contact}/>
                 <Route path="/product/:id" component={ProductPage}/>
                 <Route path="/cart/:id?" component={CartPage}/>
                 <Route path="/login" component={LoginScreen}/>
                 <Route path="/register" component={RegisterScreen}/>
                 <Route path="/profile" component={ProfileScreen}/>
                 <Route path="/shipping" component={Checkout}/>
                 <Route path="/placeorder" component={PlaceOrder}/>
                 <Route path="/order/:id" component={OrderPage}/>
                 <Route path="/admin/userlist" component={Users}/>
                 <Route path="/admin/productlist" component={Products}/>
                 <Route path="/admin/orderlist" component={Orders}/>
                 <Route path="/search/:keyword" component={Shop}/>
                 <Route path="/admin/user/:id/edit" component={Edituser}/>
                 <Route path="/admin/product/:id/edit" component={EditProduct}/>
                 <Route component={NotFoundPage} />
                 </Switch>
                 <Footer/>
          </>
         }
        </ScrollIntoView>
      </Router>
   </ChakraProvider>
    </div>
  )
}

export default App;
