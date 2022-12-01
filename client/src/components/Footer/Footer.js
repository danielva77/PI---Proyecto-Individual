import React from "react";
import {Link} from "react-router-dom";
import Styles from "./Footer.module.css"

export default function Footer(){
    return(
        <div>
        <div className={Styles.container}>
        <div className={Styles.space}><a href="https://www.linkedin.com/" target="_blank"><img className={Styles.image} src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/></a></div>
        <div className={Styles.space}><a href="https://www.github.com" target="_blank"><img className={Styles.image} src="https://cdn-icons-png.flaticon.com/512/733/733553.png" /></a></div>
        <div className={Styles.space}><a href="https://www.gmail.com/" target="_blank"><img className={Styles.image} src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/></a></div>
        </div>
        <p className={Styles.container}>Desarrollado por: Daniel</p>
        </div>
    )
};