import cls from "classnames";
import * as React from "react";
import { useLanguage } from "../../languages/hooks/useLanguage";

const Plan: React.FC<
    React.HTMLAttributes<HTMLDivElement> & {
        pathname: string;
        plans: readonly Queries.ContentfulPlan[];
    }
> = ({ pathname, plans, className, ...props }) => {
    const { homeLink } = useLanguage(pathname);

    return (
        <section className="section-pricing">
            <div className={cls("bg-opacity-60", className)} {...props}>
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Section Content Wrapper --> */}
                        <div className="jos mb-[60px] xl:mb-20">
                            {/* <!-- Section Content Block --> */}
                            <div className="mx-auto max-w-[600px]">
                                <h2 className="text-center">Choice the right pricing plan that suits your need</h2>
                            </div>
                            {/* <!-- Section Content Block --> */}
                        </div>
                        {/* <!-- Section Content Wrapper --> */}

                        {/* <!-- Pricing List --> */}
                        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                            {/* <!-- Pricing Item --> */}
                            <div className="jos" data-jos_animation="flip-left" data-jos_delay="0">
                                <div className="hover-solid-shadow h-full">
                                    <div className="rounded-[10px] border-2 border-ColorBlack bg-white p-7 xl:p-10 h-full">
                                        {/* <!-- Pricing Content Top --> */}
                                        <div className="text-center text-ColorBlack">
                                            <span className="text-xl font-bold">Getting Start</span>
                                            <div className="text-[28px] font-normal leading-[2.85]">
                                                <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">FREE</span>
                                            </div>
                                            <span className="text-sm text-ColorBlack/70">No credit card required</span>
                                        </div>
                                        {/* <!-- Pricing Content Top --> */}
                                        {/* <!-- Horizontal Line Separator --> */}
                                        <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                        {/* <!-- Horizontal Line Separator --> */}
                                        {/* <!-- Pricing Data list --> */}
                                        <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                            {plans.map((plan) => (
                                                <li key={plan.id} className={cls("flex gap-x-3", !plan.level!.includes("Free") && "text-ColorBlack/10")}>
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    {plan.name}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <!-- Pricing Data list --> */}
                                        <div className="mt-10 flex justify-center">
                                            <a href={`${homeLink}contact`} className="btn is-white is-rounded is-large group w-full border-2">
                                                Contact now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Pricing Item --> */}
                            {/* <!-- Pricing Item --> */}
                            <div className="jos" data-jos_animation="flip-left" data-jos_delay="0">
                                <div className="hover-solid-shadow h-full">
                                    <div className="rounded-[10px] border-2 border-ColorBlack bg-white p-7 xl:p-10 h-full">
                                        {/* <!-- Pricing Content Top --> */}
                                        <div className="text-center text-ColorBlack">
                                            <span className="text-xl font-bold">Standard Plan</span>
                                            <div className="text-[28px] font-normal leading-[2.85]">
                                                <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">~$250</span>
                                            </div>
                                            <span className="text-sm text-ColorBlack/70">For small websites, retailers</span>
                                        </div>
                                        {/* <!-- Pricing Content Top --> */}
                                        {/* <!-- Horizontal Line Separator --> */}
                                        <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                        {/* <!-- Horizontal Line Separator --> */}
                                        {/* <!-- Pricing Data list --> */}
                                        <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                            {plans.map((plan) => (
                                                <li key={plan.id} className={cls("flex gap-x-3", !plan.level!.includes("Standard") && "text-ColorBlack/10")}>
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    {plan.name}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <!-- Pricing Data list --> */}
                                        <div className="mt-10 flex justify-center">
                                            <a href={`${homeLink}contact`} className="btn is-blue is-rounded is-large group w-full border-2">
                                                Contact now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Pricing Item --> */}
                            {/* <!-- Pricing Item --> */}
                            <div className="jos" data-jos_animation="flip-left" data-jos_delay="0">
                                <div className="hover-solid-shadow h-full">
                                    <div className="rounded-[10px] border-2 border-ColorBlack bg-white p-7 xl:p-10 h-full">
                                        {/* <!-- Pricing Content Top --> */}
                                        <div className="text-center text-ColorBlack">
                                            <span className="text-xl font-bold">Pro Plan</span>
                                            <div className="text-[28px] font-normal leading-[2.85]">
                                                <span className="text-[40px] font-bold leading-[1.3] xl:text-[50px]">CONTACT</span>
                                            </div>
                                            <span className="text-sm text-ColorBlack/70">For a complex project and maintenance</span>
                                        </div>
                                        {/* <!-- Pricing Content Top --> */}
                                        {/* <!-- Horizontal Line Separator --> */}
                                        <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                        {/* <!-- Horizontal Line Separator --> */}
                                        {/* <!-- Pricing Data list --> */}
                                        <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                            {plans.map((plan) => (
                                                <li key={plan.id} className={cls("flex gap-x-3", !plan.level!.includes("Pro") && "text-ColorBlack/10")}>
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    {plan.name}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <!-- Pricing Data list --> */}
                                        <div className="mt-10 flex justify-center">
                                            <a href={`${homeLink}contact`} className="btn is-white is-rounded is-large group w-full border-2">
                                                Contact now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Pricing Item --> */}
                        </div>
                        {/* <!-- Pricing List --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </div>
        </section>
    );
};

export default Plan;
