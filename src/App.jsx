import Login from "./Login/Login"
import ToDo from "./ToDo/ToDo"
import Timer from "./Timer/Timer"
import Stopwatch from "./Stopwatch/Stopwatch"
function App() {
  

  return (
    <body className="main-grid">
      <h1>Mini Projects</h1>
      <div className="basic-grid">
        <Timer/>
        <Login/>
        <ToDo/>
        <Stopwatch/>
      </div>
      <footer>yuyuyunu</footer>
    </body>
  )
}

export default App
