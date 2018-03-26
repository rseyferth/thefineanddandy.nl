import React from 'react';

export default class Menu extends React.Component {
  render() {
    const menuItems = [
      'home', 'video', 'audio', 'shows', 'contact'
    ];

    return (
      <header>
        <div className="logo">
          <span>The</span> Fine <span>and</span> Dandy
        </div>
        <div className="logo-mobile">
          <span>The</span> Fine <span>and</span> Dandy
        </div>
        <ul>
          {menuItems.map((title, index) => <li key={index}>{title}</li>)}
        </ul>
      </header>
    );
  }
}