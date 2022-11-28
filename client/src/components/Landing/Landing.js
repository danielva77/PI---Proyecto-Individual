import React from "react";
import {Link} from "react-router-dom";
import Style from "./Landing.module.css" 

export default function Landing(){
	return(
		<div className={Style.Loading}>
			<div><h1>Bienvenido</h1></div>
			
			<div className={Style.div2}><Link to="/Home">
				<button className={Style.inicio}>Ingresar</button>
				</Link>
			</div>
		</div>
	)
};