import Link from "next/link"
import { motion } from 'framer-motion'
import Layout from "../components/Layout";
import styles from "./Portfolio.module.scss"
import { useState, useEffect } from "react";

function Portfolio() {

//#region API call 
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://gaportfolio-backend.herokuapp.com/";
  // const URL = "http://localhost:4000/";

    // create state to hold projects
    const [projects, setProjects] = useState(null);
    console.log(projects)
    // create function to make api call
    const getProjectsData = async () => {
        // make the api call and get response
        const response = await fetch(URL + "projects");
    // turn response into javascript object
        const data = await response.json();
    // set the projects state to the data
        setProjects(data);
    };

    // make an intial call for the data inside a useEffect, so it only happens once a component loads.
    useEffect(() => getProjectsData(), []);
//#endregion API call


//#region loaded
    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
            return projects.map((project) => ( 
                <div className={styles.projectEach}>
                    <h3>{project.name}</h3>
                    <img src={project.image}/>
                    <div className={styles.buttons}>
                        <a className={styles.gitButton} href={project.git} target="#">GitHub</a>
                        <a className={styles.liveButton} href={project.live} target="#2">Live Site</a>
                    </div>

                </div>
            ));
    }
//#endregion loaded

    return (
        <Layout>
            <main className={styles.main}>

                <div className={styles.Content}>

                    <div className={styles.SubHeader}>
                        <h1>Projects</h1>
                        <h2>All projects listed were completed Independently</h2>
                    </div>

                    <div className={styles.projectsAll}>
                        {projects ? loaded() : <h2>loading...</h2>}
                    </div>

                </div>

            </main>
        </Layout>
    );
}

export default Portfolio;