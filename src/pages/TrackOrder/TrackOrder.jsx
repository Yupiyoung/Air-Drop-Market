import React from 'react';
import {
  Badge,
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Spinner,
} from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
// import { fetchStatus, searchOrder } from '../../http/productsApi';
import trackOrderStyle from './trackOrder.module.scss';

function TrackOrder() {
  //States
  const [trackNum, setTrackNum] = React.useState('');
  const [name, setName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [searching, setSearching] = React.useState(0);
  const [orderInfo, setOrderInfo] = React.useState([]);
  //Validation
  const [valid, setValid] = React.useState({
    trackNum: 0,
    name: 0,
    secondName: 0,
  });
  React.useEffect(() => {
    if (!isNaN(trackNum)) {
      setValid((prev) => ({ ...prev, trackNum: 2 }));
    }
    if (isNaN(trackNum) || trackNum.length <= 12) {
      setValid((prev) => ({ ...prev, trackNum: 1 }));
    }
    if (!trackNum) {
      setValid((prev) => ({ ...prev, trackNum: 0 }));
    }
    if (name) {
      setValid((prev) => ({ ...prev, name: 2 }));
    }
    if (!name) {
      setValid((prev) => ({ ...prev, name: 0 }));
    }
    if (secondName) {
      setValid((prev) => ({ ...prev, secondName: 2 }));
    }
    if (!secondName) {
      setValid((prev) => ({ ...prev, secondName: 0 }));
    }
  }, [trackNum, name, secondName]);
  //Api
  const [statuses, setStatuses] = React.useState([]);
  // const getAllStatuses = async () => {
  //   const statuses = await fetchStatus();
  //   if (statuses) {
  //     setStatuses(statuses);
  //   }
  // };

  // const load = async () => {
  //   await getAllStatuses();
  //   if (valid.name === 2 && valid.secondName === 2 && valid.trackNum === 2) {
  //     await setSearching(1);
  //     try {
  //       const order = await searchOrder(trackNum.trim(), name, secondName);
  //       if (order) {
  //         await setOrderInfo(order);
  //         await setSearching(2);
  //       } else {
  //         setSearching(3);
  //       }
  //     } catch (error) {
  //       setSearching(3);
  //     }
  //   } else {
  //     alert('Заполнены не все поля или присутствует ошибка');
  //   }
  // };

  return (
    <>
      <style type="text/css">
        {`
        .search-btn{
          width: 100%;
          height: 45px;
          --bs-btn-color: #000000;
          --bs-btn-bg: #000000;
          --bs-btn-border-color: none;
          --bs-btn-hover-color: #000000;
          --bs-btn-hover-bg: #ffffff;
          --bs-btn-hover-border-color: #000000;
          --bs-btn-focus-shadow-rgb: 49,132,253;
          --bs-btn-active-color: #000000;
          --bs-btn-active-bg: #ffffff;
          --bs-btn-active-border-color: #000000;
          --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
          --bs-btn-disabled-color: #000000;
          --bs-btn-disabled-bg: #ffffff;
          --bs-btn-disabled-border-color: #000000;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          color: #FFFFFF;
          border: solid 1px #000000;
        }
        .form-control:focus{
          border: solid 2px rgb(0 0 0 / 31%);
          box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 38%);
          background-color: transparent;
          transition: all 0.1s linear;
        }
        `}
      </style>
      <div className="container" style={{ minHeight: 'calc(100vh - 70px)' }}>
        <div className={trackOrderStyle.search}>
          <h2>Отследить заказ</h2>
          <Form>
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="Номер отслеживания" className="mt-3">
                  <Form.Control
                    type="text"
                    value={trackNum}
                    placeholder="Введите номер"
                    required
                    isInvalid={valid.trackNum === 1 ? true : false}
                    isValid={valid.trackNum === 2 ? true : false}
                    onChange={(e) => setTrackNum(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Некорректный трэк-номер.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="Имя" className="mt-3">
                  <Form.Control
                    type="text"
                    isValid={valid.name === 2 ? true : false}
                    value={name}
                    placeholder="Введите имя"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <InputGroup hasValidation>
                <FloatingLabel label="Фамилия" className="mt-3">
                  <Form.Control
                    type="text"
                    isValid={valid.secondName === 2 ? true : false}
                    value={secondName}
                    placeholder="Введите фамилию"
                    onChange={(e) => setSecondName(e.target.value)}
                  />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          </Form>
          <div className="d-grid gap-2 mt-3">
            <Button className="search-btn" onClick={() => console.log(1)}>
              Найти
            </Button>
          </div>
        </div>
        {searching === 0 ? null : null}
        {searching === 1 ? (
          <div className={trackOrderStyle.orderBlock}>
            <Spinner style={{ marginRight: '10px' }} animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h2>Загрузка</h2>
          </div>
        ) : null}
        {searching === 2 && orderInfo ? (
          <div className={trackOrderStyle.orderBlock}>
            <Card style={{ width: '100%', marginTop: '10px' }}>
              <Card.Header>
                <Card.Title>{`Трэк номер: ${orderInfo.trackNumber}`}</Card.Title>
                {statuses.map((el) =>
                  el.id === orderInfo.statusId ? <Badge bg="success">{el.name}</Badge> : null,
                )}
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ margin: 0 }}>Получатель:</Card.Title>
                <Card.Text style={{ margin: 0 }}>{`Фамилия: ${orderInfo.secondName}`}</Card.Text>
                <Card.Text style={{ margin: 0 }}>{`Имя: ${orderInfo.name}`}</Card.Text>
                <Card.Text style={{ margin: 0 }}>{`Телефон: ${orderInfo.phone}`}</Card.Text>
                <Card.Text style={{ margin: 0 }}>{`Телеграм : ${orderInfo.telegram}`}</Card.Text>
                <hr></hr>
                {orderInfo.typeService === 'SDEK' ? (
                  <>
                    <Card.Title style={{ margin: 0 }}>СДЭК</Card.Title>
                    <Card.Text
                      style={{ margin: 0 }}>{`Пункт выдачи: ${orderInfo.pickupPoint}`}</Card.Text>
                  </>
                ) : null}
                {orderInfo.typeService === 'RussianPost' ? (
                  <>
                    <Card.Title style={{ margin: 0 }}>Почта России</Card.Title>
                    {orderInfo.delivery.isArray() ? (
                      <>
                        {orderInfo.delivery.map((el, index) => (
                          <Card.Text
                            key={index}
                            style={{
                              margin: 0,
                            }}>{`${el}`}</Card.Text>
                        ))}
                      </>
                    ) : null}
                  </>
                ) : null}
                {[
                  { type: 'Novatorov', address: 'Москва, метро Новаторская' },
                  { type: 'Ryazanskiy', address: 'Москва, метро Рязанский проспект' },
                ].map((el, index) =>
                  el.type === orderInfo.pickup ? (
                    <>
                      <Card.Title>Самовывоз</Card.Title>
                      <Card.Text
                        style={{
                          margin: 0,
                        }}>{`${el.address}`}</Card.Text>
                    </>
                  ) : null,
                )}
                <hr></hr>
                <Card.Title style={{ margin: 0 }}>Состав заказа:</Card.Title>
                {orderInfo.orderList.map((el, index) => (
                  <div key={index}>
                    <Card.Title style={{ margin: 0 }}>{`${el.name}`}</Card.Title>
                    <Card.Text
                      style={{
                        margin: 0,
                      }}>{`Артикул: ${el.article}`}</Card.Text>
                    <Card.Text
                      style={{
                        margin: 0,
                      }}>{`Размер: ${el.size}`}</Card.Text>
                    <Card.Text
                      style={{
                        margin: 0,
                      }}>{`Категория: ${el.category}`}</Card.Text>
                    <Card.Text
                      style={{
                        margin: 0,
                      }}>{`Маркетплейс: ${el.marketplace}`}</Card.Text>
                    <Card.Text
                      style={{
                        margin: 0,
                      }}>{`Цена: ${el.price}¥`}</Card.Text>
                    <Card.Text
                      style={{
                        margin: 0,
                      }}>{`Количество: ${el.count}`}</Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
        ) : null}
        {searching === 3 ? (
          <div className={trackOrderStyle.orderBlock}>
            <h2>Заказ не найден</h2>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TrackOrder;
