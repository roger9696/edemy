import React from "react";
import Navbar from '@/components/_App/Navbar';
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner"; 
import DepartmentsOfEnglish from "@/components/CollegeWebsiteInnerPages/FacultiesTeachers/DepartmentsOfEnglish";
import Footer from '@/components/_App/Footer';

const FacultiesTeachers = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Faculties Teachers"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faculties Teachers"
      />

      <DepartmentsOfEnglish />

      <Footer />
    </>
  );
};

export default FacultiesTeachers;
