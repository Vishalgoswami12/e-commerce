import React from "react"

function CardList({cart, setCart}){

    return (
        <div style={styles.container}>
            {cart.length === 0 ? (
                <p style={styles.emptyCartMessage}>You dont have any Product to Purchase</p>
            ) : (
                <>
                    {cart.map((ele, cardindex) => {
                        let { url, price, name, quantity } = ele

                        return (
                            <div key={cardindex} style={styles.card}>
                                <img src={url} width={40} alt="cart" style={styles.image} />
                                <span style={styles.name}>{name}</span>
                                <div style={styles.quantityContainer}>
                                    <button style={styles.button} onClick={() => {
                                        const _CART = cart.map((item, index) => {
                                            return cardindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                        }).filter(item => item.quantity > 0)
                                        setCart(_CART)
                                    }}>-</button>
                                    <span style={styles.quantity}>{quantity}</span>
                                    <button style={styles.button} onClick={() => {
                                        const _CART = cart.map((item, index) => {
                                            return cardindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                        })
                                        setCart(_CART)
                                    }}>+</button>
                                </div>
                                <span style={styles.price}>Rs. {price * quantity}</span>
                            </div>
                        )
                    })}
                    <p style={styles.total}>Total: {cart.map(item => item.price * item.quantity).reduce((total, val) => total + val, 0)}</p>
                </>
            )}
        </div>
    )
}
const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif'
      },
      emptyCartMessage: {
        fontSize: '18px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red'
    },
      card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#f9f9f9'
      },
      image: {
        borderRadius: '5px'
      },
      name: {
        flex: '1',
        marginLeft: '10px',
        fontWeight: 'bold'
      },
      quantityContainer: {
        display: 'flex',
        alignItems: 'center'
      },
      button: {
        padding: '5px 10px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '3px',
        margin: '0 5px'
      },
      quantity: {
        minWidth: '20px',
        textAlign: 'center'
      },
      price: {
        fontWeight: 'bold',
        color: '#333'
      },
      total: {
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'right'
      }
}
export default CardList;