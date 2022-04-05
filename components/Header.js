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
                <Link href="/"><Image src={Logo} alt="Image of the Logo"/></Link>
            </motion.div>
                
                <div className={styles.Links}>
                    <ul>
                        <li className={styles.linkHome}><a><Link href='/About'>About</Link></a></li>
                        <li className={styles.linkPortfolio}><a><Link href='/Portfolio'>Portfolio</Link></a></li>
                        <li className={styles.linkResume}><a><Link href='Resume'>Resume</Link></a></li>
                    </ul>
                </div>
                <hr/>
        </div>
     );
}
 
export default Header;