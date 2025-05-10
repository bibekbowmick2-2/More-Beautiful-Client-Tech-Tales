import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import MoreQuestion from '../MoreQuestion/MoreQuestion';
import MoreFeatures from '../MoreFeature/MoreFeatures';
import GoogleMap from '../GoogleMap/GoogleMap';
import { useLoaderData } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const games = useLoaderData();


    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div className='bg-[#080325] z-1 max-w-md md:max-w-4xl lg:max-w-[1350px] mx-auto'>

            <div data-aos="fade-left">
                <Banner />
            </div>

            <div data-aos="">
                <MoreFeatures />
            </div>

            <div data-aos="fade-right">
                <Cards games={games} />
            </div>

            <div data-aos="fade-up">
                <MoreQuestion />
            </div>

            <div data-aos="fade-left">
                <GoogleMap />
            </div>
        </div>
    );
};

export default Home;
