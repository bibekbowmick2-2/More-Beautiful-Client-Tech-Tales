import React from 'react';
import dragonbg from '../../assets/Homebg.jpg'
const MoreFeatures = () => {
    return (
        <div style={{
            backgroundImage: `url(${dragonbg})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.9',

        }} className="w-full min-h-lvh lg:h-[450px] ">
            <div className="bg-[#0000008a] h-full w-full pt-10">
                <h1 className='text-3xl text-center text-white'>A Bit More Features</h1>
                <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-10 gap-5'>
                    <div style={{backgroundColor: '#341313'}}  className="card  text-neutral-content w-[300px] lg:w-[300px] lg:-skew-y-12 mx-auto rounded-none">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Comment System</h2>
                            <p>Enable readers to leave comments on posts. Include moderation features.</p>
                        </div>
                    </div>
                    <div style={{backgroundColor: '#341313'}} className="card  text-neutral-content w-[300px] lg:w-[300px]  mx-auto rounded-none">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">SEO Optimization</h2>
                            <p>Add meta titles and keywords for better visibility on search engines.</p>
                        </div>
                    </div>
                    <div style={{backgroundColor: '#341313'}} className="card text-neutral-content w-[300px] lg:w-[300px] lg:skew-y-12 mx-auto rounded-none">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">AJAX Contact Form</h2>
                            <p>Everyone can contact you through user friendly ajax form.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default MoreFeatures;