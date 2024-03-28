import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";

const ServiceDetailsPage: React.FC<PageProps> = ({ data }) => {
    return (
        <PageBody>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Service Details</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="index">Home</a>
                                </li>
                                <li>
                                    <a href="services">Service</a>
                                </li>
                                <li>Service Details</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Section Container --> */}

                    {/* <!-- Breadcrumb Shape - 1 --> */}
                    <div className="absolute left-0 top-0 -z-10">
                        <img src="/assets/img/elements/breadcrumb-shape-1.svg" alt="hero-shape-1" width="291" height="380" />
                    </div>

                    {/* <!-- Breadcrumb Shape - 2 --> */}
                    <div className="absolute bottom-0 right-0 -z-[1]">
                        <img src="/assets/img/elements/breadcrumb-shape-2.svg" alt="hero-shape-2" width="291" height="380" />
                    </div>
                </div>
                {/* <!-- Breadcrumb Section Spacer --> */}
            </section>
            {/* <!--...::: Breadcrumb Section End :::... --> */}

            {/* <!--...::: Service Details Section Start :::... --> */}
            <section className="section-service-details">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Service Details Area --> */}
                        <div className="mx-auto max-w-[1080px]">
                            {/* <!-- Service main Image --> */}
                            <img src="/assets/img/th-1/service-main-img.jpg" alt="service-main-img" className="mb-10 h-auto w-full rounded-[10px]" />
                            {/* <!-- Service Rich Text --> */}
                            <div className="rich-text">
                                <h5>What is Digital Brand Strategy?</h5>
                                <p>
                                    A comprehensive plan that helps you communicate your company's identity to consumers online to increase customer loyalty and sales. A digital
                                    brand strategy also defines how your organization wishes to be perceived by consumers.
                                </p>
                                <p>
                                    What makes it unique? What do you want people to think about your product or service? By creating guidelines for your brand, you can ensure
                                    every interaction with consumers remains consistent.
                                </p>

                                <h5>How Do You Create an Effective Digital Brand Strategy?</h5>
                                <p>
                                    Creating an effective digital brand takes time, effort, and due diligence. It's not as simple as making a logo, showing up with a few dozen
                                    hashtags, and calling. Let's dive into the roadmap for building a digital brand strategy with a few detailed examples.
                                </p>

                                <ul className="font-semibold text-ColorBlack">
                                    <li className="mb-4 flex gap-x-3 last:mb-0">
                                        <span className="text-xl text-ColorBlue">
                                            <i className="fa-solid fa-badge-check"></i>
                                        </span>
                                        Digital Branding – Creating your brand image through logo, website design, and social media design to produce a solid brand identity through
                                        digital platforms.
                                    </li>
                                    <li className="mb-4 flex gap-x-3 last:mb-0">
                                        <span className="text-xl text-ColorBlue">
                                            <i className="fa-solid fa-badge-check"></i>
                                        </span>
                                        Digital Marketing – Promoting your existing brand image through content marketing and advertising techniques to impact consumers.
                                    </li>
                                </ul>

                                <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <img
                                        src="/assets/img/th-1/service-inner-1-img.jpg"
                                        alt="service-inner-1-img"
                                        width="532"
                                        height="355"
                                        className="w-full h-auto rounded-[10px]"
                                    />
                                    <img
                                        src="/assets/img/th-1/service-inner-2-img.jpg"
                                        alt="service-inner-2-img"
                                        width="532"
                                        height="355"
                                        className="w-full h-auto rounded-[10px]"
                                    />
                                </div>

                                <h5>Digital Branding vs. Digital Marketing</h5>
                                <p>
                                    It is a common misconception to confuse digital marketing and digital branding. While you may think that these phrases are interchangeable,
                                    there is a distinct difference. Creating an effective digital brand takes time, effort, and due diligence. It's not as simple as making a logo,
                                    showing up with a few dozen hashtags, and calling it a day.
                                </p>

                                <h5>Are You Ready to Digitize Your Business Brand?</h5>
                                <p>
                                    Now it is clear what digital branding is and what are the strategies. That means it’s time for you to put it into practice. There are nine ways
                                    that you can use for maximum the results.
                                </p>

                                <p>
                                    However, you can also try some of the strategies that you think are the easiest and most important. For example, you can start by creating a
                                    logo, using social media, or creating a website. Keep the spirit and see you on the next article!
                                </p>
                            </div>
                        </div>
                        {/* <!-- Service Details Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Service Details Section End :::... --> */}

            {/* <!--...::: FAQ Section Start :::... --> */}
            <section className="section-faq">
                <div className="relative z-10 overflow-hidden bg-ColorOffWhite">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Section Content Wrapper --> */}
                            <div className="jos mb-[60px] xl:mb-20">
                                {/* <!-- Section Content Block --> */}
                                <div className="mx-auto max-w-[625px]">
                                    <h2 className="text-center">Frequently asked questions about our digital agency</h2>
                                </div>
                                {/* <!-- Section Content Block --> */}
                            </div>
                            {/* <!-- Section Content Wrapper --> */}
                            {/* <!-- FAQ Area --> */}
                            <div className="jos">
                                {/* <!-- Accordion List --> */}
                                <ul className="mx-auto max-w-[1076px] rounded-[10px] border border-ColorBlack text-ColorBlack">
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item active overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold">
                                            <button className="flex-1 text-left">Q. What is a digital agency?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold">
                                            <button className="flex-1 text-left">Q. What services does a digital agency provide?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold">
                                            <button className="flex-1 text-left">Q. Hiring a digital agency vs hiring in-house: What is the difference?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold">
                                            <button className="flex-1 text-left">Q. What questions should you ask when interviewing a digital agency?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold">
                                            <button className="flex-1 text-left">Q. How do digital agencies charge for their services?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                </ul>
                                {/* <!-- Accordion List --> */}

                                <div className="jos mt-[60px] flex justify-center xl:mt-20">
                                    <a href="contact" className="btn is-blue is-rounded btn-animation is-large group">
                                        <span>Still, have any questions? Contact us</span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- FAQ Area --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
            </section>
            {/* <!--...::: FAQ Section End :::... --> */}
        </PageBody>
    );
};

export default ServiceDetailsPage;

export const Head: HeadFC = () => <PageHead title="Services" />;
