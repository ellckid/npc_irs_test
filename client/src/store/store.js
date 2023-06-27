import { makeAutoObservable } from "mobx";
import axios from "axios";
import { API_URL } from "../http/http";


export default class Store {
  shop = {}
  shoplist = []
  product = {}
  productlist = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }
  setShop(shop) {
    this.shop = shop;
  }
  setShopList(shoplist) {
    this.shoplist = shoplist;
  }
  setProduct(product) {
    this.product = product;
  }
  setProductList(productlist) {
    this.productlist = productlist;
  }
  setLoading(bool) {
    this.isLoading = bool;
  }

  async createShop(name, date, balance, workers) {
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/shop`,
        data: {
          "name": `${name}`,
          "date": `${date}`,
          "balance": `${balance}`,
          "workers": `${workers}`
        }
      })
      console.log(response.json.data);
      this.setShop(response.data.json);
    } catch (e) {
      console.log(e.response?.data);
    }
  }
  async GetShopList() {
    this.setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: `${API_URL}/shop`
      })
      console.log(response.data);
      this.setShopList(response.data);
    } catch (e) {
      console.log(e.response?.data);
    }
    finally {
      this.setLoading(false);

    }
  }
  async updateShop(id, name, date, balance, workers) {
    try {
      const response = await axios({
        method: "put",
        url: `${API_URL}/shop`,
        data: {
          "id": `${id}`,
          "name": `${name}`,
          "date": `${date}`,
          "balance": `${balance}`,
          "workers": `${workers}`
        }
      })
      console.log(response);
      this.setShopList(response.data);
    } catch (e) {
      console.log(e.response?.data);
    }
  }
  async deleteShop(id) {
    try {
      const response = await axios({
        method: "delete",
        url: `${API_URL}/shop/${id}`
      })
      console.log(response);
      this.setShop(response.data);
    } catch (e) {
      console.log(e.response?.data);
    }
  }

  async createProduct(name, date, price, amount, shopId) {
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/product`,
        data: {
          "name": `${name}`,
          "date": `${date}`,
          "price": `${price}`,
          "amount": `${amount}`,
          "shopId": `${shopId}`
        }
      })
      console.log(response);
      this.setProduct(response.data);
    } catch (e) {
      console.log(e.response?.data);
    }
  }

  async GetProductList() {
    this.setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: `${API_URL}/product`
      })
      console.log(response.data[0]);
      this.setProductList(response.data[0]);
    } catch (e) {
      console.log(e.response?.data);
    }
    finally {
      this.setLoading(false);

    }
  }
  async updateProduct(id, name, date, price, amount) {
    this.setLoading(true);
    try {
      const response = await axios({
        method: "put",
        url: `${API_URL}/product`,
        data: {
          "id": `${id}`,
          "name": `${name}`,
          "date": `${date}`,
          "price": `${price}`,
          "amount": `${amount}`
        }
      })
      console.log(response);
      this.setProduct(response.data);
    } catch (e) {
      console.log(e.response?.data);
    }
    finally {
      this.setLoading(false);

    }
  }

  async deleteProduct(id) {
    try {
      const response = await axios({
        method: "delete",
        url: `${API_URL}/product/${id}`
      })
      console.log(response);
      this.setProduct(response.data);
    } catch (e) {
      console.log(e.response?.data);
    }
  }

}

