import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye, ChevronLeft } from 'lucide-react';
import chair from "../design/chair.jpg";
import chair1 from "../design/chair1.jpg";
import chair2 from "../design/chair2.jpg";
import next from "../design/carousel-control-next.png";
import prev from "../design/carousel-control-prev.png";
import star from "../design/star.png";
import star1 from "../design/star1.png";
import product from "../design/product.png";
import product1 from "../design/product1.png";
import product2 from "../design/product2.png";
import product3 from "../design/product3.png";
import product4 from "../design/product4.png";
import product5 from "../design/product5.png";
import product6 from "../design/product6.png";
import Clients from '../layout/Clients';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProductById, setSelectedProduct } from "../actions/productActions";
import { addToCart } from "../actions/shoppingCartActions";


function ProductPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId, gender, categoryName, categoryId } = useParams();

    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    const productFetchState = useSelector((state) => state.product.productFetchState);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        dispatch(setSelectedProduct(null));
        if (productId) {
            dispatch(fetchProductById(productId));
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [productId, dispatch]);


    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const goToPhoto = (index) => {
        setCurrentIndex(index);
    };

    const renderStars = (rating) => {
        const full = Math.floor(rating || 0);
        const empty = 5 - full;
        return (
            <span className='text-[#F3CD03] text-[14px]'>
                {"★".repeat(full)}{"☆".repeat(empty)}
            </span>
        )
    };

    console.log("productFetchState:", productFetchState);
    console.log("selectedProduct:", selectedProduct);
    console.log("productId from params:", productId);

    if (!selectedProduct || productFetchState === "FETCHING") {
        return (
            <div className='flex justify-center items-center w-full py-[60px]'>
                <div className='w-[48px] h-[48px] border-[4px] border-[#23A6F0] border-t-transparent
                        rounded-full animate-spin'>
                </div>
            </div>
        );
    }

    const photos = selectedProduct.images?.length > 0 ? selectedProduct.images.map(img => img.url) : [product];

    if (productFetchState === "FAILED") {
        return (
            <div className='flex justify-center items-center w-full py-[60px]'>
                <p className='text-red-500 font-bold text-[16px]'>
                    Failed to load products. Please try again later.
                </p>
                <button
                    onClick={() => history.goBack()}
                    className='flex items-center gap-2 px-[16px] py-[8px] bg-[#23A6F0] text-white
                    rounded-[5px] font-bold text-[14px] cursor-pointer'
                >
                    <ChevronLeft size={16} /> Go Back
                </button>
            </div>
        )
    }

    return (
        <main>
            <section>
                <div class='flex flex-col w-[400px] h-[154px] py-[54px] bg-[#FAFAFA] gap-[30px] justify-center
                [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[1024px]
                [@media(min-width:1024px)]:h-[92px] [@media(min-width:1024px)]:gap-[10%]
                [@media(min-width:1024px)]:items-center'>
                    <button
                        onClick={() => history.goBack()}
                        className='flex items-center gap-1 px-[12px] py-[6px] bg-[#23A6F0] text-white
                        rounded-[5px] font-bold text-[14px] cursor-pointer hover:bg-[#1a8fd1] transition-colors
                        w-fit ml-[24px]'
                    >
                        <ChevronLeft size={16} /> Back
                    </button>
                    <div class='flex flex-row w-[400px] h-[44px] gap-[5px] justify-center'>
                        <div class='flex flex-row w-[117px] h-[44px] py-[10px] gap-[15px] justify-center'>
                            <Link to='/' class='w-[42px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]'>
                                Home
                            </Link>
                            <h4 class='w-[7px] h-[12px] text-[#BDBDBD]'>
                                {'>'}
                            </h4>
                            <h6 class='w-[42px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                                Shop
                            </h6>
                            <h4 class='w-[7px] h-[12px] text-[#BDBDBD]'>
                                {'>'}
                            </h4>
                            <h6 class='w-[42px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                                {selectedProduct.name}
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[400px] bg-[#FAFAFA] [@media(min-width:1024px)]:w-[1024px]'>
                <div className='flex flex-col items-center w-[348px] gap-[30px] mx-auto py-[24px]
                [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[920px]
                [@media(min-width:1024px)]:justify-center [@media(min-width:1024px)]:py-[48px]'>

                    <div className='flex flex-col w-[348px] items-center [@media(min-width:1024px)]:w-[400px]'>
                        <div className='relative w-[348px] h-[300px] [@media(min-width:1024px)]:h-[390px]'>
                            <button
                                onClick={goToPrev}
                                className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70
                                rounded-full p-1 hover:bg-white transition-colors'
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <img
                                src={photos[currentIndex]}
                                alt={selectedProduct.name}
                                className='w-full h-full object-cover'
                            />
                            <button
                                onClick={goToNext}
                                className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70
                                rounded-full p-1 hover:bg-white transition-colors'
                            >
                                <ChevronLeft size={24} className='rotate-180' />
                            </button>
                        </div>

                        <div className='flex flex-row w-[348px] h-[75px] justify-center mt-[8px] gap-[4px]'>
                            {photos.map((photo, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPhoto(index)}
                                    className={`border-2 ${currentIndex === index ? 'border-[#23A6F0]' : 'border-transparent'}`}
                                >
                                    <img src={photo} alt={`Thumbnail ${index + 1}`} className='w-[75px] h-[75px] object-cover' />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='w-[348px] [@media(min-width:1024px)]:w-[450px]'>
                        <h4 className='ml-[24px] font-[600] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            {selectedProduct.name}
                        </h4>

                        <div className='flex flex-row w-full h-[24px] mt-[12px] ml-[24px] gap-[10px] items-center'>
                            {renderStars(selectedProduct.rating)}
                            <span className='font-[700] text-[14px] leading-[24px] text-[#737373]'>
                                {selectedProduct.sell_count} Reviews
                            </span>
                        </div>

                        <h3 className='mt-[10px] ml-[24px] font-[700] text-[24px] leading-[32px] tracking-[0.1px]'>
                            ${selectedProduct.price.toFixed(2)}
                        </h3>

                        <div className='flex flex-row mt-[10px] ml-[24px] gap-[5px] items-center'>
                            <span className='font-[700] text-[14px] leading-[24px] text-[#737373]'>
                                Availability:
                            </span>
                            <span className={`font-[700] text-[14px] leading-[24px] ${selectedProduct.stock > 0 ? 'text-[#23A6F0]' : 'text-red-500'}`}>
                                {selectedProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        <p className='mt-[10px] ml-[24px] mr-[24px] font-[400] text-[14px] leading-[20px]
                        tracking-[0.2px] text-[#858585]'>
                            {selectedProduct.description}
                        </p>

                        <p className='mt-[20px] ml-[24px] mr-[24px] border-t-[1px] border-[#BDBDBD]'></p>

                        <div className='flex flex-row mt-[20px] ml-[24px] gap-[10px]'>
                            <button className='w-[30px] h-[30px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                            <button className='w-[30px] h-[30px] rounded-full bg-[#2DC071] hover:ring-2 hover:ring-black'></button>
                            <button className='w-[30px] h-[30px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                            <button className='w-[30px] h-[30px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
                        </div>

                        <div className='flex flex-row mt-[20px] ml-[24px] gap-[10px]'>
                            <button className='flex items-center justify-center w-[148px] h-[44px] rounded-[5px]
                            bg-[#23A6F0] hover:bg-[#1a8fd1] transition-colors cursor-pointer'>
                                <span className='font-[700] text-[#FFFFFF] text-[14px]'>Select Options</span>
                            </button>
                            <button className='w-[40px] h-[40px] rounded-full border-[1px] bg-[#FFFFFF] border-[#E8E8E8]
                            flex items-center justify-center hover:bg-gray-50 cursor-pointer'>
                                <Heart className='w-[20px] h-[20px]' />
                            </button>
                            <button
                                onClick={() => dispatch(addToCart(selectedProduct))}
                                className='w-[40px] h-[40px] rounded-full border-[1px] bg-[#FFFFFF] border-[#E8E8E8]
                                flex items-center justify-center hover:bg-gray-50 cursor-pointer'>
                                <ShoppingCart className='w-[20px] h-[20px]' />
                            </button>
                            <button className='w-[40px] h-[40px] rounded-full border-[1px] bg-[#FFFFFF] border-[#E8E8E8]
                            flex items-center justify-center hover:bg-gray-50 cursor-pointer'>
                                <Eye className='w-[20px] h-[20px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-[400px] bg-[#FFFFFF] items-center justify-center py-[24px]
            [@media(min-width:1024px)]:w-[1024px]'>
                <div className='flex flex-row w-[372px] h-[72px] mt-[10px] justify-center gap-[24px]
                [@media(min-width:1024px)]:w-[520px] [@media(min-width:1024px)]:justify-between'>
                    <a href="#" className='font-[600] text-[14px] leading-[24px] text-center text-[#737373]'>Description</a>
                    <a href="#" className='font-[600] text-[14px] leading-[24px] text-center text-[#737373]'>Additional Information</a>
                    <a href="#" className='font-[600] text-[14px] leading-[24px] text-center text-[#737373]'>Reviews ({selectedProduct.sell_count})</a>
                </div>
                <div className='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row
                [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:gap-[30px]'>
                    <div className='flex justify-center w-[332px] ml-[24px] [@media(min-width:1024px)]:w-[300px] [@media(min-width:1024px)]:ml-[0]'>
                        <img src={product} alt="product detail" className='w-[300px] object-cover rounded-[5px]' />
                    </div>
                    <div className='flex flex-col w-[332px] ml-[24px] py-[25px] gap-[16px]
                    [@media(min-width:1024px)]:w-[580px] [@media(min-width:1024px)]:py-[0]'>
                        <h3 className='font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]'>
                            {selectedProduct.name}
                        </h3>
                        <p className='font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]'>
                            {selectedProduct.description}
                        </p>
                        <div className='flex flex-col gap-[8px]'>
                            <span className='font-[700] text-[14px] text-[#737373]'>{'> Stock: ' + selectedProduct.stock + ' units'}</span>
                            <span className='font-[700] text-[14px] text-[#737373]'>{'> Sold: ' + selectedProduct.sell_count + ' times'}</span>
                            <span className='font-[700] text-[14px] text-[#737373]'>{'> Rating: ' + selectedProduct.rating + ' / 5'}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col mt-[10px] ml-[50px] py-[48px] gap-[24px]
            [@media(min-width:1024px)]:w-[1024px]'>
                <h3 className='font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]'>
                    BESTSELLER PRODUCTS
                </h3>
                <p className='border-t-[1px] border-[#BDBDBD] w-[920px]'></p>
                <div className='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row
                [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:gap-[26px]'>
                    {[product1, product2, product3, product4].map((img, i) => (
                        <div key={i} className='flex flex-col w-[328px] [@media(min-width:1024px)]:w-[210px]'>
                            <img src={img} alt={`bestseller-${i}`} className='w-full object-cover' />
                            <div className='flex flex-col pt-[25px] px-[25px] pb-[35px] gap-[10px]'>
                                <h5 className='font-[700] text-[16px] leading-[24px] text-[#252B42]'>Graphic Design</h5>
                                <span className='font-[700] text-[14px] leading-[24px] text-[#737373]'>English Department</span>
                                <div className='flex flex-row gap-[5px]'>
                                    <span className='font-[700] text-[16px] text-[#BDBDBD]'>$16.48</span>
                                    <span className='font-[700] text-[16px] text-[#23856D]'>$6.48</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='w-[400px] [@media(min-width:1024px)]:w-[920px]'>
                <Clients />
            </section>
        </main>
    );
}

export default ProductPage;