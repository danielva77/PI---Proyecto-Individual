import { Link } from 'react-router-dom';
import Style from "../Card/Card.module.css";

export default function Card(props){
  return (
    <Link to={'/videogame/'+props.id}>
      <div>
        <div className={Style.imagen}>
        <img src={props.image} alt={props.name}></img>
        </div>
        <div className={Style.text}>
        <h3>{props.name}</h3>
        <p>Released Date: {props.released}</p>
        {/* <p>Genre(s): {props.genres.map(g=>g.name).join(', ')}</p> */}
        <p>Genre(s): {props.genres}</p>
        </div>
      </div>
    </Link>
  );
};
