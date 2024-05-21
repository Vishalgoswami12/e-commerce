import React from "react"

function Header({count, handleShow}){
    return(
       <div className="flex shopping-cart">
        <div onClick={() => handleShow(false)}>
            Shopping Cart App </div>
        <div onClick={() => handleShow(true)} >Cart
            <sup>{count}</sup>
        </div>
       </div>
    )
}

export default Header;