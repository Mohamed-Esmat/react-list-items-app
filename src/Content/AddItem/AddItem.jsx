import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './AddItem.css';
import { useRef } from 'react';


const AddItem = ({items , setItems ,newItem , setNewItem}) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    //addItem
    addItem(newItem);
    setNewItem(``);
    // console.log(e.target);
  }

  const addItem = (item)=> {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id , checked: false, item};
    const listItems = [...items , myNewItem]
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));

  }
  return (
    <form className='addForm' onSubmit={handleSubmit}> {/**onSubmit={(e)=>handleSubmit(e)} */}
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text" 
            autoFocus
            ref={inputRef}
            id='addItem'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e)=> setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick={()=> inputRef.current.focus()}
            // onClick={(e) => handleSubmit(e)}
            >
                <FaPlus/>
            </button>
    </form>
  )
}

export default AddItem