import React from 'react';
import Header from '../components/header';
import Footers from '../components/footers';
import slide from '../res/img/about.svg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { company, name } from '../constants';

const About = () => {

    const navigate = useNavigate();

    function redirectContact() {
        navigate("/contact");
    }

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={false} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='flex-1 flex flex-col items-center justify-center px-3'>
                    <h1 className="text-6xl font-black mt-14 max-md:text-3xl dark:text-white">About</h1>
                    <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
                        Welcome to {name}, the cutting-edge AI Recruitment brought to you by {company}!
                    </p>
                </div>
                <div className="px-7 max-md:px-3 justify-center items-center pb-10 dark:bg-black mt-14 ">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 h-full p-4 flex flex-col items-center md:items-start justify-center">
                            <h2 className="text-4xl font-black mb-2 max-md:text-2xl dark:text-white" >About Us</h2>
                            <p className="text-black mb-2 mt-2 max-md:text-center max-md:text-xs dark:text-white">
                                At {company}, we believe in the transformative power of recruitment and the endless possibilities that Artificial Intelligence unlocks.
                                That's why we've developed {name}, a revolutionary SaaS product designed to make recruitment process seamless, efficient, and intelligent.
                            </p>
                        </div>
                        <div className="md:w-1/2 h-full">
                            <img
                                src={slide}
                                alt="Your Alt Text"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center px-20 max-md:px-3'>
                    <h1 className="text-center text-4xl font-black mt-14 max-md:text-2xl dark:text-white">Our Mission</h1>
                    <p className="text-black mb-2 mt-8 text-center max-md:text-xs dark:text-white">
                    At {name}, our mission is to revolutionize the way organizations find, engage, and retain top talent. We are committed to leveraging cutting-edge artificial intelligence technologies to empower companies of all sizes to build exceptional teams that drive success and innovation.
Our platform is built on the principles of efficiency, accuracy, and inclusivity. We aim to provide recruiters with powerful tools that streamline the hiring process, enabling them to make data-driven decisions and find the best candidates faster than ever before. By harnessing the power of AI, we remove biases and promote diversity, ensuring that opportunities are accessible to all qualified individuals.
We believe that every hiring decision has the potential to shape the future of an organization, which is why we are dedicated to providing unparalleled support and guidance to our users. Our mission is to not only simplify recruitment but also to elevate it, transforming it into a strategic advantage that drives business growth and fosters a culture of excellence.
At {name}, we are not just revolutionizing hiring; we are redefining it. 
                    </p>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center px-20 max-md:px-3'>
                    <h1 className="text-center text-4xl font-black mt-20 max-md:text-2xl dark:text-white">Join Us on the Recruitment Journey</h1>
                    <p className="text-black mb-2 mt-8 text-center max-md:text-xs dark:text-white">
                        Embark on a journey of innovation and recruitment excellence with {name}. Whether you're an recruiter, a HR, or an organization looking to improve your hiring process, {company} is here to support you every step of the way.
                    </p>
                    <Button onClick={redirectContact} className='max-w-xs my-10 items-center justify-center text-center border-black dark:border-white dark:bg-black dark:text-white bg-white text-black font-bold rounded-none w-full enabled:hover:bg-white enabled:focus:bg-white enabled:focus:ring-transparent dark:enabled:hover:bg-black dark:enabled:focus:bg-black dark:enabled:focus:ring-transparent'>Contact</Button>
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default About;
