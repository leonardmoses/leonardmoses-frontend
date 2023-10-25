import Link from "next/link"
import { motion } from 'framer-motion'
import Layout from "../components/Layout";
import styles from "./Resume.module.scss";
import Image from 'next/image';
import ResumeImage from '../static/images/Moses_Resume_Software.png';


function Resume() {
    return ( 
        <Layout>
            <main className={styles.main}>

                <div className={styles.Content}>

                    <div className={styles.SubHeader}>
                        <h1>Resume</h1>
                        <div className={styles.downloadDiv}>
                            <h2>Updated October 2023</h2>
                            <a href="../static/images/Moses_Resume_Software.pdf" download className={styles.ResumeButton}>Download Resume</a>
                        </div>
                    </div>

                    <div className={styles.Resume}>
                        <Image src={ResumeImage} alt="Image of Resume"/>
                    </div>

                </div>

            </main>
        </Layout>
     );
}

export default Resume;