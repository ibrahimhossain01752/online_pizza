import Image from "next/image";
import styles from "../styles/Slider.module.css";

const Slider = () => {
    // const images = [
    //     "/img/pizza.png",
    //     "/img/featured2.png",
    //     "/img/featured3.png",
    // ];
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="1000" height="1000" />
            
            {/* <Image src="/img/arrowr.png" alt=""  width="100" height="100"/> */}
            
        </div>
    );
};

export default Slider;