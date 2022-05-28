import React , {useState }from "react";
import ReactDom from "react-dom";
import Board from "./GameComponents/Board/Board";
import Dialoguebox from "./GameComponents/Dialoguebox";
 import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

 export default function App(){
     const openDialogue=()=>{
         <div> 
        <h4>How to create Dialog Box in ReactJS?</h4>
        <Dialog>
          <DialogTitle>{"How are you?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              I am Good, Hope the same for you!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
        </div>

     }

    const[openD,setOpenD]=useState(false)
    return (


        <div>
           <Board/>
        </div>
    )
}