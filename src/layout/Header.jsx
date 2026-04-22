import { useState } from "react";
import { Menu, Search, ShoppingCart, User, HeartPlus } from "lucide-react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../actions/clientActions';
import { getCategoryPath, genderMap } from '../utils/categoryHelpers';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isShopMobileOpen, setIsShopMobileOpen] = useState(false);

    const user = useSelector((state) => state.client.user);
    const categories = useSelector((state) => state.product.categories) || [];
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
        <header className='w-[90%] border-b-[1px] border-[#ECECEC] bg-white'>

            <div className='flex items-center justify-between px-[24px] py-[12px] w-full max-w-[1024px] mx-auto'>

                <div className='flex items-center gap-[40px]'>
                    <Link to='/'
                        className='text-[20px] font-bold text-[#252B42] no-underline flex-shrink-0'
                        style={{ textDecoration: 'none' }}>
                        Bandage
                    </Link>

                    <nav className='hidden [@media(min-width:1024px)]:flex items-center gap-[24px]'>
                        <a href="/"
                            className='text-[14px] text-[#737373] font-[500] no-underline hover:text-[#23A6F0]'
                            style={{ textDecoration: 'none' }}>
                            Home
                        </a>

                        <div className='relative'>
                            <button onClick={() => setIsShopOpen(p => !p)}
                                className='text-[14px] text-[#737373] font-[500] bg-transparent border-none cursor-pointer flex items-center gap-[4px]'>
                                Shop ▾
                            </button>
                            {isShopOpen && (
                                <div className='absolute top-full left-0 mt-[8px] bg-white shadow-lg rounded-[8px] p-[16px] min-w-[300px] z-50 flex flex-row gap-[32px]'>
                                    <div className='flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[14px] text-[#252B42]'>Kadın</span>
                                        {kadinCategories.map((cat) => (
                                            <Link key={cat.id} to={getCategoryPath(cat)}
                                                onClick={() => setIsShopOpen(false)}
                                                className='text-[14px] text-[#737373] hover:text-[#23A6F0]'
                                                style={{ textDecoration: 'none' }}>
                                                {cat.title}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className='flex flex-col gap-[8px]'>
                                        <span className='font-bold text-[14px] text-[#252B42]'>Erkek</span>
                                        {erkekCategories.map((cat) => (
                                            <Link key={cat.id} to={getCategoryPath(cat)}
                                                onClick={() => setIsShopOpen(false)}
                                                className='text-[14px] text-[#737373] hover:text-[#23A6F0]'
                                                style={{ textDecoration: 'none' }}>
                                                {cat.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="/team"
                            className='text-[14px] text-[#737373] font-[500]'
                            style={{ textDecoration: 'none' }}>
                            About
                        </a>
                        <a href="/contact"
                            className='text-[14px] text-[#737373] font-[500]'
                            style={{ textDecoration: 'none' }}>
                            Contact
                        </a>
                        <a href="#"
                            className='text-[14px] text-[#737373] font-[500]'
                            style={{ textDecoration: 'none' }}>
                            Pages
                        </a>
                    </nav>
                </div>

                <div className='flex items-center gap-[16px]'>
                    <div className='relative'>
                        {isLoggedIn ? (
                            <div className='hidden [@media(min-width:1024px)]:flex items-center gap-[8px]'>
                                <button onClick={() => setIsUserMenuOpen(p => !p)}
                                    className='flex items-center gap-[6px] bg-transparent border-none cursor-pointer'>
                                    <User size={20} />
                                    <span className='font-bold text-[14px] text-[#252B42]'>{user.name}</span>
                                    <span className='text-[12px] text-[#737373]'>▾</span>
                                </button>
                                {isUserMenuOpen && (
                                    <div className='absolute top-full right-0 mt-[8px] bg-white shadow-lg rounded-[8px] border-[1px] border-[#ECECEC] z-50 min-w-[180px] py-[8px]'>
                                        <Link to='/orders'
                                            onClick={() => setIsUserMenuOpen(false)}
                                            className='block px-[16px] py-[10px] text-[14px] text-[#252B42] hover:bg-[#F0F8FF] hover:text-[#23A6F0]'
                                            style={{ textDecoration: 'none' }}>
                                            Geçmiş Siparişlerim (Previous Orders)
                                        </Link>
                                        <div className='border-t-[1px] border-[#ECECEC] my-[4px]' />
                                        <button onClick={() => { handleLogout(); setIsUserMenuOpen(false); }}
                                            className='w-full text-left px-[16px] py-[10px] text-[14px] text-red-500 hover:bg-red-50 bg-transparent border-none cursor-pointer'>
                                            Çıkış Yap (Logout)
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/login"
                                className='hidden [@media(min-width:1024px)]:flex items-center gap-[4px] text-[#23A6F0] font-bold text-[14px]'
                                style={{ textDecoration: 'none' }}>
                                <User size={16} /> Login / Register
                            </Link>
                        )}
                    </div>

                    <a href="#"
                        className='hidden [@media(min-width:1024px)]:flex items-center text-[#252B42] cursor-pointer'>
                        <Search size={20} />
                    </a>

                    <div className='relative'>
                        <button onClick={() => setIsCartOpen(p => !p)}
                            className='relative flex items-center bg-transparent border-none cursor-pointer text-[#252B42]'>
                            <ShoppingCart size={20} />
                            {cartItemCount > 0 && (
                                <span className='absolute top-[-8px] right-[-8px] bg-[#23A6F0] text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center'>
                                    {cartItemCount}
                                </span>
                            )}
                        </button>

                        {isCartOpen && (
                            <div className='absolute top-full right-0 mt-[8px] bg-white shadow-xl rounded-[8px] w-[320px] p-[16px] z-50'>
                                <h6 className='font-bold text-[14px] text-[#252B42] mb-[12px]'>
                                    Sepetim (My Cart) ({cartItemCount} Ürün (Product))
                                </h6>
                                {cart.length === 0 ? (
                                    <p className='text-[14px] text-[#737373] text-center py-[16px]'>
                                        Sepetiniz boş ()Empty
                                    </p>
                                ) : (
                                    <>
                                        <div className='flex flex-col gap-[12px] max-h-[300px] overflow-y-auto'>
                                            {cart.map((item) => (
                                                <div key={item.product.id} className='flex flex-row gap-[12px] items-center'>
                                                    <img src={item.product.images?.[0]?.url}
                                                        alt={item.product.name}
                                                        className='w-[60px] h-[60px] object-cover rounded-[4px] bg-[#f0f0f0] flex-shrink-0' />
                                                    <div className='flex flex-col flex-1 gap-[2px]'>
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
                                        <div className='border-t-[1px] border-[#ECECEC] mt-[12px] pt-[12px] flex justify-between items-center'>
                                            <span className='font-bold text-[14px] text-[#252B42]'>Toplam:</span>
                                            <span className='font-bold text-[14px] text-[#23856D]'>
                                                ${cartTotal.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className='flex flex-row gap-[8px] mt-[12px]'>
                                            <Link to='/cart'
                                                onClick={() => setIsCartOpen(false)}
                                                className='flex-1 h-[44px] border-[1px] border-[#252B42] rounded-[5px] font-bold text-[14px] text-[#252B42] flex items-center justify-center hover:bg-gray-50'
                                                style={{ textDecoration: 'none' }}>
                                                Sepete Git (Go to Card)
                                            </Link>
                                            <Link to='/order'
                                                onClick={() => setIsCartOpen(false)}
                                                className='flex-1 h-[44px] bg-[#23A6F0] rounded-[5px] font-bold text-[14px] text-white flex items-center justify-center hover:bg-[#1a8fd1]'
                                                style={{ textDecoration: 'none' }}>
                                                Siparişi Tamamla (Proceed)
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    <a href="#"
                        className='hidden [@media(min-width:1024px)]:flex items-center text-[#252B42] cursor-pointer'>
                        <HeartPlus size={20} />
                    </a>

                    <button onClick={() => setIsOpen(!isOpen)}
                        className='flex [@media(min-width:1024px)]:hidden bg-transparent border-none cursor-pointer text-[#252B42]'>
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className='flex flex-col items-center gap-[24px] py-[32px] px-[24px] border-t-[1px] border-[#ECECEC] bg-white'>
                    <Link to="/" onClick={() => setIsOpen(false)}
                        className='text-[22px] text-[#777] font-[500]'
                        style={{ textDecoration: 'none' }}>
                        Home
                    </Link>

                    <button onClick={() => setIsShopMobileOpen(p => !p)}
                        className='text-[22px] text-[#777] font-[500] bg-transparent border-none cursor-pointer flex items-center gap-[4px]'>
                        Shop {isShopMobileOpen ? '▴' : '▾'}
                    </button>
                    {isShopMobileOpen && (
                        <div className='flex flex-col items-center gap-[12px] w-full'>
                            {categories.map((cat) => (
                                <Link key={cat.id} to={getCategoryPath(cat)}
                                    onClick={() => { setIsOpen(false); setIsShopMobileOpen(false); }}
                                    className='text-[16px] text-[#737373]'
                                    style={{ textDecoration: 'none' }}>
                                    {genderMap[cat.gender] === "kadin" ? "Kadın" : "Erkek"} — {cat.title}
                                </Link>
                            ))}
                        </div>
                    )}

                    <Link to="/team" onClick={() => setIsOpen(false)}
                        className='text-[22px] text-[#777] font-[500]'
                        style={{ textDecoration: 'none' }}>
                        About
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}
                        className='text-[22px] text-[#777] font-[500]'
                        style={{ textDecoration: 'none' }}>
                        Contact
                    </Link>

                    {isLoggedIn ? (
                        <>
                            <Link to="/orders" onClick={() => setIsOpen(false)}
                                className='text-[22px] text-[#777] font-[500]'
                                style={{ textDecoration: 'none' }}>
                                Geçmiş Siparişlerim
                            </Link>
                            <button onClick={() => { handleLogout(); setIsOpen(false); }}
                                className='text-[22px] text-red-500 font-[500] bg-transparent border-none cursor-pointer'>
                                Çıkış Yap ({user.name})
                            </button>
                        </>
                    ) : (
                        <Link to="/login" onClick={() => setIsOpen(false)}
                            className='text-[22px] text-[#777] font-[500]'
                            style={{ textDecoration: 'none' }}>
                            Login / Register
                        </Link>
                    )}
                </nav>
            )}
        </header>
    );
}

export default Header;