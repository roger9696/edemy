import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import Cta from "@/components/CollegeWebsite/Cta";
import AccommodationContent from "@/components/CollegeWebsiteInnerPages/Accommodation/AccommodationContent";
import WhyLiveInHalls from "@/components/CollegeWebsiteInnerPages/Accommodation/WhyLiveInHalls";
import AccommodationGuarantee from "@/components/CollegeWebsiteInnerPages/Accommodation/AccommodationGuarantee";
import Footer from "@/components/_App/Footer";

const Accommodation = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Accommodation"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Accommodation"
			/>

			<AccommodationContent />

			<WhyLiveInHalls />

			<Cta />

			<AccommodationGuarantee />

			<Footer />
		</>
	);
};

export default Accommodation;
