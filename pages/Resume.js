import Link from "next/link"
import { motion } from 'framer-motion'
import Layout from "../components/Layout";
import styles from "./Resume.module.scss";


function Resume() {
    return ( 
        <Layout>
            <main className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.subheader}>
                        <h1>Resume</h1>
                        <div className={styles.downloadDiv}>
                            <h2>Updated April 2022</h2>
                            <a href="../static/images/Moses_Resume.pdf" download className={styles.downloadButton}>Download Resume</a>
                        </div>

                    </div>
                    <div className={styles.resume}>
                        <img src="../static/images/Moses_Resume.png"/>
                    </div>
                    
                </div>
            </main>
        </Layout>
     );
}

export default Resume;