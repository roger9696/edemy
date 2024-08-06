import React from "react";
import Navbar from "@/components/_App/Navbar";
import HeroBanner from "@/components/GymCoaching/HeroBanner";
import Features from "@/components/GymCoaching/Features";
import WhyChooseUs from "@/components/GymCoaching/WhyChooseUs";
import TopSellingCourses from "@/components/GymCoaching/TopSellingCourses";
import FunFacts from "@/components/GymCoaching/FunFacts";
import FeedbackSlider from "@/components/GymCoaching/FeedbackSlider";
import Instructor from "@/components/GymCoaching/Instructor";
import DownloadTheApp from "@/components/GymCoaching/DownloadTheApp";
import LatestBlogPost from "@/components/GymCoaching/LatestBlogPost";
import DigitalFitnessCoaching from "@/components/GymCoaching/DigitalFitnessCoaching";
import Footer from "@/components/_App/Footer";

const GymCoaching = () => {
	return (
		<>
			<Navbar />

			<HeroBanner />

			<Features />

			<WhyChooseUs />

			<TopSellingCourses />

			<FunFacts />

			<FeedbackSlider />

			<Instructor />

			<DownloadTheApp />

			<LatestBlogPost />

			<DigitalFitnessCoaching />

			<Footer />
		</>
	);
};

export default GymCoaching;
