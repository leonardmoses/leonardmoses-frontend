import Link from "next/link"
import { motion } from 'framer-motion'
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import react from "react";

function Portfolio() {

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

    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => ( 
            <Layout>
                <main>
                    <div className="eachProject">
                        <h1>{project.name}</h1>
                        <img src={project.image}/>
                        <a className="gitButton" href={project.git} target="#">
                            <button>GitHub</button>
                        </a>
                        <a className="liveButton" href={project.live} target="#2">
                            <button>Live Site</button>
                        </a>
                    </div>
                
                </main>
            </Layout>
         ));

    }

    return projects ? loaded() : <h1>loading...</h1>
}

export default Portfolio;