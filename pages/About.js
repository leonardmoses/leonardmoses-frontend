import Link from "next/link"
import { motion } from 'framer-motion'
import Layout from "../components/Layout";
import styles from './About.module.scss'


function About() {
    return ( 
        
        <Layout>
            <main className={styles.main}>

                <div className={styles.Content}>

                    <div className={styles.SubHeader}>
                        <h1>Leonard Moses</h1>
                        <div className={styles.HeadshotDiv}>
                            <img src="../static/images/Headshot.jpeg"/>
                        </div>
                    </div>

                    <div className={styles.AllParagraphs}>
                        <div className={styles.brandStatement}>
                            <h2>My Brand Statement</h2>
                            <p>Passionate Software Engineer and determined learner with a belief that anything can be achieved, no matter how complex. We come into this world with zero information and we learn everything despite starting with a blank slate. This is the essence of what we do – solve problems even without prior knowledge. Driven by curiosity and a love of creating solutions, eager to contribute to a collaborative development team.</p>
                        </div>

                        <div className={styles.paragraph2} >
                            <h2>Life | Passion | Hobbies</h2>
                            <p>Creative and problem solver—These are the words often described for me and they have been my life’s theme no matter the task. My first creative love was drawing which I began at the age of six. As a child you might have also found me sitting for hours with Legos or the Meccano Erector set building complex figures, or simply devising a contraption in the backyard using wood, rope, and rubber bands. Learning and playing musical instruments also occupied a large portion of my youth. This diverse creative play shaped my mind to eventually love software engineering today.</p>

                            <p>In school I was often the designated artist and eventually decided to take on professional skills as a graphic designer. I went to attend Avondale University in New South Whales, Australia and completed my bachelor’s degree in Visual Communications. I also attended a course in digital animation from Centennial College which helped me develop 3D-animation and 3D-Modeling skills.</p>
                            
                            <p>When I get into my art zone I am completely at peace and can calm my mind from anything.
                            To me art is freedom and expression. While my imagination cannot be seen by others, the moment I take a medium in my hands I give it form, I give it life, and I can express to others even the most abstract ideas. My traditional art mediums are paper and pencil, pastels, oil or acrylic paints, and charcoal. I also enjoy creating digital art using Photoshop and Illustrator.</p>
                            
                            <p>If art is one creative half, then the other would have to be music. From childhood to adulthood, I have learned how to play (with varying degrees) the violin, guitar, bass, piano, and drums. In high school I started a band with a few like-minded musicians where I played the guitar. In college I joined and sang in an acapella group and found myself completely in love with the intricacies of harmony. Even though acapella initially seemed complex I was soon able to break down each voice part by part to understand how they fit into the big picture of the arrangement.</p>
                            
                            <p>The skill of breaking down complex tasks into its constituent parts is one of my strengths and it is how I approach all problems, from chemistry and physics problems to general life-skills to now especially in the tech space. There have been projects I have taken on in life which at one point seemed unbearably great. However, due to my ability to calm my mind and start breaking down the problem I visualize a start, a destination, then with all those broken-down parts in place I begin to soon form a road map in my mind. From there on it only becomes a matter of time, simply focusing on each individual section, till eventually I reach the finished product.</p>
                            
                            <p>Software Engineering is my current passion. Even though I’ve only discovered it later in life I believe it is what I was meant to do. Thanks to the Full-Stack immersive course at General Assembly I was able to build powerful dev skills, not only in the programming languages themselves but also how to better think like a programmer, understand the DOM, write clean DRY code, leave useful comments, version control through GitHub, and so much more. I am so fortunate that in this field I get to use the skills I have naturally spent a lifetime to develop. Being a creative problem solver is my developer MO. I have no fear of the complexity of an app and I am very excited for what future projects I may take on!</p>
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