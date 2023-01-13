import React from 'react';

import Logo from './Icons/Logo.svg';
import Cart from './Icons/Cart.svg';
import Menu from './Icons/Menu.svg';
import User from './Icons/User.svg';
import Search from './Icons/Search.svg';
import SearchIcon from './Icons/SearchIcon.svg';
import VK from './Icons/VK.svg';
import Telegram from './Icons/Telegram.svg';
import Instagram from './Icons/Instagram.svg';

import headerStyle from './header.module.scss';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const [showMenu, setShowMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [showSearchWindow, setShowSearchWindow] = React.useState(false);

  const [navSize, setNavSize] = React.useState('pc');

  const resizeComp = () => {
    if (window.innerWidth <= 425) {
      setNavSize('mobile');
    } else {
      setNavSize('pc');
    }
  };

  const [showNavTop, setShowNavTop] = React.useState(true);
  const scrollNavPhone = () => {
    if (100 < window.scrollY) {
      setShowNavTop(false);
    } else {
      setShowNavTop(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', resizeComp);
    resizeComp();
    window.addEventListener('scroll', scrollNavPhone);
    return () => {
      window.removeEventListener('resize', resizeComp);
      window.removeEventListener('scroll', scrollNavPhone);
    };
  }, []);

  const catalogClick = () => {
    setShowMenu(false);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <header>
        {navSize === 'pc' ? (
          <Navbar fixed="top" className={headerStyle.navbar}>
            <Container style={{ justifyContent: 'space-between' }}>
              <Navbar.Brand href="/" style={{ border: 0 }}>
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
                  <li onClick={() => setShowCart(true)}>
                    <img alt="Cart" src={Cart}></img>
                  </li>
                  <li onClick={() => setShowMenu(true)}>
                    <img alt="User" src={User}></img>
                  </li>
                  <li onClick={() => setShowMenu(true)}>
                    <img alt="Menu" src={Menu}></img>
                  </li>
                </ul>
              </div>
            </Container>
          </Navbar>
        ) : null}
        {navSize === 'mobile' ? (
          <>
            <Navbar
              fixed="top"
              className={
                showNavTop ? headerStyle.navbarMobileTopActive : headerStyle.navbarMobileTop
              }>
              <Navbar.Brand href="/" style={{ border: 0 }}>
                <img alt="Logo" src={Logo} className={headerStyle.logo} height="40px"></img>
              </Navbar.Brand>
            </Navbar>
            <Navbar fixed="bottom" className={headerStyle.navbarMobileBottom}>
              <Container style={{ justifyContent: 'center' }}>
                <div className={headerStyle.panel}>
                  <ul>
                    <li onClick={() => setShowCart(true)}>
                      <img alt="Cart" src={Cart}></img>
                    </li>
                    <li>
                      <img alt="User" src={User}></img>
                    </li>
                    <li onMouseOver={() => setShowMenu(true)}>
                      <img alt="Menu" src={Menu}></img>
                    </li>
                    <li onClick={() => setShowSearchWindow(true)}>
                      <img alt="Search" src={SearchIcon}></img>
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
        style={{
          background: 'rgba(0, 0, 0, 0.74)',
          backdropFilter: 'blur(2px)',
          width: '100%',
        }}>
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title style={{ color: '#ffffff', fontStyle: 'Montserrat' }}>
            Меню
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={headerStyle.navMenu}>
            {[
              { name: 'Каталог', href: 'catalog' },
              { name: 'Отследить заказ', href: 'track' },
              { name: 'О нас', href: 'about-us' },
              { name: 'Доставка и оплата', href: 'delivery-and-pay' },
              { name: 'Контакты', href: 'contacts' },
              { name: 'Отзывы', href: 'feedback' },
            ].map((el, index) => (
              <Link
                onClick={() => catalogClick()}
                key={`navMenu${index}`}
                to={`/${el.href}`}
                style={{ textDecoration: 'none' }}>
                <h2>{el.name}</h2>
              </Link>
            ))}
            <div className={headerStyle.socialNetworks}>
              {[
                { img: VK, href: '' },
                { img: Telegram, href: '' },
                { img: Instagram, href: '' },
              ].map((el, index) => (
                <Link to={`/${el.href}`} key={`socialNetworks${index}`}>
                  <img alt="el" height="25px" src={el.img}></img>
                </Link>
              ))}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={showSearchWindow}
        placement="end"
        onHide={() => setShowSearchWindow(false)}
        style={{
          background: 'rgba(0, 0, 0, 0.74)',
          backdropFilter: 'blur(2px)',
          width: '100%',
        }}>
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title style={{ color: '#ffffff', fontStyle: 'Montserrat' }}>
            Поиск
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: 'flex', justifyContent: 'center' }}></Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={showCart}
        placement="end"
        onHide={() => setShowCart(false)}
        style={{
          background: 'rgba(0, 0, 0, 0.74)',
          backdropFilter: 'blur(2px)',
          width: '100%',
        }}>
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title style={{ color: '#ffffff', fontStyle: 'Montserrat' }}>
            Корзина
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: 'flex', justifyContent: 'center' }}></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
