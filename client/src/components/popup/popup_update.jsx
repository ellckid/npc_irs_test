import React from "react";
import { useState } from "react";

import classes from "./popup.module.css"

const PopupUpdate = ({ updateproduct }) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [Id, setId] = useState('');

  function classToggle() {
    document.getElementById('popup_update').classList.toggle(classes.popup_open)
    document.getElementById('add_btn_update').classList.toggle(classes.close_button)
  }
  return (

    <div className={classes.popup}>
      <button id='add_btn_update' className={classes.add_button} onClick={() => {
        classToggle()
      }}>Update product</button>
      <div id='popup_update' className={classes.popup_container} >
        <button className={classes.exit_btn} onClick={() => {
          classToggle()
        }}><img src="/exit.svg"></img></button>
        <h1 className={classes.popup_title}>Updating product</h1>
        <h5 className={classes.popup_description}>Enter values</h5>
        <input
          className={classes.input}
          onChange={e => setId(e.target.value)}
          value={Id}
          type='text'
          placeholder="Id"
        />
        <input
          className={classes.input}
          onChange={e => setName(e.target.value)}
          value={name}
          type='text'
          placeholder="name"
        />
        <input
          className={classes.input}
          onChange={e => setDate(e.target.value)}
          value={date}
          type='text'
          placeholder="date"
        />
        <input
          className={classes.input}
          onChange={e => setPrice(e.target.value)}
          value={price}
          type='text'
          placeholder="price"
        />
        <input
          className={classes.input}
          onChange={e => setAmount(e.target.value)}
          value={amount}
          type='text'
          placeholder="amount"
        />



        <button type="submit" className={classes.submit_button} onClick={() => {
          if (!Id || !name || !date || !price || !amount) {

          } else {
            // let tempDate = Date(date)
            // setDate(tempDate.toISOString)
            updateproduct(Id, name, date, price, amount)
          }
        }}>Change</button>
      </div>
    </div>

  )
}

export default PopupUpdate;
