import {useState} from "react"
import styles from "./AccountSystem.module.css";

function CreateAccount({handleNewAccount:handleNewAccount, result:result}){
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
      {result}
    </div>
  )
}

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

function AccountSystem(){
  const [accounts, setAccounts] = useState([{name:"walter", password:"finger", url:"https://media1.tenor.com/m/nicIRWJkKIwAAAAC/walter-white-walter.gif"}]);
  const [loginResult, setLoginResult] = useState(null);
  const [newAccResult, setNewAccResult] = useState(null);

  function handleNewAccount(name, password, userUrl){

    if(name.length < 4){
      setNewAccResult(<span>Username cannot be shorter than 4 characters</span>);
      return;
    }

    for(let i = 0; i<accounts.length; i++){
      if(accounts[i].name === name){
        setNewAccResult(<p>Username already taken</p>);
        return;
      }
    }

    if(password.length<8){
      setNewAccResult(<p>Password must be at least 8 characters</p>);
      return;
    }

    setNewAccResult(<p>Account has been created</p>);
    setAccounts(a=>[...a, {name:name, password:password, url:userUrl}]);
  }

  function handleLogin(name, password){
    for (let i = 0; i < accounts.length; i++){
      if (accounts[i].name === name){
        if(accounts[i].password === password){
          setLoginResult(<img className={styles.image} src={accounts[i].url}></img>);
        }
        else {
          setLoginResult(<p>Wrong Password</p>);
        }
        return;
      }
    } 
    setLoginResult(<p>Account not found</p>);
  }

  return(
    <>
      <CreateAccount handleNewAccount={handleNewAccount} result={newAccResult}/>
      <Login handleLogin={handleLogin} result={loginResult}/>
    </>
  )
}

export default AccountSystem