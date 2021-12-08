import React from "react";
import { Link } from "react-router-dom";
import "./CharacterList.css";
import useCharacters from "../hooks/useCharacters";

function CharactersList() {
  
const { error, loading, data } = useCharacters( );

if (error) return <div> something went wronge</div>;
if (loading) return <div>Loading...</div>;

  
console.log({error,loading, data});
  return (
    <div>
      <Link className="link" to="/search">
        Search for character
      </Link>
             <div className="CharacterList">
        {data.characters.results.map((character) => {
          return (
            <div>
              <Link to={`/${character.id}`}>
                <img src={character.image} alt="" />
                <h2>{character.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
     
      </div>
   );
}

export default CharactersList;
