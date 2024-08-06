import React from "react";
import Navbar from '@/components/_App/Navbar';
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import MessageFromCollegeChairman from "@/components/CollegeWebsiteInnerPages/Administration/MessageFromCollegeChairman";
import MessageFromCollegePrincipal from "@/components/CollegeWebsiteInnerPages/Administration/MessageFromCollegePrincipal";
import CollegeGoverningBody from "@/components/CollegeWebsiteInnerPages/Administration/CollegeGoverningBody";
import DepartmentsOfCollege from "@/components/CollegeWebsiteInnerPages/Administration/DepartmentsOfCollege";
import Footer from '@/components/_App/Footer';

const Administration = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Administration"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Administration"
      />

      <MessageFromCollegeChairman />

      <MessageFromCollegePrincipal />

      <CollegeGoverningBody />

      <DepartmentsOfCollege />

      <Footer />
    </>
  );
};

export default Administration;
