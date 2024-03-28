import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";

const ProjectDetailsPage: React.FC<PageProps> = ({ data }) => {
    return (
        <PageBody>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Project Details</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Projects</li>
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

            {/* <!--...::: Portfolio Section Start :::... --> */}
            <section className="section-portfolio">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Portfolio Details Area --> */}
                        <div className="mx-auto max-w-[1076px]">
                            {/* <!-- Portfolio Main Image --> */}
                            <img src="/assets/img/th-1/portfolio-main-img.jpg" alt="portfolio-main-img" width="1076" height="600" className="h-auto w-full rounded-[10px]" />
                            {/* <!-- Portfolio Main Image --> */}

                            {/* <!-- Portfolio Info List --> */}
                            <ul className="mb-[60px] mt-[30px] flex flex-wrap justify-between gap-8">
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4] text-ColorBlack">Client:</span>
                                    <span className="text-ColorBlack/80">Adam Smith</span>
                                </li>
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4] text-ColorBlack">Category:</span>
                                    <span className="text-ColorBlack/80">UI/UX Design</span>
                                </li>
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4] text-ColorBlack">Duration:</span>
                                    <span className="text-ColorBlack/80">1 Week</span>
                                </li>
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4]">Website Link:</span>
                                    <span className="text-ColorBlack/80">example@gmail.com</span>
                                </li>
                            </ul>
                            {/* <!-- Portfolio Info List --> */}

                            {/* <!-- Portfolio Rich Text --> */}
                            <div className="rich-text">
                                <h4>Project overview</h4>
                                <p>
                                    Mobile UX design is the design of user experiences for hand-held and wearable devices. Designers create solutions (typically applications) to
                                    meet mobile users' unique requirements and restrictions. Designers focus on accessibility, discoverability and efficiency to optimize on-the-go
                                    interactive experiences.
                                </p>
                                <p>
                                    Interface (UI) determines how the app will look like, while UX determines what problem it will solve in the users' life. UI is revolves around
                                    visually directing the user about the app interface, while UX includes researching, testing, developing the app.
                                </p>

                                <h5>What we did for this project</h5>
                                <p>
                                    A user can engage with a product or service by using a user interface (UI), which is essentially a collection of screens, pages, visual elements
                                    (such as buttons and icons). The phrase “User Experience” refers to how a person reacts to each component.
                                </p>
                                <ol className="list-inside list-decimal">
                                    <li>Strategic Discovery</li>
                                    <li>Web application redesign and optimization</li>
                                    <li>Mobile application redesign and optimization</li>
                                    <li>Landing page redesign and optimization</li>
                                    <li>Component-based UI-Kit</li>
                                    <li>Product design sprints to explore new functionality</li>
                                </ol>

                                <img
                                    src="/assets/img/th-1/portfolio-inner-img.jpg"
                                    alt="portfolio-inner-img"
                                    width="1076"
                                    height="650"
                                    className="my-6 h-auto w-full rounded-[10px]"
                                />

                                <h5>Project results</h5>
                                <p>
                                    The UI/UX design of software and applications helps improve customer experience and satisfaction. This ultimately helps increase the number of
                                    people using your product. If users encounter roadblocks when trying to complete actions on your product, they are very likely to drop off.
                                </p>
                                <p>
                                    Creating a brand with clear and targeted messaging was crucial in increasing conversions. Together with the Webflow team, we have compiled a new
                                    product page structure using the App model and packed that in an excellent cover 🙂
                                </p>
                            </div>
                            {/* <!-- Portfolio Rich Text --> */}
                        </div>
                        {/* <!-- Portfolio Details Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Portfolio Section End :::... --> */}

            {/* <!-- Horizontal Text Slider --> */}
            <div className="overflow-hidden bg-ColorBlack py-5 text-3xl font-bold uppercase leading-[1.4] tracking-widest text-white">
                {/* <!-- Horizontal Slider Block--> */}
                <div className="horizontal-slide-from-right-to-left flex gap-x-[30px]">
                    <span className="inline-block min-w-[855px]">We complete client's projects efficiently</span>
                    <img src="/assets/img/icons/fire-icon.png" alt="fire-icon" width="40" height="40" />
                    <span className="inline-block min-w-[855px]">We complete client's projects efficiently</span>
                    <img src="/assets/img/icons/fire-icon.png" alt="fire-icon" width="40" height="40" />
                    <span className="inline-block min-w-[855px]">We complete client's projects efficiently</span>
                    <img src="/assets/img/icons/fire-icon.png" alt="fire-icon" width="40" height="40" />
                    <span className="inline-block min-w-[855px]">We complete client's projects efficiently</span>
                    <img src="/assets/img/icons/fire-icon.png" alt="fire-icon" width="40" height="40" />
                </div>
                {/* <!-- Horizontal Slider Block--> */}
            </div>
            {/* <!-- Horizontal Text Slider --> */}

            {/* <!--...::: Related Portfolio Section Start :::... --> */}
            <section className="related-portfolio-section">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="mx-auto max-w-[1076px]">
                            {/* <!-- Section Wrapper --> */}
                            <div className="jos flex flex-wrap items-center justify-between gap-8">
                                {/* <!-- Section Block --> */}
                                <div className="mb-5">
                                    <h2>Related Project:</h2>
                                </div>
                                {/* <!-- Section Block --> */}
                            </div>
                            {/* <!-- Section Wrapper --> */}
                            <p className="jos max-w-[856px]">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suf alteration in some form, by injected humour, or randomised
                                words which don't look even slightly believable.
                            </p>

                            {/* <!-- Portfolio List --> */}
                            <div className="grid gap-8 sm:grid-cols-2">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos">
                                    <div className="group">
                                        <div className="relative z-10 after:absolute after:inset-0 after:-z-10 after:translate-x-0 after:translate-y-0 after:rounded-[11px] after:bg-ColorBlack after:transition-all after:duration-300 after:ease-in-out hover:after:translate-x-[10px] hover:after:translate-y-[10px]">
                                            <div className="overflow-hidden rounded-[10px]">
                                                <img
                                                    src="/assets/img/th-1/portfolio-modern-img-1.jpg"
                                                    alt="portfolio-modern-img-1"
                                                    width="406"
                                                    height="350"
                                                    className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="mb-3 flex flex-wrap gap-2 text-xl leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue lg:flex-nowrap xl:text-2xl">
                                                <a href="portfolio-details.html" className="font-semibold">
                                                    App
                                                </a>
                                                <span>—</span>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    UI/UX Design
                                                </a>
                                            </div>
                                            <p className="line-clamp-2 text-base sm:max-w-[350px]">
                                                Lectus faucibus ac sollicitudin feugiat sit. Ac tellus sit commodo duis mi interdum
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Portfolio Item --> */}
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos">
                                    <div className="group">
                                        <div className="relative z-10 after:absolute after:inset-0 after:-z-10 after:translate-x-0 after:translate-y-0 after:rounded-[11px] after:bg-ColorBlack after:transition-all after:duration-300 after:ease-in-out hover:after:translate-x-[10px] hover:after:translate-y-[10px]">
                                            <div className="overflow-hidden rounded-[10px]">
                                                <img
                                                    src="/assets/img/th-1/portfolio-modern-img-2.jpg"
                                                    alt="portfolio-modern-img-2"
                                                    width="406"
                                                    height="350"
                                                    className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="mb-3 flex flex-wrap gap-2 text-xl leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue lg:flex-nowrap xl:text-2xl">
                                                <a href="portfolio-details.html" className="font-semibold">
                                                    Website
                                                </a>
                                                <span>—</span>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Branding
                                                </a>
                                            </div>
                                            <p className="line-clamp-2 text-base sm:max-w-[350px]">
                                                Lectus faucibus ac sollicitudin feugiat sit. Ac tellus sit commodo duis mi interdum
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Portfolio Item --> */}
                            </div>
                            {/* <!-- Portfolio List --> */}
                        </div>
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Related Portfolio Section Start :::... --> */}
        </PageBody>
    );
};

export default ProjectDetailsPage;

export const Head: HeadFC = () => <PageHead title="Project Details" />;
