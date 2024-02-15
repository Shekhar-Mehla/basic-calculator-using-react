import React, { useState } from 'react'
import Buttons from './component/Buttons';
import Input from './Input';
import Container from './Container';



 function App() {
let buttons = [1,2,3,"+",4,5,6,"-",7,8,9,"*",".",0,"=","c"];
let[displaytext,setdisplaytext] = useState('');

let  clcickhandler =(event)=>{let k =event.target.name;
 if(k==="="){
  setdisplaytext(eval(displaytext))
 }else if(k==="c"){
  setdisplaytext('');

}else{
  setdisplaytext(displaytext+k);
}}
  return(
    <Container >

    <Input displaytext ={displaytext} ></Input>
    <Buttons buttons = {buttons} clcickhandler = {clcickhandler}></Buttons>
    
    </Container>
  )
  
 }
 
export default App;
