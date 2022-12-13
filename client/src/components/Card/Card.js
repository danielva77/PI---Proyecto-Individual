import { Link } from 'react-router-dom';
import Style from "../Card/Card.module.css";

export default function Card(props){
  return (
    <Link className={Style.AddCard} to={'/videogame/'+props.id}>
      <div>
        
      <h3 className={Style.text}>{props.name}</h3>
        <div className={Style.imagen}>
          <img src={props.image} alt={props.name}></img>
        </div>
        <div className={Style.text}>

          <p>Released Date: {props.released}</p>
          {/* <p>Genre(s): {props.genres.map(g=>g.name).join(', ')}</p> */}
          <p>Genres: {props.genres}</p>
          <p>⭐ {props.rating}</p>
        </div>
      </div>
    </Link>
  );
};
