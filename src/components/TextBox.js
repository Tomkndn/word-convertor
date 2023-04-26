import React, { useState } from 'react'

export default function TextBox(props){

    let [text,setText] = useState('');
    let [text2,setText2] = useState('');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const lowCase = ()=>{
        let newText = text.toLowerCase();
        setText2(newText)
    }
    const upCase = ()=>{
        let newText = text.toUpperCase();
        setText2(newText)
    }
    const firstChar =()=>{
        let newArray = text.split(' ');
        let newText = [];
        for (let i = 0; i<newArray.length;i++){
            let c = newArray[i][0].toUpperCase()+newArray[i].slice(1);
            newText.push(c);
        }
        setText2(newText.join(' '))
    } 
    const invert =()=>{
        let newArray = text.split(' ');
        let newText = [];
        for (let i = 0; i<newArray.length;i++){
            let word = "";
            for (let j = 0; j<newArray[i].length;j++){
                if (newArray[i][j] === newArray[i][j].toUpperCase()){
                    let c = newArray[i][j].toLowerCase();
                    word = word + c;
                }else{
                    let c = newArray[i][j].toUpperCase();
                    word = word + c;
                }
            }
            newText.push(word);
        }
        setText2(newText.join(' '))
    }
    const clear = ()=>{
        let newText = '';
        setText(newText);
    }
    const copy = ()=>{
        let newText = text2;
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
            <div className='container buttons'>
                <button type="button" className="btn btn-primary" onClick={lowCase}>lower</button>
                <button type="button" className="btn btn-secondary" onClick={upCase}>UPPER</button>
                <button type="button" className="btn btn-success" onClick={firstChar}>Fchar</button>
                <button type="button" className="btn btn-danger" onClick={invert}>Invert</button>
                <button type="button" className="btn btn-outline-warning" onClick={clear}>Clear</button>
                <button type="button" class="btn btn-info" onClick={copy}>Copy</button>
                <form className="input-group control">
                    <div className="col-xs-3 m-2">
                        <input type="text" className="form-control" id="text" placeholder="Enter color for Text" required/>
                    </div>
                    <div className="col-xs-3 m-2">
                        <input type="text" className="form-control" id='bgcolor' placeholder="Enter color for BG" required/>
                    </div>
                <button type="button" className="btn btn-danger control">Submit</button>
                </form>
            </div>
            <div className='container my-4'>
                <h2>Your Text Summary:</h2>{text.split(' ').length} Words and {text.length} Characters.
            </div>
            <form>
                <div className="container mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Preview:</h2></label>
                    <textarea id='text' className="form-control preview" value={text2} placeholder="text..." rows="8"></textarea>
                </div>
            </form>
        </>
    );
};