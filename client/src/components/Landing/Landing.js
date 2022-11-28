import React from "react";
import {Link} from "react-router-dom";
import Style from "./Landing.module.css" 

export default function Landing(){
	return(
		<div className={Style.landing}>
			<div><h1>Bienvenido</h1></div>
			<Link to="/Home">
				<button>Ingresar</button>
			</Link>
		</div>
	)
};