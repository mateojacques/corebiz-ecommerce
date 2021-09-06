import { useState, useEffect } from 'react'
import './styles/App.css'
import { Navbar, Banner, Products, Newsletter, Footer } from './components'
import axios from 'axios'

function App() {
  const [innerWidth, setInnerWidth] = useState(0)
  const [cartItems, setCartItems] = useState(0)
  const [productList, setProductList] = useState([])

  function updateInnerWidth() {
    setInnerWidth(window.innerWidth)
  }

  async function fetchProducts() {
    await axios
      .get('https://corebiz-test.herokuapp.com/api/v1/products')
      .then((res) => setProductList(res.data))
  }

  function loadCart() {
    const cartItemCount = parseInt(localStorage.getItem('items'))
    if (cartItemCount) setCartItems(cartItemCount)
    else return
  }

  function addProductToCart() {
    const cartItemCount = parseInt(localStorage.getItem('items'))

    if (!cartItemCount) {
      localStorage.setItem('items', 1)
    } else {
      localStorage.setItem('items', cartItemCount + 1)
    }
    setCartItems(cartItems + 1)
  }

  useEffect(() => {
    window.addEventListener('resize', updateInnerWidth)
    fetchProducts()
    loadCart()
  }, [])

  return (
    <div className='App'>
      <Navbar innerWidth={innerWidth} cartItems={cartItems} />
      <Banner />
      <Products productList={productList} onAddProduct={addProductToCart} />
      <div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default App
