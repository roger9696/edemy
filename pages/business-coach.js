import React from "react";
import Navbar from "@/components/_App/Navbar";
import HeroBanner from "@/components/BusinessCoach/HeroBanner";
import Features from "@/components/BusinessCoach/Features";
import AboutMe from "@/components/BusinessCoach/AboutMe";
import CoachingTypes from "@/components/BusinessCoach/CoachingTypes";
import Funfacts from "@/components/BusinessCoach/Funfacts";
import FeedbackSlider from "@/components/BusinessCoach/FeedbackSlider";
import TopSellingCourses from "@/components/BusinessCoach/TopSellingCourses";
import UpcomingEvents from "@/components/BusinessCoach/UpcomingEvents";
import LatestBlogPost from "@/components/BusinessCoach/LatestBlogPost";
import NewsletterForm from "@/components/BusinessCoach/NewsletterForm";
import Footer from "@/components/_App/Footer";

const BusinessCoach = () => {
	return (
		<>
			<Navbar />

			<HeroBanner />

			<Features />

			<AboutMe />

			<CoachingTypes />

			<Funfacts />

			<FeedbackSlider />

			<TopSellingCourses />

			<UpcomingEvents />

			<LatestBlogPost />

			<NewsletterForm />

			<Footer />
		</>
	);
};

export default BusinessCoach;
