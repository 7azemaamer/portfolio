import React, { useRef } from "react";
import styles from './Layout.module.css';
import Header from "../Header/Header"
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

  export default function Layout(){
      return <>
          <Header/>
            <div className={`container mt-5 ${styles.outlet}`}>
              <Outlet></Outlet>
            </div>
            <Footer/>
            <ScrollToTop/>
      </>
  }