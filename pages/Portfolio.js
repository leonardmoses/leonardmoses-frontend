import Link from "next/link"
import { motion } from 'framer-motion'


function Portfolio() {
    return ( 
        <div>
            <main>
                <h1>Portfolio</h1>

                <Link href='/'>
                    <motion.button
                        whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 8px rgb(255, 255, 255)"
                        
                        }}

                        >Splash
                    </motion.button>
                </Link>
            
            </main>


        </div>
     );
}

export default Portfolio;