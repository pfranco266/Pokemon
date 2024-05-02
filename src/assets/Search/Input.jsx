import React,  { useState } from "react";


function Input () {

    const [textInput, setTextInput] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
    }

    function handleChange() {
        setTextInput(textInput)
    }
    
    return (
        <form onSubmit={() => handleSubmit(e)}>

        
            <InputForm onChange={handleChange} value={textInput}/>
        </form>
    )
}

export default Input;