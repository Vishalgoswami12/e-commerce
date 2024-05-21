import React from "react"

function CardList({cart}){
    return(
        <div>
            {
                cart &&
                cart.map((ele,index) => {
                    let{url,seller,price,category,name,quantity} = ele
                    return(
                        <div>
                            <img src={url} width={40} alt="cart" />
                            <span> {name} </span>
                            <button>-</button>
                            <span> {quantity} </span>
                            <button>+</button>
                            <span> Rs. {price} </span>
                            </div>
                    )
                })
            }
            <p> Total :  
                {
                    cart && 
                    cart.map(item => item.price * item.quantity).reduce((total,val) => total+ val,0)
                }
            </p>
        </div>
    )
}

export default CardList;