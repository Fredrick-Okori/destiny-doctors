'use client'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Start from '@/components/start';
import Executive from '@/components/executive';
import OurPrograms from '@/components/ourPrograms.page';
import ContactUsLayout from '@/components/contact';

export default function Home() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/our-programs' element={<OurPrograms />} />
        <Route path="/our-team" element={<Executive />} />
        <Route path='/find-us' element={<ContactUsLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
}
