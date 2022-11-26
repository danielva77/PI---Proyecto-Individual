import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../../actions";

export default function CreateVideogame(){
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    const [input, setInput] = useState({
        name : " ",
        description : " ",
        released : " ",
        image : " ",
        rating : 0,
        platform : [], 
        genres : []
    });


    useEffect(() =>{
        dispatch(getGenre())}, []);

  
  return(
    <div>
      <Link to="/Home">
        <button>Volver</button>
      </Link>
    </div>
  )


}


