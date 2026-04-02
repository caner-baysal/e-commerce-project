import React from "react";
import team1 from "../design/team1.jpg";
import team2 from "../design/team2.jpg";
import team3 from "../design/team3.jpg";
import team4 from "../design/team4.jpg";
import team5 from "../design/team5.jpg";
import team6 from "../design/team6.jpg";
import team7 from "../design/team7.jpg";
import team8 from "../design/team8.jpg";
import none from "../design/none.png";
import videoCard from "../design/videoCard.png";
import mediaCover from "../design/mediaCover.png";
import Clients from '../layout/Clients';
import { Play } from 'lucide-react';

function TeamPage() {
    
    return (
        <main>
            <section class='flex flex-col w-[400px] h-[880px] p-[80px] items-center [@media(min-width:1024px)]:flex
            [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:p-[0]
            [@media(min-width:1024px)]:ml-[50px] [@media(min-width:1024px)]:h-[621px]'>
                <div class='flex flex-col w-[400px] h-[571px] gap-[41px] items-center
                [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:mt-[150px]'>
                    <div class='flex flex-col w-[400px] h-[390px] gap-[40px] items-center
                    [@media(min-width:1024px)]:items-start [@media(min-width:1024px)]:h-[321]'>
                        <h5 class='[@media(max-width:1024px)]:hidden [@media(min-width:1024px)]:w-[149px] [@media(min-width:1024px)]:h-[24px]
                        font-[700] text-[16px] leading-[24px] tracing-[0.1px] text-[#252B42]'>
                            ABOUT COMPANY
                        </h5>
                        <h2 class='w-[213px] h-[50px] font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-center
                        text-[#252B42]'>
                            ABOUT US
                        </h2>
                        <h4 class='w-[237px] h-[120px] font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-center
                        text-[#737373] [@media(min-width:1024px)]:text-left [@media(min-width:1024px)]:w-[416px]'>
                            We know how large objects will act, but things on a small scale just do not act that way.
                        </h4>
                        <button class='w-[193px] h-[52px] rounded-[5px] px-[40px] py-[15px] gap-[10px] bg-[#23A6F0]'>
                            <btn-text class='w-[115px] h-[22px] font-[700] text-[14px] leading-[22px] tracking-[0.2px]
                            text-center text-[#FFFFFF]'>
                                Get Quote Now
                            </btn-text>
                        </button>
                    </div>
                </div>
                <img src={none} alt="none" class='w-[400px] h-[640px] bg-cover 
                [@media(min-width:1024px)]:h-[388px] [@media(min-width:1024px)]:mt-[-30px] 
                [@media(min-width:1024px)]:ml-[100px] [@media(min-width:1024px)]:h-[571px]'/>
            </section>
            <section class='w-[400px] h-[500px] bg-[#FFFFFF] items-center justify-center
            [@media(min-width:1024px)]:w-[1024px]'>
                <div class='flex flex-col w-[400px] h-[500px] py-[80px] items-center justify-center
                [@media(min-width:1024px)]:w-[1024px]'>
                    <div class='flex flex-col w-[381px] h-[340px] gap-[60px] items-center justify-center
                    [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row
                    [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:gap-[20px]'>
                        <div class='flex flex-col w-[381px] py-[24px] gap-[80px] items-center justify-center
                        [@media(min-width:1024px)]:w-[390px] [@media(min-width:1024px)]:items-start'>
                            <p class='w-[116px] h-[20px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] 
                            text-[#E74040] text-center [@media(min-width:1024px)]:text-left'>
                                Problems trying
                            </p>
                            <h3 class='w-[269px] h-[128px] font-[700] text-[24px] leading-[32px] tracking-[0.1px] 
                            text-[#252B42] text-center [@media(min-width:1024px)]:w-[390px]
                            [@media(min-width:1024px)]:text-left'>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            </h3>
                        </div>
                        <p class='w-[353px] h-[60px] font-[400] text-[14px] leading-[20px] tracking-[0.2px] 
                            text-[#737373] text-left [@media(min-width:1024px)]:w-[480px]
                            [@media(min-width:1024px)]:h-[20px]'>
                            Problems trying to resolve the conflict between the two major realms of Classical physics: 
                            Newtonian mechanics
                        </p>
                    </div>
                </div>
            </section>
            <section class='flex flex-col w-[400px] h-[1000px] bg-[#FFFFFF] py-[100px] gap-[100px] items-center 
            justify-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row
            [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:h-[15px]
            [@media(min-width:1024px)]:gap-[20px] [@media(min-width:1024px)]:py-[50px]
            [@media(min-width:1024px)]:pl-[52px]'>
                <div class='flex flex-col w-[238px] h-[104px] items-center justify-center'>
                    <h1 class='w-[100px] h-[80px] font-[700] text-[58px] leading-[80px] tracking-[0.2px] 
                    text-[#252B42] text-center'>
                        15K
                    </h1>
                    <h5 class='w-[146px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                    text-[#737373] text-center'>
                        Happy Customers
                    </h5>
                </div><div class='flex flex-col w-[238px] h-[104px] items-center justify-center'>
                    <h1 class='w-[150px] h-[80px] font-[700] text-[58px] leading-[80px] tracking-[0.2px] 
                    text-[#252B42] text-center'>
                        150K
                    </h1>
                    <h5 class='w-[146px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                    text-[#737373] text-center'>
                        Monthly Visits
                    </h5>
                </div>
                <div class='flex flex-col w-[238px] h-[104px] items-center justify-center'>
                    <h1 class='w-[100px] h-[80px] font-[700] text-[58px] leading-[80px] tracking-[0.2px] 
                    text-[#252B42] text-center'>
                        15
                    </h1>
                    <h5 class='w-[146px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                    text-[#737373] text-center'>
                        Countries Worldwide
                    </h5>
                </div>
                <div class='flex flex-col w-[238px] h-[104px] items-center justify-center'>
                    <h1 class='w-[150px] h-[80px] font-[700] text-[58px] leading-[80px] tracking-[0.2px] 
                    text-[#252B42] text-center'>
                        100+
                    </h1>
                    <h5 class='w-[146px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] 
                    text-[#737373] text-center'>
                        Partners
                    </h5>
                </div>
            </section>
            <section class='flex w-[400px] h-[477px] bg-[#FFFFFF] items-center justify-center
            [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:h-[560px]
            [@media(min-width:1024px)]:relative'>
                <img src={videoCard} alt="videoCard" class='[@media(min-width:1024px)]:hidden'/>
                <img src={mediaCover} alt="videoCard" class='[@media(max-width:414px)]:hidden
                [@media(min-width:1024px)]:w-[880px] [@media(min-width:1024px)]:h-[440px]
                [@media(min-width:1024px)]:rounded-[20px] [@media(min-width:1024px)]:mr-[50px]
                [@media(min-width:1024px)]:block'/>
                <button class='[@media(max-width:414px)]:hidden [@media(min-width:1024px)]:w-[70px]
                [@media(min-width:1024px)]:h-[70px] [@media(min-width:1024px)]:bg-[#23A6F0]
                [@media(min-width:1024px)]:rounded-[70px] [@media(min-width:1024px)]:absolute
                [@media(min-width:1024px)]:top-3/7 [@media(min-width:1024px)]:left-4/9
                [@media(min-width:1024px)]:flex
                [@media(min-width:1024px)]:items-center [@media(min-width:1024px)]:justify-center'>
                    <Play class='text-[#FFFFFF]'/>
                </button>
            </section>
            <section class='flex flex-col w-[400px] h-[5622px] gap-[48px] items-center 
            [@media(min-width:1024px)]:h-[1352px] [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:gap-[0]'>
                <div class= 'flex flex-col justify-center w-[310px] h-[190px] mt-[48px] flex-col items-center gap-[10px] [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col [@media(min-width:1024px)]:mt-[0]'>
                    <h3 class='text-center w-[181px] font-[Arial, Sans-serif] font-bold text-[22px] leading-[32px] tracking-[0.1px] 
                    [@media(min-width:1024px)]:w-[400px]'>
                        Meet Our Team
                    </h3>
                    <p class='text-center font-normal w-[289px] text-[14px] leading-[20px] text-[#737373] tracking-[0.2px] h-[40px] 
                    [@media(min-width:1024px)]:w-[400px]'>
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>
                <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
                [@media(min-width:1024px)]:h-[605px] [@media(min-width:1024px)]:gap-[10px]'>
                    <div class='flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team1})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[167px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Jessica Bell
                           </h4>
                           <a href='#' class='font-bold w-[72px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            IBM
                           </a>
                          </div>
                        </div>
                    </div>
                    <div class='flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team2})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[197px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Brooklyn Simmons
                           </h4>
                           <a href='#' class='font-bold w-[72px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            eBay
                           </a>
                          </div>
                        </div>
                    </div>
                    <div class=' flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team3})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[167px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Ronda Richards
                           </h4>
                           <a href='#' class='font-bold w-[72px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            Starbucks
                           </a>
                          </div>
                        </div>
                    </div>
                    <div class='flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team4})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[167px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Floyd Miles
                           </h4>
                           <a href='#' class='font-bold w-[72px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            Facebook
                           </a>
                          </div>
                        </div>
                    </div>
                </div>
            
                <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
                [@media(min-width:1024px)]:h-[555px] [@media(min-width:1024px)]:gap-[10px]'>
                    <div class='flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team5})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[167px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Jane Cooper
                           </h4>
                           <a href='#' class='font-bold w-[72px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            Mitsubishi
                           </a>
                          </div>
                        </div>
                    </div>
                    <div class='flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team6})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[167px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Lesley Alexander
                           </h4>
                           <a href='#' class='font-bold w-[192px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            The Walt Disnet Company
                           </a>
                          </div>
                        </div>
                    </div>
                    <div class='flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team7})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[167px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Roberta Fox
                           </h4>
                           <a href='#' class='font-bold w-[72px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            Netflix
                           </a>
                          </div>
                        </div>
                    </div>
                    <div class='flex flex-col items-center [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-col 
                    [@media(min-width:1024px)]:w-[238px] [@media(min-width:1024px)]:h-[705px] 
                    [@media(min-width:1024px)]:items-center'>
                        <div href="#" style={{backgroundImage: `url(${team8})`}} class='h-[427px] w-[238px] bg-center 
                        mt-[16px] bg-cover [@media(min-width:1024px)]:w-[238px]'>
                        </div>
                        <div class='flex flex-col items-center w-[348px] h-[188px] mt-[25px] mx-[25px] mb-[35px] gap-[10px]'>
                          <div class='flex flex-col w-[238px] h-[188px] mx-[25px] mb-[35px] gap-[10px]'>
                           <h4 class='font-[400] w-[167px] h-[30px] text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42]'>
                            Justine Jones
                           </h4>
                           <a href='#' class='font-bold w-[72px] h-[20px] text-[14px] leading-[20px] tracking-[0.2px] 
                          text-[#737373]'>
                            Twitter
                           </a>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class='flex flex-col w-[400px] h-[240px] gap-[30px] items-center justify-center
            [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:w-[120px]'>
                <h2 class='w-[287px] h-[150px] font-[700] text-[40px] leading-[50px] tracking-[0.2px] text-center 
                text-[#252B42] [@media(min-width:1024px)]:w-[496px] [@media(min-width:1024px)]:h-[50px]'>
                    Big Companies Are Here
                </h2>
                <p class='w-[288px] h-[60px] font-[4000] text-[14px] leading-[20px] tracking-[0.2px] text-center 
                text-[#737373] [@media(min-width:1024px)]:w-[370px] [@media(min-width:1024px)]:h-[40px]'>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </section>
            <section class='w-[400px] h-[952px] [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:h-[120px]'>
                <Clients />
            </section>
        </main>
    );
}

export default TeamPage;