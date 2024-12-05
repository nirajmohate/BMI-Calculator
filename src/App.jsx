import { useState } from 'react'
import './App.css'


function App() {
  const [weight, setWeight] = useState(0);
  const [height , setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //main logic ---
  let CalcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    }

    else{
      let bmi = (weight / (height * height)*703)
      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMessage("your under weight")
      }
      else if (bmi >= 25 && bmi < 30){
        setMessage("your healthy person")
      }
      else{
        setMessage("your over weight")
      }
    }
  }

  // reload

  let reload = () => {
    window.location.reload()
  }
  

  return (
    <>
      <div className="app">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form action="" onSubmit={CalcBmi}>
            <div>
              <label htmlFor="" >Weight (ibs)</label>
              <input type="text" placeholder='Enter Weight Values' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <label htmlFor="">Height (in)</label>
              <input type="text" placeholder='Enter Height Values' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
              <button className="btn" type='submit'>Submit</button>
              <button className="btn btn-outline" onClick={reload} type='submit'>Reload</button>
            </div>
            <div className="center">
              <h3>Your BMI is : {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
