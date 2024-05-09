import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";

const ContactPage: React.FC<PageProps> = () => {
    return (
        <PageBody>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Send Us A Message</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Contact Us</li>
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

            {/* <!--...::: Contact Info Section Start :::... --> */}
            <div className="section-contact-info">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Contact Info List --> */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* <!-- Contact Info Item --> */}
                            <div className="jos" data-jos_delay="0">
                                <div className="hover-solid-shadow h-full">
                                    <div className="h-full rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                                        <img src="/assets/img/icons/icon-duotone-chat.svg" alt="icon-duotone-chat" width="64" height="60" className="mb-[30px] h-[60px] w-auto" />
                                        <div>
                                            <div className="mb-4 text-2xl font-semibold -tracking-[0.5]">Chat with us</div>
                                            <p>We're waiting to help you every Monday-Friday from 9 am to 5 pm EST easily.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Contact Info Item --> */}
                            {/* <!-- Contact Info Item --> */}
                            <div className="jos" data-jos_delay="0.3">
                                <div className="hover-solid-shadow h-full">
                                    <div className="h-full rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                                        <img src="/assets/img/icons/icon-duotone-phone.svg" alt="icon-duotone-phone" width="64" height="60" className="mb-[30px] h-[60px] w-auto" />
                                        <div>
                                            <div className="mb-4 text-2xl font-semibold -tracking-[0.5]">Give us a call</div>
                                            <p>
                                                Give us a ring at{" "}
                                                <a href="tel:+84946672181" className="font-semibold hover:text-ColorPrimary hover:underline hover:underline-offset-4">
                                                    (+84-796-796-492)
                                                </a>{" "}
                                                . Every monday-friday from 9 am to 11 pm.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Contact Info Item --> */}
                            {/* <!-- Contact Info Item --> */}
                            <div className="jos" data-jos_delay="0.6">
                                <div className="hover-solid-shadow h-full">
                                    <div className="h-full rounded-[10px] border-2 border-ColorBlack bg-white p-[30px]">
                                        <img
                                            src="/assets/img/icons/icon-duotone-message.svg"
                                            alt="icon-duotone-message"
                                            width="64"
                                            height="60"
                                            className="mb-[30px] h-[60px] w-auto"
                                        />
                                        <div>
                                            <div className="mb-4 text-2xl font-semibold -tracking-[0.5]">Email Us</div>
                                            <p>
                                                Drop us an email at{" "}
                                                <a
                                                    href="mailto:passgenixteam2023@gmail.com"
                                                    className="font-semibold hover:text-ColorPrimary hover:underline hover:underline-offset-4"
                                                >
                                                    passgenixteam2023@gmail.com
                                                </a>{" "}
                                                and you'll receive a reply within 24 hours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Contact Info Item --> */}
                            {/* <!-- Contact Info List --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
            </div>
            {/* <!--...::: Contact Info Section End :::... --> */}

            {/* <!--...::: Contact Section Start :::... --> */}
            <section className="section-contact">
                {/* <!-- Section Space --> */}
                <div className="section-space-bottom">
                    {/* <!-- Section Container --> */}
                    <div className="container-custom has-container-custom">
                        {/* <!-- Contact Section Area --> */}
                        <div className="grid gap-[60px] lg:grid-cols-[0.85fr_1fr] lg:gap-20 xl:gap-[100px] xxl:gap-[134px]">
                            {/* <!-- Contact Content Block --> */}
                            <div className="jos">
                                {/* <!-- Section Wrapper --> */}
                                <div>
                                    {/* <!-- Section Block --> */}
                                    <div className="mb-5">
                                        <h2>Fill out this form, We ‘ll quickly get back to you</h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                    <p>We are here to help you! Tell us how we can help and we’ll get in touch within next 24hrs with expert</p>
                                    {/* <!-- Horizontal Line Separator --> */}
                                    <div className="my-7 h-px w-full bg-ColorBlack opacity-10 xl:my-10 xxl:my-14"></div>
                                    {/* <!-- BlockQuote Block--> */}
                                </div>
                                {/* <!-- Section Wrapper --> */}
                            </div>
                            {/* <!-- Contact Content Block --> */}

                            {/* <!-- Contact Form Block --> */}
                            <div className="jos xm:p-10 rounded-[10px] border border-ColorBlack/50 bg-ColorOffWhite p-[30px]">
                                <form action="https://formspree.io/f/{form_id}" method="post">
                                    {/* <!-- From Group List --> */}
                                    <div className="flex flex-col gap-6">
                                        {/* <!-- Form Group Item--> */}
                                        <div>
                                            <label htmlFor="name" className="mb-[10px] block text-left font-semibold">
                                                Your name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter your full name"
                                                className="w-full rounded-[50px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                                                required
                                            />
                                        </div>
                                        {/* <!-- Form Group Item--> */}
                                        {/* <!-- Form Group Item--> */}
                                        <div>
                                            <label htmlFor="email" className="mb-[10px] block text-left font-semibold">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your full name"
                                                className="w-full rounded-[50px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                                                required
                                            />
                                        </div>
                                        {/* <!-- Form Group Item--> */}
                                        {/* <!-- Form Group Item--> */}
                                        <div>
                                            <label htmlFor="message" className="mb-[10px] block text-left font-semibold">
                                                Write your message
                                            </label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Write us your question here..."
                                                className="min-h-[130px] w-full rounded-[30px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                                                required
                                            ></textarea>
                                        </div>
                                        {/* <!-- Form Group Item--> */}
                                    </div>
                                    {/* <!-- From Group List --> */}
                                    <button type="submit" className="btn is-blue is-rounded is-large mt-8">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            {/* <!-- Contact Form Block --> */}
                        </div>
                        {/* <!-- Contact Section Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Contact Section End :::... --> */}
        </PageBody>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <PageHead title="Contact" />;
