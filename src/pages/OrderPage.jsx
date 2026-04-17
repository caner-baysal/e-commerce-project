import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../actions/clientActions";
import { useForm } from "react-hook-form";
import { Plus, Edit2, Trash2, CreditCard, CheckCircle } from 'lucide-react';
import { setCart } from "../actions/shoppingCartActions";

const CITIES = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya",
    "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
    "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne",
    "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane",
    "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu",
    "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya",
    "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde",
    "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ",
    "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak",
    "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
    "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const YEARS = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i);

const SHIPPING_COST = 29.99;
const FREE_SHIPPING_THRESHOLD = 150;

function OrderPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.client.user);
    const cart = useSelector((state) => state.shoppingCart.cart);
    /*const order = useSelector((state) => state.user.order);*/

    const [activeStep, setActiveStep] = useState(1);

    const [addresses, setAddresses] = useState([]);
    const [addressLoading, setAddressLoading] = useState(true);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [addressSubmitting, setAddressSubmitting] = useState(false);

    const [cards, setCards] = useState([]);
    const [cardLoading, setCardLoading] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [showCardForm, setShowCardForm] = useState(false);
    const [editingCard, setEditingCard] = useState(null);
    const [cardSubmitting, setCardSubmitting] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [orderPlacing, setOrderPlacing] = useState(false);
    const [ccv, setCcv] = useState("");
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!user || !user.email) {
                history.push("/login")
            }
            setAuthChecked(true);
        }, 300);
        return () => clearTimeout(timer);
    }, [user, history]);

    useEffect(() => {
        if (!user?.email) return;
        fetchAddresses();
    }, [user]);


    useEffect(() => {
        if (activeStep === 2 && user?.email) fetchCards();
    }, [activeStep, user]);

    const fetchAddresses = async () => {
        setAddressLoading(true);
        try {
            const res = await axiosInstance.get('/user/address');
            setAddresses(res.data);
            if (res.data.length > 0) setSelectedAddressId(res.data[0].id);
        } catch (err) {
            console.warn('Failed to fetch addresses:', err);
        } finally {
            setAddressLoading(false);
        }
    };

    const fetchCards = async () => {
        setCardLoading(true);
        try {
            const res = await axiosInstance.get('/user/card');
            setCards(res.data);
            if (res.data.length > 0) setSelectedCardId(res.data[0].id);
        } catch (err) {
            console.warn('Failed to fetch cards:', err);
        } finally {
            setCardLoading(false);
        }
    };


    const checkedItems = cart.filter((item) => item.checked);
    const cartTotal = checkedItems.reduce((sum, item) => sum + item.product.price * item.count, 0);
    const shippingDiscount = cartTotal >= FREE_SHIPPING_THRESHOLD ? SHIPPING_COST : 0;
    const grandTotal = cartTotal + SHIPPING_COST - shippingDiscount;

    const {
        register: registerAddress,
        handleSubmit: handleAddressSubmit,
        reset: resetAddress,
        formState: { errors: addressErrors },
    } = useForm({ mode: 'onChange' });

    const {
        register: registerCard,
        handleSubmit: handleCardSubmit,
        reset: resetCard,
        formState: { errors: cardErrors },
    } = useForm({ mode: 'onChange' });

    const openAddAddressForm = () => {
        setEditingAddress(null);
        resetAddress({ title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "", address: "" });
        setShowAddressForm(true);
    };

    const openEditAddressForm = () => {
        setEditingAddress(null);
        resetAddress({ title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "", address: "" });
        setShowAddressForm(true);
    };

    const onSubmitAddress = async (formData) => {
        setAddressSubmitting(true);
        try {
            if (editingAddress) {
                await axiosInstance.put('/user/address', { id: editingAddress.id, ...formData });
            } else {
                await axiosInstance.post('/user/address', formData);
            }
            await fetchAddresses();
            setShowAddressForm(false);
            setEditingAddress(null);
        } catch (err) {
            console.warn('Failed to save address:', err);
        } finally {
            setAddressSubmitting(false);
        }
    };

    const handleDeleteAddress = async (addressId) => {
        try {
            await axiosInstance.delete(`/user/address/${addressId}`);
            await fetchAddresses();
            if (selectedAddressId === addressId) setSelectedAddressId(null);
        } catch (err) {
            console.warn('Failed to delete address:', err);
        }
    };

    const openAddCardForm = () => {
        setEditingCard(null);
        resetCard({ card_no: '', name_on_card: '', expire_month: '', expire_year: '' });
        setShowCardForm(true);
    };

    const openEditCardForm = (card) => {
        setEditingCard(card);
        resetCard({ card_no: card.card_no, name_on_card: card.name_on_card, expire_month: card.expire_month, expire_year: card.expire_year });
        setShowCardForm(true);
    };

    const onSubmitCard = async (formData) => {
        setCardSubmitting(true);
        try {
            const payload = {
                card_no: formData.card_no,
                name_on_card: formData.name_on_card,
                expire_month: parseInt(formData.expire_month),
                expire_year: parseInt(formData.expire_year),
            };
            if (editingCard) {
                await axiosInstance.put('/user/card', { id: editingCard.id, ...payload });
            } else {
                await axiosInstance.post('/user/card', payload);
            }
            await fetchCards();
            setShowCardForm(false);
            setEditingCard(null);
        } catch (err) {
            console.warn('Failed to save card:', err);
        } finally {
            setCardSubmitting(false);
        }
    };

    const handleDeleteCard = async (cardId) => {
        try {
            await axiosInstance.delete(`/user/card/${cardId}`);
            await fetchCards();
            if (selectedCardId === cardId) setSelectedCardId(null);
        } catch (err) {
            console.warn('Failed to delete card:', err);
        }
    };

    const handlePlaceOrder = async () => {
        const selectedCard = cards.find((c) => c.id === selectedCardId);
        if (!selectedCard || !selectedAddressId || !ccv) return;

        setOrderPlacing(true);
        try {
            const payload = {
                address_id: selectedAddressId,
                order_date: new Date().toISOString(),
                card_no: parseInt(selectedCard.card_no),
                card_name: selectedCard.name_on_card,
                card_expire_month: selectedCard.expire_month,
                card_expire_year: selectedCard.expire_year,
                card_ccv: parseInt(ccv),
                price: grandTotal,
                products: checkedItems.map((item) => ({
                    product_id: item.product.id,
                    count: item.count,
                    detail: item.product.name,
                })),
            };
            await axiosInstance.post('/order', payload);
            // ✅ Clear cart and show success screen
            dispatch(setCart([]));
            setOrderSuccess(true);
        } catch (err) {
            console.warn('Failed to place order:', err);
            alert('Sipariş oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setOrderPlacing(false);
        }
    };

    const maskCard = (cardNo) => {
        if (!cardNo) return '';
        const str = String(cardNo);
        return str.slice(0, 4) + ' ' + str.slice(4, 8).replace(/./g, '*') + ' **** ' + str.slice(-4);
    };

    if (!authChecked) {
        return (
            <div className='flex justify-center items-center py-[80px]'>
                <div className='w-[40px] h-[40px] border-[4px] border-[#23A6F0] border-t-transparent rounded-full animate-spin'></div>
            </div>
        );
    }

    if (!user?.email) return null;

    if (orderSuccess) {
        return (
            <div className='flex flex-col items-center justify-center py-[80px] gap-[24px] text-center'>
                <CheckCircle size={80} className='text-[#23A6F0]' />
                <h2 className='font-bold text-[32px] text-[#252B42]'>
                    Siparişiniz Alındı!
                </h2>
                <p className='text-[16px] text-[#737373] max-w-[400px]'>
                    Siparişiniz başarıyla oluşturuldu. En kısa sürede hazırlanıp kargoya verilecektir. Teşekkür ederiz!
                </p>
                <div className='flex gap-[16px] mt-[8px]'>
                    <button
                        onClick={() => history.push('/')}
                        className='px-[24px] py-[12px] border-[1px] border-[#23A6F0] text-[#23A6F0]
                        font-bold text-[14px] rounded-[5px] hover:bg-blue-50 cursor-pointer transition-colors'
                    >
                        Ana Sayfaya Dön
                    </button>
                    <button
                        onClick={() => history.push('/shop')}
                        className='px-[24px] py-[12px] bg-[#23A6F0] text-white font-bold text-[14px]
                        rounded-[5px] hover:bg-[#1a8fd1] cursor-pointer transition-colors'
                    >
                        Alışverişe Devam Et
                    </button>
                </div>
            </div>
        );
    }

    const selectedCard = cards.find((c) => c.id === selectedCardId);
    const canPlaceOrder = selectedAddressId && selectedCardId && ccv.length >= 3;

    const OrderSummary = ({ buttonLabel, buttonDisabled, onButtonClick }) => (
        <div className='flex flex-col gap-[12px] w-full'>
            <button
                disabled={buttonDisabled}
                onClick={onButtonClick}
                className='w-full h-[52px] bg-[#23A6F0] text-white font-bold text-[16px]
                rounded-[5px] flex items-center justify-between px-[24px]
                hover:bg-[#1a8fd1] transition-colors cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed'
            >
                <span>{orderPlacing ? 'İşleniyor...' : buttonLabel}</span>
                <span>›</span>
            </button>
            <div className='p-[24px] bg-white border-[1px] border-[#ECECEC] rounded-[8px]'>
                <h3 className='font-bold text-[20px] text-[#252B42] mb-[20px]'>Sipariş Özeti</h3>
                <div className='flex flex-col gap-[12px]'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[14px] text-[#252B42]'>Ürünün Toplamı</span>
                        <span className='font-bold text-[14px] text-[#252B42]'>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-[14px] text-[#252B42]'>Kargo Toplam</span>
                        <span className='font-bold text-[14px] text-[#252B42]'>${SHIPPING_COST.toFixed(2)}</span>
                    </div>
                    {shippingDiscount > 0 && (
                        <div className='flex justify-between items-start gap-[8px]'>
                            <span className='text-[13px] text-[#252B42] flex-1'>
                                {FREE_SHIPPING_THRESHOLD}$ ve Üzeri Kargo Bedava (Satıcı Karşılar)
                            </span>
                            <span className='font-bold text-[14px] text-[#23A6F0] flex-shrink-0'>
                                -${shippingDiscount.toFixed(2)}
                            </span>
                        </div>
                    )}
                    <div className='border-t-[1px] border-[#ECECEC] pt-[12px]'>
                        <div className='flex justify-between items-center'>
                            <span className='text-[16px] text-[#252B42]'>Toplam</span>
                            <span className='font-bold text-[18px] text-[#23A6F0]'>${grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button
                disabled={buttonDisabled}
                onClick={onButtonClick}
                className='w-full h-[52px] bg-[#23A6F0] text-white font-bold text-[16px]
                rounded-[5px] flex items-center justify-between px-[24px]
                hover:bg-[#1a8fd1] transition-colors cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed'
            >
                <span>{orderPlacing ? 'İşleniyor...' : buttonLabel}</span>
                <span>›</span>
            </button>
        </div>
    );

    return (
        <main className='w-full px-[24px] py-[24px]'>

            <div className='flex flex-row mb-[32px] border-b-[1px] border-[#ECECEC]'>
                <button
                    onClick={() => setActiveStep(1)}
                    className={`flex items-center gap-[8px] px-[24px] py-[16px] font-bold text-[14px]
                    border-b-[2px] transition-colors cursor-pointer
                    ${activeStep === 1
                            ? 'border-[#23A6F0] text-[#23A6F0]'
                            : 'border-transparent text-[#737373] hover:text-[#252B42]'
                        }`}
                >
                    <span className={`w-[28px] h-[28px] rounded-full font-bold text-[14px]
                    flex items-center justify-center
                    ${activeStep === 1 ? 'bg-[#23A6F0] text-white' : 'bg-[#BDBDBD] text-white'}`}>
                        1
                    </span>
                    Adres Bilgileri
                </button>
                <button
                    onClick={() => setActiveStep(2)}
                    className={`flex items-center gap-[8px] px-[24px] py-[16px] font-bold text-[14px]
                    border-b-[2px] transition-colors cursor-pointer
                    ${activeStep === 2
                            ? 'border-[#23A6F0] text-[#23A6F0]'
                            : 'border-transparent text-[#737373] hover:text-[#252B42]'
                        }`}
                >
                    <span className={`w-[28px] h-[28px] rounded-full font-bold text-[14px]
                    flex items-center justify-center
                    ${activeStep === 2 ? 'bg-[#23A6F0] text-white' : 'bg-[#BDBDBD] text-white'}`}>
                        2
                    </span>
                    Ödeme Seçenekleri
                </button>
            </div>

            <div className='flex flex-col [@media(min-width:1024px)]:flex-row gap-[24px] items-start'>

                <div className='flex-1 flex flex-col gap-[16px]'>

                    {activeStep === 1 && (
                        <>
                            <h2 className='font-bold text-[20px] text-[#252B42]'>Teslimat Adresi</h2>

                            {addressLoading ? (
                                <div className='flex justify-center py-[40px]'>
                                    <div className='w-[32px] h-[32px] border-[3px] border-[#23A6F0]
                                    border-t-transparent rounded-full animate-spin'></div>
                                </div>
                            ) : (
                                <div className='grid grid-cols-1 [@media(min-width:768px)]:grid-cols-2 gap-[16px]'>

                                    <button
                                        onClick={openAddAddressForm}
                                        className='flex flex-col items-center justify-center h-[120px]
                                        border-[2px] border-dashed border-[#23A6F0] rounded-[8px]
                                        text-[#23A6F0] font-bold text-[14px] gap-[8px]
                                        hover:bg-blue-50 transition-colors cursor-pointer'
                                    >
                                        <Plus size={24} />
                                        <span>Yeni Adres Ekle</span>
                                    </button>

                                    {addresses.map((addr) => (
                                        <div
                                            key={addr.id}
                                            onClick={() => setSelectedAddressId(addr.id)}
                                            className={`p-[16px] border-[2px] rounded-[8px] cursor-pointer
                                            transition-colors ${selectedAddressId === addr.id
                                                    ? 'border-[#23A6F0] bg-blue-50'
                                                    : 'border-[#ECECEC] bg-white hover:border-[#23A6F0]'}`}
                                        >
                                            <div className='flex justify-between items-start mb-[8px]'>
                                                <div className='flex items-center gap-[8px]'>
                                                    <input
                                                        type='radio'
                                                        checked={selectedAddressId === addr.id}
                                                        onChange={() => setSelectedAddressId(addr.id)}
                                                        className='accent-[#23A6F0]'
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                    <span className='font-bold text-[14px] text-[#252B42]'>{addr.title}</span>
                                                </div>
                                                <div className='flex gap-[8px]'>
                                                    <button onClick={(e) => { e.stopPropagation(); openEditAddressForm(addr); }}
                                                        className='text-[#737373] hover:text-[#23A6F0] transition-colors'>
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button onClick={(e) => { e.stopPropagation(); handleDeleteAddress(addr.id); }}
                                                        className='text-[#737373] hover:text-red-500 transition-colors'>
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className='text-[13px] text-[#737373] ml-[24px]'>
                                                {addr.name} {addr.surname} — {addr.phone}
                                            </p>
                                            <p className='text-[13px] text-[#737373] ml-[24px]'>
                                                {addr.neighborhood}, {addr.district}, {addr.city}
                                            </p>
                                            <p className='text-[13px] text-[#737373] ml-[24px]'>{addr.address}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {showAddressForm && (
                                <div className='p-[24px] border-[1px] border-[#23A6F0] rounded-[8px] bg-white mt-[8px]'>
                                    <h3 className='font-bold text-[16px] text-[#252B42] mb-[16px]'>
                                        {editingAddress ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}
                                    </h3>
                                    <form onSubmit={handleAddressSubmit(onSubmitAddress)} className='flex flex-col gap-[12px]'>
                                        <div>
                                            <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>Adres Başlığı</label>
                                            <input {...registerAddress('title', { required: 'Adres başlığı gerekli' })}
                                                placeholder='Örn: Ev, İş'
                                                className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]' />
                                            {addressErrors.title && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.title.message}</p>}
                                        </div>
                                        <div className='flex gap-[12px]'>
                                            <div className='flex-1'>
                                                <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>Ad</label>
                                                <input {...registerAddress('name', { required: 'Ad gerekli' })}
                                                    placeholder='Adınız'
                                                    className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]' />
                                                {addressErrors.name && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.name.message}</p>}
                                            </div>
                                            <div className='flex-1'>
                                                <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>Soyad</label>
                                                <input {...registerAddress('surname', { required: 'Soyad gerekli' })}
                                                    placeholder='Soyadınız'
                                                    className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]' />
                                                {addressErrors.surname && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.surname.message}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>Telefon</label>
                                            <input {...registerAddress('phone', { required: 'Telefon gerekli' })}
                                                placeholder='05xxxxxxxxx'
                                                className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]' />
                                            {addressErrors.phone && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.phone.message}</p>}
                                        </div>
                                        <div>
                                            <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>İl</label>
                                            <select {...registerAddress('city', { required: 'İl seçiniz' })}
                                                className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0] bg-white cursor-pointer'>
                                                <option value=''>İl seçiniz</option>
                                                {CITIES.map((city) => (
                                                    <option key={city} value={city.toLowerCase()}>{city}</option>
                                                ))}
                                            </select>
                                            {addressErrors.city && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.city.message}</p>}
                                        </div>
                                        <div className='flex gap-[12px]'>
                                            <div className='flex-1'>
                                                <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>İlçe</label>
                                                <input {...registerAddress('district', { required: 'İlçe gerekli' })}
                                                    placeholder='İlçe'
                                                    className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]' />
                                                {addressErrors.district && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.district.message}</p>}
                                            </div>
                                            <div className='flex-1'>
                                                <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>Mahalle</label>
                                                <input {...registerAddress('neighborhood', { required: 'Mahalle gerekli' })}
                                                    placeholder='Mahalle'
                                                    className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]' />
                                                {addressErrors.neighborhood && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.neighborhood.message}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>Adres Detayı</label>
                                            <textarea {...registerAddress('address', { required: 'Adres detayı gerekli' })}
                                                placeholder='Sokak, bina no, daire no...' rows={3}
                                                className='w-full px-[12px] py-[10px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0] resize-none' />
                                            {addressErrors.address && <p className='text-red-500 text-[12px] mt-[2px]'>{addressErrors.address.message}</p>}
                                        </div>
                                        <div className='flex gap-[12px] mt-[8px]'>
                                            <button type='button'
                                                onClick={() => { setShowAddressForm(false); setEditingAddress(null); }}
                                                className='flex-1 h-[44px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] text-[#737373] font-bold hover:bg-gray-50 cursor-pointer'>
                                                İptal
                                            </button>
                                            <button type='submit' disabled={addressSubmitting}
                                                className='flex-1 h-[44px] bg-[#23A6F0] text-white font-bold text-[14px] rounded-[5px] hover:bg-[#1a8fd1] cursor-pointer disabled:opacity-50'>
                                                {addressSubmitting ? 'Kaydediliyor...' : (editingAddress ? 'Güncelle' : 'Kaydet')}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </>
                    )}

                    {activeStep === 2 && (
                        <>
                            <h2 className='font-bold text-[20px] text-[#252B42] mb-[8px]'>Ödeme Seçenekleri</h2>
                            <p className='text-[14px] text-[#737373] mb-[16px]'>
                                Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle yapabilirsiniz.
                            </p>

                            <div className='border-[1px] border-[#ECECEC] rounded-[8px] p-[20px]'>
                                <div className='flex items-center gap-[10px] mb-[20px]'>
                                    <input type='radio' checked readOnly className='accent-[#23A6F0]' />
                                    <div>
                                        <p className='font-bold text-[16px] text-[#252B42]'>Kart ile Öde</p>
                                        <p className='text-[13px] text-[#737373]'>
                                            Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center mb-[16px]'>
                                    <h3 className='font-bold text-[16px] text-[#252B42]'>Kart Bilgileri</h3>
                                    <button
                                        onClick={openAddCardForm}
                                        className='text-[13px] text-[#23A6F0] font-bold hover:underline cursor-pointer'
                                    >
                                        + Başka bir Kart ile Ödeme Yap
                                    </button>
                                </div>

                                {cardLoading ? (
                                    <div className='flex justify-center py-[30px]'>
                                        <div className='w-[32px] h-[32px] border-[3px] border-[#23A6F0] border-t-transparent rounded-full animate-spin'></div>
                                    </div>
                                ) : (
                                    <div className='flex flex-col [@media(min-width:768px)]:flex-row gap-[24px]'>

                                        <div className='flex-1 flex flex-col gap-[12px]'>
                                            {cards.length === 0 && !showCardForm && (
                                                <p className='text-[14px] text-[#737373]'>
                                                    Kayıtlı kartınız bulunmamaktadır.
                                                </p>
                                            )}
                                            {cards.map((card) => (
                                                <div
                                                    key={card.id}
                                                    onClick={() => setSelectedCardId(card.id)}
                                                    className={`p-[16px] border-[2px] rounded-[8px] cursor-pointer transition-colors
                                                    ${selectedCardId === card.id
                                                            ? 'border-[#23A6F0] bg-blue-50'
                                                            : 'border-[#ECECEC] bg-white hover:border-[#23A6F0]'}`}
                                                >
                                                    <div className='flex justify-between items-start'>
                                                        <div className='flex items-center gap-[8px]'>
                                                            <input
                                                                type='radio'
                                                                checked={selectedCardId === card.id}
                                                                onChange={() => setSelectedCardId(card.id)}
                                                                className='accent-[#23A6F0]'
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                            <CreditCard size={20} className='text-[#737373]' />
                                                        </div>
                                                        <div className='flex gap-[8px]'>
                                                            <button onClick={(e) => { e.stopPropagation(); openEditCardForm(card); }}
                                                                className='text-[#737373] hover:text-[#23A6F0] transition-colors'>
                                                                <Edit2 size={16} />
                                                            </button>
                                                            <button onClick={(e) => { e.stopPropagation(); handleDeleteCard(card.id); }}
                                                                className='text-[#737373] hover:text-red-500 transition-colors'>
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className='font-bold text-[14px] text-[#252B42] mt-[8px] ml-[28px]'>
                                                        {maskCard(card.card_no)}
                                                    </p>
                                                    <p className='text-[13px] text-[#737373] ml-[28px]'>
                                                        {card.name_on_card} — {card.expire_month}/{card.expire_year}
                                                    </p>
                                                </div>
                                            ))}
                                            {selectedCardId && (
                                                <div className='mt-[8px]'>
                                                    <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>
                                                        CVV / CVC
                                                    </label>
                                                    <input
                                                        type='password'
                                                        value={ccv}
                                                        onChange={(e) => setCcv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                                        placeholder='•••'
                                                        maxLength={4}
                                                        className='w-[120px] h-[44px] px-[12px] border-[1px] border-[#BDBDBD]
                                                        rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0] tracking-widest'
                                                    />
                                                    <p className='text-[12px] text-[#737373] mt-[4px]'>
                                                        Kartınızın arkasındaki 3-4 haneli güvenlik kodu
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {showCardForm && (
                                            <div className='flex-1 p-[20px] border-[1px] border-[#23A6F0] rounded-[8px] bg-white'>
                                                <h4 className='font-bold text-[15px] text-[#252B42] mb-[16px]'>
                                                    {editingCard ? 'Kartı Düzenle' : 'Yeni Kart Ekle'}
                                                </h4>
                                                <form onSubmit={handleCardSubmit(onSubmitCard)} className='flex flex-col gap-[12px]'>

                                                    <div>
                                                        <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>
                                                            Kart Numarası
                                                        </label>
                                                        <input
                                                            {...registerCard('card_no', {
                                                                required: 'Kart numarası gerekli',
                                                                pattern: { value: /^\d{16}$/, message: '16 haneli kart numarası giriniz' }
                                                            })}
                                                            placeholder='1234 1234 1234 1234'
                                                            maxLength={16}
                                                            className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]'
                                                        />
                                                        {cardErrors.card_no && <p className='text-red-500 text-[12px] mt-[2px]'>{cardErrors.card_no.message}</p>}
                                                    </div>

                                                    <div>
                                                        <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>
                                                            Kart Üzerindeki İsim
                                                        </label>
                                                        <input
                                                            {...registerCard('name_on_card', { required: 'Kart ismi gerekli' })}
                                                            placeholder='Ad Soyad'
                                                            className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0]'
                                                        />
                                                        {cardErrors.name_on_card && <p className='text-red-500 text-[12px] mt-[2px]'>{cardErrors.name_on_card.message}</p>}
                                                    </div>

                                                    <div className='flex gap-[12px]'>
                                                        <div className='flex-1'>
                                                            <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>
                                                                Son Kullanma Ay
                                                            </label>
                                                            <select
                                                                {...registerCard('expire_month', { required: 'Ay seçiniz' })}
                                                                className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0] bg-white cursor-pointer'
                                                            >
                                                                <option value=''>Ay</option>
                                                                {MONTHS.map((m) => (
                                                                    <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                                                                ))}
                                                            </select>
                                                            {cardErrors.expire_month && <p className='text-red-500 text-[12px] mt-[2px]'>{cardErrors.expire_month.message}</p>}
                                                        </div>
                                                        <div className='flex-1'>
                                                            <label className='text-[13px] font-bold text-[#252B42] mb-[4px] block'>
                                                                Son Kullanma Yıl
                                                            </label>
                                                            <select
                                                                {...registerCard('expire_year', { required: 'Yıl seçiniz' })}
                                                                className='w-full h-[44px] px-[12px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] outline-none focus:border-[#23A6F0] bg-white cursor-pointer'
                                                            >
                                                                <option value=''>Yıl</option>
                                                                {YEARS.map((y) => (
                                                                    <option key={y} value={y}>{y}</option>
                                                                ))}
                                                            </select>
                                                            {cardErrors.expire_year && <p className='text-red-500 text-[12px] mt-[2px]'>{cardErrors.expire_year.message}</p>}
                                                        </div>
                                                    </div>

                                                    <div className='flex gap-[12px] mt-[8px]'>
                                                        <button type='button'
                                                            onClick={() => { setShowCardForm(false); setEditingCard(null); }}
                                                            className='flex-1 h-[44px] border-[1px] border-[#BDBDBD] rounded-[5px] text-[14px] text-[#737373] font-bold hover:bg-gray-50 cursor-pointer'>
                                                            İptal
                                                        </button>
                                                        <button type='submit' disabled={cardSubmitting}
                                                            className='flex-1 h-[44px] bg-[#23A6F0] text-white font-bold text-[14px] rounded-[5px] hover:bg-[#1a8fd1] cursor-pointer disabled:opacity-50'>
                                                            {cardSubmitting ? 'Kaydediliyor...' : (editingCard ? 'Güncelle' : 'Kaydet')}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div className='w-full [@media(min-width:1024px)]:w-[280px] flex-shrink-0'>
                    {activeStep === 1 && (
                        <OrderSummary
                            buttonLabel='Kaydet ve Devam Et'
                            buttonDisabled={!selectedAddressId}
                            onButtonClick={() => setActiveStep(2)}
                        />
                    )}
                    {activeStep === 2 && (
                        <OrderSummary
                            buttonLabel='Ödeme Yap'
                            buttonDisabled={!selectedCardId}
                            onButtonClick={handlePlaceOrder}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}

export default OrderPage;