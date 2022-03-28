import Link from "next/link"
import { motion } from 'framer-motion'
import Layout from "../components/Layout";


function Resume() {
    return ( 
        <Layout>
            <div>
                <a href="../static/images/Moses_Resume.pdf" download>
                    <button>Download</button>
                </a>
                <img src="../static/images/Moses_Resume.png"/>
            </div>

        </Layout>
     );
}

export default Resume;