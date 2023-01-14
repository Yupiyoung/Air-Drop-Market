import React from 'react';
import { Button, Col, Dropdown, DropdownButton, Form, Offcanvas, Row } from 'react-bootstrap';

import catalogStyle from './catalog.module.scss';
function Catalog() {
  const [showFilter, setShowFilter] = React.useState(false);
  return (
    <>
      <style>{`
      .form-select:focus{
          border: solid 1px rgb(0 0 0 / 31%);
          box-shadow: none;
          background-color: transparent;
        }
        `}</style>
      <div className="container" style={{ minHeight: 'calc(100vh - 70px)' }}>
        <div className={catalogStyle.catalog}>
          <h1>Каталог</h1>
          <div className={catalogStyle.sortAndFilters}>
            <div className={catalogStyle.sort}>
              <h2>Сортировка</h2>
              <Form.Select style={{ marginRight: '10px' }} aria-label="Default select example">
                {['По умолчанию', 'Цена по возрастанию', 'Цена по убыванию', 'По новизне'].map(
                  (el, index) => (
                    <option key={`sort${index}`}>{el}</option>
                  ),
                )}
              </Form.Select>
            </div>
            <div className={catalogStyle.filter}>
              <Button variant="dark" onClick={() => setShowFilter(true)}>
                Фильтры
              </Button>
              <Offcanvas
                show={showFilter}
                placement="end"
                onHide={() => setShowFilter(false)}
                style={{
                  background: 'rgba(0, 0, 0, 0.74)',
                  backdropFilter: 'blur(2px)',
                  width: '100%',
                }}>
                <Offcanvas.Header closeButton closeVariant="white">
                  <Offcanvas.Title style={{ color: '#ffffff', fontStyle: 'Montserrat' }}>
                    Фильтры
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className={catalogStyle.filterWindow}>
                    <div className={catalogStyle.filterPrice}>
                      <h2>Цена</h2>
                      <Row>
                        <Col>
                          <Form.Control type="number" min="1900" step="1" placeholder="1900" />
                        </Col>
                        <Col>
                          <Form.Control
                            type="number"
                            max="2000000"
                            step="1"
                            placeholder="2000000"
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className={catalogStyle.filterLists}>
                      <li>
                        <h2>Категории</h2>
                        <ul>
                          <a>Обувь</a>
                          <a>Аксессуары</a>
                          <a>Одежда</a>
                          <a>Электроника</a>
                          <a>Детское</a>
                        </ul>
                      </li>
                      <li>
                        <h2>Бренды</h2>
                        <ul>
                          <a>A</a>
                          <a>B</a>
                          <a>C</a>
                          <a>D</a>
                          <a>E</a>
                        </ul>
                      </li>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
          <div className={catalogStyle.products}></div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
