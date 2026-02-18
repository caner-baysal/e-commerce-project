import { useState } from "react";
import slide1 from "../design/shop-hero-1-product-slide-1.jpg";
import slide2 from "../design/shop-hero-3-product-slide-2.jpg";
import filter from "../design/filter.png";
import filter1 from "../design/filter1.png";
import filter2 from "../design/filter2.png";
import filter3 from "../design/filter3.png";
import productcover9 from "../design/productcover9.png";
import productcover8 from "../design/productcover8.png";
import productcover7 from "../design/productcover7.png";
import productcover6 from "../design/productcover6.png";
import productcover5 from "../design/productcover5.png";
import productcover4 from "../design/productcover4.png";
import productcover3 from "../design/productcover3.png";
import productcover2 from "../design/productcover2.png";
import productcover1 from "../design/productcover1.png";
import productcover0 from "../design/productcover0.png";
import productcover from "../design/productcover.png";
import next from "../design/carousel-control-next.png";
import prev from "../design/carousel-control-prev.png";
import footcover from "../design/footcover.png";
import footcover1 from "../design/footcover1.png";
import asianclothes1 from "../design/asianclothes1.png";
import unsplash from "../design/unsplash.png";
import unsplash1 from "../design/unsplash1.png";
import unsplash2 from "../design/unsplash2.png";
import { AlarmClock, ChartArea, ChevronRight, CircleFadingPlus, Facebook, Instagram, Twitter} from 'lucide-react';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2];
  const footSlides=[footcover, footcover1];
  const [footSlide, setFootSlide] = useState(0);

  return (
    <main>
      <section
        style={{display: isOpen ? 'none' : 'block', backgroundImage: `url(${slides[currentSlide]})`}}
        class='w-[400px] h-[753px] rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] items-[inline] 
        bg-cover bg-center bg-no-repeat [@media(min-width:1024px)]:w-[1024px]'>

        <div class='flex flex-col w-[400px] h-[560px] mt-[48px] pt-[48px] pb-[48px] items-center
        [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:items-start'>
          <h5 class='w-[122px] text-[16px] leading-[24px] tracking-[0.1px] text-[#FFFFFF]
          [@media(min-width:1024px)]:text-left [@media(min-width:1024px)]:ml-[96px]
          [@media(min-width:1024px)]:pl-[50px] [@media(min-width:1024px)]:w-[170px]'>
            SUMMER 2020
          </h5>
          <h2 class='w-[268px] h-[100px] text-center pt-[20px] text-[40px] leading-[50px] tracking-[0.2px] text-[#FFFFFF]
          [@media(min-width:1024px)]:pl-[100px] [@media(min-width:1024px)]:w-[548px] [@media(min-width:1024px)]:pt-[95px]'>
            NEW COLLECTION
          </h2>
          <div class='w-[90%] flex justify-between [@media(min-width:1024px)]:w-[1024px] 
          [@media(min-width:1024px)]:px-[40px]' >
            <button className='left-btn' onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}></button>
            <button className='right-btn' onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}></button>
          </div>
          <p class='w-[291px] h-[90px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-center text-[#FFFFFF] 
          pr-[5%] pl-[5%] [@media(min-width:1024px)]:text-left [@media(min-width:1024px)]:pl-[0] 
          [@media(min-width:1024px)]:ml-[96px] [@media(min-width:1024px)]:pl-[50px]
          [@media(min-width:1024px)]:w-[470px]'>
            We know how large objects will act, but things on a small scale.
          </p>
          <button class='mt-[50px] w-[185px] h-[52px] bg-[url("./design/button.png")] bg-contain bg-no-repeat 
          bg-center border-none cursor-pointer [@media(min-width:1024px)]:items-start 
          [@media(min-width:1024px)]:ml-[96px] [@media(min-width:1024px)]:ml-[150px]'>
          </button>
        </div>  
      </section>
      <section class='w-[400px] h-[1750px] [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
      [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:h-[770px]'>
        <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col'>
          <div class='flex justify-center mt-[48px] flex-col items-center gap-[10px]'>
            <h3 class='text-center w-[181px] font-[Arial, Sans-serif] font-bold text-[24px] leading-[32px] tracking-[0.1px] 
            [@media(min-width:1024px)]:text-center'>
              EDITOR'S PICK
            </h3>
            <p class='text-center font-bold w-[200px] text-[14px] text-[#737373] leading-[20px] 
            tracking-[0.2px] h-[40px] [@media(min-width:1024px)]:w-[1050px]'>
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
        <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
        [@media(min-width:1024px)]:w-[860px] [@media(min-width:1024px)]:ml-[10px]'>
          <div style={{backgroundImage: `url(${filter})`}} class='h-[500px] w-[324px] bg-center ml-[45px] mt-[30px] 
          [@media(min-width:1024px)]:h-[500px] [@media(min-width:1024px)]:w-[420px] 
          [@media(min-width:1024px)]:bg-[cover] [@media(min-width:1024px)]:ml-[10px]'>
            <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[426px] ml-[31px]'>
              <h2 class='font-bold'>MEN</h2>
            </button>
          </div>
          <div style={{backgroundImage: `url(${filter1})`}} class='h-[500px] w-[324px] bg-center ml-[45px] mt-[30px] 
          [@media(min-width:1024px)]:h-[500px] [@media(min-width:1024px)]:w-[200px]'>
            <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[426px] ml-[31px]'>
              <h2 class='font-bold'>WOMEN</h2>
            </button>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:h-[500px] [@media(min-width:1024px)]:w-[200px]
          [@media(min-width:1024px)]:ml-[10px] [@media(min-width:1024px)]:mr-[30px]'>
            <div style={{backgroundImage: `url(${filter2})`}} class='h-[242px] w-[324px] bg-center ml-[45px] mt-[30px]'>
              <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[171px] ml-[14px]'>
                <h2 class='font-bold'>ACCESSORIES</h2>
              </button>
            </div>
        
            <div style={{backgroundImage: `url(${filter3})`}} class='h-[242px] w-[324px] bg-center ml-[45px] mt-[65px]'>
              <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[171px] ml-[14px]'>
                <h2 class='font-bold'>KIDS</h2>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class='w-[400px] h-[4822px] gap-[48px] [@media(min-width:1024px)]:h-[1652px] 
      [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:gap-[20px]'>
        <div class= 'flex justify-center mt-[48px] flex-col items-center gap-[10px] [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col [@media(min-width:1024px)]:mt-[0]'>
          <h4 class='text-center w-[191px] h-[30px] font-[400px] text-[#737373] font-[Arial, Sans-serif'>
            Featured Products
          </h4>
          <h3 class='text-center w-[181px] font-[Arial, Sans-serif] font-bold text-[22px] leading-[32px] tracking-[0.1px] 
          [@media(min-width:1024px)]:w-[400px]'>
            BESTSELLER PRODUCTS
          </h3>
          <p class='text-center font-normal w-[181px] text-[14px] leading-[20px] text-[#737373] tracking-[0.2px] h-[40px] 
          [@media(min-width:1024px)]:w-[400px]'>
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
        [@media(min-width:1024px)]:gap-[10px]'>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover5})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover4})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover3})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover2})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
        </div>

        <div class='hidden [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
        [@media(min-width:1024px)]:gap-[10px]'>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover6})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover7})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover8})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover9})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
        </div>
        
        <div class='[@media(min-width:1024px)]:hidden [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
        [@media(min-width:1024px)]:gap-[10px]'>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover1})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover0})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
          [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
          [@media(min-width:1024px)]:items-center'>
            <div href="#" style={{backgroundImage: `url(${productcover})`}} class='h-[427px] w-[348px] bg-center 
            ml-[45px] mt-[16px] bg-cover'>
            </div>
            <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
              <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Graphic Design
              </h5>
              <a href='#' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
                English Department
              </a>
              <div class='flex flex-row items-center gap-[5px]'>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>$16.48</h5>
                <h5 class='font-[700] text-[16px] leading-[24px] text-[#23856D]'>$6.48</h5>
              </div>
              <div class='flex justify-center w-[82.23px] h-[16px] gap-[6.08px]'>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                <button class='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='w-[400px] h-[1300px] bg-[#23856D] gap-[35px] [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row
      [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:h-[709px] [@media(min-width:1024px)]:gap-[280px]'>
        <div class='h-[538px] mt-[48px] pt-[112px] pb-[112px] gap-[80px]'>
          <div class='flex flex-col h-[429px] gap-[35px] [@media(min-width:1024px)]:flex 
          [@media(min-width:1024px)]:pl-[20px]'>
            <h4 class='mx-auto w-[154px] h-[30px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#FFFFFF]
            [@media(min-width:1024px)]:text-left'>
              SUMMER 2020
            </h4>
            <h2 class='mx-auto w-[246px] h-[100px] font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-[#FFFFFF] 
            text-center'>
              Vita Classic Product
            </h2>
            <h4 class='mx-auto w-[251px] h-[90px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#FFFFFF] 
            text-center'>
              We know how large objects will act, but things on a small scale.
            </h4>
            <div class='mx-auto flex flex-col w-[280px] h-[104px] gap-[20px]'>
              <h3 class='mx-auto w-[77px] h-[32px] font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#FFFFFF] 
              text-center'>
                $16.48
              </h3>
              <div class='flex gap-[24px] '>
                <button style={{backgroundImage: `url(${prev})`}} class='w-[24px] h-[44.47px] bg-no-repeat bg-center' 
                  onClick={() => setFootSlide(footSlide === 0 ? 1 : 0)}></button>
                <button href="#" class='w-[181px] h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#2DC071] 
                text-[14px] text-[#FFFFFF] font-[700] '>
                  ADD TO CARD
                </button>
                <button style={{backgroundImage: `url(${next})`}} class='w-[24px] h-[44.47px] bg-no-repeat bg-center'
                  onClick={() => setFootSlide(footSlide === 0 ? 1 : 0)}></button>
              </div>
            </div>
          </div>
        </div>
        <div
          class='w-[400px] h-[681px] mt-[80px] bg-cover bg-center bg-no-repeat [@media(min-width:1024px)]:mt-[28px]
          [@media(min-width:1024px)]:w-[443px] [@media(min-width:1024px)]:h-[680px] [@media(min-width:1024px)]:bg-cover'
          style={{display: isOpen ? 'none' : 'block', backgroundImage: `url(${footSlides[footSlide]})`}}
         ></div>
      </section>
      <section class='flex flex-col h-[999px] w-[400px] mt-[120px] bg-[#FFFFFF] [@media(min-width:1024px)]:flex 
      [@media(min-width:1024px)]:flex-row-reverse [@media(min-width:1024px)]:h-[482px] 
      [@media(min-width:1024px)]:gap-[30px] [@media(min-width:1024px)]:mt-[10px]
      [@media(min-width:1024px)]:w-[1024px]'>
        <div class='flex flex-col w-[394.33px] h-[476.15px] gap-[32.78px] [@media(min-width:1024px)]:w-[400px]
        [@media(min-width:1024px)]:mr-[30px] [@media(min-width:1024px)]:h-[326px]'>
          <h5 class='mx-auto w-[122px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]
          [@media(min-width:1024px)]:ml-[50px] [@media(min-width:1024px)]:mt-[30px]'>
            SUMMER 2020
          </h5>
          <h2 class='mx-auto w-[303.48px] h-[140.5px] font-[700] text-[30px] leading-[50px] tracking-[0.2px] 
          text-[#252B42] text-center [@media(min-width:1024px)]:text-left'>
            Part of the Neural Universe
          </h2>
          <h4 class='mx-auto w-[262.27px] h-[84.3px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] 
          text-[#737373] text-center [@media(min-width:1024px)]:text-left [@media(min-width:1024px)]:w-[303.48px]'>
            We know how large objects will act, but things on a small scale.
          </h4>
          <div class='mx-auto flex flex-col w-[162px] h-[129px] gap-[25px] [@media(min-width:1024px)]:flex
          [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:gap-[10px] 
          [@media(min-width:1024px)]:w-[400px] [@media(min-width:1024px)]:mx-[50px]'>
            <button class='w-[156px] h-[52px] rounded-[5px] gap-[10px] font-[700] bg-[#23A6F0] text-[14px] 
            text-[#FFFFFF] [@media(min-width:1024px)]:bg-[#2DC071] [@media(min-width:1024px)]:p-[15px 40px]
            [@media(min-width:1024px)]:w-[150px]'>
              BUY NOW
            </button>
            <button class='w-[156px] h-[52px] rounded-[5px] border-[1px] border-[#23A6F0] gap-[10px] font-[700] 
            text-[#23A6F0] [@media(min-width:1024px)]:hidden'>
              Learn More
            </button>
            <button class='[@media(max-width:400px)]:hidden [@media(min-width:1024px)]:border-[#2DC071] [@media(min-width:1024px)]:border-[1px] 
            [@media(min-width:1024px)]:text-[#2DC071] [@media(min-width:1024px)]:p-[15px 40px] 
            [@media(min-width:1024px)]:w-[150px] [@media(min-width:1024px)]:rounded-[5px]'>
              READ MORE
            </button>
          </div>
        </div>
        <div style={{backgroundImage: `url(${asianclothes1})`}} class='flex flex-col w-[414px] h-[407px] mt-[30px] 
        bg-no-repeat [@media(min-width:1024px)]:w-[504px]'></div>
      </section>
      <section class='mx-auto flex flex-col w-[400px] h-[2302px] py-[20px] gap-[80px] bg-[#FFFFFF]
      [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:h-[944px] 
      [@media(min-width:1024px)]:mx-[10px]'>
        <div class='mx-auto flex flex-col w-[300px] h-[184px] gap-[10px] @media(min-width:1024px)]:w-[1024px]'>
          <h6 class='mx-auto w-[114px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] 
          text-center'>
            Practice Advice
          </h6>
          <h2 class='mx-auto w-[239px] h-[100px] font-[700] text-[40px] leading-[54px] tracking-[0.2px] text-[#252B42] 
          text-center'>
            Featured Products
          </h2>
          <p class='mx-auto w-[261px] h-[40px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] 
          text-center'>
            Problems trying to resolve the conflict between the two major
          </p>
        </div>
        <div class='flex flex-col w-[330px] h-[1878px] gap-[10px] mx-auto [@media(min-width:1024px)]:flex
        [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[1024px]
        [@media(min-width:1024px)]:'>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col '>
            <div style={{backgroundImage: `url(${unsplash})`}} class='flex w-[330px] h-[300px]'>
              <div class='flex flex-row w-[58px] h-[24px] mt-[20px] ml-[20px] rounded-[3px] px-[10px] bg-[#E74040]'>
                <h6 class='mx-auto font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#FFFFFF]'>NEW</h6>
              </div>
            </div>
            <div class='flex flex-col w-[330px] h-[306px] px-[25px] pt-[25px] pb-[35px] gap-[10px]'>
              <div class='flex flex-row w-[159px] h-[16px] gap-[15px]'>
                <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#8EC2F2]'>
                  Google
                </a>
                <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px]'>
                  Trending
                </a>
                <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px]'>
                  New
                </a>
              </div>
              <h4 class='w-[247px] h-[60px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p class='w-[280px] h-[60px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]'>
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div class='flex flex-row w-[280px] h-[46px] justify-between py-[15px]'>
                <date class='flex flex-row w-[110px] h-[16px] gap-[5px] text-[12px] text-[#737373] font-[500]'>
                  <AlarmClock class='h-[14px] text-[#8EC2F2]' />22 April 2021
                </date>
                <h6 class='flex flex-row w-[110px] h-[16px] gap-[5px] text-[12px] text-[#737373] font-[500]'>
                  <ChartArea class='text-[#23856D] h-[14px]' />10 Comments
                </h6>
              </div>
              <a href='#' class='flex flex-row w-[124px] h-[24px] gap-[10px] text-[14px] text-[#737373] font-bold'>
                Learn More<ChevronRight class='text-[#8EC2F2] h-[20px]' />
              </a>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col'>
            <div style={{backgroundImage: `url(${unsplash1})`}} class='flex w-[330px] h-[300px]'>
              <div class='flex flex-row w-[58px] h-[24px] mt-[20px] ml-[20px] rounded-[3px] px-[10px] bg-[#E74040]'>
                <h6 class='mx-auto font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#FFFFFF]'>NEW</h6>
              </div>
            </div>
            <div class='flex flex-col w-[330px] h-[306px] px-[25px] pt-[25px] pb-[35px] gap-[10px]'>
              <div class='flex flex-row w-[159px] h-[16px] gap-[15px]'>
                <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#8EC2F2]'>
                  Google
                </a>
                <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px]'>
                  Trending
                </a>
                <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px]'>
                  New
                </a>
              </div>
              <h4 class='w-[247px] h-[60px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p class='w-[280px] h-[60px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]'>
               We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div class='flex flex-row w-[280px] h-[46px] justify-between py-[15px]'>
                <date class='flex flex-row w-[110px] h-[16px] gap-[5px] text-[12px] text-[#737373] font-[500]'>
                  <AlarmClock class='h-[14px] text-[#8EC2F2]' />22 April 2021
                </date>
                <h6 class='flex flex-row w-[110px] h-[16px] gap-[5px] text-[12px] text-[#737373] font-[500]'>
                  <ChartArea class='text-[#23856D] h-[14px]' />10 Comments
                </h6>
              </div>
              <a href='#' class='flex flex-row w-[124px] h-[24px] gap-[10px] text-[14px] text-[#737373] font-bold'>
                Learn More<ChevronRight class='text-[#8EC2F2] h-[20px]' />
              </a>
            </div>
          </div>
          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col'>
            <div style={{backgroundImage: `url(${unsplash2})`}} class='flex w-[330px] h-[300px]'>
              <div class='flex flex-row w-[58px] h-[24px] mt-[20px] ml-[20px] rounded-[3px] px-[10px] bg-[#E74040]'>
                <h6 class='mx-auto font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#FFFFFF]'>NEW</h6>
              </div>
            </div>
            <div class='flex flex-col w-[330px] h-[306px] px-[25px] pt-[25px] pb-[35px] gap-[10px]'>
                <div class='flex flex-row w-[159px] h-[16px] gap-[15px]'>
                  <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px] text-[#8EC2F2]'>
                    Google
                  </a>
                  <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px]'>
                    Trending
                  </a>
                  <a href='#' class='w-[45px] h-[16px] font-[400] text-[12px] leading-[16px] tracking-[0.2px]'>
                    New
                  </a>
                </div>
                <h4 class='w-[247px] h-[60px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                  Loudest à la Madison #1 (L'integral)
                </h4>
                <p class='w-[280px] h-[60px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]'>
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div class='flex flex-row w-[280px] h-[46px] justify-between py-[15px]'>
                  <date class='flex flex-row w-[110px] h-[16px] gap-[5px] text-[12px] text-[#737373] font-[500]'>
                    <AlarmClock class='h-[14px] text-[#8EC2F2]' />22 April 2021
                  </date>
                  <h6 class='flex flex-row w-[110px] h-[16px] gap-[5px] text-[12px] text-[#737373] font-[500]'>
                    <ChartArea class='text-[#23856D] h-[14px]' />10 Comments
                  </h6>
                </div>
                <a href='#' class='flex flex-row w-[124px] h-[24px] gap-[10px] text-[14px] text-[#737373] font-bold'>
                  Learn More<ChevronRight class='text-[#8EC2F2] h-[20px]' />
                </a>
            </div>
          </div>
        </div>
      </section>
      <section class='flex flex-col w-[414px] h-[1342px] bg-[#FFFFFF] [@media(min-width:1024px)]:h-[488px]'>
        <div class='w-[414px] h-[173px] bg-[#FAFAFA] [@media(min-width:1024px)]:w-[1024px]
        [@media(min-width:1024px)]:h-[108px]'>
          <div class='flex flex-col w-[325px] h-[173.5px] ml-[44px] py-[40px] [@media(min-width:1024px)]:w-[1024px]
          [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:gap-[70%]'>
            <h3 class='w-[108px] h-[32px] mt-[13px] ml-[10px] font-[700] text-[24px] leading-[32px] tracking-[0.1px] 
            text-[#252B42] [@media(min-width:1024px)]:mt-[30px]'>
              Bandage
            </h3>
            <div class='flex flex-row w-[243px] h-[24px] mt-[30px] gap-[20px]'>
              <a class='w-[23px] h-[23px] ml-[0.5px] text-[#23A6F0]' href="www.facebook.com"><Facebook /></a>
              <a class='w-[24px] h-[24px] text-[#23A6F0]' href="www.instagram.com"><Instagram /></a>
              <a class='w-[24px] h-[19.76px] text-[#23A6F0]' href="www.twitter.com"><Twitter /></a>
            </div>
          </div>
        </div>
        <div class='w-[414px] h-[1071px] mt-[173px] bg-[#FFFFFF] [@media(min-width:1024px)]:w-[1024px]
        [@media(min-width:1024px)]:mt-[0]'>
          <div class='flex flex-col w-[321px] h-[1071px] ml-[46px] py-[70px]'>
            <div class='flex flex-col w-[321px] h-[931px] gap-[30px] [@media(min-width:1024px)]:flex
            [@media(min-width:1024px)]:flex-row'>
              <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
                <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                  Company Info
                </h5>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  About Us
                </a>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Carrier
                </a>
                <a class='w-[120px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  We are hiring
                </a>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Blog
                </a>
              </div>
              <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
                <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                 Legal
                </h5>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  About Us
                </a>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Carrier
                </a>
                <a class='w-[120px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  We are hiring
                </a>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Blog
                </a>
              </div>
              <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
                <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                  Features
                </h5>
                <a class='w-[140px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Business Marketing
                </a>
                <a class='w-[120px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  User Analytics
                </a>
                <a class='w-[120px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Live Chat
                </a>
                <a class='w-[120px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Unlimited Support
                </a> 
              </div>
              <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
                <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                  Resources
                </h5>
                <a class='w-[120px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  IOS & Android
                </a>
                <a class='w-[120px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Watch a Demo
                </a>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  Customers
                </a>
                <a class='w-[67px] h-[24px] w-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                  API
                </a>
              </div>
              <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
                <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                  Get In Touch
                </h5>
                <div class='flex flex-row w-[321px]'>
                  <input class='w-[204px] h-[58px] rounded-[5px] border-[1px] border-[#E6E6E6]
                  palceholder-gray-400 bg-[#F9F9F9]' placeholder='Your Email'></input>
                  <button class='w-[117px] h-[58px] rounded-[5px] border-[1px] border-[#E6E6E6] bg-[#23A6F0] 
                  text-center text-[#FFFFFF]'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;