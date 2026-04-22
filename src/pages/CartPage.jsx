import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../actions/shoppingCartActions";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";

const SHIPPING_COST = 29.99;
const FREE_SHIPPING_THRESHOLD = 150;

function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart.cart);
    const cartTotal = cart
        .filter((item) => item.checked)
        .reduce((sum, item) => sum + item.product.price * item.count, 0);

    const checkedItems = cart.filter((item) => item.checked);

    const checkedCount = checkedItems.length;

    const shippingDiscount = cartTotal >= FREE_SHIPPING_THRESHOLD ? SHIPPING_COST : 0;

    const grandTotal = cartTotal + SHIPPING_COST - shippingDiscount;

    const handleToggleCheck = (productId) => {
        const updated = cart.map((item) => item.product.id === productId ? { ...item, checked: !item.checked } : item);
        dispatch(setCart(updated));
    };
    const handleToggleAll = () => {
        const allChecked = cart.every((item) => item.checked);
        const updated = cart.map((item) => ({ ...item, checked: !allChecked }));
        dispatch(setCart(updated));
    };

    const handleIncrease = (productId) => {
        const updated = cart.map((item) =>
            item.product.id === productId
                ? { ...item, count: item.count + 1 }
                : item
        );
        dispatch(setCart(updated));
    };

    const handleDecrease = (productId) => {
        const updated = cart
            .map((item) =>
                item.product.id === productId
                    ? { ...item, count: item.count - 1 }
                    : item
            )
            .filter((item) => item.count > 0);
        dispatch(setCart(updated));
    };

    const handleRemove = (productId) => {
        const updated = cart.filter((item) => item.product.id !== productId);
        dispatch(setCart(updated));
    };

    const allChecked = cart.length > 0 && cart.every((item) => item.checked);

    if (cart.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center py-[80px] gap-[24px]'>
                <h2 className='font-bold text-[24px] text-[#252B42]'>Sepetiniz boş (Empty)</h2>
                <p className='text-[14px] text-[#737373]'>Alışverişe başlamak için ürünlere göz atın. (Check Products to Start Shopping)</p>
                <Link
                    to='/shop'
                    className='px-[24px] py-[12px] bg-[#23A6F0] text-white font-bold text-[14px]
                    rounded-[5px] hover:bg-[#1a8fd1] transition-colors'
                >
                    Alışverişe Başla (Start Shopping)
                </Link>
            </div>
        );
    }
    return (
        <main className='w-[400px] [@media(min-width:1024px)]:w-[1024px] mx-auto py-[24px]'>
            <h2 className='font-bold text-[24px] text-[#252B42] mb-[24px]'>
                Sepetim (My Cart) ({cart.length} Ürün)
            </h2>

            <div className='flex items-center gap-[12px] mb-[16px] p-[16px] bg-[#FAFAFA] rounded-[8px]'>
                <input
                    type='checkbox'
                    checked={allChecked}
                    onChange={handleToggleAll}
                    className='w-[18px] h-[18px] cursor-pointer accent-[#23A6F0]'
                />
                <span className='font-bold text-[14px] text-[#252B42]'>
                    Tümünü Seç (Select All) ({cart.length} Ürün)
                </span>
            </div>

            <div className='flex flex-col gap-[12px]'>
                {cart.map((item) => (
                    <div
                        key={item.product.id}
                        className='flex flex-row items-center gap-[16px] p-[16px] bg-white
                        border-[1px] border-[#ECECEC] rounded-[8px] hover:border-[#23A6F0]
                        transition-colors'
                    >
                        <input
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => handleToggleCheck(item.product.id)}
                            className='w-[18px] h-[18px] cursor-pointer accent-[#23A6F0] flex-shrink-0'
                        />

                        <img
                            src={item.product.images?.[0]?.url}
                            alt={item.product.name}
                            className='w-[80px] h-[80px] object-cover rounded-[4px] bg-[#f0f0f0] flex-shrink-0'
                        />

                        <div className='flex flex-col flex-1 gap-[4px] min-w-0'>
                            <span className='font-bold text-[14px] text-[#252B42] line-clamp-2'>
                                {item.product.name}
                            </span>
                            <span className='text-[12px] text-[#737373] line-clamp-2'>
                                {item.product.description}
                            </span>
                            <span className='text-[12px] text-[#737373]'>
                                Stok (Stock): {item.product.stock} adet
                            </span>
                        </div>

                        <div className='flex flex-row items-center gap-[8px] flex-shrink-0'>
                            <button
                                onClick={() => handleDecrease(item.product.id)}
                                className='w-[32px] h-[32px] flex items-center justify-center
                                border-[1px] border-[#BDBDBD] rounded-[4px] hover:bg-gray-100
                                cursor-pointer transition-colors'
                            >
                                <Minus size={14} />
                            </button>
                            <span className='w-[32px] text-center font-bold text-[14px] text-[#252B42]'>
                                {item.count}
                            </span>
                            <button
                                onClick={() => handleIncrease(item.product.id)}
                                className='w-[32px] h-[32px] flex items-center justify-center
                                border-[1px] border-[#BDBDBD] rounded-[4px] hover:bg-gray-100
                                cursor-pointer transition-colors'
                            >
                                <Plus size={14} />
                            </button>
                        </div>

                        <span className='font-bold text-[16px] text-[#23856D] flex-shrink-0 min-w-[80px] text-right'>
                            ${(item.product.price * item.count).toFixed(2)}
                        </span>

                        <button
                            onClick={() => handleRemove(item.product.id)}
                            className='flex-shrink-0 text-[#BDBDBD] hover:text-red-500
                            transition-colors cursor-pointer'
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-[12px] w-[400px] [@media(min-width:1024px)]:w-[300px] flex-shrink-0'>

                <Link
                    to={checkedCount === 0 ? "#" : "/order"}
                    disabled={checkedCount === 0}
                    className='w-full h-[52px] bg-[#23A6F0] text-white font-bold text-[16px]
                        rounded-[5px] flex items-center justify-between px-[24px]
                        hover:bg-[#d96a10] transition-colors cursor-pointer
                        disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    <span>Sepeti Onayla (Approve Cart)</span>
                    <span>›</span>
                </Link>

                <div className='p-[24px] bg-white border-[1px] border-[#ECECEC] rounded-[8px]'>
                    <h3 className='font-bold text-[20px] text-[#252B42] mb-[20px]'>
                        Sipariş Özeti (Order Sum)
                    </h3>

                    <div className='flex flex-col gap-[12px]'>
                        <div className='flex justify-between items-center'>
                            <span className='text-[14px] text-[#252B42]'>Ürünün Toplamı (Total)</span>
                            <span className='font-bold text-[14px] text-[#252B42]'>
                                ${cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <span className='text-[14px] text-[#252B42]'>Kargo Toplam (Cargo Total)</span>
                            <span className='font-bold text-[14px] text-[#252B42]'>
                                ${SHIPPING_COST.toFixed(2)}
                            </span>
                        </div>

                        {shippingDiscount > 0 && (
                            <div className='flex justify-between items-start gap-[8px]'>
                                <span className='text-[13px] text-[#252B42] flex-1'>
                                    {FREE_SHIPPING_THRESHOLD} $ ve Üzeri Kargo Bedava (Free Shipping)
                                </span>
                                <span className='font-bold text-[14px] text-[#23A6F0] flex-shrink-0'>
                                    -${shippingDiscount.toFixed(2)}
                                </span>
                            </div>
                        )}

                        <div className='border-t-[1px] border-[#23A6F0] pt-[12px]'>
                            <div className='flex justify-between items-center'>
                                <span className='text-[16px] text-[#252B42]'>Toplam (Grand Total)</span>
                                <span className='font-bold text-[18px] text-[#23A6F0]'>
                                    ${grandTotal.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Link
                    to={checkedCount === 0 ? "#" : "/order"}
                    disabled={checkedCount === 0}
                    className='w-full h-[52px] bg-[#23A6F0] text-white font-bold text-[16px]
                        rounded-[5px] flex items-center justify-between px-[24px]
                        hover:bg-[#d96a10] transition-colors cursor-pointer
                        disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    <span>Sepeti Onayla (Approve Cart)</span>
                    <span>›</span>
                </Link>
                 <Link
                    to='/shop'
                    className='block text-center mt-[12px] text-[14px] text-[#23A6F0]
                    hover:underline cursor-pointer'
                >
                    Alışverişe Devam Et (Keep Shopping)
                </Link>
            </div>
        </main>
    );
}
export default CartPage;