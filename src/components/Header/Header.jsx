import React from 'react';

import Logo from './Icons/Logo.svg';
import Cart from './Icons/Cart.svg';
import Menu from './Icons/Menu.svg';
import User from './Icons/User.svg';
import Search from './Icons/Search.svg';
import SearchIcon from './Icons/SearchIcon.svg';

import headerStyle from './header.module.scss';
import { Carousel, Container, Navbar, Offcanvas } from 'react-bootstrap';

function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    console.log(document.body.scrollTop);
  }, []);
  return (
    <>
      <header>
        <Navbar
          fixed="top"
          style={{ background: 'rgba(0, 0, 0, 0.74)', backdropFilter: 'blur(2px)' }}>
          <Container>
            <Navbar.Brand href="/">
              <img alt="Logo" src={Logo} className={headerStyle.logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <div className={headerStyle.panel}>
                <div
                  className={showSearch ? headerStyle.searchInputActive : headerStyle.searchInput}
                  onMouseOver={() => setShowSearch(true)}
                  onMouseOut={() => setShowSearch(false)}>
                  <input placeholder="Поиск..." onChange={(e) => setSearch(e.target.value)}></input>
                  <img alt="Search" src={Search}></img>
                </div>
                <img
                  alt="Search"
                  src={SearchIcon}
                  className={!showSearch ? headerStyle.searchActive : headerStyle.search}
                  onMouseOver={() => setShowSearch(true)}
                  onMouseOut={() => setShowSearch(false)}></img>
                <ul>
                  <li>
                    <img alt="Cart" src={Cart}></img>
                  </li>
                  <li>
                    <img alt="User" src={User}></img>
                  </li>
                  <li onMouseOver={() => setShowMenu(true)}>
                    <img alt="Menu" src={Menu}></img>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Offcanvas
        show={showMenu}
        placement="top"
        onHide={() => setShowMenu(false)}
        onMouseLeave={() => setShowMenu(false)}
        style={{ background: 'rgba(0, 0, 0, 0.74)', backdropFilter: 'blur(2px)' }}>
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;

// {/* <nav className={headerStyle.navbar}>
//   {/* <a href="/">
//     <img alt="Logo" src={Logo} className={headerStyle.logo}></img>
//   </a> */}
//   <div className={headerStyle.panel}>
//     <div
//       className={showSearch ? headerStyle.searchInputActive : headerStyle.searchInput}
//       onMouseOver={() => setShowSearch(true)}
//       onMouseOut={() => setShowSearch(false)}>
//       <input placeholder="Поиск..." onChange={(e) => setSearch(e.target.value)}></input>
//       <img alt="Search" src={Search}></img>
//     </div>
//     <img
//       alt="Search"
//       src={SearchIcon}
//       className={!showSearch ? headerStyle.searchActive : headerStyle.search}
//       onMouseOver={() => setShowSearch(true)}
//       onMouseOut={() => setShowSearch(false)}></img>
//     <ul>
//       <li>
//         <img alt="Cart" src={Cart}></img>
//       </li>
//       <li>
//         <img alt="User" src={User}></img>
//       </li>
//       <li onMouseOver={() => setShowMenu(true)}>
//         <img alt="Menu" src={Menu}></img>
//       </li>
//     </ul>
//   </div>
// </nav>
