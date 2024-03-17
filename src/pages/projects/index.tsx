import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";

const HomePage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
    }>
> = ({ data }) => {
    const projects = data.allContentfulProject.nodes;

    return (
        <PageBody>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)",
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Project</h2>
                    <ul className="ostech-breadcrumb list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>Project</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="project-two project-two--page">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-md-4 col-sm-6">
                            <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                <div className="project-two__thumb">
                                    <img src="/assets/images/about/project-2-1.png" alt="ostech image" />
                                </div>
                                <div className="project-two__content">
                                    <h4 className="project-two__content__title">
                                        <a href="service-d-development">Product Development</a>
                                    </h4>
                                    <p className="project-two__content__text">Technology</p>
                                    <a href="product-details" className="project-two__content__btn">
                                        <span className="project-two__content__btn__icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                                <div className="project-two__thumb">
                                    <img src="/assets/images/about/project-2-2.png" alt="ostech image" />
                                </div>
                                <div className="project-two__content">
                                    <h4 className="project-two__content__title">
                                        <a href="service-d-design">UI/UX Development</a>
                                    </h4>
                                    <p className="project-two__content__text">Technology</p>
                                    <a href="product-details" className="project-two__content__btn">
                                        <span className="project-two__content__btn__icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">
                                <div className="project-two__thumb">
                                    <img src="/assets/images/about/project-2-3.png" alt="ostech image" />
                                </div>
                                <div className="project-two__content">
                                    <h4 className="project-two__content__title">
                                        <a href="service-d-marketing">Digital Marketing</a>
                                    </h4>
                                    <p className="project-two__content__text">Technology</p>
                                    <a href="product-details" className="project-two__content__btn">
                                        <span className="project-two__content__btn__icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
                                <div className="project-two__thumb">
                                    <img src="/assets/images/about/project-2-4.png" alt="ostech image" />
                                </div>
                                <div className="project-two__content">
                                    <h4 className="project-two__content__title">
                                        <a href="service-experience">Digital Experience</a>
                                    </h4>
                                    <p className="project-two__content__text">Technology</p>
                                    <a href="product-details" className="project-two__content__btn">
                                        <span className="project-two__content__btn__icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">
                                <div className="project-two__thumb">
                                    <img src="/assets/images/about/project-2-5.png" alt="ostech image" />
                                </div>
                                <div className="project-two__content">
                                    <h4 className="project-two__content__title">
                                        <a href="service-d-analysis">Data Analysis</a>
                                    </h4>
                                    <p className="project-two__content__text">Technology</p>
                                    <a href="product-details" className="project-two__content__btn">
                                        <span className="project-two__content__btn__icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
                                <div className="project-two__thumb">
                                    <img src="/assets/images/about/project-2-6.png" alt="ostech image" />
                                </div>
                                <div className="project-two__content">
                                    <h4 className="project-two__content__title">
                                        <a href="service-d-security">Cyber Security</a>
                                    </h4>
                                    <p className="project-two__content__text">Technology</p>
                                    <a href="product-details" className="project-two__content__btn">
                                        <span className="project-two__content__btn__icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead title="Projects" />;

export const projects = graphql`
    {
        allContentfulProject(sort: { updatedAt: DESC }) {
            nodes {
                id
                title
                subtitle
                slug
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;
