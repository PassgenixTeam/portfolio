import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";
import FAQ from "../../components/faq/faq";

const ServiceDetailsPage: React.FC<
    PageProps<{
        contentfulService: Queries.ContentfulService;
        allContentfulFaq: Queries.ContentfulFaqGroupConnection;
    }>
> = ({ data }) => {
    const service = data.contentfulService;
    const faqs = data.allContentfulFaq.nodes;

    const serviceDescription = documentToReactComponents(JSON.parse(service.description!.raw!), {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        },
    });

    return (
        <PageBody>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">{service.name}</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="index">Home</a>
                                </li>
                                <li>
                                    <a href="services">Services</a>
                                </li>
                                <li>{service.name!}</li>
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
                            <img src={service.image!.localFile!.publicURL!} alt={service.name!} className="mb-10 h-auto w-full rounded-[10px]" />
                            {/* <!-- Service Rich Text --> */}
                            <div className="rich-text">
                                {serviceDescription}
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
                                        <span className="text-xl text-ColorPrimary">
                                            <i className="fa-solid fa-badge-check"></i>
                                        </span>
                                        Digital Branding – Creating your brand image through logo, website design, and social media design to produce a solid brand identity through
                                        digital platforms.
                                    </li>
                                    <li className="mb-4 flex gap-x-3 last:mb-0">
                                        <span className="text-xl text-ColorPrimary">
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
            <FAQ faqs={faqs} className="bg-ColorOffWhite" />
            {/* <!--...::: FAQ Section End :::... --> */}
        </PageBody>
    );
};

export default ServiceDetailsPage;

export const Head: HeadFC<{
    contentfulService: Queries.ContentfulService;
}> = ({ data }) => <PageHead title={data.contentfulService.name!} />;

export const query = graphql`
    query ($slug: String!) {
        contentfulService(slug: { eq: $slug }) {
            id
            slug
            name
            image {
                localFile {
                    publicURL
                }
            }
            description {
                raw
            }
        }

        allContentfulFaq(filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                id
                question
                answer {
                    raw
                }
            }
        }
    }
`;
