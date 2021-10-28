'use strict';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import LandingPage from '../components/Landing';
import Testimonials from '../components/information.js/Testimonials';
import Seo from '../components/services/Seo';
import Video from '../components/services/video';
import Marketing from '../components/services/Marketing';
import Example from '../components/services/Example';
import Test from '../components/services/Test';
import About from '../components/information.js/About';
import { Fragment } from 'react';
import Why from '../components/information.js/why';
import ServicesSection from '../components/information.js/ServiceSection';
import Web from '../components/services/Web';
const Home = function () {
  return (
    <Fragment>
      <Head>
        <title>Website</title>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
          integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
          crossorigin='anonymous'
        ></link>
        <meta></meta>
      </Head>
      <Header />
      <LandingPage />
      <About />
      <Why />
      <ServicesSection />
      <Web />
      <Seo />
      <Video />
      <Test />
      <Example />
      <Marketing />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
// <Test />
//
// <Object />

// <Video />

// <Marketing />
