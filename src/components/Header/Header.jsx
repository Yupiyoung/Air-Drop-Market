import React from 'react';

import Logo from './Icons/Logo.svg';
import Cart from './Icons/Cart.svg';
import Menu from './Icons/Menu.svg';
import User from './Icons/User.svg';
import Search from './Icons/Search.svg';
import SearchIcon from './Icons/SearchIcon.svg';

import headerStyle from './header.module.scss';
import { Carousel, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const [showMenu, setShowMenu] = React.useState(false);

  const [navSize, setNavSize] = React.useState('pc');

  const resizeComp = () => {
    if (window.innerWidth <= 425) {
      setNavSize('mobile');
    } else {
      setNavSize('pc');
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', resizeComp);
    resizeComp();
    return () => {
      window.removeEventListener('resize', resizeComp);
    };
  }, []);
  return (
    <>
      <header>
        {navSize === 'pc' ? (
          <Navbar fixed="top" className={headerStyle.navbar}>
            <Container style={{ justifyContent: 'space-between' }}>
              <Navbar.Brand href="/">
                <img alt="Logo" src={Logo} className={headerStyle.logo} height="40px"></img>
              </Navbar.Brand>
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
            </Container>
          </Navbar>
        ) : null}
        {navSize === 'mobile' ? (
          <>
            <Navbar fixed="top" className={headerStyle.navbarMobileTop}>
              <Navbar.Brand href="/">
                <img alt="Logo" src={Logo} className={headerStyle.logo} height="40px"></img>
              </Navbar.Brand>
            </Navbar>
            <Navbar fixed="bottom" className={headerStyle.navbarMobileBottom}>
              <Container style={{ justifyContent: 'center' }}>
                <div className={headerStyle.panel}>
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
              </Container>
            </Navbar>
          </>
        ) : null}
      </header>
      <Offcanvas
        show={showMenu}
        placement="end"
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
