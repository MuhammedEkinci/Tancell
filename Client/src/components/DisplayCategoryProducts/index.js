import React, {useState, useEffect} from "react";
import {Row, Col, Image, Spinner} from "react-bootstrap";
import API from "../../utils/API";

import "../DisplayProducts/displayProducts.css";

export default function DisplayCategoryProducts(props){
    const [Products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const ProductCategory = props.productCategory;

    useEffect(() => {
        //get products from database using async promise
        const getItems = async () => {
            setLoading(true);
            try{
                const items = await API.getProductsByCategory(ProductCategory)
                setProducts(items.data);
            } catch (error){
                console.log(error);
            }
            setLoading(false);
        };
        getItems();
    }, [ProductCategory]);

    
    return (
        <>
        {/* Display loading spinner if loading is true otherwise display content */}
        {loading ? <div className="spinner-wrapper"><Spinner animation="border"/></div> : 
        <div className="product-display">
            {Products.map((product, i) => {
                return(
                        <div className="product" key={i}>
                            <Image 
                                className="product-img bg-image hover-overlay hover-zoom hover-shadow ripple" 
                                src={product.coverImage}
                                alt={product.coverImageAlt}
                                fluid
                            />
                            <a 
                                className="product-name"
                                href={product.url}
                            >
                                {product.productName}
                            </a>
                        </div>
                )
            })}
        </div>}
        </>
    )
}