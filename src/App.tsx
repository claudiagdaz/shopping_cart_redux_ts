import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './features/Home';
import CartLink from './features/cart/CartLink';
import Products from './features/products/Products';
import Cart from './features/cart/Cart';
import styles from './App.module.css'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <nav>
            <Link className={styles.navLink} to="/"> Home </Link>
            <Link className={styles.navLink} to="/products"> Products </Link>
            <CartLink />
          </nav>
        </header>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App
