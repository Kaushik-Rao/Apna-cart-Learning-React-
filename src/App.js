import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import React, { useState } from "react";
import AddItem from "./components/AddItem.js";

function App() {
  const products = [
    {
      id: 1,
      name: "Mobile",
      price: 10000,
      description: "This is a mobile phone",
      quantity: 0,
    },
    {
      id: 2,
      name: "Laptop",
      price: 50000,
      description: "This is a laptop",
      quantity: 0,
    },
    {
      id: 3,
      name: "TV",
      price: 30000,
      description: "This is a TV",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    let newTotalAmount = 0;
    newProductList.forEach((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const removeItems = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      id: newProductList.length+1,
      name: name,
      price: price,
      description: "This is a TV",
      quantity: 0,
    });
    setProductList(newProductList);
  
  }


  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItems={removeItems}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
