import React from 'react'
import styles from './Buttons.module.css'

 function Buttons({buttons,clcickhandler}) {
  let buttonlist = buttons.map(item=><button onClick={clcickhandler} name={item}  className={styles.col} key = {item}>{item}</button>)
  return (
    <div className= {styles.row}>
      {buttonlist}
     
    </div>
  )
}
export default Buttons;
