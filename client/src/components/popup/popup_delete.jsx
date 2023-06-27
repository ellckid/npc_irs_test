import React from "react";
import { useState } from "react";

import classes from "./popup.module.css"

const PopupDelete = ({ deleteproduct }) => {

  const [Id, setId] = useState('');

  function classToggle() {
    document.getElementById('popup_delete').classList.toggle(classes.popup_open)
    document.getElementById('add_btn_delete').classList.toggle(classes.close_button)
  }
  return (
    <div className={classes.popup}>
      <button id='add_btn_delete' className={classes.add_button} onClick={() => {
        classToggle()
      }}>Delete product</button>
      <div id='popup_delete' className={classes.popup_container} >
        <button className={classes.exit_btn} onClick={() => {
          classToggle()
        }}><img src="/exit.svg"></img></button>
        <h1 className={classes.popup_title}>Deleting product</h1>
        <h5 className={classes.popup_description}>Enter value</h5>
        <input
          className={classes.input}
          onChange={e => setId(e.target.value)}
          value={Id}
          type='text'
          placeholder="Id"
        />
        <button type="submit" className={classes.submit_button} onClick={() => {
          if (!Id) {
          } else {
            deleteproduct(Id)
          }
        }}>Delete</button>
      </div>
    </div>

  )
}

export default PopupDelete;
