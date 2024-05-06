import React from "react";
import { PiKeyboard } from "react-icons/pi";
import { RiAiGenerate } from "react-icons/ri";
import { FaSearchengin } from "react-icons/fa6";

const SlideThree = () => {
    return (
        <div className="dark:bg-black">
            <div className="flex items-center justify-center text-center">
                <div className="text-4xl font-black dark:text-white max-md:text-2xl">How it works</div>
            </div>
            <div className="lg:flex py-24 max-md:py-14">
              
                <div className="flex flex-col items-center justify-center lg:w-1/3 pt-6">
                    <PiKeyboard className="text-4xl max-md:text-3xl dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">Upload or copy your JD</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white"  >Upload your JD, or copy it from any sites</div>
                </div>

         
                <div className="flex flex-col items-center justify-center lg:w-1/3 pt-6">
                    <RiAiGenerate  className="text-4xl max-md:text-3xl dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">AI Generates Job Requirements</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white" >AI will generate skills, experiences, and qualifications required from the JD</div>
                </div>

               
                <div className="flex flex-col items-center justify-center lg:w-1/3 pt-6">
                    <FaSearchengin   className="text-4xl max-md:text-3xl  dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">Analyze & Filter Top Candidates</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white" >AI will analyze and filter the top candidates based on your requirements</div>
                </div>
            </div>
        </div>
    );
};

export default SlideThree;
