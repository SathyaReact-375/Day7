import React, { useState } from 'react';

function App() {
  function Task() {
    const [state,setState]=useState("")
    const [state2,setState2]=useState('')
    const [state3,setState3]=useState('')
    const [state4,setState4]=useState("")
    const [namestate,setName]=useState("")
    const [Change,setChange]=useState('')
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const [formData, setFormData] = useState("");
    const [Para,setPara]=useState(!true)
    const [Mouse,onMouseHOver]=useState("")
    const [keyboard,setKeyboard]=useState('')
    const [Button,setButton]=useState(false)
    const [count,setCount]=useState(0)
    const [sub,setSub]=useState("")
    const [getsub,getsetSub]=useState('')
    const handler=()=>{
      setState2('function is called')
    }
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault(); 
      alert(`Submitted Data: ${formData}`); 
    };
  
    const handleChange = (event) => {
      setFormData(event.target.value); 
    };
  
    return (
      <> 
        <div style={{textAlign:'center'}}> 
        <h1>Task1</h1>
        <h2>Event Handling in React</h2>
        <p>
          Event handling in React is similar to handling events in regular HTML, 
          but instead of using strings, React uses JavaScript functions as event handlers. 
          Events in React are written in camelCase (e.g., <code>onClick</code>).
        </p>
        </div>
        <div style={{textAlign:'center'}}>
          <h1>Task2</h1>
        <p>{state}</p>
        <button onClick={()=>setState("Button is clicked")}>click me</button>
        </div>
        <div style={{textAlign:'center'}}>
        <h1>Task3</h1>
        <p>{state2}</p>
        <button onClick={handler}>click me</button>
        </div>
        <div style={{textAlign:'center'}}>
        <h1>Task4</h1>
        <p>{state3}</p>
        <button onClick={()=>setState3("this is line function executions")}>click me</button>
        </div>
        <div style={{textAlign:'center'}}>
        <h1>Task5</h1>
        <p>Age:{state4.age}</p>
        <p>Name:{state4.name}</p>
        <button onClick={()=>{
          setState4({
            name: "Sathya",
            age: 21
          })
        }}>click me</button>
        </div>
        <div style={{textAlign:'center'}}>
        <h1>Task6</h1>
        <p>Hello:{namestate}</p>
        <button onClick={()=>{
          setName("john")
        }}>click me</button>
        </div>
        <div style={{textAlign:'center'}}>
        <h1>Task7</h1>
        <input onChange={(e)=>{
          setChange(e.target.value)
        }}></input>
        <p>Current value of input:{Change}</p>
        </div>
        <div style={{textAlign:'center'}}>
          <h1>Task8</h1>
        <input
            type="text"
            value={inputValue} 
            onChange={handleInputChange} 
          />
          <button onClick={()=>{
            setSubmittedValue(inputValue)
          }}>submit</button>
           <p>{submittedValue}</p> 
        </div> 
        <div style={{textAlign:"center"}}>
          <h1>Task9</h1>
        <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Enter something:</label>
      <input
        id="inputField"
        type="text"
        value={formData}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <button type="submit">Submit</button>
    </form>
</div> 
<div style={{textAlign:"center"}}>
  <h1>Task10</h1>
  {Para?(<p>This is para</p>):""}
  <button onClick={()=>{
    setPara(!Para)
  }}>show/hide</button>
  </div> 
  <div style={{textAlign:"center"}}>
  <h1>Task11</h1>
  <p>{Mouse}</p>
  <button onMouseOver={()=>{
    onMouseHOver("Mouse Over")
  }}>Mouse over</button>
  </div>
  <div style={{textAlign:"center"}}>
  <h1>Task12</h1>
  <input onKeyPress={(e)=>{
    setKeyboard("key is pressed")
  }} ></input>
  <p>{keyboard}</p>
  </div>
  <div style={{textAlign:"center"}}>
    <h1>Task13</h1>
<button onClick={()=>{
  setButton(!Button)
}} disabled={Button}>disable</button>
  </div>
  <div style={{textAlign:"center"}}>
  <h1>MiniProject1</h1>
  <p>{count}</p>
  <button onClick={()=>{
      setCount(count+1)
  }}>increases</button>
  </div>
  <div style={{textAlign:"center"}}>
  <h1>MiniProject2</h1>
  <input onChange={(e)=>{
    setSub(e.target.value)
  }}></input>
  <p>{getsub}</p>
  <button onClick={()=>{
    getsetSub(sub)
  }}>submit</button>
  </div>
  <div style={{textAlign:"center"}}>
  <h1>MiniProject3</h1>
  {Para?(<p>This is para</p>):""}
  <button onClick={()=>{
    setPara(!Para)
  }}>show/hide</button>
  </div>
  <div style={{textAlign:"center"}}>
    <h1>MiniProject4</h1>
<button onClick={()=>{
  setButton(!Button)
}} disabled={Button}>disable</button>
  </div>
      </>
    );
  }
  
  return (
    <>
      <Task />
    </>
  );
}

export default App;