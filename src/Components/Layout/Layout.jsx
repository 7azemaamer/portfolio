import React from "react";
import styles from './Layout.module.css';
import Header from "../Header/Header"
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout(){

    return <>
        <Header/>
          <div className={`container ${styles.outlet}`}>
            <Outlet></Outlet>
          </div>
          <Footer/>
    </>
}