import Link from "next/link";
import { motion } from "framer-motion"
import styles from "./Header.module.scss";
import Image from 'next/image';
import Logo from '../static/images/Logo.png'


const Header = () => {

    return ( 
        <div className={styles.HeaderMain}>
            <motion.div className={styles.logoDiv}
                whileHover={{ 
                    scale: 1.05,
                    textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    boxShadow: "0px 0px 8px rgb(255, 255, 255)"
                    
                    }}
            >
                <div><a href="/"><Image src={Logo} alt="Image of the Logo"/></a></div>
            </motion.div>
                
                <div className={styles.Links}>
                    <ul>
                        <li className={styles.linkHome}><Link href='/About'>About</Link></li>
                        <li className={styles.linkPortfolio}><Link href='/Portfolio'>Portfolio</Link></li>
                        <li className={styles.linkResume}><Link href='/Resume'>Resume</Link></li>
                    </ul>
                </div>
                <hr/>
        </div>
     );
}
 
export default Header;