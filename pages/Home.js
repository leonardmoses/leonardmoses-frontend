import Link from "next/link"
import { motion } from 'framer-motion'


function Home() {
    return ( 
        <div>
            <h1>Home</h1>

            <Link href='/'>
            <motion.button
                whileHover={{ 
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)"
                
                }}

                >Home
            </motion.button>
        </Link>
        </div>
     );
}

export default Home;