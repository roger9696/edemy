import React from "react";
import Navbar from '@/components/_App/Navbar';
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import ApplyNowForm from "@/components/CollegeWebsiteInnerPages/ApplyNow/ApplyNowForm";
import Footer from '@/components/_App/Footer';

const ApplyNow = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Apply Now"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Apply Now"
      />

      <ApplyNowForm />

      <Footer />
    </>
  );
};

export default ApplyNow;
