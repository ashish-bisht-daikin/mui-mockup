"use client";
import { images } from "@/app/constants/images";
import Image from "next/image";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyIcon from "@mui/icons-material/Key";
import Avatar from "@mui/material/Avatar";
import CustomSwitch from "../common/custom-switch";
import Link from "next/link";
import CustomButton from "../common/button";
import { BUTTON_VARIANTS } from "@/app/constants/variants";
import { useState } from "react";
import CustomMenu from "../common/custom-menu";

const Header = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [activeNav, setActiveNav] = useState(0);
  const navItems = [
    {
      title: "Dashboard",
      link: "/",
      dropdown: false,
    },
    {
      title: "Buttons",
      link: "/buttons",
      dropdown: false,
    },
    {
      title: "Energy Management",
      link: "/",
      dropdown: false,
    },
    {
      title: "Demand Schedule",
      link: "/",
      dropdown: false,
    },
    {
      title: "Administration",
      link: "/",
      dropdown: true,
      list: [
        {
          title: "Title 1",
          link: "/",
        },
      ],
    },
  ];
  return (
    <header className="h-100 border-b-2 shadow w-full">
      <div className="flex items-center justify-between py-8 px-4">
        <Link href={"/"}>
          <Image
            width={200}
            height={40}
            src={images.company_logo}
            alt="company-logo"
          />
        </Link>
        <div className="flex items-center justify-between w-1/6">
          <CustomSwitch className="cursor-pointer" {...label} />
          <div className="cursor-pointer relative">
            <NotificationsIcon />
            <span className="notification-badge"></span>
          </div>
          <KeyIcon className="cursor-pointer" />
          <Avatar
            className="cursor-pointer"
            alt="User"
            src="https://github.com/shadcn.png"
          />
        </div>
      </div>
      {/* Navbar Starts */}
      <div className="p-2">
        {navItems?.map((item, index) => (
          <>
            {!item.dropdown ? (
              <CustomButton
                key={item.title}
                content={<Link href={item.link}>{item.title}</Link>}
                handleClick={() => setActiveNav(index)}
                className={`!mr-4 !rounded-3xl h-[34px] text-[15px] !px-6 !font-bold ${
                  activeNav === index
                    ? "primary-theme-bg !text-white"
                    : "secondary-bg !text-black"
                }`}
              />
            ) : (
              <CustomMenu
                key={item.title}
                title={item.title}
                list={item.list}
              />
            )}
          </>
        ))}
      </div>
      {/* Navbar Ends */}
    </header>
  );
};

export default Header;
