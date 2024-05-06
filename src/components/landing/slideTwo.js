import React from 'react';
import slide from '../../res/img/slideTwo.svg'
import { PiStudentFill } from "react-icons/pi";
import { IoDocumentAttach } from "react-icons/io5";

const SlideTwo = () => {
    return (
        <div className="px-7 justify-center items-center pb-10 dark:bg-black">
            <div className="flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 h-full p-4 flex flex-col items-center md:items-start justify-center">

                    <h2 className="text-4xl font-black mb-2 max-md:text-2xl dark:text-white" >Lets AI Recruit For You</h2>


                    <p className="text-black mb-2 mt-2 max-md:text-center max-md:text-xs dark:text-white">
                        Leveraging advanced algorithms and machine learning to streamline and optimize the hiring process.
                        Analyze JD & resumes to identify key skills, experiences, and qualifications, enabling recruiters to quickly filter through large applicant pools and identify top candidates.
                    </p>


                    <div className='flex flex-row justify-center mt-4'>
                        <div className="md:w-1/2 mb-2 md:mb-0  mx-2 max-md:text-center">
                            <div className='max-md:flex max-md:justify-center max-md:items-center'>
                                <PiStudentFill className='text-2xl max-md:text-xl dark:text-white' />
                            </div>
                            <h3 className="text-xl font-bold mb-2 max-md:text-xl dark:text-white" >AI HR</h3>
                            <p className='text-black max-md:text-xs dark:text-white'>Identify top talents for you on the spot</p>
                        </div>

                        <div className="md:w-1/2 mb-2 md:mb-0 mx-2 max-md:text-center">
                            <div className='max-md:flex max-md:justify-center max-md:items-center'>
                                <IoDocumentAttach className='text-2xl max-md:text-xl dark:text-white' />
                            </div>
                            <h3 className="text-xl font-bold mb-2 max-md:text-xl dark:text-white">Upload JD</h3>
                            <p className='text-black max-md:text-xs dark:text-white'>Analyze your requirements from your JD</p>
                        </div>
                    </div>
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
    );
};

export default SlideTwo;
