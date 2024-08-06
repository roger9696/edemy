import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import CourseOverview from "@/components/CollegeWebsiteInnerPages/Business/CourseOverview";
import CourseSubjects from "@/components/CollegeWebsiteInnerPages/Business/CourseSubjects";
import Footer from "@/components/_App/Footer";

const Business = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Business"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Business"
			/>

			<CourseOverview />

			<CourseSubjects />

			<Footer />
		</>
	);
};

export default Business;
