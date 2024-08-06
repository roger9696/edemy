import React from "react";
import Navbar from "@/components/_App/Navbar";
import HeroBanner from "@/components/OnlinePhotography/HeroBanner";
import Features from "@/components/OnlinePhotography/Features";
import AboutMe from "@/components/OnlinePhotography/AboutMe";
import Courses from "@/components/OnlinePhotography/Courses";
import Partner from "@/components/OnlinePhotography/Partner";
import Testimonials from "@/components/OnlinePhotography/Testimonials";
import PhotoGallery from "@/components/OnlinePhotography/PhotoGallery";
import NewsletterForm from "@/components/OnlinePhotography/NewsletterForm";
import Footer from "@/components/_App/Footer";

const OnlinePhotography = () => {
	return (
		<>
			<Navbar />

			<HeroBanner />

			<Features />

			<AboutMe />

			<Courses />

			<Partner />

			<Testimonials />

			<PhotoGallery />

			<NewsletterForm />

			<Footer />
		</>
	);
};

export default OnlinePhotography;
