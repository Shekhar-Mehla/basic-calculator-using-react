import React from 'react'
import styles from './Input.module.css'

function Input({displaytext}) {
  return (
    <div>
      <input type="text" readOnly value={displaytext}  className={styles.display}/>
    </div>
  )
}
export default Input;
