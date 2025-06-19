import React,{useState}  from 'react';

const Main = () => {
    // const [showText, setShowText] = useState(false);
    const [inputField, setInputField] = useState('default value');
    const [showTextOnClick, setShowTextOnClick] = useState('Text neither entered nor submit clicked');
    const handleButtonClick = () =>{
        setShowTextOnClick(inputField);
    }

    const inputChangeHandler = (event)=>{
        console.log(event.target.name, event.target.value)
        setInputField(event.target.value)
    }

    return (
        <div>
            <input 
                name='inputField'
                value={inputField}
                onChange={inputChangeHandler}
            />
            <button onClick={handleButtonClick}> submit </button>
            <div>
            {/* {showText && "I found a pair for you"} */}
            <label>Data or Text entered in the input field after clicking Submit button is: </label>
            {showTextOnClick}
            </div>
        </div>
    )
}

export default Main;