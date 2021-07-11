import React from 'react'
import  "./Shop.css";
import  ProductsC from "../components/ProductsC";
import { Helmet } from 'react-helmet';

const Shop = () => {
    return (
        <div className = 'shopp'>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <ProductsC />
        </div>
    )
}

export default Shop