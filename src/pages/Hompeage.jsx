import { useState } from "react";
import slide1 from "../design/shop-hero-1-product-slide-1.jpg";
import slide2 from "../design/shop-hero-3-product-slide-2.jpg";
import filter from "../design/filter.png";
import filter1 from "../design/filter1.png";
import filter2 from "../design/filter2.png";
import filter3 from "../design/filter3.png";
import productcover5 from "../design/productcover5.png";
import productcover4 from "../design/productcover4.png";
import productcover3 from "../design/productcover3.png";
import productcover2 from "../design/productcover2.png";
import productcover1 from "../design/productcover1.png";
import productcover0 from "../design/productcover0.png";
import productcover from "../design/productcover.png";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2];

  return (
    <main>
      <section
        className="hero"
        style={{display: isOpen ? 'none' : 'block', backgroundImage: `url(${slides[currentSlide]})`}}
      >
        <div className="hero-content">
          <p className="season">SUMMER 2020</p>
          <h1 className="collection">
            NEW COLLECTION
          </h1>
          <div className="nav-btn">
            <button className='left-btn' onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}></button>
            <button className='right-btn' onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}></button>
          </div>
          <p className="desc">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="shop-now-btn"></button>
        </div>  
      </section>
      <section class='w-[414px] h-[1850px]'>
        <div class='flex justify-center mt-[48px] flex-col items-center gap-[10px]'>
          <h3 class='text-center w-[181px] font-[Arial, Sans-serif] font-bold text-[24px] leading-[32px] tracking-[0.1px]'>EDITOR'S PICK</h3>
          <p class='text-center font-normal w-[181px] text-[14px] text-[#737373] leading-[20px] tracking-[0.2px] h-[40px]'>Problems trying to resolve the conflict between  </p>
        </div>
        <div style={{backgroundImage: `url(${filter})`}} class='h-[500px] w-[324px] bg-center ml-[45px]'>
          <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[426px] ml-[31px]'>
            <h2 class='font-bold'>MEN</h2>
          </button>
        </div>
        <div style={{backgroundImage: `url(${filter1})`}} class='h-[500px] w-[324px] bg-center ml-[45px] mt-[30px]'>
          <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[426px] ml-[31px]'>
            <h2 class='font-bold'>WOMEN</h2>
          </button>
        </div>
        <div style={{backgroundImage: `url(${filter2})`}} class='h-[242px] w-[324px] bg-center ml-[45px] mt-[30px]'>
          <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[171px] ml-[14px]'>
            <h2 class='font-bold'>ACCESSORIES</h2>
          </button>
        </div>
        <div style={{backgroundImage: `url(${filter3})`}} class='h-[242px] w-[324px] bg-center ml-[45px] mt-[16px]'>
          <button class='bg-[#FFFFFF] h-[48px] w-[170px] mt-[171px] ml-[14px]'>
            <h2 class='font-bold'>KIDS</h2>
          </button>
        </div>
      </section>
      <section class='w-[414px] h-[5510px] gap-[48px]'>
        <div class= 'flex justify-center mt-[48px] flex-col items-center gap-[10px]'>
          <h4 class='text-center w-[191px] h-[30px] font-[400px] text-[#737373] font-[Arial, Sans-serif]'>Featured Products</h4>
          <h3 class='text-center w-[181px] font-[Arial, Sans-serif] font-bold text-[24px] leading-[32px] tracking-[0.1px]'>
            BESTSELLER PRODUCTS</h3>
          <p class='text-center font-normal w-[181px] text-[14px] leading-[20px] text-[#737373] tracking-[0.2px] h-[40px]'>
            Problems trying to resolve the conflict between  </p>
        </div>
        <div>
          <div href="#" style={{backgroundImage: `url(${productcover5})`}} class='h-[427px] w-[348px] bg-center ml-[45px] mt-[16px] bg-cover'>
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
        <div>
          <div href="#" style={{backgroundImage: `url(${productcover4})`}} class='h-[427px] w-[348px] bg-center ml-[45px] mt-[16px] bg-cover'>
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
        <div>
          <div href="#" style={{backgroundImage: `url(${productcover3})`}} class='h-[427px] w-[348px] bg-center ml-[45px] mt-[16px] bg-cover'>
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
        <div>
          <div href="#" style={{backgroundImage: `url(${productcover2})`}} class='h-[427px] w-[348px] bg-center ml-[45px] mt-[16px] bg-cover'>
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
        <div>
          <div href="#" style={{backgroundImage: `url(${productcover1})`}} class='h-[427px] w-[348px] bg-center ml-[45px] mt-[16px] bg-cover'>
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
        <div>
          <div href="#" style={{backgroundImage: `url(${productcover0})`}} class='h-[427px] w-[348px] bg-center ml-[45px] mt-[16px] bg-cover'>
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
        <div>
          <div href="#" style={{backgroundImage: `url(${productcover})`}} class='h-[427px] w-[348px] bg-center ml-[45px] mt-[16px] bg-cover'>
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
      </section>
    </main>
  );
}

export default HomePage;