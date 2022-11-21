import { Link } from 'react-router-dom';

export default function Card(props){
  return (
    <Link to={'/videogame/'+props.id}>
      <div>
        <img src={props.image} alt={props.name}></img>
        <h3>{props.name}</h3>
        <p>Released Date: {props.released}</p>
        {/* <p>Genre(s): {props.genres.map(g=>g.name).join(', ')}</p> */}
        <p>Genre(s): {props.genres}</p>
      </div>
    </Link>
  );
};
