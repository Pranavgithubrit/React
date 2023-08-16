
import React,{useState} from 'react'
export default function TextForm(props)
{
    
    
    const[text,setText]=useState("Enter your text");
    const handleCopy=()=>
    {
        var text=document.getElementById("myBox");
       text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleClearText=()=>
    {
        let newText='';
        setText(newText);
    }
    const handleClearSpace=()=>
    {
        let newText=text.split(/[ ]+/);

        setText(newText.join(" "));
    }
    const handleUpClick=()=>
    {

       let newText=text.toUpperCase();
     setText(newText);
    }
    const handleLowClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>
    {

        setText(event.target.value);
    }
    return(
        <>
        <h1>{props.heading}</h1>
<div className="mb-3" >
 
  <textarea className="form-control" mode={props.mode} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleOnChange} id="myBox" rows="8" >

  </textarea>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper Case</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lower Case</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleClearText}>Clear Text</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleClearSpace}>Clear Space</button>

</div>
<div className="container">
    <h1>
        Your Text Summary
    </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes time took to read the word</p>
</div>
        </>
    )
}