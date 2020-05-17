import React from 'react';
import {Eye, ShoppingBag, Heart} from 'react-feather';

// assets
import product1 from '../../../assets/images/product-120.jpg';
import product2 from '../../../assets/images/product-5.jpg';
import product3 from '../../../assets/images/product-121.jpg';
import product4 from '../../../assets/images/product-6.jpg';
import product5 from '../../../assets/images/product-122.jpg';
import product6 from '../../../assets/images/product-7.jpg';
import product7 from '../../../assets/images/product-8.jpg';
import product8 from '../../../assets/images/product-9.jpg';
import product9 from '../../../assets/images/product-123.jpg';
import product10 from '../../../assets/images/product-10.jpg';
import product11 from '../../../assets/images/product-124.jpg';
import product12 from '../../../assets/images/product-11.jpg';
import product13 from '../../../assets/images/product-12.jpg';

const List = (props) => (
  <>
    <div className='row'>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='badge badge-white card-badge card-badge-left text-uppercase'>
            New
          </div>

          <div class='card-img'>
            <a class='card-img-hover' href='product.html'>
              <img
                class='card-img-top card-img-back'
                src={product1}
                alt='...'
              />
              <img
                class='card-img-top card-img-front'
                src={product2}
                alt='...'
              />
            </a>

            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Shoes
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Leather mid-heel Sandals
              </a>
            </div>

            <div class='font-weight-bold text-muted'>$129.00</div>
          </div>
        </div>
      </div>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='card-img'>
            <a class='card-img-hover' href='product.html'>
              <img
                class='card-img-top card-img-back'
                src={product3}
                alt='...'
              />
              <img
                class='card-img-top card-img-front'
                src={product4}
                alt='...'
              />
            </a>

            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Dresses
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Cotton floral print Dress
              </a>
            </div>

            <div class='font-weight-bold text-muted'>$40.00</div>
          </div>
        </div>
      </div>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='badge badge-dark card-badge card-badge-left text-uppercase'>
            Sale
          </div>

          <div class='card-img'>
            <a class='card-img-hover' href='product.html'>
              <img
                class='card-img-top card-img-back'
                src={product5}
                alt='...'
              />
              <img
                class='card-img-top card-img-front'
                src={product6}
                alt='...'
              />
            </a>

            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Shoes
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Leather Sneakers
              </a>
            </div>

            <div class='font-weight-bold'>
              <span class='font-size-xs text-gray-350 text-decoration-line-through'>
                $85.00
              </span>
              <span class='text-primary'>$85.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='card-img'>
            <a href='#!'>
              <img
                class='card-img-top card-img-front'
                src={product7}
                alt='...'
              />
            </a>

            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Tops
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Cropped cotton Top
              </a>
            </div>

            <div class='font-weight-bold text-muted'>$29.00</div>
          </div>
        </div>
      </div>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='card-img'>
            <a href='#!'>
              <img
                class='card-img-top card-img-front'
                src={product8}
                alt='...'
              />
            </a>

            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Dresses
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Floral print midi Dress
              </a>
            </div>

            <div class='font-weight-bold text-muted'>$50.00</div>
          </div>
        </div>
      </div>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='badge badge-dark card-badge card-badge-left text-uppercase'>
            Sale
          </div>
          <div class='card-img'>
            <a class='card-img-hover' href='product.html'>
              <img
                class='card-img-top card-img-back'
                src={product9}
                alt='...'
              />
              <img
                class='card-img-top card-img-front'
                src={product10}
                alt='...'
              />
            </a>

            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Bags
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Suede cross body Bag
              </a>
            </div>

            <div class='font-weight-bold'>
              <span class='font-size-xs text-gray-350 text-decoration-line-through'>
                $79.00
              </span>
              <span class='text-primary'>$49.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='card-img'>
            <a class='card-img-hover' href='product.html'>
              <img
                class='card-img-top card-img-back'
                src={product11}
                alt='...'
              />
              <img
                class='card-img-top card-img-front'
                src={product12}
                alt='...'
              />
            </a>
            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Skirts
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Printed A-line Skirt
              </a>
            </div>

            <div class='font-weight-bold text-muted'>$79.00</div>
          </div>
        </div>
      </div>
      <div class='col-6 col-md-3'>
        <div class='card mb-7'>
          <div class='badge badge-white card-badge card-badge text-uppercase'>
            New
          </div>
          <div class='card-img'>
            <a href='#!'>
              <img
                class='card-img-top card-img-front'
                src={product13}
                alt='...'
              />
            </a>

            <div className='card-actions'>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='modal'
                  data-target='#modalProduct'>
                  <Eye size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className='card-action'>
                <button
                  className='btn btn-xs btn-circle btn-white-primary'
                  data-toggle='button'>
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>
          <div class='card-body px-0'>
            <div class='font-size-xs'>
              <a class='text-muted' href='shop.html'>
                Shoes
              </a>
            </div>

            <div class='font-weight-bold'>
              <a class='text-body' href='product.html'>
                Heel strappy Sandals
              </a>
            </div>

            <div class='font-weight-bold text-muted'>$90.00</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default List;
