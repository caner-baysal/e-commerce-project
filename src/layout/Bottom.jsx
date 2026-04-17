import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useHistory } from 'react-router-dom';

function Bottom() {
  const history = useHistory()
  return (
    <section class='flex flex-col w-[400px] h-[1342px] bg-[#FFFFFF] [@media(min-width:1024px)]:h-[488px]
        [@media(min-width:1024px)]:w-[1024px]'>
      <div class='w-[400px] h-[173px] bg-[#FAFAFA] [@media(min-width:1024px)]:w-[1024px]
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
      <div class='w-[400px] h-[1071px] bg-[#FFFFFF] [@media(min-width:1024px)]:w-[1024px]
        [@media(min-width:1024px)]:h-[488px] [@media(min-width:1024px)]:mt-[0] 
        [@media(min-width:1024px)]:w-full [@media(min-width:1024px)]:overflow-hidden'/*w-full overflow-hidden vercelde kontrol*/>
        <div class='flex flex-col w-[321px] h-[1071px] ml-[46px] py-[70px]'>
          <div class='flex flex-col w-[321px] h-[931px] gap-[30px] [@media(min-width:1024px)]:flex
            [@media(min-width:1024px)]:flex-row'>
            <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
              <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Company Info
              </h5>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                About Us
              </a>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Carrier
              </a>
              <a class='w-[100px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                We are hiring
              </a>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Blog
              </a>
            </div>
            <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
              <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Legal
              </h5>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Privacy
              </a>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Cookies
              </a>
              <a class='w-[100px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Disclaimers
              </a>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Terms
              </a>
            </div>
            <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
              <h5 class='w-[100px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Features
              </h5>
              <a class='w-[130px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Business Marketing
              </a>
              <a class='w-[120px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                User Analytics
              </a>
              <a class='w-[120px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Live Chat
              </a>
              <a class='w-[120px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Unlimited Support
              </a>
            </div>
            <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
              <h5 class='w-[100px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Resources
              </h5>
              <a class='w-[100px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                IOS & Android
              </a>
              <a class='w-[100px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Watch a Demo
              </a>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                Customers
              </a>
              <a class='w-[67px] h-[24px] w-[70px] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]' href='#'>
                API
              </a>
            </div>
            <div class='flex flex-col w-[148px] h-[170px] gap-[10px]'>
              <h5 class='w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]'>
                Get In Touch
              </h5>
              <div class='flex flex-row w-[321px]'>
                <input class='w-[184px] h-[58px] rounded-[5px] border-[1px] border-[#E6E6E6]
                  palceholder-gray-400 bg-[#F9F9F9]' placeholder='Your Email'></input>
                <button onClick={()=> history.push("/shop")} href="/signup" class='w-[100px] h-[58px] rounded-[5px] border-[1px] border-[#E6E6E6] bg-[#23A6F0] 
                  text-center text-[#FFFFFF]'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bottom;