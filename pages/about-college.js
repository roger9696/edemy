import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/CollegeWebsiteInnerPages/PageBanner";
import WelcomeToCollege from "@/components/CollegeWebsiteInnerPages/AboutCollege/WelcomeToCollege";
import Features from "@/components/CollegeWebsiteInnerPages/AboutCollege/Features";
import AboutUsContent from "@/components/CollegeWebsiteInnerPages/AboutCollege/AboutUsContent";
import FunFacts from "@/components/CollegeWebsite/FunFacts";
import CollegeStaff from "@/components/CollegeWebsite/CollegeStaff";
import Cta from "@/components/CollegeWebsite/Cta";
import MessageFromCollegeDean from "@/components/CollegeWebsiteInnerPages/AboutCollege/MessageFromCollegeDean";
import Footer from "@/components/_App/Footer";

const AboutCollege = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="About college"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About college"
			/>

			<WelcomeToCollege />

			<Features />

			<AboutUsContent />

			<FunFacts />

			<div className="pt-100">
				<CollegeStaff />
			</div>

			<Cta />

			<MessageFromCollegeDean />

			<Footer />
		</>
	);
};

export default AboutCollege;
