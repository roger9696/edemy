import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import CollegeAdmissionSystem from "@/components/CollegeWebsiteInnerPages/CollegeAdmissions/CollegeAdmissionSystem";
import CollegeAdmissionsContent from "@/components/CollegeWebsiteInnerPages/CollegeAdmissions/CollegeAdmissionsContent";
import AdmissionsStaff from "@/components/CollegeWebsiteInnerPages/CollegeAdmissions/AdmissionsStaff";
import FunFacts from "@/components/CollegeWebsite/FunFacts";
import Cta from "@/components/CollegeWebsite/Cta";
import Footer from "@/components/_App/Footer";

const CollegeAdmissions = () => {
	return (
		<>
			<Navbar />
			<PageBanner
				pageTitle="College Admissions"
				homePageUrl="/"
				homePageText="Home"
				activePageText="College Admissions"
			/>
			<CollegeAdmissionSystem />
			<FunFacts />
			<CollegeAdmissionsContent />
			<Cta />
			<AdmissionsStaff />

			<Footer />
		</>
	);
};

export default CollegeAdmissions;
