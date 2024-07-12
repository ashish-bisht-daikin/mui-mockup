import { images } from "@/app/constants/images";
import Image from "next/image";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="p-10 flex flex-col gap-4 bg-[#39454A]">
      <div className="flex justify-between items-center">
        <Image
          width={200}
          height={40}
          src={images.company_logo_grey}
          alt="company logo"
        />
        <div className="flex justify-between items-center">
          <FaInstagram className="text-2xl mr-2 text-gray-600" />
          <TiSocialFacebookCircular className="text-2xl mr-2 text-gray-600" />
          <TiSocialLinkedinCircular className="text-2xl mr-2 text-gray-600" />
          <FaYoutube className="text-2xl mr-2 text-gray-600" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-400 font-semibold text-[15px]">
          daikin-domain-goes-here.com <br />© 2022 Daikin
        </span>
        <div className="w-1/3 flex justify-between">
          <span className="font-semibold primary-theme-text cursor-pointer">
            Release Notes
          </span>
          <span className="font-semibold primary-theme-text cursor-pointer">
            Privacy Policy
          </span>
          <span className="font-semibold primary-theme-text cursor-pointer">
            Terms of Use
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
