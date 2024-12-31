import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState(''); // aa hamna text input kare tyare
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
           className="input-box-todo"
             placeholder="Enter your todo"
                  value={inputText}
             onChange={e=>{
            setInputText(e.target.value) // jayre user text input kare tyare aa function target karshe value ne
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText) // jayre user input karse to tyare use thase 

        setInputText("") // aa function input kariye pachi blank thase input box clear hase and  console ma output dekashe

      }}> Add +</button>      
    </div>
  );
}

export default TodoInput;