import React, { useState } from "react";
import './App.css';
import Header from "./Componenets/Header";
import ProductList from "./Componenets/ProductList";
import CardList from "./Componenets/CardList";

function App() {
  const[product,setProduct] = useState([
    {
      url:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"Track Shoes",
      category:"Shoes",
      seller:"Shoes LTD",
      price:2599
    },
    {
      url:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"AMZ laptop 8GB Ram",
      category:"Laptops",
      seller:"Amazon",
      price:29000
    },
    {
    url:"https://media.istockphoto.com/id/165853320/photo/wristwatch.jpg?s=1024x1024&w=is&k=20&c=7oll9jl5c1A76ePrPFSQRir5FuyzESwi0YCTcHtnL6M=",
    name:"Watch Black",
    category:"watches",
    seller:"watch ltd"  ,
    price:5899
  },
  {
    url:"https://media.istockphoto.com/id/516260700/photo/security-camera.jpg?s=1024x1024&w=is&k=20&c=axAUKt71tKj05vX8k8umjIy96u62zHaToT3lxZal84o=",
    name:"Secuirty Camera",
    category:"Electronics",
    seller:"Camera Shop",
    price:1499
  },
  {
    url:"https://media.istockphoto.com/id/507060889/photo/tea-cup.jpg?s=1024x1024&w=is&k=20&c=Mh53LNIr3Ck1ieWsN3NhzL441rTq5TaAOTwZFIzWWoM=",
    name:"Cup",
    category:"Home Decor",
    seller:"ABS LTD",
    price:"50"
  },
  {
    url:"https://media.istockphoto.com/id/165853320/photo/wristwatch.jpg?s=1024x1024&w=is&k=20&c=7oll9jl5c1A76ePrPFSQRir5FuyzESwi0YCTcHtnL6M=",
    name:"Watch Black",
    category:"watches",
    seller:"watch ltd"  ,
    price:5899
  },
  {
    url:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:"Track Shoes",
    category:"Shoes",
    seller:"Shoes LTD",
    price:2599
  },
  ])
  const[cart,setCart] = useState([])
  const[showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    // console.log(data)
    const itemIndex = cart.findIndex(item => item.name === data.name);
    if (itemIndex === -1) {
      setCart([...cart, { ...data, quantity: 1 }]);
    } else {
      const updatedCart = cart.map((item, index) => 
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  }
  const handleShow = (val) => {
    setShowCart(val)
  }
  return (
    <div className="App">
      <Header count={cart.length} handleShow={handleShow} />
      {
        showCart ? 
          <CardList cart={cart} setCart={setCart}/> :  
           <ProductList product={product} addToCart={addToCart}/>
      }
     
    
    </div>
  );
}

export default App;
