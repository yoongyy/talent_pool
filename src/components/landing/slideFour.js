import React from "react";
import PricingPlan from "../pricing";
import { FreeType, FreeCost, FreeTime, MonthType, MonthTime, MonthCost, YearType, YearCost, YearTime } from '../../constants';

const SlideFour = () => {

    const freeData = `{"type": "${FreeType}", "cost": "${FreeCost}", "time": "${FreeTime}", "one": "Upload 1 JD", "two": "Unlimited Interview", "three": "Lifetime access", "four": "1 Interview Invite", "five": "Manual Resume Upload"}`;
    const parsedFreeData = JSON.parse(freeData);

    const monthData = `{"type": "${MonthType}", "cost": "${MonthCost}", "time": "/${MonthTime}", "one": "Upload 10 JD", "two": "10 Interviews", "three": "1 Month Access", "four": "10 Interviews Invite", "five": "10 Manual Resumes Upload"}`;
    const parsedMonthData = JSON.parse(monthData);

    const YearData = `{"type": "${YearType}", "cost": "${YearCost}", "time": "/${YearTime}", "one": "Upload 120 JD", "two": "Unlimited Interview", "three": "1 Year Access", "four": "100 Interviews Invite", "five": "100 Manual Resumes Upload"}`;
    const parsedYearData = JSON.parse(YearData);

    return (
        <div className="dark:bg-black py-14">
            <div className="px-11 items-start justify-start text-center">
                <div className="text-4xl max-md:text-2xl font-black dark:text-white">Pricing</div>
                <p className="py-3 font-medium max-md:text-xs dark:text-white">Choose the right plan for your business</p>
            </div>
            <div className="lg:flex py-10">

                <div className="flex flex-col items-center justify-center lg:w-1/3 max-md:pt-4">
                    <PricingPlan data={parsedFreeData} />
                </div>

                <div className="flex flex-col items-center justify-center lg:w-1/3 max-md:pt-4">
                    <PricingPlan data={parsedMonthData} />
                </div>

                <div className="flex flex-col items-center justify-center lg:w-1/3 max-md:pt-4">
                    <PricingPlan data={parsedYearData} />
                </div>
            </div>
        </div>
    );
};

export default SlideFour;
