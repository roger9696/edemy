import React from 'react';
import Navbar from '@/components/_App/Navbar';
import HeroBanner from '@/components/Motivation/HeroBanner';
import Features from '@/components/Motivation/Features';
import AboutMe from '@/components/Motivation/AboutMe';
import TopSellingCourses from '@/components/Motivation/TopSellingCourses';
import FeedbackSlider from '@/components/Motivation/FeedbackSlider';
import OurUpcomingEvents from '@/components/Motivation/OurUpcomingEvents';
import NewsletterForm from '@/components/Motivation/NewsletterForm';
import LatestBlogPost from '@/components/Motivation/LatestBlogPost';
import Footer from '@/components/_App/Footer';

const Motivation = () => {
    return (
        <>
            <Navbar />

            <HeroBanner />

            <Features />

            <AboutMe />

            <TopSellingCourses />

            <FeedbackSlider />

            <OurUpcomingEvents />

            <NewsletterForm />

            <LatestBlogPost />

            <Footer />
        </>
    )
}

export default Motivation;