import React, { useState } from "react";
import styles from  "./Header.module.css";
import { Link , NavLink} from "react-router-dom";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  return<>
      <nav className="navbar navbar-expand-lg ">
        <div className={`${styles.bg} d-flex justify-content-md-between justify-content-center container ${styles['nav-padding']} mt-2`} id="navbarSupportedContent">
          <NavLink className={`navbar-brand fw-bolder ${styles.logo}`} to="/">
           ZICOAAMER
          </NavLink>
          <ul className="navbar-nav d-flex flex-row ps-3 mb-2 mb-lg-0">
            <li className="nav-item px-md-1 px-2">
              <NavLink className={`nav-link ${styles['nav-color']}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-md-1 px-2">
              <NavLink className={`nav-link ${styles['nav-color']}`} to={"/projects"}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item px-md-1 px-2">
              <NavLink className={`nav-link ${styles['nav-color']}`} to={"/services"}>
                Services
              </NavLink>
            </li>
            <li className="nav-item px-md-1 px-2 d-md-none d-block">
              <NavLink className={`nav-link ${styles['nav-color']}`} to={"/contact"}>
                Contact 
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav d-md-block d-none mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`btn btn-main ${styles['nav-color']}`} to={"/contact"}>
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>;
}
