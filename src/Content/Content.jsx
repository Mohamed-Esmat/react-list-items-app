import React, { useState } from 'react';
import './Content.css';
// import { useState } from 'react';
// import { FaTrashAlt } from 'react-icons/fa';
import ItemList from './ItemList';
import AddItem from './AddItem/AddItem';
import SearchItem from './AddItem/SearchItem/SearchItem';

const Content = ({ items, setItems }) => {

  const [newItem , setNewItem] = useState('');
  const [search , setSearch] = useState('');

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    // console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  return (
    <main>
      <AddItem
        items={items}
        setItems={setItems}
        newItem={newItem}
        setNewItem={setNewItem}
        />
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
      {items.length === 0 ? (
        <div
          style={{
            marginTop: '2rem',
            backgroundColor: '#eee',
            padding: '2rem',
            textAlign: 'center',
          }}
          className="noItems"
        >
          You Son of Bitch Deleted all the fucking Items!!!
        </div>
      ) : (
        // <ItemList item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>
        <ItemList
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </main>
  );
};

export default Content;

// const [name , setName] = useState('Mohamed');
// const [count , setCount] = useState(0);

//   {/* <p style={{ cursor: 'pointer' }} onDoubleClick={handleClick}>
//     Hello {handleNameChange()}!
//     Hello {name}!
//   </p>
//   <button onClick={handleClick}>Click it</button>
//   <button onClick={handleNameChange}>Change Name</button>
//   <button onClick={ handleClick2}>Click it</button>
//   <button onClick={handleClick}>Click it</button>
//   <button onClick={(e) => handleClick3(e)}>Click it</button>
// </main> */}

// const handleNameChange = ()=> {
//   const names = ['Marwa' , 'Mohamed' , 'Mero'];
//   const int = Math.floor(Math.random() * 3);
//   setName(names[int]);
// }
// const handleNameChange = () => {
//   const names = ['Bob', 'Kevin', 'Dave'];
//   const int = Math.floor(Math.random() * 3);
//   return names[int];
// };

// const handleClick = () => {
//   setCount(count + 1);
//   console.log(count);
// };

// const handleClick2 = (name) => {
//   console.log(`${name} was Clicked `);
// };
// const handleClick2 = () => {
//   console.log(count);
// };
// const handleClick3 = (e) => {
//   console.log(e.target.innerText);
// };
