import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  //[
  //   {
  //     id: 1,
  //     checked: true,
  //     item: 'One half bag of Cocoa Covered Almonds Unsalted',
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: 'Item 2',
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: 'Item 3',
  //   },
  // ]
  );
  return (
    <div className='App'>
      <Header title="Groceries List" />
      <Content items={items} setItems={setItems} />
      <Footer itemsLength={items.length}/>  
    </div>
  )
}

export default App