import React from "react";
import {Link} from "react-router-dom";
import Style from "./Landing.module.css" 

export default function Landing(){
	return(
		<div className={Style.loader}>
			<iframe src="https://i.giphy.com/media/gCmXckhnFdP95Oxjx5/giphy.webp" title="myFrame" width="600" height="600" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
			<div className={Style.container}>
				<h1>Bienvenido</h1>
				<p>A continuacion podras encontrar toda la informacion sobre tu juego favorito ... </p>
				<p>Vení conmigo !</p>
				<Link to="/Home">
				<button>INGRESAR 🚀⏩</button>
				</Link>
			</div>
		</div>
	)
};