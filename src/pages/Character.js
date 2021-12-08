import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
 
  if (error) return <div>Something went wronge</div>;
  if (loading) return <div>Loading...</div>;

  console.log({ data });
  return (
    <div className="main">
      <Link to="/" className="link">
        Back
      </Link>
      <div className="Character">
        <img
          src={data.character.image}
          alt={data.character.name}
          width={500}
          height={500}
        />
        <div className="Character-content">
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className="Character-episode">
            {data.character.episode.map((episode) => {
              return (
                <div>
                  {episode.name} - <b>{episode.episode}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
     </div>
  );
}

export default Character;
