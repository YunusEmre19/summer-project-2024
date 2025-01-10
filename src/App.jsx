import ToDo from "./modules/ToDo/ToDo"
import Timer from "./modules/Timer/Timer"
import Stopwatch from "./modules/Stopwatch/Stopwatch"
import AccountSystem from "./modules/AccountSystem/AccountSystem"
import Combination from "./modules/Combination/Combination"
import RandomPokemon from "./modules/RandomPokemon/RandomPokemon"
import Bwaa from "./modules/bwaa"
import RPG from "./modules/RPG/RPG"
import Calculator from "./modules/Calculator/Calculator"
import GnGm from "./modules/GnGm/GnGm"
import GradientTest from "./modules/GradientTest/GradientTest"
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
        <Calculator/>
        <GnGm></GnGm>
        <GradientTest></GradientTest>
      </div>
      <footer>yuyuyunu</footer>
    </body>
  )
}

export default App
