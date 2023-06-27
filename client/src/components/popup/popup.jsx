import React from "react";
import { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { context } from "../..";

import classes from "./popup.module.css"
import { render } from "react-dom";

const Popup = ({ createnewproduct }) => {
  const { store } = useContext(context);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [shopId, setShopId] = useState('');

  function classToggle() {
    document.getElementById('popup').classList.toggle(classes.popup_open)
    document.getElementById('add_btn').classList.toggle(classes.close_button)
  }
  return (

    <div className={classes.popup}>
      <button id='add_btn' className={classes.add_button} onClick={() => {
        classToggle()
      }}>Add new product</button>
      <div id='popup' className={classes.popup_container} >
        <button className={classes.exit_btn} onClick={() => {
          classToggle()
        }}><img src="/exit.svg"></img></button>
        <h1 className={classes.popup_title}>Adding new product</h1>
        <h5 className={classes.popup_description}>Enter values</h5>

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
        <input
          className={classes.input}
          onChange={e => setShopId(e.target.value)}
          value={shopId}
          type='text'
          placeholder="shopId"
        />


        <button type="submit" className={classes.submit_button} onClick={() => {
          if (!name || !date || !price || !amount || !shopId) {

          } else {
            createnewproduct(name, date, price, amount, shopId)
          }
        }}>Add</button>
      </div>
    </div >

  )
}

export default Popup;
