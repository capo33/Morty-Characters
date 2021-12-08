import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
function Search() {
  const [name, setName] = useState("");
  const [getLocation, { error, loading, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );

  console.log({ error, loading, data });
  return (
    <div>
      <Link to="/" className="link">
        Back
      </Link>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocation()}>Search</button>
      {error && <div>Somthing went wronge</div>}
      {loading && <div>Loading...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
