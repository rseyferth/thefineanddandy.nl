import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuIsOpen: false
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

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
        <ul onClick={this.toggleMobileMenu} className={this.state.mobileMenuIsOpen ? 'show-mobile-menu' : ''}>
          {menuItems.map((title, index) => <li key={ index }><a href={'#' + title }>{ title }</a></li>)}
        </ul>
      </header>
    );
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuIsOpen: !this.state.mobileMenuIsOpen
    });
  }
}