import {useState} from "react";

function Combination(){
  const [selectedA, setSelectedA] = useState("");
  const [selectedB, setSelectedB] = useState("");
  const handleOptionA = (event) => {
    setSelectedA(event.target.value);
  };
  const handleOptionB = (event) => {
    setSelectedB(event.target.value);
  };
  
  const map = {"op1op1":"https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_640.png",
               "op1op2":"https://upload.wikimedia.org/wikipedia/tr/3/35/Charmeleon_Artwork.png",
               "op1op3":"https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png",
               "op2op1":"https://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png",
               "op2op2":"https://assets.pokemon.com/assets/cms2/img/pokedex/full//002.png",
               "op2op3":"https://assets.pokemon.com/assets/cms2/img/pokedex/full//003.png",
               "op3op1":"https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png",
               "op3op2":"https://assets.pokemon.com/assets/cms2/img/pokedex/full//008.png",
               "op3op3":"https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png",
  };

  const funky = (key) => {
    let c = <></>;
    c = <img height={120} src={map[key]}></img>
    return(c)
  }

  return(<div className="box">
    <h1>Combination</h1>
    <div>
      <h2>Type</h2>
      <label>
        <input type="radio" value="op1" checked={selectedA==="op1"} onChange={handleOptionA} />
        Epic Dragon
      </label>
      <label>
        <input type="radio" value="op2" checked={selectedA==="op2"} onChange={handleOptionA} />
        Grass
      </label>
      <label>
        <input type="radio" value="op3" checked={selectedA==="op3"} onChange={handleOptionA} />
        Turle
      </label>
    </div>
    <div>
      <h2>Evolution</h2>
      <label>
        <input type="radio" value="op1" checked={selectedB==="op1"} onChange={handleOptionB} />
        Option 1
      </label>
      <label>
        <input type="radio" value="op2" checked={selectedB==="op2"} onChange={handleOptionB} />
        Option 2
      </label>
      <label>
        <input type="radio" value="op3" checked={selectedB==="op3"} onChange={handleOptionB} />
        Option 3
      </label>
    </div>
    {funky(selectedA+selectedB)}
  </div>)
}

export default Combination