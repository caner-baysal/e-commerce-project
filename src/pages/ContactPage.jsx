import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import bg1 from "../design/bg1.jpg";
import slide1 from "../design/shop-hero-1-product-slide-1.jpg";
import bg2 from "../design/bg2.jpg";


function ContactPage() {
    return (
        <main>
            <section class='flex w-[400px] h-[686px] [@media(min-width:1024px)]:w-[1024px]
            [@media(min-width:1024px)]:justify-center [@media(min-width:1024px)]:h-[576px]'>
                <div class='flex w-[288px] h-[686px] py-[112px] ml-[60px] gap-[96px] justify-center
                [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col [@media(min-width:1024px)]:w-[920px]
                [@media(min-width:1024px)]:h-[576px] [@media(min-width:1024px)]:items-center'>
                    <div class='flex flex-col w-[288px] h-[462px] gap-[30px] [@media(min-width:1024px)]:flex
                    [@media(min-width:1024px)]:flex-col [@media(min-width:1024px)]:w-[607px]
                    [@media(min-width:1024px)]:items-center'>
                        <h2 class='flex w-[264px] h-[250px] font-[700] text-[40px] leading-[50px] tracking-[0.2px] 
                        text-center [@media(min-width:1024px)]:w-[479px] [@media(min-width:1024px)]:h-[100px]'>
                            Get answers to all your questions.
                        </h2>
                        <h4 class='flex w-[286px] h-[120px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] 
                        text-center text-[#737373] [@media(min-width:1024px)]:w-[607px]'>
                            Problems trying to resolve the conflict between the two major realms of Classical physics: 
                        </h4>
                        <button onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)} class='flex flex-col w-[286px] 
                        h-[52px] rounded-[5px] px-[40px] py-[15px] bg-[#23A6F0]
                        items-center text-[14px] font-[700] text-[#FFFFFF]'>
                            CONTACT OUR COMPANY
                        </button>
                        <div class='flex flex-row w-[242px] h-[50px] p-[10px] ml-[25px] gap-[34px] justify-between'>
                            <Twitter />
                            <Facebook />
                            <Instagram />
                            <Linkedin   />
                        </div>
                    </div>
                </div>
            </section>
            <section style={{backgroundImage: `url(${bg1})`}} class='flex w-[400px] h-[468px] bg-[68%]
            [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:h-[446px]
            [@media(min-width:1024px)]:bg-cover'>
                <div class='flex flex-col w-[286px] h-[468px] py-[112px] ml-[60px] items-center justify-center
                [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:w-[446px]'>
                    <div class='flex flex-col w-[286px] h-[244px] gap-[30px] items-center'>
                        <h2 class='w-[286px] h-[100px] font-[700] text-[40px] leading-[50px] tracking-[0.2px] items-center
                        text-center text-[#252B42] [@media(min-width:1024px)]:w-[432px] [@media(min-width:1024px)]:h-[50px]'>
                            Questions & Answers
                        </h2>
                        <p class='flex w-[286px] h-[60px] font-[500] text-[14px] leading-[20px] tracking-[0.2px] items-center
                        text-center text-[#737373] [@media(min-width:1024px)]:w-[446px] [@media(min-width:1024px)]:h-[40px]'>
                            Problems trying to resolve the conflict between the two major realms of Classical physics: 
                        </p>
                        <h6 href='#' class='flex w-[96px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px] 
                        text-center text-[#23A6F0]'>
                            CONTACT US
                        </h6>
                    </div>
                </div>
            </section>
            <section style={{backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${slide1})`}} 
            class='w-[400px] h-[1746px] bg-cover bg-[50%] bg-no-repeat [@media(min-width:1024px)]:w-[1024px]
            [@media(min-width:1024px)]:h-[536px] [@media(min-width:1024px)]:bg-cover'>
                <div class='flex flex-col w-[393px] h-[1746px] ml-[4px] py-[112px] gap-[96px]
                [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:h-[536px]
                [@media(min-width:1024px)]:py-[0] [@media(min-width:1024px)]:ml-[80px]'>
                    <div class='flex flex-col w-[393px] ml-[3px] gap-[81px] justify-center items-center
                    [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:gap-[30px]
                    [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:h-[532px]'>
                        <div class='flex flex-col w-[367px] h-[234px] ml-[10.5px] gap-[36px] items-center
                        [@media(min-width:1024px)]:h-[234px] [@media(min-width:1024px)]:items-start'>
                            <h2 class='w-[269px] h-[50px] font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-center
                            text-[#FFFFFF] [@media(min-width:1024px)]:text-left'>
                                CONTACT US
                            </h2>
                            <p class='w-[367px] h-[60px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-center
                            text-[#FFFFFF] [@media(min-width:1024px)]:text-left'>
                                Problems trying to resolve the conflict between the two major realms of Classical physics: 
                                Newtonian mechanics 
                            </p>
                            <button onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)} class='flex flex-row 
                            w-[176px] h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0] text-[#FFFFFF] 
                            text-[14px]'>
                                CONTACT US
                            </button>
                        </div>
                        <div class='h-[533px] [@media(min-width:1024px)]:h-[533px]'>
                            <div class='flex flex-col w-[243px] h-[280px] gap-[5px] [@media(min-width:1024px)]:h-[264px]'>
                                <div class='flex flex-col w-[243px] h-[140px] rounded-[2px] p-[25px] gap-[16px]'>
                                    <h3 class='w-[61px] h-[32px] font-[700] text-[22px] leading-[32px] tracking-[0.1px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[22px]'>
                                        Paris
                                    </h3>
                                    <h4 class='w-[233px] h-[30px] font-[400] text-[18px] leading-[30px] tracking-[0.2px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[18px]'>
                                        1901 Thorn ridge Cir. 
                                    </h4>
                                    <span class='w-[58px] h-[0] border-[2px] border-[#23A6F0]'></span>
                                    <h5 class='w-[97px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        75000 Paris
                                    </h5>
                                    <h5 class='w-[162px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Phone : +451 215 215 
                                    </h5>
                                    <h5 class='w-[139px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Fax : +451 215 215
                                    </h5>
                                </div>
                            </div >
                            <div class='flex flex-col w-[243px] h-[280px] gap-[5px] [@media(min-width:1024px)]:h-[264px]'>
                                <div class='flex flex-col w-[243px] h-[140px] rounded-[2px] p-[25px] gap-[16px]'>
                                    <h3 class='w-[72px] h-[32px] font-[700] text-[22px] leading-[32px] tracking-[0.1px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[22px]'>
                                        Berlin
                                    </h3>
                                    <h4 class='w-[233px] h-[30px] font-[400] text-[18px] leading-[30px] tracking-[0.2px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[18px]'>
                                        4140 Parker Rd.  
                                    </h4>
                                    <span class='w-[58px] h-[0] border-[2px] border-[#23A6F0]'></span>
                                    <h5 class='w-[97px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        75000 Berlin
                                    </h5>
                                    <h5 class='w-[162px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Phone : +49 215 215 
                                    </h5>
                                    <h5 class='w-[139px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Fax : +49 215 215
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class='h-[533px] [@media(min-width:1024px)]:h-[533px]'>
                            <div class='flex flex-col w-[243px] h-[280px] gap-[5px] [@media(min-width:1024px)]:h-[264px]'>
                                <div class='flex flex-col w-[243px] h-[140px] rounded-[2px] p-[25px] gap-[16px]'>
                                    <h3 class='w-[100px] h-[32px] font-[700] text-[22px] leading-[32px] tracking-[0.1px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[22px]
                                    [@media(min-width:1024px)]:w-[120px]'>
                                        New York
                                    </h3>
                                    <h4 class='w-[233px] h-[30px] font-[400] text-[18px] leading-[30px] tracking-[0.2px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[18px]'>
                                        2715 Ash Dr. San Jose, 
                                    </h4>
                                    <span class='w-[58px] h-[0] border-[2px] border-[#23A6F0]'></span>
                                    <h5 class='w-[130px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        75000 New York
                                    </h5>
                                    <h5 class='w-[162px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Phone : +451 215 215 
                                    </h5>
                                    <h5 class='w-[139px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Fax : +451 215 215
                                    </h5>
                                </div>
                            </div>
                            <div class='flex flex-col w-[243px] h-[280px] gap-[5px] [@media(min-width:1024px)]:h-[264px]'>
                                <div class='flex flex-col w-[243px] h-[140px] rounded-[2px] p-[25px] gap-[16px]'>
                                    <h3 class='w-[72px] h-[32px] font-[700] text-[22px] leading-[32px] tracking-[0.1px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[22px]'>
                                        London
                                    </h3>
                                    <h4 class='w-[233px] h-[30px] font-[400] text-[18px] leading-[30px] tracking-[0.2px] 
                                    text-[#FFFFFF] [@media(min-width:1024px)]:text-[18px]'>
                                        3517 W. Gray St. Utica, 
                                    </h4>
                                    <span class='w-[58px] h-[0] border-[2px] border-[#23A6F0]'></span>
                                    <h5 class='w-[97px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        75000 London
                                    </h5>
                                    <h5 class='w-[162px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Phone : +49 215 215 
                                    </h5>
                                    <h5 class='w-[139px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.1px]
                                    text-[#ECECEC] [@media(min-width:1024px)]:text-[14px]'>
                                        Fax : +49 215 215
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class='w-[400px] h-[534px] justify-center [@media(min-width:1024px)]:w-[1024px]
            [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:h-[436px]'>
                <div class='flex w-[400px] h-[414px] bg-[#2A7CC7] mt-[60px] rounded-[2px] py-[30px] gap-[36px] justify-center 
                items-center
                [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col [@media(min-width:1024px)]:w-[656px]
                [@media(min-width:1024px)]:h-[386px] [@media(min-width:1024px)]:mt-[0] [@media(min-width:1024px)]:items-start'>
                    <div class='flex flex-col w-[272px] h-[328px] gap-[24px] items-center justify-center
                    [@media(min-width:1024px)]:ml-[80px] [@media(min-width:1024px)]:items-start
                    [@media(min-width:1024px)]:h-[238px]'>
                        <h5 class='w-[128px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.2px]
                        text-[#FFFFFF]'>
                            WORK WITH US
                        </h5 >
                            <h2 class='w-[274px] h-[100px] font-[700] text-[40px] leading-[50px] tracking-[0.2px]
                            text-center text-[#FFFFFF] [@media(min-width:1024px)]:text-left
                            [@media(min-width:1024px)]:w-[500px]'>
                            Now Let’s grow Yours
                        </h2>
                        <p class='w-[257px] h-[80px] font-[400] text-[14px] leading-[20px] tracking-[0.2px]
                        text-center text-[#FFFFFF] [@media(min-width:1024px)]:text-left
                        [@media(min-width:1024px)]:w-[400px]'>
                            The gradual accumulation of information about atomic and small-scale behavior 
                            during the first quarter of the 20th 
                        </p>
                        <button onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)} class='flex flex-col w-[130px] 
                        h-[52px] rounded-[5px] border-[1px] px-[40px] py-[15px] gap-[10px]
                        items-center text-[14px] leading-[22px] font-[700] text-[#FAFAFA]'>
                            CONTACT
                        </button>
                    </div>
                </div>
            <img src={bg2} alt="bg2" class='hidden [@media(min-width:1024px)]:block [@media(min-width:1024px)]:h-[386px] 
            [@media(min-width:1024px)]:w-[404px]'/>
            </section>
        </main>
    );
}
export default ContactPage;