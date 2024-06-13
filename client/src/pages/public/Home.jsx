import React from "react";
import BannerImg from "../../assets/banner.png";

const Home = () => {
    return (
        <div className="bg-white w-full">
            <div className="w-full h-fit">
                <img
                    src={BannerImg}
                    alt="banner"
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Home;
