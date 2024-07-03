import {useState} from "react"
import styles from "./AccountSystem.module.css";

function Login({handleLogin:handleLogin, result:result}){
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return(
  <div className="box">
    <h1>Enter password</h1>
    <input type="text" placeholder="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
    <input type="text" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
    <button onClick={() => handleLogin(name, password)}>Enter</button>
    <br/>
    {result}
  </div>
  )
}

function CreateAccount({handleNewAccount:handleNewAccount}){
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userUrl, setUserUrl] = useState("");
  return(
    <div className="box">
      <h1>Create Account</h1>
      <input type="text" placeholder="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
      <input type="text" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      <input type="text" placeholder="url" value={userUrl} onChange={(e) => {setUserUrl(e.target.value)}}/>
      <button onClick={() => handleNewAccount(name, password, userUrl)}>Create Account</button>
    </div>
  )

}

function AccountSystem(){
  const [accounts, setAccounts] = useState([{name:"walter", password:"finger", url:"https://media1.tenor.com/m/nicIRWJkKIwAAAAC/walter-white-walter.gif"}]);
  const [result, setResult] = useState(null);
  function handleNewAccount(name, password, userUrl){
    // ToDo: Prevent creation of duplicate accounts
    //       Add secure password verification
    setAccounts(a=>[...a, {name:name, password:password, url:userUrl}]);
  }

  function handleLogin(name, password){
    // ToDo: Check for password
    //       Display warning when the name/password is wrong
    for (let i = 0; i < accounts.length; i++){
      if (accounts[i].name === name){
        setResult(<img className={styles.image} src={accounts[i].url}></img>);
        return;
      }
    }
    
  }
  return(
    <>
      <CreateAccount handleNewAccount={handleNewAccount}/>
      <Login handleLogin={handleLogin} result={result}/>
    </>
  )
}

export default AccountSystem