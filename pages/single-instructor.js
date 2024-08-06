import React from "react";
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/SingleInstructor/MainBanner";
import Features from "@/components/SingleInstructor/Features";
import QuoteText from "@/components/SingleInstructor/QuoteText";
import TopSellingCourses from "@/components/SingleInstructor/TopSellingCourses";
import Funfacts from "@/components/SingleInstructor/Funfacts";
import FeedbackSlider from "@/components/SingleInstructor/FeedbackSlider";
import EducationForEveryone from "@/components/SingleInstructor/EducationForEveryone";
import PromoVideo from "@/components/SingleInstructor/PromoVideo";
import UpcomingEvents from "@/components/SingleInstructor/UpcomingEvents";
import LatestBlogPost from "@/components/SingleInstructor/LatestBlogPost";
import NewsletterForm from "@/components/SingleInstructor/NewsletterForm";
import Footer from "@/components/_App/Footer";

const SingleInstructor = () => {
	return (
		<>
			<Navbar />

			<MainBanner />

			<Features />

			<QuoteText />

			<TopSellingCourses />

			<Funfacts />

			<FeedbackSlider />

			<EducationForEveryone />

			<PromoVideo />

			<UpcomingEvents />

			<LatestBlogPost />

			<NewsletterForm />

			<Footer />
		</>
	);
};

export default SingleInstructor;
