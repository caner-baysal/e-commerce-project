import { useState } from "react";
import { Menu, Search, ShoppingCart, User, HeartPlus } from "lucide-react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../actions/clientActions';
import { getCategoryPath, genderMap } from '../utils/categoryHelpers';



function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories) || [];
  console.log("product state:", useSelector((state) => state.product));
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const isLoggedIn = user && user.email;

  const kadinCategories = categories.filter((c) => c.gender === "k");
  const erkekCategories = categories.filter((c) => c.gender === "e");

  const cartItemCount = cart.reduce((sum, item) => sum + item.count, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.count, 0);

  function handleLogout() {
    dispatch(setUser({}));
    localStorage.removeItem("token");
  }

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

          <nav class='hidden [@media(min-width:1024px)]:flex
          [@media(min-width:1024px)]:mt-[20px] [@media(min-width:1024px)]:gap-[24px]'>
            <a href="/" class='nav-link [@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>Home</a>
            <div class='[@media(min-width:1024px)]:relative'>
              <button onClick={() => setIsShopOpen(prev => !prev)}
                class='nav-link [@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px] 
                  [@media(min-width:1440px)]:no-underline [@media(min-width:1440px)]:text-[#777] 
                  [@media(min-width:1440px)]:bg-none [@media(min-width:1440px)]:border-none 
                  [@media(min-width:1440px)]:cursor-pointer [@media(min-width:1024px)]:w-[50px]'>
                Shop ▾
              </button>
              {isShopOpen && (
                <div className='absolute top-full left-0 mt-1 bg-white shadow-lg z-50 p-4 min-w-[300px]'>
                  <div className='flex flex-row gap-8'>

                    <div className='flex flex-col gap-2'>
                      <h6 className='font-bold text-[14px] text-[#252B42] mb-2'>Kadın</h6>
                      {kadinCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={getCategoryPath(cat)}
                          className='text-[14px] text-[#737373] hover:text-[#23A6F0]'
                          onClick={() => setIsShopOpen(false)}
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>

                    <div className='flex flex-col gap-2'>
                      <h6 className='font-bold text-[14px] text-[#252B42] mb-2'>Erkek</h6>
                      {erkekCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={getCategoryPath(cat)}
                          className='text-[14px] text-[#737373] hover:text-[#23A6F0]'
                          onClick={() => setIsShopOpen(false)}
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>)}
            </div>
            <a href="/team" class='nav-link [@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>
              About</a>
            <a href="#" class=' nav-link [@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>
              Blog</a>
            <a href="/contact" class=' nav-link [@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>
              Contact</a>
            <a href="#" class=' nav-link [@media(min-width:1024px)]:text-[14px] [@media(min-width:1024px)]:mb-[15px]'>
              Pages</a>
          </nav>
        </div>

        <div class='flex flex-row gap-[10px] mr-[24px] [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row
        [@media(min-width:1024px)]:h-[54px] [@media(min-width:1024px)]:mt-[30px]
        [@media(min-width:1024px)]:mr-[35px] [@media(min-width:1024px)]:justify-center'>

          {isLoggedIn ? (
            <div className="hidden [@media(min-width:1024px)]:flex items-center gap-2">
              <User email={user.email}
                size={32}
                className="rounded-full"
                default="mp"
              />
              <span className="text-[14px] font-bold">{user.name}</span>
              <button className="text-[12px] text-blue-600 bg-transparent border-none cursor-pointer ml-2"
                onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" class='hidden [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:bg-transparent 
              [@media(min-width:1024px)]:border-none [@media(min-width:1024px)]:text-[14px] 
              [@media(min-width:1024px)]:cursor-pointer [@media(min-width:1024px)]:text-[blue] 
              [@media(min-width:1024px)]:font-bold [@media(min-width:1024px)]:text-[10px]'>
              <User size={20} /> Login / Register
            </Link>
          )}

          <a className="search"><Search size={20} /></a>
          <div className='relative'>
            <button
              onClick={() => setIsCartOpen(prev => !prev)}
              className='relative flex items-center bg-transparent border-none cursor-pointer'
            >
              <ShoppingCart class='text-[blue]' size={20} />

              {cartItemCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-[#23A6F0] text-white text-[10px]
                                font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center'>
                  {cartItemCount}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className='absolute top-full right-0 mt-2 bg-white shadow-xl z-50
                            rounded-[8px] w-[320px] p-4'>
                <h6 className='font-bold text-[14px] text-[#252B42] mb-3'>
                  Sepetim ({cartItemCount} Ürün)
                </h6>

                {cart.length === 0 ? (
                  <p className='text-[14px] text-[#737373] text-center py-4'>
                    Sepetiniz boş
                  </p>
                ) : (
                  <>
                    <div className='flex flex-col gap-3 max-h-[300px] overflow-y-auto'>
                      {cart.map((item) => (
                        <div key={item.product.id}
                          className='flex flex-row gap-3 items-center'>

                          <img
                            src={item.product.images?.[0]?.url}
                            alt={item.product.name}
                            className='w-[60px] h-[60px] object-cover rounded-[4px] bg-[#f0f0f0]'
                          />

                          <div className='flex flex-col flex-1 gap-1'>
                            <span className='font-bold text-[13px] text-[#252B42] line-clamp-2'>
                              {item.product.name}
                            </span>
                            <span className='text-[12px] text-[#737373]'>
                              Adet: {item.count}
                            </span>
                            <span className='font-bold text-[13px] text-[#23856D]'>
                              ${(item.product.price * item.count).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className='border-t-[1px] border-[#ECECEC] mt-3 pt-3'>
                      <div className='flex justify-between items-center'>
                        <span className='font-bold text-[14px] text-[#252B42]'>Toplam:</span>
                        <span className='font-bold text-[14px] text-[#23856D]'>
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className='flex flex-row gap-2 mt-3'>
                      <Link
                        to='/cart'
                        onClick={() => setIsCartOpen(false)}
                        className='flex-1 h-[44px] border-[1px] border-[#252B42]
                        rounded-[5px] font-bold text-[14px] text-[#252B42]
                        hover:bg-gray-50 cursor-pointer flex items-center justify-center'
                      >
                        Sepete Git
                      </Link>
                      <button className='flex-1 h-[44px] bg-[#23A6F0] rounded-[5px]
                                            font-bold text-[14px] text-white hover:bg-[#1a8fd1]
                                            cursor-pointer transition-colors'>
                        Siparişi Tamamla
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <a className="like"><HeartPlus size={20} /></a>
          <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${isOpen ? `open` : ``}`}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>

        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={getCategoryPath(cat)}
            className='pl-4 text-[14px] text-[#737373]'
            onClick={() => setIsOpen(false)}
          >
            {genderMap[cat.gender] === "kadin" ? "Kadın" : "Erkek"} - {cat.title}
          </Link>
        ))}
        <Link to="/team">About</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex flex-row w-[200px] bg-transparent border-none cursor-pointer"
          >
            Logout ({user.name})
          </button>
        ) : (
          <Link to="/login" className="flex flex-row w-[200px]">
            Login / Register
          </Link>
        )}
      </nav>

    </header>
  );
}

export default Header;