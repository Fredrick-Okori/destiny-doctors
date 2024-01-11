'use client'
import React from 'react';
import Start from './start';
import Executive from './executive';
import OurPrograms from './ourPrograms.page';
import ContactUsLayout from '@/components/contact';
import Gallery from './gallery';
import About from './about';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  const [currentPage, setCurrentPage] = React.useState('/');

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Start />;
      case '/page/team':
        return <Executive />;
      case '/page/about':
        return <About />
      case '/page/projects':
        return <OurPrograms />;
      case '/page/contact':
        return <ContactUsLayout />;
      case '/page/gallery':
        return <Gallery />;
      
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