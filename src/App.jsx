import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button';
import './App.css'

function App() {
  let [message, setMessage] = useState("Just click me!");
  let [currentColor, changeCurrentColor] = useState("");
  const handleClick = () => {
    if (message==="Just click me!"){
    setMessage("U've clicked. So what?! I wanna be rectangle again!");
    changeCurrentColor("customRedYellow");
    } else (
      setMessage("Just click me!"),
      changeCurrentColor("")
    )}
  
 
  return (
    <>
      <div className='firstBlockOfButtons'>     
      <Button legend="I love AI" myColor='red'/>
      <Button myColor="yellow"/>
      <Button legend="Putin must die!" />
      <Button legend="iPhone sucks! Galaxy Only!" myColor="blue"/>
      </div>

        <div className='stateButton'>
      <button onClick={handleClick} className={currentColor}>{message}</button>
      </div>
    </>
  )
}

export default App
