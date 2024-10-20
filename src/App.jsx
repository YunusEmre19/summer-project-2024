import ToDo from "./ToDo/ToDo"
import Timer from "./Timer/Timer"
import Stopwatch from "./Stopwatch/Stopwatch"
import AccountSystem from "./AccountSystem/AccountSystem"
import Combination from "./Combination/Combination"
import RandomPokemon from "./RandomPokemon/RandomPokemon"
import Bwaa from "./bwaa"
import RPG from "./RPG/RPG"
function App() {
  

  return (
    <body className="main-grid">
      <h1>Mini Projects</h1>
      <div className="basic-grid">
        <AccountSystem/>
        <Timer/>
        <Stopwatch/>
        <ToDo/>
        <Combination/>
        <RandomPokemon/>
        <Bwaa/>
        <RPG/>
      </div>
      <footer>yuyuyunu</footer>
    </body>
  )
}

export default App
