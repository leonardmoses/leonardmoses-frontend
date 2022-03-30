import styles from "./Footer.module.scss"

const Footer = () => {
    return ( 

        <div className={styles.FooterMain}>
            <hr/>
            <div className={styles.Links}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/leonard-moses/" target="#">LinkedIn</a></li>
                    <li><a href="https://github.com/leonardmoses" target="#2">GitHub</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;