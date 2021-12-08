import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function useCharacters() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  return {
    error,
    loading,
    data,
  };
}

export default useCharacters;
