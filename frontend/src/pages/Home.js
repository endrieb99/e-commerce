import React from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import { Helmet } from 'react-helmet';

const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>ALBANIA MARKET</title>
        </Helmet>
             <div>
                <Slider/>
                 <div className="cards">
                         <Cardscg title='Women'/>
                         <Cardscg title='Men'/>
                         <Cardscg title='Accessoires'/>                
                 </div>
                <CgDiv/>
        </div>
        </>
    )
}

export default Home
