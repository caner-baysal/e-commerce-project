import { useState } from "react";
import { Menu, Search, ShoppingCart, User, HeartPlus } from "lucide-react";
import { Link } from 'react-router-dom'


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header class='flex flex-col w-[400px] [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
    [@media(min-width:1024px)]:items-center [@media(min-width:1024px)]:flex-justify-between 
    [@media(min-width:1024px)]:w-[1024px] [@media(min-width: 1024px)]:p-[16px 40px]'>
      <div class='flex items-center justify-between px-6 py-4 lg:px-10 [@media(min-width:1024px)]:w-[1437px] 
      [@media(min-width:1024px)]:h-[58px] [@media(min-width:1024px)]:mt-[10px] [@media(min-width:1024px)]:flex 
      [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:items-center'>
        <div class="flex items-center gap-10">
          <Link to='/' class='text-[20px] font-bold h-[28px] ml-[35px] [@media(min-width: 1024px)]:w-[187px]
          [@media(min-width:1024px)]:ml-[38px]'>
            Bandage
          </Link>

          <nav  class='hidden [@media(min-width:1024px)]:flex
          [@media(min-width:1024px)]:mt-[20px] [@media(min-width:1024px)]:gap-[24px]'>
            <a href="/" class='[@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>Home</a>
            <div class='[@media(min-width:1024px)]:relative'>
                  <button onClick={() => setIsShopOpen(prev => !prev)}
                  class='[@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px] 
                  [@media(min-width:1440px)]:no-underline [@media(min-width:1440px)]:text-[#777] 
                  [@media(min-width:1440px)]:bg-none [@media(min-width:1440px)]:border-none 
                  [@media(min-width:1440px)]:cursor-pointer [@media(min-width:1024px)]:w-[50px]'>
                    Shop ▾
                  </button>
                  {isShopOpen && (
                  <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col
                  [@media(min-width:1024px)]:dropdown [@media(min-width:1024px)]:absolute 
                  [@media(min-width:1024px)]:top-full [@media(min-width:1024px)]:left-0 
                  [@media(min-width:1024px)]:mt-1 [@media(min-width:1024px)]:bg-white 
                  [@media(min-width:1024px)]:shadow-lg'>
                    <Link to='/shop' class='nav-link [@media(min-width:1024px)]:text-[14px]'>Product</Link>
                    <Link to='/pricing' class='[@media(min-width:1024px)]:text-[14px]'>Pricing</Link>
                  </div>)}
            </div>
            <a href="/team" class='[@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>About</a>
            <a href="#" class='[@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>Blog</a>
            <a href="/contact" class='[@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>Contact</a>
            <a href="#" class='[@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>Pages</a>
          </nav>
        </div>

        <div class='flex flex-row gap-[10px] mr-[24px] [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row
        [@media(min-width:1024px)]:h-[54px] [@media(min-width:1024px)]:mt-[30px]
        [@media(min-width:1024px)]:mr-[35px] [@media(min-width:1024px)]:justify-center'>
          <button href="#" class='hidden [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:bg-transparent 
          [@media(min-width:1024px)]:border-none [@media(min-width:1024px)]:text-[14px] 
          [@media(min-width:1024px)]:cursor-pointer [@media(min-width:1024px)]:text-[blue] 
          [@media(min-width:1024px)]:font-bold [@media(min-width:1024px)]:text-[10px]'>
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
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/product">Product</a>
          <a href="/pricing">Pricing</a>
          <a href="/team">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="#">Pages</a>
          <a href="#" class='flex flex-row w-[200px]'><User /> Login / Register</a>
      </nav>
      
    </header>
  );
}

export default Header;