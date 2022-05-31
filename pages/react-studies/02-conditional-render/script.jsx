const { useEffect, useState } = React;

function statusImageVerifier(image, status) {
  if (status === 'Dead') {
    return (
      <div className="character-image-container dead">
        <img className="character-image" src={image} alt="Dead" />
      </div>
    );
  } else if (status === 'Alive') {
    return (
      <div className="character-image-container alive">
        <img className="character-image" src={image} alt="Alive" />
      </div>
    );
  } else {
    return (
      <div className="character-image-container unknown">
        <img className="character-image" src={image} alt="Unknown" />
      </div>
    );
  }
}

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <div id="loading">Loading...</div>;
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      let allChars = [];
      for (let i = 1; i < 8; i++) {
        const reponse = await fetch(
          'https://rickandmortyapi.com/api/character/?page=' + i,
        );
        const data = await reponse.json();
        allChars = allChars.concat(data.results);
      }
      setCharacters(allChars);
    })();
    setLoading(false);
  }, []);

  return (
    <div id="app">
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <ul>
          {characters.map((character) => (
            <li className="character-card" key={character.id}>
              <h2 className="character-title">{character.name}</h2>
              {statusImageVerifier(character.image, character.status)}
              <div className="character-description">
                <p>
                  <b>Status:</b>{' '}
                  {character.status === 'Dead' ? (
                    <span className="dead-text"> {character.status}</span>
                  ) : character.status === 'Alive' ? (
                    <span className="alive-text"> {character.status}</span>
                  ) : (
                    <span className="unknown-text"> {character.status}</span>
                  )}
                </p>
                <p>
                  <b>Specie:</b> <span>{character.species}</span>
                </p>
                <p>
                  <b>Gender:</b> <span>{character.gender}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
