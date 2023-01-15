import Image from 'next/image';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
           <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="Telephone" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>013 0402 7758</div>
                </div>
           </div>
           <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listitem}>Homepage</li>
                    <li className={styles.listitem}>Products</li>
                    <li className={styles.listitem}>Menu</li>
                    <Image src="/img/logo.png" alt="" width="160" height="69"/>
                    <li className={styles.listitem}>Events</li>
                    <li className={styles.listitem}>Blog</li>
                    <li className={styles.listitem}>Contact</li>
                </ul>
           </div>
           <div className={styles.item}>
                <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" width="30" height="30"/>
                    <div className={styles.counter}>2</div>
                </div>
           </div>
           </div>
    );
};

export default Navbar;