import axios from 'axios';
import React,{useState} from 'react'
import './App.css'

const App = () => {

  const [advice, setAdvice] = useState("Click on arrow icon to generate Advice");

  const getAdvice =()=>
  {
    axios.get("https://api.adviceslip.com/advice")
    .then((response)=>
    {
      setAdvice(response.data.slip.advice);
    })
    .catch((error)=>
    {
      setAdvice("Sorry,Can't display advice")
    })
  }

  return (
    <div className='app-father'>
    <div className='app'>

      <div className='icon'>
         <ion-icon name="bookmarks"></ion-icon>
      </div>

      <h2>{advice}</h2>

      <div className='icon'>
         <ion-icon name="arrow-forward-circle" onClick={getAdvice}></ion-icon>
      </div>
      </div>
      </div>
  )
}

export default App