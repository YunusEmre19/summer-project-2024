import {useState} from "react"

function RandomPokemon(){
  const [pokeLink, setPokeLink] = useState(Math.ceil(Math.random()*151));
  function handleClick(){
    return setPokeLink(Math.ceil(Math.random()*151))
  }
  function formatLink(num){
    if (num == 152) return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nhu67oxSGwKB_J83h21EI83iqC_nyAYljA&s"
    let radical = (num<10 ? "00" : num<100 ? "0" : "")+num
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${radical}.png`
  }
  return <div className="box">
    <h1>Random Pokemon</h1>
    <img height={200} src={formatLink(pokeLink)}/>
    <button onClick={handleClick}>Random</button>
  </div>
}

export default RandomPokemon