import { useEffect, useState } from "react";

const { useParams } = require("react-router-dom");

const ProductInfo = ()=>{
    const params = useParams();
    const [product,setProduct] = useState([]);
    
    async function getData(){
        const res = await fetch(`https://dummyjson.com/products/${params.id}`);
        const data = await res.json();
        setProduct(data);
    }
    useEffect(()=>{
        getData();
    },[params.id])
    return(
        <div className="product-container">
            <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2><p className="product-brand"></p>
                <p className="product-description">{product.description}</p>
                <h2 className="product-price">${product.price}</h2>
                <button className="add-to-cart-button" >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductInfo;