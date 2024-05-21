import React from "react";

function ProductList({product,addToCart}){
    return(
        <div className="flex">
            {
                product &&
                product.map((ele,index) => {
                    let {url,name,category,price,seller} = ele
                    return(
                        <div style={{width:"50%"}}>
                        <div className="product-item">
                            <img src={url} alt="prod" width="100%" />
                            <p>{name} | {category}</p>
                            <p>{seller}</p>
                            <p>Rs. {price} /-</p>
                            <button onClick={() => addToCart(ele)} >Add to Cart</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;