import React from 'react';
import './Footer.css';

const Footer = ({itemsLength}) => {
    const today = new Date();
  return (
    <footer>
        <p className='itemsNumber'>{itemsLength > 1 ?`you have ${itemsLength} items in your list` : itemsLength ===1? `you ${itemsLength} item in your list` : `You have No items in your list`}</p>
        <p style={{ textAlign: 'center', fontWeight: '400', fontSize: '16px' , color: 'rgb(184, 184, 184)'}}>Copy Rights &copy;{today.getFullYear()}</p>
    </footer>
  )
}

export default Footer 