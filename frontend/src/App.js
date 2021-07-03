import NavBar from './components/NavBar';
import ScrollIntoView from './components/Scrollinintoview'
import Home from './pages/Home'
import Contact from './pages/Contact/Contact'
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"

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
         {
         <>
                 <NavBar/>
                 <Switch>  
                 <Route path="/" exact component={Home}/>            
                 <Route path="/contact" component={Contact}/>
                 </Switch>
          </>
         }
        </ScrollIntoView>
      </Router>
   </ChakraProvider>
    </div>
     
    
  )
}
export default App;
