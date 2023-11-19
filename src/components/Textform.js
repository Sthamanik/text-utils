import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick= ()=>{
        let newtext= text.toUpperCase();
        setText(newtext);
    }

    const handleDownClick= ()=>{
        let newtext= text.toLowerCase();
        setText(newtext);
    }
    
    const handleClearClick= ()=>{
        let newtext= "";
        setText(newtext);
    }

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('enter text here');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Delete</button>
       </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").filter((element)=>{return element.length!== 0}).length)} Minutes required to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
