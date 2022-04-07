import Link from "next/link";
import styles from "./Footer.module.scss"

const Footer = () => {
    return ( 

        <div className={styles.FooterMain}>
            <hr/>
            <div className={styles.Links}>
                <ul>
                    <li className={styles.linkLinkedIn}><Link href="https://www.linkedin.com/in/leonard-moses/" target="#">LinkedIn</Link></li>
                    <li className={styles.linkGitHub}><Link href="https://github.com/leonardmoses" target="#2">GitHub</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;