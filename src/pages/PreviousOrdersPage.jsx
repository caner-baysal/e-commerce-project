import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { axiosInstance } from "../actions/clientActions";
import { ChevronDown, ChevronUp, Package, ShoppingBag } from 'lucide-react';

function PreviousOrdersPage() {
    const history = useHistory();
    const user = useSelector((state) => state.client.user);

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!user || !user.email) history.push('/login');
            setAuthChecked(true);
        }, 300);
        return () => clearTimeout(timer);
    }, [user, history]);

    useEffect(() => {
        if (!user?.email) return;
        fetchOrders();
    }, [user]);

    const fetchOrders = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axiosInstance.get("/order");
            const sorted = [...res.data].sort(
                (a, b) => new Date(b.order_date) - new Date(a.order_date)
            );
            setOrders(sorted);
        } catch (err) {
            console.warn("Failed to fetch orders:", err);
            setError('Siparişler yüklenirken bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    const toggleOrder = (orderId) => {
        setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
    };

    const maskCard = (cardNo) => {
        if (!cardNo) return '';
        const str = String(cardNo);
        return '**** **** **** ' + str.slice(-4);
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('tr-TR', {
            day: '2-digit', month: 'long', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    if (!authChecked) {
        return (
            <div className='flex justify-center items-center py-[80px]'>
                <div className='w-[40px] h-[40px] border-[4px] border-[#23A6F0] border-t-transparent rounded-full animate-spin'></div>
            </div>
        );
    };

    if (!user?.email) return null;

    return (
        <main className='w-full px-[24px] py-[32px] max-w-[1024px]'>
            <div className='flex items-center justify-between mb-[32px]'>
                <h1 className='font-bold text-[28px] text-[#252B42]'>Geçmiş Siparişlerim</h1>
                <Link to='/shop'
                    className='text-[14px] text-[#23A6F0] font-bold hover:underline'>
                    Alışverişe Devam Et
                </Link>
            </div>

            {loading && (
                <div className='flex justify-center py-[60px]'>
                    <div className='w-[40px] h-[40px] border-[4px] border-[#23A6F0] border-t-transparent rounded-full animate-spin'></div>
                </div>
            )}

            {error && (
                <div className='flex flex-col items-center py-[60px] gap-[16px]'>
                    <p className='text-red-500 font-bold text-[16px]'>{error}</p>
                    <button onClick={fetchOrders}
                        className='px-[24px] py-[10px] bg-[#23A6F0] text-white font-bold text-[14px] rounded-[5px] cursor-pointer'>
                        Tekrar Dene
                    </button>
                </div>
            )}

            {!loading && !error && orders.length === 0 && (
                <div className='flex flex-col items-center py-[80px] gap-[24px]'>
                    <ShoppingBag size={64} className='text-[#BDBDBD]' />
                    <h2 className='font-bold text-[20px] text-[#252B42]'>Henüz siparişiniz yok</h2>
                    <p className='text-[14px] text-[#737373]'>İlk siparişinizi vermek için alışverişe başlayın.</p>
                    <Link to='/shop'
                        className='px-[24px] py-[12px] bg-[#23A6F0] text-white font-bold text-[14px] rounded-[5px] hover:bg-[#1a8fd1] transition-colors'>
                        Alışverişe Başla
                    </Link>
                </div>
            )}

            {!loading && !error && orders.length > 0 && (
                <div className='flex flex-col gap-[16px]'>
                    {orders.map((order) => {
                        const isExpanded = expandedOrderId === order.id;
                        return (
                            <div key={order.id}
                                className='border-[1px] border-[#ECECEC] rounded-[8px] overflow-hidden bg-white shadow-sm'>


                                <button
                                    onClick={() => toggleOrder(order.id)}
                                    className='w-full flex flex-col [@media(min-width:768px)]:flex-row
                                    [@media(min-width:768px)]:items-center justify-between
                                    p-[20px] hover:bg-gray-50 transition-colors cursor-pointer text-left gap-[12px]'
                                >
                                    <div className='flex items-center gap-[16px]'>
                                        <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center flex-shrink-0
                                        ${isExpanded ? 'bg-[#23A6F0]' : 'bg-[#F0F8FF]'}`}>
                                            <Package size={20} className={isExpanded ? 'text-white' : 'text-[#23A6F0]'} />
                                        </div>
                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='font-bold text-[15px] text-[#252B42]'>
                                                Sipariş #{order.id}
                                            </span>
                                            <span className='text-[13px] text-[#737373]'>
                                                {formatDate(order.order_date)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-[24px] ml-[60px] [@media(min-width:768px)]:ml-0'>
                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='text-[12px] text-[#737373]'>Ürün Sayısı</span>
                                            <span className='font-bold text-[14px] text-[#252B42]'>
                                                {order.products.reduce((sum, p) => sum + p.count, 0)} adet
                                            </span>
                                        </div>
                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='text-[12px] text-[#737373]'>Toplam</span>
                                            <span className='font-bold text-[16px] text-[#23A6F0]'>
                                                ${order.price.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className='flex flex-col gap-[2px]'>
                                            <span className='text-[12px] text-[#737373]'>Kart</span>
                                            <span className='font-bold text-[13px] text-[#252B42]'>
                                                {maskCard(order.card_no)}
                                            </span>
                                        </div>
                                        <div className='ml-auto'>
                                            {isExpanded
                                                ? <ChevronUp size={20} className='text-[#23A6F0]' />
                                                : <ChevronDown size={20} className='text-[#737373]' />
                                            }
                                        </div>
                                    </div>
                                </button>


                                {isExpanded && (
                                    <div className='border-t-[1px] border-[#ECECEC]'>

                                        <div className='grid grid-cols-2 [@media(min-width:768px)]:grid-cols-4 gap-[16px] p-[20px] bg-[#FAFAFA]'>
                                            <div>
                                                <p className='text-[12px] text-[#737373] mb-[2px]'>Sipariş No</p>
                                                <p className='font-bold text-[13px] text-[#252B42]'>#{order.id}</p>
                                            </div>
                                            <div>
                                                <p className='text-[12px] text-[#737373] mb-[2px]'>Sipariş Tarihi</p>
                                                <p className='font-bold text-[13px] text-[#252B42]'>{formatDate(order.order_date)}</p>
                                            </div>
                                            <div>
                                                <p className='text-[12px] text-[#737373] mb-[2px]'>Kart Sahibi</p>
                                                <p className='font-bold text-[13px] text-[#252B42]'>{order.card_name}</p>
                                            </div>
                                            <div>
                                                <p className='text-[12px] text-[#737373] mb-[2px]'>Kart No</p>
                                                <p className='font-bold text-[13px] text-[#252B42]'>{maskCard(order.card_no)}</p>
                                            </div>
                                        </div>

                                        <div className='p-[20px]'>
                                            <h4 className='font-bold text-[14px] text-[#252B42] mb-[12px]'>
                                                Sipariş Ürünleri
                                            </h4>

                                            <div className='hidden [@media(min-width:768px)]:grid grid-cols-[80px_1fr_100px_100px_120px]
                                            gap-[12px] px-[12px] py-[8px] bg-[#F0F8FF] rounded-t-[4px]
                                            text-[12px] font-bold text-[#737373] uppercase'>
                                                <span>Görsel</span>
                                                <span>Ürün</span>
                                                <span className='text-center'>Adet</span>
                                                <span className='text-right'>Birim Fiyat</span>
                                                <span className='text-right'>Toplam</span>
                                            </div>

                                            <div className='flex flex-col divide-y divide-[#ECECEC] border-[1px] border-[#ECECEC] rounded-b-[4px]'>
                                                {order.products.map((product, idx) => (
                                                    <div key={idx}
                                                        className='grid grid-cols-1 [@media(min-width:768px)]:grid-cols-[80px_1fr_100px_100px_120px]
                                                        gap-[12px] p-[12px] items-center'>

                                                        <img
                                                            src={product.images?.[0]?.url}
                                                            alt={product.name}
                                                            className='w-[70px] h-[70px] object-cover rounded-[4px] bg-[#f0f0f0]'
                                                        />

                                                        <div className='flex flex-col gap-[4px]'>
                                                            <span className='font-bold text-[14px] text-[#252B42]'>
                                                                {product.name}
                                                            </span>
                                                            <span className='text-[12px] text-[#737373] line-clamp-2'>
                                                                {product.description}
                                                            </span>
                                                        </div>

                                                        <div className='flex [@media(min-width:768px)]:justify-center items-center gap-[4px]'>
                                                            <span className='text-[12px] text-[#737373] [@media(min-width:768px)]:hidden'>Adet:</span>
                                                            <span className='font-bold text-[14px] text-[#252B42]'>{product.count}</span>
                                                        </div>

                                                        <div className='flex [@media(min-width:768px)]:justify-end items-center gap-[4px]'>
                                                            <span className='text-[12px] text-[#737373] [@media(min-width:768px)]:hidden'>Birim Fiyat:</span>
                                                            <span className='font-bold text-[14px] text-[#252B42]'>
                                                                ${product.price.toFixed(2)}
                                                            </span>
                                                        </div>

                                                        <div className='flex [@media(min-width:768px)]:justify-end items-center gap-[4px]'>
                                                            <span className='text-[12px] text-[#737373] [@media(min-width:768px)]:hidden'>Toplam:</span>
                                                            <span className='font-bold text-[15px] text-[#23A6F0]'>
                                                                ${(product.price * product.count).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className='flex justify-end mt-[16px] pt-[16px] border-t-[1px] border-[#ECECEC]'>
                                                <div className='flex flex-col items-end gap-[4px]'>
                                                    <span className='text-[13px] text-[#737373]'>Sipariş Toplamı</span>
                                                    <span className='font-bold text-[20px] text-[#23A6F0]'>
                                                        ${order.price.toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </main>
    );
}

export default PreviousOrdersPage;
