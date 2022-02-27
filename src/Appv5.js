import React from 'react';
import Product from './practices/MappingComponents-practice/Product';
import producData from './practices/MappingComponents-practice/productData'


function Appv5() {

    const productComponent = producData.map( product =>  <Product product = {product} />)

    // exp another way

    const products = producData.map( ({id, name,price, description }) =><Product
    key ={id} name ={name} price={price} description={description} />)
    return (
        <div>
           {/* {productComponent} */}
           {/* THE OTHER WAY */}
           {products}
        </div>
    )
}
export default Appv5;