import React, { useContext } from "react";
import { context } from "../../index";
import classes from "./DeleteBtn.module.css"
const DeleteBtn = params => {
  const { store } = useContext(context);

  function deleteItem() {
    store.deleteProduct(params.value)
  }
  return (

    <button className={classes.delete_button} onClick={() => {
      deleteItem()
    }}>
      <img className={classes.delete_img} src="/exit.svg"></img>
      {params.value}

    </button>

  )
}

export default DeleteBtn;
