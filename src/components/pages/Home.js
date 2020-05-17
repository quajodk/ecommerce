import React from 'react';

// components
import Banner from '../common/home/banner.component';
import Product from '../common/home/product.component';
import Nav from '../common/nav.component';
import CTA from '../common/home/cta.component';
import AdBanner from '../common/home/ad.component';
import Footer from '../common/footer.component';
const HomePage = () => (
  <>
    <Nav />
    <Banner />
    <Product />
    <AdBanner />
    <CTA />
    <Footer />
  </>
);

export default HomePage;
