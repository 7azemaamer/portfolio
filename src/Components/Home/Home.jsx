import React from "react";
import styles from './Home.module.css';
import Typewriter from "typewriter-effect";
import pic from "../../Assets/images/pic-ds.png";
import iam from "../../Assets/images/picme.png";

export default function Home() {
  const texts = ['Content creator', 'Front-end Developer' , 'Software Engineer'];
  
  return <>
   <div className="row mt-5 justify-content-md-start justify-content-center">

      {/* Typing effect and important links */}
      <div className="col-md-6">
        <p className="fs-3">Hello 👋,</p>
        <div className="fs-text text-sec">
            I am Hazem
            <Typewriter options={{ strings: texts, autoStart: true, loop: true }}/>
        </div>
        <p className="fs-3">I build things for web</p>
        {/* Social media accounts */}
        <ul className="list-unstyled d-flex">
            <li>
                <a className="text-sec" href="https://www.facebook.com/7azemAamer" target="_blank">
                    <i className="fa-brands fa-facebook fa-2x me-3 pointer"></i>
                </a>
            </li>
            <li>
                <a className="text-sec" href="https://www.linkedin.com/in/hazem-aamer-755906238/" target="_blank">
                    <i className="fa-brands fa-linkedin fa-2x me-3 pointer"></i>
                </a>
            </li>
            <li>
                <a className="text-sec" href="https://www.instagram.com/7azemamer/" target="_blank">
                    <i className="fa-brands fa-instagram fa-2x me-3 pointer"></i>
                </a>
            </li>
            <li>
                <a className="text-sec" href="#">
                    <i className="fa-brands fa-twitter fa-2x me-3 pointer"></i>
                </a>
            </li>
            <li>
                <a className="text-sec" href="https://www.tiktok.com/@7azemaamer" target="_blank">
                    <i className="fa-brands fa-tiktok fa-2x me-3 pointer"></i>
                </a>
            </li>
            <li>
                <a className="text-sec" href="https://www.youtube.com/channel/UC8UdyJI6aI1gtpefCisccxQ" target="_blank">
                    <i className="fa-brands fa-youtube fa-2x me-3 pointer"></i>
                </a>
            </li>
        </ul>
        <p className="mute-text">
            I am a front end developer, <br/>
            I am working as a freelancer, <br/>
            I am open for a part-time job.
        </p>
      </div>

      {/* My Photo and the spinner */}
      <div className="col-md-6">
        <div className="d-flex align-items-center justify-content-center overflow-hidden">
            <div className={`${styles.pic} text-center w-75`}>
              <img src={iam} className={`w-100 `} alt="hazem" />
              <img src={pic} className={`w-100`} alt="spinner" />
            </div>
        </div>
      </div>
    </div>
    {/* Skills Sections */}
    <div className={`${styles.skills} row mt-5 mb-5  `}>
      <div className="row">
        <div className="col text-center">
          <h2>My Skills</h2>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5">
          <div className=" d-flex justify-content-center">
            <ul className={`${styles.skillsList} mt-5`}>
              <li style={{ "--accent-color": "#380858" }}>
                <div className={`${styles.icon}`}>
                <i className="fa-brands fa-github"></i>
                </div>
                <div className={`${styles.title}`}>Github</div>
              </li>
              <li style={{ "--accent-color": "#f20071" }}>
                <div className={`${styles.icon}`}>
                    <i class="fa-brands fa-html5"></i>
                </div>
                <div className={`${styles.title}`}>HTML</div>
              </li>
              <li style={{ "--accent-color": "#FCBA35" }}>
                <div className={`${styles.icon}`}>
                    <i class="fa-brands fa-css3"></i>
                </div>
                <div className={`${styles.title}`}>Css </div>
              </li>
              <li style={{ "--accent-color": "#994D7F" }}>
                <div className={`${styles.icon}`}>
                    <i class="fa-brands fa-js"></i>
                </div>
                <div className={`${styles.title}`}>Javascript</div>
              </li>
              <li style={{ "--accent-color": "#d617b8" }}>
                <div className={`${styles.icon}`}>
                    <i class="fa-brands fa-react"></i>
                </div>
                <div className={`${styles.title}`}>ReactJS</div>
              </li>
              <li style={{ "--accent-color": "#380858" }}>
                <div className={`${styles.icon}`}>
                    <i class="fa-brands fa-bootstrap"></i>
                </div>
                <div className={`${styles.title}`}>Boostrap</div>
              </li>
              <li style={{ "--accent-color": "#f20071" }}>
                <div className={`${styles.icon}`}>
                    <i class="fa-brands fa-sass"></i>
                </div>
                <div className={`${styles.title}`}>Sass</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
}
