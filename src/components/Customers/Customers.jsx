import { SearchIcon } from 'svg/icons';
import './customers.sass';
import customers from 'helpers/customers';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { BiSolidDownArrow } from 'react-icons/bi';
import { useState } from 'react';

export default function Customers() {
  const [searchValue, setSearchValue] = useState('');

  const searchedCustomer = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="customers customers-wrapper">
        <div className="customers__header">
          <div className="text text__mobile">
            <div className="text__title">All Customers</div>
            <div className="text__subtitle">Active Members</div>
          </div>
          <div className="search">
            <input
              onChange={e => setSearchValue(e.target.value)}
              className="search__input"
              placeholder="Search"
              value={searchValue}
            ></input>
            <div className="search__icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="table">
          <div className="table-mobile">
            <ul>
              {searchedCustomer.map((customer, idx) => (
                <li key={idx} className="item item-mobile">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <BiSolidDownArrow size={18} color={'black'} />
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <div className="item-mobile__customer">
                        {customer.name}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="item-mobile__info">
                        <span className="item-mobile__label">Company</span>{' '}
                        <span>{customer.company}</span>
                      </div>
                      <div className="item-mobile__info">
                        <span className="item-mobile__label">Phone Number</span>
                        <span>{customer.number}</span>
                      </div>
                      <div className="item-mobile__info">
                        <span className="item-mobile__label">Email</span>
                        <span>{customer.email}</span>
                      </div>
                      <div className="item-mobile__info">
                        <span className="item-mobile__label">Country</span>
                        <span>{customer.country}</span>
                      </div>
                      <div
                        className={[
                          'item__status',
                          'item-mobile__info',
                          `${
                            customer.status
                              ? 'item__status-active'
                              : 'item__status-inactive'
                          }`,
                        ].join(' ')}
                      >
                        {customer.status ? 'Active' : 'Inactive'}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </li>
              ))}
            </ul>
          </div>

          <div className="table__header">
            <ul className="row info-list">
              <li className="info-list__item">Customer Name</li>
              <li className="info-list__item">Company</li>
              <li className="info-list__item">Phone Number</li>
              <li className="info-list__item">Email</li>
              <li className="info-list__item">Country</li>
              <li className="info-list__item">Status</li>
            </ul>
          </div>
          <ul className="customers-list">
            {searchedCustomer.map((customer, idx) => (
              <li key={idx} className="row item">
                <div className="item__name">{customer.name}</div>
                <div className="item__company">{customer.company}</div>
                <div className="item__number">{customer.number}</div>
                <div className="item__email">{customer.email}</div>
                <div className="item__country">{customer.country}</div>
                <div
                  className={[
                    'item__status',
                    `${
                      customer.status
                        ? 'item__status-active'
                        : 'item__status-inactive'
                    }`,
                  ].join(' ')}
                >
                  {customer.status ? 'Active' : 'Inactive'}
                </div>
              </li>
            ))}
          </ul>

          <div
            className="footer"
            style={searchValue !== ''.trim() ? { display: 'none' } : {}}
          >
            <div className="footer__text">
              Showing data 1 to 8 of 256K entries
            </div>

            <div className="buttons">
              <button className="buttons__item">{`<`}</button>
              <button className="buttons__item buttons__item-active">1</button>
              <button className="buttons__item">2</button>
              <button className="buttons__item">3</button>
              <button className="buttons__item">4</button>
              <span>...</span>
              <button className="buttons__item">40</button>
              <button className="buttons__item">{`>`}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
