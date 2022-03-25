import Link from "next/link"
import { motion } from 'framer-motion'
import Layout from "../components/Layout";
import styles from './Home.module.scss'


function Home() {
    return ( 
        
        <Layout>
            <main className={styles.main}>

                <div className={styles.content}>
                    <div className={styles.brandStatement}>
                        <h2>Aspiration</h2>
                        <p>Passionate Software Engineer and determined learner with a belief that anything can be achieved, no matter how complex. We come into this world with zero information and we learn everything despite starting with a blank slate. This is the essence of what we do – solve problems even without prior knowledge. Driven by curiosity and a love of creating solutions, eager to contribute to a collaborative development team.</p>
                    </div>

                    <div className={styles.paragraph2}>
                        <h2>Life and Passion</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi velit illo quae quidem, ipsam veritatis atque itaque repudiandae ad asperiores nam illum id excepturi ipsum dolorem iusto sunt suscipit ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iste porro ullam error perspiciatis earum labore minima veritatis incidunt repellat cum fuga dolores, possimus asperiores eum nemo laudantium hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi et molestias laudantium quidem voluptatibus, perspiciatis vitae, inventore fugit magnam vero optio atque harum quia dolorem dicta autem obcaecati maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vel libero! Dolore laborum sint perspiciatis doloribus natus a illo eaque quia. Repellat mollitia molestias dicta fugiat, id quam. Voluptatem, aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime accusamus quas laboriosam quos unde optio soluta quis, animi voluptates harum nulla facilis quisquam necessitatibus eaque quia! Earum minus ratione voluptate.</p>
                    </div>

                    <div className={styles.paragraph3}>
                        <h2>Outlook and Philosophy</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi velit illo quae quidem, ipsam veritatis atque itaque repudiandae ad asperiores nam illum id excepturi ipsum dolorem iusto sunt suscipit ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo iste porro ullam error perspiciatis earum labore minima veritatis incidunt repellat cum fuga dolores, possimus asperiores eum nemo laudantium hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi et molestias laudantium quidem voluptatibus, perspiciatis vitae, inventore fugit magnam vero optio atque harum quia dolorem dicta autem obcaecati maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vel libero! Dolore laborum sint perspiciatis doloribus natus a illo eaque quia. Repellat mollitia molestias dicta fugiat, id quam. Voluptatem, aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime accusamus quas laboriosam quos unde optio soluta quis, animi voluptates harum nulla facilis quisquam necessitatibus eaque quia! Earum minus ratione voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quasi rerum sed! Quod voluptatum at, odio animi iusto numquam ea. Culpa mollitia magnam veniam excepturi debitis, ut dolor ipsum sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi eaque laboriosam libero quisquam quasi saepe quas suscipit, dolores hic eos quod dolore optio consequuntur! Vero similique porro quo architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad magnam, temporibus perferendis culpa velit eaque quo nesciunt ipsum at voluptatem expedita? Atque, iure eaque? Cupiditate inventore dolore laudantium vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe porro culpa beatae voluptatibus rem aspernatur officiis eos officia amet possimus nesciunt et quaerat vel, sunt blanditiis eligendi ut vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ex. Dolore nulla dolor sequi, vitae reprehenderit, illo placeat laboriosam illum suscipit sunt sapiente fuga corrupti dicta vel aliquid dolorum labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor facilis fugit, excepturi deserunt quidem quasi iste voluptatem maxime praesentium repellat suscipit aut odit itaque consequuntur dicta qui adipisci modi necessitatibus.</p>
                    </div>

                </div>
                


            </main>
            
        </Layout>
     );
}

export default Home;