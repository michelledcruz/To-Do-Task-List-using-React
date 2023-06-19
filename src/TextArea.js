import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function TextArea(props) {

    const changeText = ()=>{    
        setText(text.toUpperCase());
    }

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const readTime = ()=>{
        const x=text.split(' ').length;
        if(x<=250){
            return(1);
        }
        if(x>=250 && x<=500){
            return(2)
        }
    }

    const [text, setText] = useState("this is old text");

    return(
        <>
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value ={text} id="exampleFormControlTextarea1" rows="8" onChange={handleChange}></textarea>
            <button type="button" className="btn btn-primary" onClick={changeText}>Change the text to uppercase</button>
        </div>
       <div className="text-summary">
            <p>{text.split(' ').length} words and  {text.length} characters</p>
            <p>Read Time {readTime()} mins</p>
       </div>    
       </>    
    )
}

PropTypes.propTypes = {
    heading: PropTypes.string.isRequired,
  };