import Link from "next/link";
import { motion } from "framer-motion"
import styles from "./Header.module.scss";

const Header = () => {
    return ( 
        <nav className={styles.nav}>
            <motion.div className={styles.logoDiv}
                whileHover={{ 
                    scale: 1.05,
                    textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    boxShadow: "0px 0px 8px rgb(255, 255, 255)"
                    
                    }}
            >
                <Link href="/"><img src="../static/images/Logo.png"/></Link>
            </motion.div>
                
                <div className={styles.links}>
                    <ul>
                        <li><Link href='/Home'>Home</Link></li>
                        <li><Link href='/Portfolio'>Portfolio</Link></li>
                        <li><Link href='Resume'>Resume</Link></li>
                    </ul>
                </div>
                <hr/>
        </nav>
     );
}
 
export default Header;