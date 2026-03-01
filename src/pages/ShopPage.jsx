import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom'
import cardcover9 from "../design/cardcover9.jpg";
import cardcover8 from "../design/cardcover8.jpg";
import cardcover7 from "../design/cardcover7.jpg";
import cardcover6 from "../design/cardcover6.jpg";
import cardcover5 from "../design/cardcover5.jpg";
import productcover13 from "../design/productcover13.png";
import productcover12 from "../design/productcover12.png";
import productcover11 from "../design/productcover11.png";
import productcover10 from "../design/productcover10.png";
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
import FilterBar from '../layout/FilterBar';
import Pagination from '../layout/Pagination';
import Clients from '../layout/Clients';

function ShopPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('Popularity');
    const [filters, setFilters] = useState({});
    
    const totalPages = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSortChange = (newSort) => {
        setSortBy(newSort);
        setCurrentPage(1);
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
                            Shop
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
                                Shop
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section class='w-[400px] h-[1628px] bg-[#FAFAFA] [@media(min-width:1024px)]:h-[360px]'>
                <div class='flex flex-col w-[319px] h-[1615px] ml-[34px] py-[24px] gap-[18px]'>
                    <div class='flex flex-col w-[319px] h-[1615px] gap-[15px] [@media(min-width:1024px)]:flex
                    [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[960px] 
                    [@media(min-width:1024px)]:justify-center'>
                        <div style={{backgroundImage: `url(${cardcover5})`}} class='relative flex flex-col w-[318px] h-[300px] 
                        justify-center items-center bg-cover bg-center overflow-hidden'>
                            <div className="absolute inset-0 bg-black/50"></div>
                            <h5 class='w-[67px] h-[24px] mt-[14px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-[#FFFFFF] text-center'>
                                CLOTHS
                            </h5>
                            <h6 class='w-[54px] h-[24px] mt-[18px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                            text-[#FFFFFF] text-center'>
                                5 Items
                            </h6>
                        </div>
                        <div style={{backgroundImage: `url(${cardcover6})`}} class='relative flex flex-col w-[318px] h-[300px] 
                        justify-center items-center bg-cover bg-center overflow-hidden'>
                            <div className="absolute inset-0 bg-black/50"></div>
                            <h5 class='w-[67px] h-[24px] mt-[14px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-[#FFFFFF] text-center'>
                                CLOTHS
                            </h5>
                            <h6 class='w-[54px] h-[24px] mt-[18px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                            text-[#FFFFFF] text-center'>
                                5 Items
                            </h6>
                        </div>
                        <div style={{backgroundImage: `url(${cardcover7})`}} class='relative flex flex-col w-[318px] h-[300px] 
                        justify-center items-center bg-cover bg-center overflow-hidden'>
                            <div className="absolute inset-0 bg-black/50"></div>
                            <h5 class='w-[67px] h-[24px] mt-[14px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-[#FFFFFF] text-center'>
                                CLOTHS
                            </h5>
                            <h6 class='w-[54px] h-[24px] mt-[18px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                            text-[#FFFFFF] text-center'>
                                5 Items
                            </h6>
                        </div>
                        <div style={{backgroundImage: `url(${cardcover8})`}} class='relative flex flex-col w-[318px] h-[300px] 
                        justify-center items-center bg-cover bg-center overflow-hidden'>
                            <div className="absolute inset-0 bg-black/50"></div>
                            <h5 class='w-[67px] h-[24px] mt-[14px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-[#FFFFFF] text-center'>
                                CLOTHS
                            </h5>
                            <h6 class='w-[54px] h-[24px] mt-[18px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                            text-[#FFFFFF] text-center'>
                                5 Items
                            </h6>
                        </div>
                        <div style={{backgroundImage: `url(${cardcover9})`}} class='relative flex flex-col w-[318px] h-[300px] 
                        justify-center items-center bg-cover bg-center overflow-hidden'>
                            <div className="absolute inset-0 bg-black/50"></div>
                            <h5 class='w-[67px] h-[24px] mt-[14px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                            text-[#FFFFFF] text-center'>
                                CLOTHS
                            </h5>
                            <h6 class='w-[54px] h-[24px] mt-[18px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]
                            text-[#FFFFFF] text-center'>
                                5 Items
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <FilterBar totalResults={12} selectedSort={sortBy} onSortChange={handleSortChange} />
            </section>
            <section class='w-[400px] h-[4822px] gap-[48px] [@media(min-width:1024px)]:h-[2052px] 
            [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:gap-[20px]'>
                
                <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
                [@media(min-width:1024px)]:gap-[10px]'>
                    <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover5})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover4})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover3})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover2})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover6})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover7})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover8})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover9})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                    
                <div class='[@media(min-width:1024px)]:hidden [@media(min-width:1024px)]:flex 
                [@media(min-width:1024px)]:flex-row 
                [@media(min-width:1024px)]:gap-[10px]'>
                    <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover1})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product#" style={{backgroundImage: `url(${productcover0})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover10})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover11})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover12})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
                        <div href="/shop/product" style={{backgroundImage: `url(${productcover13})`}} class='h-[427px] w-[348px] bg-center 
                        ml-[45px] mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <h5 class='font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                            Graphic Design
                          </h5>
                          <a href='/shop/product' class='mx-auto font-bold text-[14px] leading-[24px] text-[#737373]'>
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
            <section>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            </section>
            <section class='w-[400px] h-[952px] [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:h-[120px]'>
                <Clients />
            </section>
        </main>
    )
}

export default ShopPage;