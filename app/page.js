'use client'
import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Start from '@/components/start';
import Executive from '@/components/executive';
import OurPrograms from '@/components/ourPrograms.page';
import ContactUsLayout from '@/components/contact';
import Gallery from '@/components/gallery';
import About from '@/components/about';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('/');

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Start />;
      case '/our-team':
        return <Executive />;
      case '/about-us':
        return <About/>
      case '/programs':
        return <OurPrograms />;
      case '/find-us':
        return <ContactUsLayout />;
      case '/gallery':
        return <Gallery />;
      case '/programs':
        return <OurPrograms/>
      default:
        return null;
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <NavBar navigateTo={navigateTo} />
      {renderPage()}
      <Footer />
    </>
  );
}
