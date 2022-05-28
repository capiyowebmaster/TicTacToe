import react from "react";
import "./Square.css"


function Square(props){
    
    return(
        <button  onClick={props.onClick}>
        <span id="allButtons">{props.value}</span>
    </button>
    );
    
}
export default Square