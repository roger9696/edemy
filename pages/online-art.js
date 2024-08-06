import React from 'react';
import Navbar from '@/components/_App/Navbar';
import MainBanner from '@/components/OnlineArt/MainBanner';
import QuoteText from '@/components/OnlineArt/QuoteText';
import Features from '@/components/OnlineArt/Features';
import TopSellingCourses from '@/components/OnlineArt/TopSellingCourses';
import FunfactsAndFeedback from '@/components/OnlineArt/FunfactsAndFeedback';
import UpcomingEvents from '@/components/OnlineArt/UpcomingEvents';
import NewsletterForm from '@/components/OnlineArt/NewsletterForm';
import LatestBlogPost from '@/components/OnlineArt/LatestBlogPost';
import Footer from '@/components/_App/Footer';

const OnlineArt = () => {
    return (
        <>
            <Navbar />

           <MainBanner />

           <QuoteText />

           <Features />

           <TopSellingCourses />

           <FunfactsAndFeedback />

           <div className="online-art-home-with-large-bg">

                <UpcomingEvents />

                <NewsletterForm />

                <LatestBlogPost />

           </div>

           <Footer />
        </>
    )
}

export default OnlineArt;