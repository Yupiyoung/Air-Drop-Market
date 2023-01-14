import React from 'react';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';

import catalogStyle from './catalog.module.scss';
function Catalog() {
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
              <Button variant="dark">Фильтры</Button>
            </div>
          </div>
          <div className={catalogStyle.products}></div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
