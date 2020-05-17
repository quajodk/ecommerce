import React from 'react';
import {User, ShoppingBag, Heart} from 'react-feather';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          O'jun Lifestyle
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Blog
              </Link>
            </li>
          </ul>

          <ul className='navbar-nav flex-row'>
            <li className='nav-item ml-lg-n4'>
              <a className='nav-link' href='./account-orders.html'>
                <User size={16} />
              </a>
            </li>
            <li className='nav-item ml-lg-n4'>
              <a className='nav-link' href='/'>
                <Heart size={16} />
              </a>
            </li>
            <li className='nav-item ml-lg-n4'>
              <a
                className='nav-link'
                data-toggle='modal'
                href='#modalShoppingCart'>
                <span data-cart-items='2'>
                  <ShoppingBag size={16} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default NavBar;
