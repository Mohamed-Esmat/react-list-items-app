import React from 'react';
import './Header.css';

const Header = ({title}) => {
    const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
    };

  return (
    <header style={ headerStyle
    //     {
    //     backgroundColor: 'mediumblue',
    //     color: '#fff'
    // }
    }>
        <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title: "Default Title"
}

export default Header;