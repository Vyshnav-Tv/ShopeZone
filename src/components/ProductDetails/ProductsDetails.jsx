import React from 'react'
import { getProductId } from '../../Apiservices/Api'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './product.css';
import { useState, useEffect } from 'react';

function ProductsDetails() {

    function handleBuynow(){
        window.confirm("The Product is Out of Stock!!")
    }

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {

        const fetchProductdetails = async () => {
            const data = await getProductId(id);

            setProductDetails(data);
        }
        fetchProductdetails()
    }, [id])

    return (





        <div className='product-Container'>
            <img src={productDetails.image} alt="image" className='product-image' />
            <div className='product-details'>
                <h2>{productDetails.title}</h2>
                <p>{productDetails.description}</p>
                <p>${productDetails.price}</p>
                <button className='product-buy' onClick={handleBuynow}>Buy now</button>
                <Link to='/'>
                    <button className='product-home'>Go to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductsDetails