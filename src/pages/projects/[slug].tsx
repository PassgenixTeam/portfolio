import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";

const TeamDetailsPage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
    }>
> = ({ data, params }) => {
    const { slug } = params;

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
                    <h2 className="page-header__title">Project Carousel</h2>
                    <ul className="ostech-breadcrumb list-unstyled">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <span>Project</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* <!-- Project Details section Start --> */}
            <section className="project-details">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="project-details__thumb">
                                <img src="/assets/images/about/project-details.png" alt="ostech image" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="project-details__left">
                                <p className="project-details__text">
                                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit
                                    amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.{" "}
                                </p>
                                <p className="project-details__text project-details__text--two">
                                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis.
                                </p>
                                <p className="project-details__text">
                                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit
                                    amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae
                                    nibh.Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh
                                </p>
                                <p className="project-details__text">
                                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit
                                    amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.{" "}
                                </p>
                                <h4 className="project-details__list__title">Project Challenges</h4>
                                <ul className="list-unstyled project-details__list">
                                    <li className="project-details__list__item">
                                        {" "}
                                        <i className="fas fa-check-circle"></i>Many variations of passages ipsum
                                    </li>
                                    <li className="project-details__list__item">
                                        {" "}
                                        <i className="fas fa-check-circle"></i>Many variations of passages of lorem
                                    </li>
                                    <li className="project-details__list__item">
                                        {" "}
                                        <i className="fas fa-check-circle"></i>Expert many variations teacher
                                    </li>
                                </ul>
                                <p className="project-details__text">
                                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit
                                    amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="project-details__box">
                                <div className="project-details__box__content">
                                    <p className="project-details__box__text">
                                        <span className="project-details__box__text__top">Service:</span>UI/UX Development
                                    </p>
                                    <p className="project-details__box__text">
                                        <span className="project-details__box__text__top">Client:</span>Make Hardson
                                    </p>
                                    <p className="project-details__box__text">
                                        <span className="project-details__box__text__top">Location:</span>Broklyn, New York
                                    </p>
                                </div>
                                <div className="project-details__box__social">
                                    <a href="https://twitter.com">
                                        <i className="icon-x-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="https://facebook.com">
                                        <i className="icon-facebook-f" aria-hidden="true"></i>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://pinterest.com">
                                        <i className="icon-pinterest-p" aria-hidden="true"></i>
                                        <span className="sr-only">Pinterest</span>
                                    </a>
                                    <a href="https://instagram.com">
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="project-details__link">
                                <div className="project-details__link__left">
                                    <a href="#" className="project-details__link__item">
                                        <i className="icon-arrow-right"></i>
                                    </a>
                                    <span>previous</span>
                                </div>
                                <div className="project-details__link__right">
                                    <span>Next</span>
                                    <a href="#" className="project-details__link__item">
                                        <i className="icon-arrow-left"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Project Details section Start --> */}

            {/* <!-- Feature section Start --> */}
            <section className="project-one">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src="/assets/images/shapes/sec-title-s-1.png" alt="Latest Project" className="sec-title__img" />
                                    <h6 className="sec-title__tagline">Latest Project</h6>
                                </div>
                                <h3 className="sec-title__title">
                                    Our Recently Completed <br /> Latest Projects
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-project">
                        <div className="project-one__item choice">
                            <div
                                className="project-one__item__bg"
                                style={{
                                    backgroundImage: "url(/assets/images/about/project-bg-1-1.png)",
                                }}
                            ></div>
                            <div className="project-one__item__inner">
                                <div className="project-one__thumb">
                                    <img src="/assets/images/about/project-1-1.png" alt="ostech image" />
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__content__title">UI/UX Development</h3>
                                    <p className="project-one__content__text">Technology</p>
                                    <a href="contact.html" className="project-one__content__btn">
                                        <i className="icon-right-arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-one__item choice expand">
                            <div
                                className="project-one__item__bg"
                                style={{
                                    backgroundImage: "url(/assets/images/about/project-bg-1-2.png)",
                                }}
                            ></div>
                            <div className="project-one__item__inner">
                                <div className="project-one__thumb">
                                    <img src="/assets/images/about/project-1-2.png" alt="ostech image" />
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__content__title">Digital Marketing</h3>
                                    <p className="project-one__content__text">Marketing</p>
                                    <a href="contact.html" className="project-one__content__btn">
                                        <i className="icon-right-arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-one__item choice">
                            <div
                                className="project-one__item__bg"
                                style={{
                                    backgroundImage: "url(/assets/images/about/project-bg-1-3.png)",
                                }}
                            ></div>
                            <div className="project-one__item__inner">
                                <div className="project-one__thumb">
                                    <img src="/assets/images/about/project-1-3.png" alt="ostech image" />
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__content__title">Cyber Security</h3>
                                    <p className="project-one__content__text">Security</p>
                                    <a href="contact.html" className="project-one__content__btn">
                                        <i className="icon-right-arrow"></i>
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

export default TeamDetailsPage;

export const Head: HeadFC = () => <PageHead />;

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