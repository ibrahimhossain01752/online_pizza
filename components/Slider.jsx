import Image from "next/image";
import styles from "../styles/Slider.module.css";

const Slider = () => {
    return (
        <div  className="hero min-h-screen  bg_orange">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png"  className="banner_img rounded-lg" />
          <div className="mb-44 mr-1">
            <h4 className="text-2xl font-bold mx-14 text-white">HOT & SPICY</h4>
            <h1 className="text-8xl font-bold text-white">PIZZA</h1>
            <hr className="font-bold w-50 m-4"/>
           <div className="my-10">
           <h1 className="mx-20 text-white text-2xl">50% OFF</h1>
            <hr className="w mx-auto"/>
            <h4 className="text-white text-2xl mx-14">ORDER NOW</h4>
            <hr/>
            <h5 className="text-white text-1xl mx-20">LAMA DEV</h5>
           </div>
           </div>
        </div>
      </div>
  
       );
};

export default Slider;