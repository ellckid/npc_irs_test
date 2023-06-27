/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useContext, useEffect, useRef, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { AgGridReact } from "ag-grid-react";
import { context } from "../index";

import Popup from "components/popup/popup";
import DeleteBtn from "components/UI/DeleteBtn";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import PopupUpdate from "components/popup/popup_update";
import PopupDelete from "components/popup/popup_delete";

function Tables() {
  const [ShopColumnDefs, setShopColumnsDefs] = useState([
    { field: 'id', sortable: true },
    { field: 'name', sortable: true },
    { field: 'date', sortable: true },
    { field: 'balance', sortable: true },
    { field: 'workers', sortable: true }
  ])
  const [productColumnDefs, setProductColumnList] = useState([
    {
      field: 'id', sortable: true
    },
    { field: 'name', sortable: true },
    { field: 'date', sortable: true },
    { field: 'price', sortable: true },
    { field: 'amount', sortable: true },
    { field: 'shopId', sortable: true }

  ])

  const { store } = useContext(context);

  const [shoplist, setShoplist] = useState([])
  const [productlist, setProductlist] = useState([])


  useEffect(() => {
    getShoplist()
    getProductlist()
  }, [])

  if (store.isLoading) {
    return console.log("загрузка")
  }

  async function getShoplist() {
    try {
      await store.GetShopList();
      setShoplist(store.shoplist)
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductlist() {
    try {
      await store.GetProductList();
      setProductlist(store.productlist)
    } catch (error) {
      console.log(error);
    }
  }




  function createNewProduct(name, date, price, amount, shopId) {
    store.createProduct(name, date, price, amount, shopId)
  }

  function updateProduct(id, name, date, price, amount) {
    store.updateProduct(id, name, date, price, amount)
  }

  function deleteProduct(id) {
    store.deleteProduct(id)
  }
  return (
    <>
      <div className="content">
        <div className="ag-theme-alpine" style={{ height: 500, margin: 20 }}>
          <AgGridReact
            animateRows="true"
            rowData={shoplist}
            columnDefs={ShopColumnDefs}
          />
        </div>

        <div style={{
          display: "flex",
          margin: 20,
          gap: 40,
          flexWrap: "wrap"
        }}>
          <Popup
            createnewproduct={createNewProduct}
          />
          <PopupUpdate
            updateproduct={updateProduct}
          />
          <PopupDelete
            deleteproduct={deleteProduct}
          />
        </div>

        <div className="ag-theme-alpine" style={{ height: 500, margin: 20 }}>
          <AgGridReact
            animateRows="true"
            rowData={productlist}
            columnDefs={productColumnDefs}
          />
        </div>
      </div >
    </>
  );
}

export default Tables;
