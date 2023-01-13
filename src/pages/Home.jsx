import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import homeStyle from './home.module.scss';
import Slide1 from './Slide1.jpg';
import Slide2 from './Slide2.jpg';
import Slide3 from './Slide3.jpg';
import Sneakers1 from './Sneakers1.png';
import Expand_left from './Expand_left.svg';
import Expand_right from './Expand_right.svg';

function Home() {
  const [brandsScroll, setBrandsScroll] = React.useState(0);

  const activeSlideRef = React.useRef(null);
  const clickRightButtonScroll = (value) => {
    const actualLeft = changeBrandScroll();
    activeSlideRef.current.scrollTo(actualLeft + value, 0);
  };
  const clickLeftButtonScroll = (value) => {
    const actualLeft = changeBrandScroll();
    if (actualLeft <= 0) {
      activeSlideRef.current.scrollTo(0, 0);
    } else {
      activeSlideRef.current.scrollTo(actualLeft - value, 0);
    }
  };
  const changeBrandScroll = () => {
    const width = activeSlideRef.current.scrollWidth;
    const object = 150;
    const total = ~~(width / object);
    setBrandsScroll(total - ~~((width - activeSlideRef.current.scrollLeft) / object));
    return activeSlideRef.current.scrollLeft;
  };
  React.useEffect(() => {
    activeSlideRef.current.addEventListener('scroll', changeBrandScroll);
    return () => activeSlideRef.current.removeEventListener('scroll', changeBrandScroll);
  }, []);

  return (
    <>
      <style>
        {`.swiper-slide-active{
          filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.1));
          transition: filter 1s linear;
          }
          .swiper-scrollbar.swiper-scrollbar-horizontal{    
            border-radius: 10px;
            height: 10px;
            background-color: #f1f1f1;
          }
          .swiper-scrollbar-drag{    
            border-radius: 10px;
            background-color: #E6E6E6;
          }
          .swiper-wrapper{
            padding-bottom: 15px;
          }
          `}
      </style>
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
      <div className="container">
        <div className={homeStyle.popular}>
          <div className={homeStyle.popularName}>
            <h2>Популярные товары</h2>
            <p>Показать все</p>
          </div>
          <div className={homeStyle.popularProductBlock}>
            <Swiper slidesPerView={1} modules={[Scrollbar]} scrollbar={{ draggable: true }}>
              {[Sneakers1, Sneakers1, Sneakers1, Sneakers1, Sneakers1].map((element, index) => (
                <SwiperSlide key={`slide${index}`}>
                  <div className={homeStyle.popularProductCard}>
                    <img alt="Sneakers1" src={element}></img>
                    <h3>Nike Dunk Low Halloween</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={homeStyle.brandIcons}>
          <div className={homeStyle.brandIconsName}>
            <h2>Бренды</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{ cursor: 'pointer' }}
              alt="Expand_left"
              height="20px"
              src={Expand_left}
              onClick={() => clickLeftButtonScroll(150)}></img>
            <div className={homeStyle.brandIconsWrap} ref={activeSlideRef}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((element, index) => (
                <div
                  key={`iconBrand${index}`}
                  onClick={() => console.log(index)}
                  className={
                    brandsScroll === index ? homeStyle.brandIconCardActive : homeStyle.brandIconCard
                  }>
                  <img
                    alt="Sneakers1"
                    src="https://cdn-icons-png.flaticon.com/512/732/732084.png"></img>
                </div>
              ))}
            </div>
            <img
              style={{ cursor: 'pointer' }}
              alt="Expand_right"
              height="20px"
              src={Expand_right}
              onClick={() => clickRightButtonScroll(150)}></img>
          </div>
        </div>
        <div className={homeStyle.brand}>
          <div className={homeStyle.brandName}>
            <h2>Nike</h2>
            <p>Показать все</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{ cursor: 'pointer' }}
              alt="Expand_left"
              height="20px"
              src={Expand_left}
              onClick={() => clickLeftButtonScroll(150)}></img>
            <div className={homeStyle.brandProductBlockWrap}>
              <div className={homeStyle.brandProductBlock}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((element, index) => (
                  <div className={homeStyle.brandProductCard} key={`brandProductBlock1${index}`}>
                    <img alt="Sneakers1" src={Sneakers1}></img>
                  </div>
                ))}
              </div>
            </div>
            <img
              style={{ cursor: 'pointer' }}
              alt="Expand_right"
              height="20px"
              src={Expand_right}
              onClick={() => clickRightButtonScroll(150)}></img>
          </div>
        </div>
        <div className={homeStyle.brand}>
          <div className={homeStyle.brandName}>
            <h2>Yeezy</h2>
            <p>Показать все</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{ cursor: 'pointer' }}
              alt="Expand_left"
              height="20px"
              src={Expand_left}
              onClick={() => clickLeftButtonScroll(150)}></img>
            <div className={homeStyle.brandProductBlockWrap}>
              <div className={homeStyle.brandProductBlock}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((element, index) => (
                  <div className={homeStyle.brandProductCard} key={`brandProductBlock2${index}`}>
                    <img alt="Sneakers1" src={Sneakers1}></img>
                  </div>
                ))}
              </div>
            </div>
            <img
              style={{ cursor: 'pointer' }}
              alt="Expand_right"
              height="20px"
              src={Expand_right}
              onClick={() => clickRightButtonScroll(150)}></img>
          </div>
        </div>
        <div className={homeStyle.aboutUs}>
          <div className={homeStyle.aboutUsName}>
            <h2>О нас</h2>
          </div>
          <div className={homeStyle.aboutUsInfo}>
            <p>
              Наш сервис предоставляет услуги доставки и выкупом лимитированных вещей из Европы и
              Китая. С помощью нас вы можете сделать заказ в Китае с таких площадок как Poizon,
              Nice, 95. Мы предоставляем авиатранспортный вид доставки, на данный момент это
              является самым быстрым и безопасным способом доставки. Мы старается предоставить вам
              самые быстрые сроки доставки, а так же приятный курс.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
