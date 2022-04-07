import Link from "next/link";
import { motion } from 'framer-motion';
import Layout from "../components/Layout";
import styles from './About.module.scss';
import Image from 'next/image';
import Headshot from '../static/images/Headshot.jpeg'


function About() {
    return ( 
        
        <Layout>
            <main className={styles.main}>

                <div className={styles.Content}>

                    <div className={styles.SubHeader}>
                        <h1>Leonard Moses</h1>
                        <div className={styles.HeadshotDiv}>

                                <Image src={Headshot} alt="Headshot of Leonard Moses"/>
                                <Link href="mailto:leonardsamuelmoses@gmail.com"><h4>email: leonardsamuelmoses@gmail.com</h4></Link>
                                <Link href="tel:2404928550"><h4>phone: +1(240)492-8550</h4></Link>

                            
                        </div>
                    </div>

                    <div className={styles.AllParagraphs}>
                        <div className={styles.brandStatement}>
                            <h2>My Brand Statement</h2>
                            <p>Passionate Software Engineer and determined learner with a belief that anything can be achieved, no matter how complex. We come into this world with zero information and we learn everything despite starting with a blank slate. This is the essence of what we do – solve problems even without prior knowledge. Driven by curiosity and a love of creating solutions, eager to contribute to a collaborative development team.</p>
                        </div>

                        <div className={styles.paragraph2} >
                            <h2>Life | Passion | Hobbies</h2>
                            <p>Known for creative problem solving, my first creative love was drawing at age six. As a child you might have also found me sitting for hours with Legos or the Meccano Erector set building complex figures, or simply devising a contraption in the backyard using wood, rope, and rubber bands. Learning and playing musical instruments also occupied a large portion of my youth. This diverse creative play shaped my mind to eventually love software engineering today.</p>

                            <p>Often the designated artist at school, I eventually decided to become a graphic designer. I attended Avondale University in New South Whales, Australia and completed my Bachelor’s Degree in Visual Communications. I also took a digital animation course from Centennial College, which helped me develop 3D-animation and 3D-Modeling skills.</p>
                            
                            <p>When I get into my calm art zone, I am completely at peace.
                            To me art is freedom and expression. While my imagination cannot be seen by others, the moment I take a medium in my hands I give it form, I give it life, and can express even the most abstract ideas. My traditional art mediums are paper and pencil, pastels, oil or acrylic paints, and charcoal. I also enjoy creating digital art using Photoshop and Illustrator.</p>
                            
                            <p>If art is one creative half, then the other is music. Throughout my childhood through to adulthood, I have learned how to play the violin, guitar, bass, piano, and drums. In high school I started a band with a few like-minded musicians where I played the guitar. In college I joined and sang in an acapella group and found myself completely in love with the intricacies of harmony. Even though acapella initially seemed complex, I was able to break down each voice part by part to understand how they fit into the big picture of the arrangement.</p>
                            
                            <p>The skill of breaking down complex tasks into its constituent parts is one of my strengths and it is how I approach all problems, from chemistry and physics problems to general life-skills, and now, especially, in the tech space. There have been projects I have taken on in life which at one point seemed unbearably out of reach. However, due to my ability to calm my mind and start breaking down the problem,  I visualize a starting place, a destination, and then form a roadmap. From there it becomes a matter of time, simply focusing on each step, until I complete the finished product.</p>
                            
                            <p>Software Engineering is my current passion. Even though I’ve discovered it later in life, I believe it is what I was meant to do. Thanks to the Full-Stack immersive course at General Assembly, I was able to build powerful dev skills, not only in the programming languages themselves, but also how to better think like a programmer. I can now understand the DOM, write clean DRY code, leave useful comments, version control through GitHub, and do so much more. I am so fortunate that in this field I get to use the skills I have naturally spent a lifetime developing. Being a creative problem solver is my developer MO. I have no fear of the complexity of an app and I am very excited by what future projects I may take on!</p>
                        </div>

                        <div className={styles.paragraph3}>


                        </div>
                    </div>


                </div>

            </main>
            
        </Layout>
     );
}

export default About;