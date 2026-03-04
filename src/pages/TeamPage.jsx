import React from "react";
import team1 from "../design/team1.jpg";
import team2 from "../design/team2.jpg";
import team3 from "../design/team3.jpg";
import team4 from "../design/team4.jpg";
import team5 from "../design/team5.jpg";
import team6 from "../design/team6.jpg";
import team7 from "../design/team7.jpg";
import team8 from "../design/team8.jpg";

function TeamPage() {
    
    return (
        <main>
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
                <div class='flex flex-col [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row 
                [@media(min-width:1024px)]:gap-[10px]'>
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
                [@media(min-width:1024px)]:gap-[10px]'>
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
        </main>
    );
}

export default TeamPage;