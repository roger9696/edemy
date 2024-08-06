import React from "react";
import Navbar from "@/components/_App/Navbar";
import HeroBanner from "@/components/CollegeWebsite/HeroBanner";
import CoursesSlider from "@/components/CollegeWebsite/CoursesSlider";
import WelcomeToeDemyCollege from "@/components/CollegeWebsite/WelcomeToeDemyCollege";
import FunFacts from "@/components/CollegeWebsite/FunFacts";
import CollegeAmissions from "@/components/CollegeWebsite/CollegeAmissions";
import FeedbackSlider from "@/components/CollegeWebsite/FeedbackSlider";
import UpcomingEvents from "@/components/CollegeWebsite/UpcomingEvents";
import CollegeStaff from "@/components/CollegeWebsite/CollegeStaff";
import Cta from "@/components/CollegeWebsite/Cta";
import LatestBlogPost from "@/components/CollegeWebsite/LatestBlogPost";
import Footer from "@/components/_App/Footer";

const CollegeWebsite = () => {
	return (
		<>
			<Navbar />

			<HeroBanner />

			<CoursesSlider />

			<WelcomeToeDemyCollege />

			<FunFacts />

			<CollegeAmissions />

			<FeedbackSlider />

			<UpcomingEvents />

			<CollegeStaff />

			<Cta />

			<LatestBlogPost />

			<Footer />
		</>
	);
};

export default CollegeWebsite;
