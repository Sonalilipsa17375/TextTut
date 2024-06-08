import React,{useState} from 'react'

const Main = () => {
  const handleonchange = (event)=>{
    setText(event.target.value);
  }

  const handleclear = ()=>{
    let cleartext = "";
    setText(cleartext);
  }
  const handleupclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const [text,setText] = useState("");
  

  return (
    <>
    <h1>TextTut</h1>
    
    <div className='container'>
    
        <input type="text" value={text} onChange={handleonchange} placeholder='Enter Text Here' className='ip-field'/>
    
    </div>
    <div>
        <button onClick={handleupclick} className='up-but'>Change To UpperCase</button>
         <button onClick={handleclear} className='up-but'>Clear Text</button>
    </div>
    <div className='summary'>
  
     <p>Text Summary - <span>Word Count - {text.split(" ").length} and Number of Characters - {text.length}</span></p>
    </div>
    </>
  )
}

export default Main
