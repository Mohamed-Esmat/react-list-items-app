import React from 'react';
// import { FaTrashAlt } from 'react-icons/fa';
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <LineItem key={index} item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>
      ))}
    </ul>
  );
};

export default ItemList;
