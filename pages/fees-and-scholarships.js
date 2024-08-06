import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import FeesAndScholarshipsContent from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/FeesAndScholarshipsContent";
import AnnualTuitionFeesUndergraduate from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/AnnualTuitionFeesUndergraduate";
import AnnualTuitionFeesPostgraduate from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/AnnualTuitionFeesPostgraduate";
import Scholarships from "@/components/CollegeWebsiteInnerPages/FeesAndScholarships/Scholarships";
import Footer from "@/components/_App/Footer";

const FeesAndScholarships = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Fees and scholarships"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Fees and scholarships"
			/>

			<FeesAndScholarshipsContent />

			<AnnualTuitionFeesUndergraduate />

			<AnnualTuitionFeesPostgraduate />

			<Scholarships />

			<Footer />
		</>
	);
};

export default FeesAndScholarships;
