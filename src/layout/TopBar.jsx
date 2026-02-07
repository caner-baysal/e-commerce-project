
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function TopBar() {
    return (
        <div className="top-bar">
          <div className="flex items-center gap-[40px]">
            <span>(225) 555-0118</span>
            <span>michelle.rivera@example.com</span>
          </div>

          <div className="top-middle">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div className="top-right">
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