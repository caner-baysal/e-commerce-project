import { useState } from "react";
import { Menu, Search, ShoppingCart, User, HeartPlus } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="header">
      <div class="flex items-center justify-between px-6 py-4 lg:px-10">
        <div class="flex items-center gap-10">
          <span class="text-xl font-bold">Bandage</span>

          <nav  className="desktop-nav">
            <a href="#">Home</a>
            <div className="nav-item">
                  <button className="nav-link" onClick={() => setIsShopOpen(prev => !prev)}>Shop ▾</button>
                  {isShopOpen && (
                  <div className='dropdown'>
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                  </div>)}
                </div>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Pages</a>
          </nav>
        </div>

        <div className="icons">
          <button href="#" className="login-register">
            <User size={20} /> Login / Register
          </button>
          <a className="search"><Search size={20} /></a>
          <a className="shopping"><ShoppingCart size={20} /></a>
          <a className="like"><HeartPlus size={20}/></a>
          <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${isOpen ? `open` : ``}`}>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Pages</a>
      </nav>
      
    </header>
  );
}

export default Header;