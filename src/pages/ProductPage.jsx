import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
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
import Clients from '../layout/Clients';

const photos = [chair, chair1, chair2];

function ProductPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === photos.length -1 ? 0 : prev + 1));
    };

    const goToPhoto = (index) => {
        setCurrentIndex(index);
    };

    return (
        <main>
            <section>
                <div class='flex flex-col w-[400px] h-[154px] py-[24px] bg-[#FAFAFA] gap-[30px] justify-center
                [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[1024px]
                [@media(min-width:1024px)]:h-[92px] [@media(min-width:1024px)]:gap-[70%]
                [@media(min-width:1024px)]:items-center'>
                    <div class='flex w-[400px] h-[80px] py-[24px] justify-center'>
                        <h3 class='w-[63px] h-[32px] font-[700] text-[24px] text-[#252B42] leading-[32px] 
                        tracking-[0.2px] text-center'>
                            Product
                        </h3>
                    </div>
                    <div class='flex flex-row w-[400px] h-[44px] gap-[5px] justify-center'>
                        <div class='flex flex-row w-[117px] h-[44px] py-[10px] gap-[15px]'>
                            <Link to='/' class='w-[42px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]'>
                                Home
                            </Link>
                            <h4 class='w-[7px] h-[12px] text-[#BDBDBD]'>
                                {'>'}
                            </h4>
                            <h6 class='w-[42px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                                Product
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section class='w-[400px] h-[850px] bg-[#FAFAFA]'>
                <div class='flex flex-col items-center w-[348px] h-[895px] gap-[30px] mx-auto'>
                    <div class='flex flex-col w-[348px] h-[394px] items-center'>
                        <div class='flex flex-col w-[348px] h-[277px]'>
                            <div class='flex flex-row w-[348px] h-[277px] mx-[24px] justify-center relative'>
                                <button style={{backgroundImage: `url(${prev})`}} class='w-[24px] h-[44.47px] 
                                bg-no-repeat absolute left-0 top-1/2 -translate-y-1/2' onClick={goToPrev}>
                                </button>
                                <img src={photos[currentIndex]} alt={`Product ${currentIndex + 1}`}
                                class='w-[348px] h-[277px] bg-center bg-cover bg-no-repeat'/>
                                <button style={{backgroundImage: `url(${next})`}} class='w-[24px] h-[44.47px] 
                                bg-no-repeat absolute right-0 top-1/2 -translate-y-1/2' onClick={goToNext}>
                                </button>
                            </div>

                            <div class='flex flex-row w-[348px] h-[75px] justify-center'>
                                {photos.map((photo, index) =>(
                                    <button key={index} onClick={() => goToPhoto(index)} >
                                        <img src={photo} alt={`Thumbnail ${index + 1}`} class='w-[100px] h-[75px] bg-cover'/>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class='w-[348px] h-[471px]'>
                        <h4 class='w-[162px] h-[30px] ml-[24px] font-[550] text-[20px] leading-[30px] 
                        tracking-[0.2px] text-[#252B42]'>
                            Floating Phone
                        </h4>
                        <div class='flex flex-row w-[222px] h-[24px] mt-[12px] ml-[24px] gap-[20px]'>
                            <span class='flex flex-row w-[130px] h-[22px] gap-[2px]'>
                                <img src={star} alt="star" class='w-[22px] h-[22px]'/>
                                <img src={star} alt="star" class='w-[22px] h-[22px]'/>
                                <img src={star} alt="star" class='w-[22px] h-[22px]'/>
                                <img src={star} alt="star" class='w-[22px] h-[22px]'/>
                                <img src={star1} alt="star1" class='w-[22px] h-[22px]'/>
                            </span>
                            <h6 class='w-[81px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] 
                            text-[#737373] text-[Montserrat]'>
                                10 Reviews
                            </h6>
                        </div>
                        <h3 class='w-[108px] h-[32px] mt-[10px] ml-[24px] font-[700] text-[24px] leading-[32px]
                        tracking-[0.1px]'>
                            $1,139.33
                        </h3>
                        <div class='flex flex-row w-[159px] h-[24px] mt-[10px] ml-[24px] gap-[5px]'>
                            <h6 class='w-[94px] w-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                            text-[#737373]'>
                                Availability  :
                            </h6>
                            <h6 class='w-[60px] w-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                            text-[#23A6F0]'>
                                In Stock
                            </h6>
                        </div>
                        <p class='w-[250px] h-[100px] mt-[10px] ml-[24px] font-[400] text-[14px] leading-[20px] 
                        tracking-[0.2px] text-[#858585]'>
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent 
                            door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p class='w-[283px] h-[0] mt-[20px] ml-[29px] border-[1px] border-[#BDBDBD]'></p>
                        <div class='flex flex-row justify-center w-[150px] h-[30px] mt-[20px] ml-[24px] gap-[10px]'>
                            <button class='w-[30px] h-[30px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                            <button class='w-[30px] h-[30px] rounded-full bg-[#2DC071] hover:ring-2 hover:ring-black'></button>
                            <button class='w-[30px] h-[30px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                            <button class='w-[30px] h-[30px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
                        </div>
                        <div class='flex flex-row w-[298px] h-[44px] mt-[20px] ml-[24px] gap-[10px]'>
                            <button class='flex flex-col w-[148px] h-[44px] rounded-[5px] px-[10px] py-[20px] gap-[10px]
                            bg-[#23A6F0] justify-center'>
                                <h6 class='font-[700] text-[#FFFFFF] text-[14px] '>Select Options</h6>
                            </button>
                            <button class='w-[40px] h-[40px] rounded-[44.79px] border-[1px] bg-[#FFFFFF] border-[#E8E8E8]'>
                                <Heart class='w-[20px] h-[20px] ml-[9px]' />
                            </button>
                            <button class='w-[40px] h-[40px] rounded-[44.79px] border-[1px] bg-[#FFFFFF] border-[#E8E8E8]'>
                                <ShoppingCart class='w-[20px] h-[20px] ml-[9px]' />
                            </button>
                            <button class='w-[40px] h-[40px] rounded-[44.79px] border-[1px] bg-[#FFFFFF] border-[#E8E8E8]'>
                                <Eye class='w-[20px] h-[20px] ml-[9px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class='flex flex-col w-[400] h-[1306px] bg-[#FFFFFF] items-center justify-center'>
                <div class='flex flex-row w-[372px] h-[72px] mt-[10px] ml-[20px] justify-center'>
                    <a href="#" class='w-[86px] h-[24px] font-[600] text-[14px] leading-[24px] tracking-[0.2px]
                    text-center text-[#737373]'>Description</a>
                    <a href="#" class='w-[172px] h-[24px] font-[600] text-[14px] leading-[24px] tracking-[0.2px]
                    text-center text-[#737373]'>Additional Information</a>
                    <a href="#" class='w-[62px] h-[24px] font-[600] text-[14px] leading-[24px] tracking-[0.2px]
                    text-center text-[#737373]'>Reviews(0)</a>
                </div>
                <div class='flex flex-row w-[332px] h-[300px] ml-[24px] gap-[30px]'>
                    <div class='w-[325px] h-[282px] rounded-[5.62px] bg-[#C4C4C4] ml-[24px]'>
                        <img src={product} alt="product" class='w-[310px] h-[271px] ml-[-5px]'/>
                    </div>
                </div>
                <div class='flex flex-col w-[332px] h-[452px] ml-[24px] gap-[30px] py-[25px]'>
                    <h3 class='w-[304px] h-[32px] font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]'>
                        the quick fox jumps over 
                    </h3>
                    <p class='w-[332px] h-[100px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                        RELIT official consequent door ENIM RELIT Mollie. 
                        Excitation venial consequent sent nostrum met.
                    </p>
                    <p class='w-[332px] h-[100px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                        RELIT official consequent door ENIM RELIT Mollie. 
                        Excitation venial consequent sent nostrum met.
                    </p>
                    <p class='w-[332px] h-[100px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                        RELIT official consequent door ENIM RELIT Mollie. 
                        Excitation venial consequent sent nostrum met.
                    </p>
                </div>
                <div class='flex flex-col w-[332px] h-[367px] ml-[24px] gap-[30px] py-[25px]'>
                    <div class='flex flex-col h-[188px] gap-[20px]'>
                        <h3 class='w-[304px] h-[32px] font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]'>
                            the quick fox jumps over 
                        </h3>
                        <h6 class='w-[274px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                            {'>     the quick fox jumps over the lazy dog'}
                        </h6>
                        <h6 class='w-[274px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                            {'>     the quick fox jumps over the lazy dog'}
                        </h6>
                        <h6 class='w-[274px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                            {'>     the quick fox jumps over the lazy dog'}
                        </h6>
                        <h6 class='w-[274px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                            {'>     the quick fox jumps over the lazy dog'}
                        </h6>
                    </div>
                    <div class='flex flex-col h-[188px] gap-[20px]'>
                        <h3 class='w-[304px] h-[32px] font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]'>
                            the quick fox jumps over 
                        </h3>
                        <h6 class='w-[274px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                            {'>     the quick fox jumps over the lazy dog'}
                        </h6>
                        <h6 class='w-[274px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                            {'>     the quick fox jumps over the lazy dog'}
                        </h6>
                        <h6 class='w-[274px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>
                            {'>     the quick fox jumps over the lazy dog'}
                        </h6>
                    </div>
                </div>
            </section>
            <section class='flex flex-col w-[331px] h-[2622px] mt-[10px] ml-[50px] py-[48px] gap-[24px]'>
                <h3 class='w-[324px] h-[32px] font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]
                text-center'>
                    BESTSELLER PRODUCTS
                </h3>
                <p class='w-[331px] h-[0] mt-[20px] border-[1px] border-[#BDBDBD]'></p>
                <div class='flex flex-col w-[328px] h-[589px]'>
                    <img src={product1} alt="product1" />
                    <div class='flex flex-col w-[348px] h-[162px] pt-[25px] px-[25px] pb-[35px] gap-[10px]'>
                        <h5 class='w-[131px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px]
                        text-[#252B42]'>
                            Graphic Design
                        </h5>
                        <Link class='w-[146px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                        text-[#737373]'>
                            English Department
                        </Link>
                        <div class='flex flex-row w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]'>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#BDBDBD]'>
                                $16.48
                            </h5>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#23856D]'>
                                $6.48
                            </h5>
                        </div>
                    </div>
                </div>
                <div class='flex flex-col w-[328px] h-[589px]'>
                    <img src={product2} alt="product1" />
                    <div class='flex flex-col w-[348px] h-[162px] pt-[25px] px-[25px] pb-[35px] gap-[10px]'>
                        <h5 class='w-[131px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px]
                        text-[#252B42]'>
                            Graphic Design
                        </h5>
                        <Link class='w-[146px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                        text-[#737373]'>
                            English Department
                        </Link>
                        <div class='flex flex-row w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]'>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#BDBDBD]'>
                                $16.48
                            </h5>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#23856D]'>
                                $6.48
                            </h5>
                        </div>
                    </div>
                </div>
                <div class='flex flex-col w-[328px] h-[589px]'>
                    <img src={product3} alt="product1" />
                    <div class='flex flex-col w-[348px] h-[162px] pt-[25px] px-[25px] pb-[35px] gap-[10px]'>
                        <h5 class='w-[131px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px]
                        text-[#252B42]'>
                            Graphic Design
                        </h5>
                        <Link class='w-[146px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                        text-[#737373]'>
                            English Department
                        </Link>
                        <div class='flex flex-row w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]'>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#BDBDBD]'>
                                $16.48
                            </h5>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#23856D]'>
                                $6.48
                            </h5>
                        </div>
                    </div>
                </div>
                <div class='flex flex-col w-[328px] h-[589px]'>
                    <img src={product4} alt="product1" />
                    <div class='flex flex-col w-[348px] h-[162px] pt-[25px] px-[25px] pb-[35px] gap-[10px]'>
                        <h5 class='w-[131px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px]
                        text-[#252B42]'>
                            Graphic Design
                        </h5>
                        <Link class='w-[146px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                        text-[#737373]'>
                            English Department
                        </Link>
                        <div class='flex flex-row w-[108px] h-[34px] py-[5px] px-[3px] gap-[5px]'>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#BDBDBD]'>
                                $16.48
                            </h5>
                            <h5 class='w-[52px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-center text-[#23856D]'>
                                $6.48
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <section class='w-[400px] h-[952px] [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:h-[120px]'>
                <Clients />
            </section>
        </main>
    );
}

export default ProductPage;