import React from "react";
import Navbar from "@/components/_App/Navbar";

import Footer from "@/components/_App/Footer";

import HeroBanner from "@/components/LearningManagement/HeroBanner";
import Features from "@/components/LearningManagement/Features";
import TopSellingCourses from "@/components/LearningManagement/TopSellingCourses";
import DistanceLearning from "@/components/LearningManagement/DistanceLearning";
import Testimonials from "@/components/LearningManagement/Testimonials";
import SelfDevelopmentCourse from "@/components/LearningManagement/SelfDevelopmentCourse";
import Partner from "@/components/LearningManagement/Partner";
import IntroVideo from "@/components/LearningManagement/IntroVideo";
import FunFactsFour from "@/components/Common/FunFactsFour";
import LatestNews from "@/components/Common/LatestNews";
import DistanceLearningTwo from "@/components/LearningManagement/DistanceLearningTwo";
import Cta from "@/components/LearningManagement/Cta";

const LearningManagement = () => {
	return (
		<>
			<Navbar />

			<HeroBanner />

			<Features />

			<TopSellingCourses />

			<DistanceLearning />

			<Testimonials />

			<SelfDevelopmentCourse />

			<Partner />

			<IntroVideo />

			<FunFactsFour />

			<LatestNews />

			<DistanceLearningTwo />

			<Cta />

			<Footer />
		</>
	);
};

export default LearningManagement;
