import './App.css';
import React, {useState, useEffect} from 'react'
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import {commerce} from './lib/commerce';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import Checkout from './Components/Checkout'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async()=>{
    const {data} = await commerce.products.list()
    setProducts(data)
  }
  
  const fetchCart = async()=>{
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async(productId, quantity) =>{
    const {cart} = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const handleUpdateCart = async (productId, quantity) =>{
    const {cart} = await commerce.cart.update(productId, {quantity})
    setCart(cart)
  }

  
  const handleRemoveFromCart = async (productId) =>{
    const {cart} = await commerce.cart.remove(productId)
    setCart(cart)
  }

    
  const handleEmptyCart = async (productId) =>{
    const {cart} = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect (()=>{
    fetchProducts()
    fetchCart()
  }, [])

  console.log(cart)
  console.log(products)
  return (
    <Router>
      <div className="App" style={{'overflow':"hidden"}}>
        <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/E-Commerce" >
              <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/cart">
            <Cart 
              cart={cart} 
              handleUpdateCart={handleUpdateCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}

            />
          </Route>
          <Route exact path="/checkout" >
              <Checkout cart={cart}/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
