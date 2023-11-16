import React from "react";
import styles from './Projects.module.css';
import bookmarker from "../../Assets/images/Projects/bookmarker.png";
import devfolio from "../../Assets/images/Projects/devfolio.png";
import ecommerce from"../../Assets/images/Projects/ecommerce.jpg";
import noteapp from "../../Assets/images/Projects/note app  (1).jpg";
import tracker from "../../Assets/images/Projects/Personal-tracker.jpg";



export default function Projects(){
    let data = [
        {image: ecommerce , name:"E-ecommerce" , link:"https://7azemaamer.github.io/e-commerce/" , id:"ds45" },
        {image: noteapp , name:"Notes app", link:"https://7azemaamer.github.io/notes-app/" , id:"ds56" },
        {image: bookmarker , name:"Bookmarker"  , link:"https://7azemaamer.github.io/bookmarker/" , id:"ds12"},
        {image: devfolio , name:"Devfolio", link:"https://7azemaamer.github.io/devfolio/"  , id:"ds34"},
        {image: tracker , name:"Personal tracker", link:"https://7azemaamer.github.io/personal-tracker/"  , id:"dsw4"},
    ]
    return <>
        <div className="row my-5 justify-content-md-start justify-content-center g-4">
            {data.map((project) => <div className="col-md-6 col-lg-4 col-10 d-sm-flex justify-content-center" key={project.id}>
                <a href={project.link} target="_blank">
                    <div className={`${styles.cover} position-relative`}>
                        <img className="w-100" src={project.image} alt={project.name} />
                        <div  className={`${styles.overlay}`}>
                            <i className="fa-solid fa-link text-sec position-absolute top-50 start-50 translate-middle"></i>
                        </div>
                        <p className="text-center text-bold text-white">{project.name}</p>
                    </div>
                </a>
            </div>)}
        </div>
    </>
}