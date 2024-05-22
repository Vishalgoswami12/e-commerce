import React from "react"

function Header({count, handleShow}){
    return(
       <div className="flex shopping-cart">
        <div style={{cursor:"pointer"}} onClick={() => handleShow(false)}>
            Shopping Cart App </div>
        <div  style={{cursor:"pointer"}} onClick={() => handleShow(true)} >Cart
            <sup>{count}</sup>
        </div>
       </div>
    )
}

export default Header;