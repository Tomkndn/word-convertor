import React, { useState } from 'react'

export default function TextBox(props){
    let [text,setText] = useState('');
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const lowCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const upCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const firstChar =()=>{
        let newArray = text.split(' ');
        let newText = [];
        for (let i = 0; i<newArray.length;i++){
            let c = newArray[i][0].toUpperCase()+newArray[i].slice(1);
            newText.push(c);
        }
        setText(newText.join(' '))
    }
    const invert =()=>{
        let newArray = text.split(' ');
        let newText = [];
        for (let i = 0; i<newArray.length;i++){
            let word = "";
            for (let j = 0; j<newArray[i].length;j++){
                if (newArray[i][j] == newArray[i][j].toUpperCase()){
                    let c = newArray[i][j].toLowerCase();
                    word = word + c;
                }else{
                    let c = newArray[i][j].toUpperCase();
                    word = word + c;
                }
            }
            newText.push(word);
        }
        setText(newText.join(' '))
    }
    const clear = ()=>{
        let newText = '';
        setText(newText);
    }
    return(
        <>
        <form>
          <div className="container mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
          <textarea id='text' className="form-control" value={text} placeholder="text..." onChange={handleOnChange} rows="8"></textarea>
          </div>
        </form>
        <div className='container button'>
        <button type="button" className="btn btn-primary" onClick={lowCase}>lower</button>
        <button type="button" className="btn btn-secondary" onClick={upCase}>UPPER</button>
        <button type="button" className="btn btn-success" onClick={firstChar}>Fchar</button>
        <button type="button" className="btn btn-danger" onClick={invert}>Invert</button>
        <button type="button" className="btn btn-outline-warning" onClick={clear}>Clear</button>
        </div>
        <div className='container my-4'>
            <h2>Your Text Summary:</h2>{text.split(' ').length} Words and {text.length} Characters.
           <br/><br/><h2>Preview:</h2>{text}
        </div>
        </>
    );
}