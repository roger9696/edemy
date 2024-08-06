import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import UndergraduateStudyOpenDay from "@/components/CollegeWebsiteInnerPages/Undergraduate/UndergraduateStudyOpenDay";
import OurCoursesEventUndergraduateFees from "@/components/CollegeWebsiteInnerPages/Undergraduate/OurCoursesEventUndergraduateFees";
import UndergraduateStudyGuide from "@/components/CollegeWebsiteInnerPages/Undergraduate/UndergraduateStudyGuide";
import LatestBlogPost from "@/components/CollegeWebsite/LatestBlogPost";
import Footer from "@/components/_App/Footer";

const Undergraduate = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Undergraduate"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Undergraduate"
			/>

			<UndergraduateStudyOpenDay />

			<OurCoursesEventUndergraduateFees />

			<UndergraduateStudyGuide />

			<LatestBlogPost />

			<Footer />
		</>
	);
};

export default Undergraduate;
