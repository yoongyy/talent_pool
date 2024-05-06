import React from 'react';
import Header from '../components/header';
import Footers from '../components/footers';
import { Card } from 'flowbite-react';
import { IoIosTimer } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { PiVideo } from "react-icons/pi";

const Features = () => {

    const cardsFeatures = [
        {
            id: 1,
            title: 'Intelligent Candidate Matching:',
            description: 'Advanced AI algorithms to match job openings with the most suitable candidates based on skills, experience, qualifications, and preferences.',
        },
        {
            id: 2,
            title: 'Automated Resume Screening:',
            description: 'Automatically scans and analyzes resumes, identifying key qualifications and filtering out irrelevant candidates.',
        },
        {
            id: 3,
            title: 'Predictive Analytics',
            description: 'Leveraging big data and machine learning, our platform provides predictive analytics to forecast candidate performance and retention rates.',
        },
        {
            id: 4,
            title: 'Customizable Job Posting Templates',
            description: 'We offer a variety of customizable job posting templates designed to attract top talent.',
        },
        {
            id: 5,
            title: 'AI-Powered Interview Assistance',
            description: 'Our platform provides AI-powered interview assistance, offering suggested interview questions based on the job role and candidate profile.',
        },
        {
            id: 6,
            title: 'Candidate Relationship Management (CRM)',
            description: 'Our CRM tool allows recruiters to effectively manage and nurture candidate relationships throughout the hiring process.',
        },
    ];

    const cardsWork = [
        {
            id: 1,
            title: ' Upload or copy your JD',
            description: 'Upload your JD, or copy it from any sites',
        },
        {
            id: 2,
            title: 'Generates Job Requirements',
            description: 'AI will generate skills, experiences, and qualifications required from the JD',
        },
        {
            id: 3,
            title: 'AI Magic',
            description: 'AI will analyze and filter the top candidates based on your requirements',
        }
    ];

    const cardBenefit = [
        {
            id: 1,
            title: 'Time and Cost Savings',
            description: 'By automating various aspects of the recruitment process, our platform significantly reduces the time and resources required to fill open positions.',
            icon: <IoIosTimer className="text-xl max-md:text-lg  dark:text-white" />
        },
        {
            id: 2,
            title: 'Improved Candidate Quality',
            description: 'With intelligent candidate matching and predictive analytics, our platform helps identify and attract high-quality candidates.',
            icon: <BsSearch className="text-xl max-md:text-lg  dark:text-white" />
        },
        {
            id: 3,
            title: 'Enhanced Recruitment Efficiency',
            description: 'Our platform streamlines the entire recruitment process, from posting job openings to managing candidate relationships.',
            icon: <PiVideo className="text-xl max-md:text-lg  dark:text-white" />
        }
    ];

    const style = {
        "root": {
            "base": "max-w-sm flex rounded-none border border-black bg-white shadow-none dark:border-white dark:bg-black m-4",
            "children": "flex h-full flex-col justify-center gap-3 p-5",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": "hover:bg-white dark:hover:bg-black"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-none",
                "on": "h-96 w-full rounded-none object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }

        }
    }

    const styleTwo = {
        "root": {
            "base": "max-w-sm flex rounded-none  bg-white shadow-none dark:bg-black m-4",
            "children": "flex h-full flex-col justify-center gap-3 p-5",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": "hover:bg-white dark:hover:bg-black"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-none",
                "on": "h-96 w-full rounded-none object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }

        }
    }

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={false} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-6xl font-black mt-14 max-md:text-3xl dark:text-white">Features</h1>
                    <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
                        Search Talent Instantly
                    </p>
                    <div className='mt-16 flex flex-wrap items-center justify-center'>
                        {cardsFeatures.map((card) => (
                            <Card key={card.id} theme={style}>
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    {card.title}
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>{card.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-4xl font-black mt-14 max-md:text-2xl dark:text-white">Benefits</h1>
                    <div className='mt-16 flex flex-wrap items-center justify-center'>
                        {cardBenefit.map((card) => (
                            <Card key={card.id} theme={style}>
                                {card.icon}
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    {card.title}
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>{card.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-4xl font-black mt-14 max-md:text-2xl dark:text-white">How It Works</h1>
                    <div className='my-16 flex flex-wrap items-center justify-center'>
                        {cardsWork.map((card) => (
                            <Card key={card.id} theme={styleTwo}>
                                <p className='text-black dark:text-white'>{card.id}</p>
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    {card.title}
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>{card.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Features;
