import React from 'react';
import { Carousel } from 'react-bootstrap';
import homeStyle from './home.module.scss';
import Slide1 from './Slide1.jpg';
import Slide2 from './Slide2.jpg';
import Slide3 from './Slide3.jpg';
import Sneakers1 from './Sneakers1.png';

function Home() {
  return (
    <>
      <div className={homeStyle.sliderWrap}>
        <Carousel className={homeStyle.slider}>
          {[Slide1, Slide2, Slide3].map((el, index) => (
            <Carousel.Item key={`slide${index}`}>
              <img
                className="w-100"
                style={{ height: '400px', objectFit: 'cover', objectPosition: '50% 0' }}
                src={el}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* <div className="container">
        <div className={homeStyle.popular}>
          <div className={homeStyle.popularName}>
            <h2>Популярные товары</h2>
            <p>Показать все</p>
          </div>
          <div className={homeStyle.popularProductBlock}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((element, index) => (
              <div className={homeStyle.popularProductCard}>
                <img alt="Sneakers1" src={Sneakers1}></img>
                <h3>Nike Dunk Low Halloween</h3>
              </div>
            ))}
          </div>
        </div>
        <div className={homeStyle.brand}>
          <div className={homeStyle.brandName}>
            <h2>Nike</h2>
            <p>Показать все</p>
          </div>
          <div className={homeStyle.brandProductBlockWrap}>
            <div className={homeStyle.brandProductBlock}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((element, index) => (
                <div className={homeStyle.brandProductCard}>
                  <img alt="Sneakers1" src={Sneakers1}></img>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={homeStyle.brand}>
          <div className={homeStyle.brandName}>
            <h2>Yeezy</h2>
            <p>Показать все</p>
          </div>
          <div className={homeStyle.brandProductBlockWrap}>
            <div className={homeStyle.brandProductBlock}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((element, index) => (
                <div className={homeStyle.brandProductCard}>
                  <img alt="Sneakers1" src={Sneakers1}></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
