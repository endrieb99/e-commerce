import NavBar from './components/NavBar';
import ScrollIntoView from './components/Scrollinintoview'
import Home from './pages/Home'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
import About from './pages/About/About'
import Shop from './pages/Shop'
import LoginScreen from './pages/Login/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
import { ChakraProvider } from "@chakra-ui/react"

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])

  return (
    <div className='main'>
      <ChakraProvider>
        <Router>
          <ScrollIntoView>
            { loading ?   
            <div className='loading'>
                 <HashLoader   color={"#1e1e2c"}  loading={loading} size={90} />
            </div>
          :
              <>
                <NavBar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/about" component={About} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/login" component={LoginScreen}/>
                  <Route path="/register" component={RegisterScreen}/>
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
