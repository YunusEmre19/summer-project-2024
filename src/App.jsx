import ToDo from "./ToDo/ToDo"
import Timer from "./Timer/Timer"
import Stopwatch from "./Stopwatch/Stopwatch"
import AccountSystem from "./AccountSystem/AccountSystem"
function App() {
  

  return (
    <body className="main-grid">
      <h1>Mini Projects</h1>
      <div className="basic-grid">
        <AccountSystem/>
        <Timer/>
        <ToDo/>
        <Stopwatch/>
      </div>
      <footer>yuyuyunu</footer>
    </body>
  )
}

export default App
