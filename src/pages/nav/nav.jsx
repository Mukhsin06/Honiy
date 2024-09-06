import React from 'react';
import { Link } from "react-router-dom";
import Logo from"../home/log.png"
function Nav(props) {
    return (
        <div className="w-auto h-auto  bottom-0 left-0 right-0">
            <div className="flex gap-14 justify-center py-4 mt-8 z-50 relative" data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="850">
                <img src={Logo} alt=""/>
                <div className={"ml-[550px]"}>
                    <Link className={"ml-[55px]   text-[18px]"}   to="/">Home</Link>
                    <Link className={"ml-[55px]   text-[18px]"}   to="/">About</Link>
                    <Link  className={"ml-[55px]  text-[18px] "}  to="/">Our Product</Link>
                    <Link  className={"ml-[55px]  text-[18px] "}  to="/">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
