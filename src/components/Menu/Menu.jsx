import './menu.sass';

import userAvatar from 'img/user.png';
import { useState } from 'react';

import { IoMenu, IoClose } from 'react-icons/io5';

import {
  ArrowRightIcon,
  CustomersIcon,
  DashboardIcon,
  HelpIcon,
  IncomeIcon,
  MainIcon,
  ProductIcon,
  PromoteIcon,
} from 'svg/icons';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onItemClick = e => {
    const activeItem = document.querySelector('.list__item-active');
    if (activeItem) {
      activeItem.classList.remove('list__item-active');
    }
    e.currentTarget.classList.add('list__item-active');
  };

  return (
    <>
      <header className="header-mobile">
        <div className="header-mobile__icon">
          <MainIcon />
        </div>
        <span className="header-mobile__text">
          Dashboard <sub className="header-mobile__subtext">v.01</sub>
        </span>
        <div
          className="header-mobile__toggle"
          style={isMenuOpen ? { transform: 'rotate(90deg)' } : {}}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <IoClose size={35} /> : <IoMenu size={35} />}
        </div>
      </header>

      <div
        className={[
          'menu',
          `${isMenuOpen ? 'menu__mobile-opened' : 'menu__mobile'}`,
        ].join(' ')}
      >
        <div className="menu__header">
          <div className="menu__icon">
            <MainIcon />
          </div>
          <span className="menu__text">
            Dashboard <sub className="menu__subtext">v.01</sub>
          </span>
        </div>

        <ul className="list menu__list">
          <li onClick={onItemClick} className="list__item list__item-active">
            <div className="list__icon">
              <DashboardIcon />
            </div>
            <span>Dashboard</span>
          </li>
          <li onClick={onItemClick} className="list__item">
            <div className="list__icon">
              <ProductIcon />
            </div>
            <span>Product</span>
            <div className="list__arrow">
              <ArrowRightIcon />
            </div>
          </li>
          <li onClick={onItemClick} className="list__item">
            <div className="list__icon">
              <CustomersIcon />
            </div>
            <span>Customers</span>
            <div className="list__arrow">
              <ArrowRightIcon />
            </div>
          </li>
          <li onClick={onItemClick} className="list__item">
            <div className="list__icon">
              <IncomeIcon />
            </div>
            <span>Income</span>
            <div className="list__arrow">
              <ArrowRightIcon />
            </div>
          </li>
          <li onClick={onItemClick} className="list__item">
            <div className="list__icon">
              <PromoteIcon />
            </div>
            <span>Promote</span>
            <div className="list__arrow">
              <ArrowRightIcon />
            </div>
          </li>
          <li onClick={onItemClick} className="list__item">
            <div className="list__icon">
              <HelpIcon />
            </div>
            <span>Help</span>
            <div className="list__arrow">
              <ArrowRightIcon />
            </div>
          </li>
        </ul>

        <div className="user">
          <img
            src={userAvatar}
            alt="user avatar"
            className="user__image"
            width={42}
          />
          <div className="user__info">
            <div className="user__name">Evano</div>
            <div className="user__role">Project Manager</div>
          </div>
        </div>
      </div>
    </>
  );
}
