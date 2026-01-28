import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>Bandage</div>
        <div className='icons'>
          <button className='icon-btn'>🔍</button>
          <button className='icon-btn'>🛒</button>
          <button className='icon-btn' onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </header>
      <nav className={`mobile-nav ${isOpen ? `open` : ``}`}>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="#">Pages</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <main>
        <section className="hero" style={{display: isOpen ? 'none' : 'block'}}>
          <div className='hero-content'>
            <button className='shop-now-btn'></button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App


