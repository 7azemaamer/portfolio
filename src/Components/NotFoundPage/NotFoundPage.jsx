import React from "react";
import styles from './NotFoundPage.module.css';

export default function NotFoundPage(){

    return <div className="position-fixed top-50 start-50 translate-middle">
        <div className="row text-center">
            <h2 className="fs-0">404!</h2>
            <p className="fs-2">This page doesn't exist.</p>
        </div>
    </div>
} 