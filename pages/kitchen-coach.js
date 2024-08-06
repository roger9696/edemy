import React from 'react';
import Navbar from '@/components/_App/Navbar';
import HeroBanner from '@/components/KitchenCoach/HeroBanner';
import Features from '@/components/KitchenCoach/Features';
import AboutMe from '@/components/KitchenCoach/AboutMe';
import Partner from '@/components/KitchenCoach/Partner';
import DownloadTheKitchenBook from '@/components/KitchenCoach/DownloadTheKitchenBook';
import TopSellingCourses from '@/components/KitchenCoach/TopSellingCourses';
import FeedbackSlider from '@/components/KitchenCoach/FeedbackSlider';
import UpcomingEvents from '@/components/KitchenCoach/UpcomingEvents';
import Newsletter from '@/components/KitchenCoach/Newsletter';
import HappinessIsCookingTogether from '@/components/KitchenCoach/HappinessIsCookingTogether';
import Footer from '@/components/_App/Footer';

const KitchenCoach = () => {
    return (
        <>
            <Navbar />

           <HeroBanner />

           <Features />

           <AboutMe />

           <Partner />

           <DownloadTheKitchenBook />

           <TopSellingCourses />

           <FeedbackSlider />

           <UpcomingEvents />

           <Newsletter />

           <HappinessIsCookingTogether />

           <Footer />
        </>
    )
}

export default KitchenCoach;