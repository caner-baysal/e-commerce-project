
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail } from 'lucide-react';

function TopBar() {
    return (
        <div class='hidden [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:w-[1024px]
          [@media(min-width:1024px)]:justify-between [@media(min-width:1024px)]:items-center 
          [@media(min-width:1024px)]:bg-[#252B42] [@media(min-width:1024px)]:text-[white] 
          [@media(min-width:1024px)]:px-[40px] [@media(min-width:1024px)]:py-[10px] 
          [@media(min-width:1024px)]:text-[14px]'>
          <div class="flex items-center gap-[40px]">
            <span class='flex flex-row'><Phone class='h-[16px] pt-[2px]'/>(225) 555-0118</span>
            <span class='flex flex-row'><Mail class='h-[16px] pt-[2px]'/>michelle.rivera@example.com</span>
          </div>

          <div>
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div class='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:gap-[20px] 
          [@media(min-width:1024px)]:items-center'>
            <span>Follow Us :</span>
            <a href="www.instagram.com"><Instagram /></a>
            <a href="www.youtube.com"><Youtube /></a>
            <a href="www.facebook.com"><Facebook /></a>
            <a href="www.twitter.com"><Twitter /></a>
          </div>
        </div>
    );
}

export default TopBar;