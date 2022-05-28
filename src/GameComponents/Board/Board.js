import react from "react";
import App from "../../App";
import Square from "../Square/Square";
import  "./Board.css"
import Dialoguebox from "../Dialoguebox";
import React,{useState} from "react";
import Add from "../Addititon/Addition";
   


  function Board(props){
    const[active,setActive]=useState(false)
   
    const [square , setSquare]=useState(Array(9).fill(null))
    const[x,setX]= useState(true);
  const [clicked,setClicked]  =useState(false);
   const winner= calculateWiner(square);
    let status;
    let  highlight="firstRow";
  
    
  
    if(winner){
      highlight +="highlight";
      setActive(true);
     
      

    

    }
    else{
     status= "player turn:"+ (x ?"X":"O");
    }


    const renderSquare=(i)=>{
      return  <Square value={square[i]}  onClick={()=>handleClick(i)}/>

  }

  const addNumbers=()=>{
    setClicked(true); 
    if(clicked)     {
      <Add  onClick={props.onClick} />

    }
   
  }

  const handleClick=(i)=>{

    const squares=square.slice();
    if(squares[i]===null){ 
    squares[i]= x ?"X":"O";
    setSquare(squares);
    setX(!x);

  }
  else{
    alert("The square has been clicked")
  }
}

function calculateWiner(squares){
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,67],
     [0,4,8],
    [2,4,6]
  ];

  for(let i=0;  i<lines.length; i++){
    const [a,b,c]=lines[i];
    if(squares[a]   &&  squares[a]  ===  squares[b]  &&  squares[b]  ===  squares[c] ){
       return squares[a];
    }   
  }
  return null;
 
 

}

    return(
    
    
        <div  id= "container">
          {active === true &&  <Dialoguebox/>}
            <div id={highlight}>
           
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        
        
        </div>
        <div id="secondRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div id="thirdRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
        <button onClick={addNumbers}>MAn</button>
        
              {status}
        </div>
       

    )
 }
 export default Board;