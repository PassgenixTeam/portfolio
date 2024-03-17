import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";

const TeamsPage: React.FC<
    PageProps<{
        allContentfulProjects: Queries.ContentfulProjectsGroupConnection;
    }>
> = ({ data }) => {
    const projects = data.allContentfulProjects.nodes;

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
                    <h2 className="page-header__title">Our Team</h2>
                    <ul className="ostech-breadcrumb list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>team</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="team-one team-one--page">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="team-card__inner">
                                    <div className="team-card__image">
                                        <img src="/assets/images/team/team-1-1.jpg" alt="Mike Hardson" />
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__content__inner">
                                            <div className="team-card__content__inner__item">
                                                <h3 className="team-card__content__title">
                                                    <a href="/team-details">Mike Hardson</a>
                                                </h3>
                                                <h6 className="team-card__content__designation">Web Developer</h6>
                                            </div>
                                            <div className="team-card__content__hover">
                                                <div className="team-card__content__hover__icon">
                                                    <i className="icon-share"></i>
                                                </div>
                                                <div className="team-card__content__hover__social">
                                                    <a href="https://instagram.com">
                                                        {" "}
                                                        <i className="fab fa-youtube" aria-hidden="true"></i> <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://pinterest.com">
                                                        {" "}
                                                        <i className="fab fa-pinterest-p" aria-hidden="true"></i> <span className="sr-only">Pinterest</span>
                                                    </a>
                                                    <a href="https://twitter.com">
                                                        {" "}
                                                        <i className="fab fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>{" "}
                                                    </a>
                                                    <a href="https://facebook.com">
                                                        {" "}
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i> <span className="sr-only">Facebook</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                <div className="team-card__inner">
                                    <div className="team-card__image">
                                        <img src="/assets/images/team/team-1-2.jpg" alt="aleesha brown" />
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__content__inner">
                                            <div className="team-card__content__inner__item">
                                                <h3 className="team-card__content__title">
                                                    <a href="/team-details">aleesha brown</a>
                                                </h3>
                                                <h6 className="team-card__content__designation">Web Developer</h6>
                                            </div>
                                            <div className="team-card__content__hover">
                                                <div className="team-card__content__hover__icon">
                                                    <i className="icon-share"></i>
                                                </div>
                                                <div className="team-card__content__hover__social">
                                                    <a href="https://instagram.com">
                                                        {" "}
                                                        <i className="fab fa-youtube" aria-hidden="true"></i> <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://pinterest.com">
                                                        {" "}
                                                        <i className="fab fa-pinterest-p" aria-hidden="true"></i> <span className="sr-only">Pinterest</span>
                                                    </a>
                                                    <a href="https://twitter.com">
                                                        {" "}
                                                        <i className="fab fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>{" "}
                                                    </a>
                                                    <a href="https://facebook.com">
                                                        {" "}
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i> <span className="sr-only">Facebook</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="team-card__inner">
                                    <div className="team-card__image">
                                        <img src="/assets/images/team/team-1-3.jpg" alt="david cooper" />
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__content__inner">
                                            <div className="team-card__content__inner__item">
                                                <h3 className="team-card__content__title">
                                                    <a href="/team-details">david cooper</a>
                                                </h3>
                                                <h6 className="team-card__content__designation">Web Developer</h6>
                                            </div>
                                            <div className="team-card__content__hover">
                                                <div className="team-card__content__hover__icon">
                                                    <i className="icon-share"></i>
                                                </div>
                                                <div className="team-card__content__hover__social">
                                                    <a href="https://instagram.com">
                                                        {" "}
                                                        <i className="fab fa-youtube" aria-hidden="true"></i> <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://pinterest.com">
                                                        {" "}
                                                        <i className="fab fa-pinterest-p" aria-hidden="true"></i> <span className="sr-only">Pinterest</span>
                                                    </a>
                                                    <a href="https://twitter.com">
                                                        {" "}
                                                        <i className="fab fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>{" "}
                                                    </a>
                                                    <a href="https://facebook.com">
                                                        {" "}
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i> <span className="sr-only">Facebook</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="team-card__inner">
                                    <div className="team-card__image">
                                        <img src="/assets/images/team/team-1-4.jpg" alt="sarah albert" />
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__content__inner">
                                            <div className="team-card__content__inner__item">
                                                <h3 className="team-card__content__title">
                                                    <a href="/team-details">sarah albert</a>
                                                </h3>
                                                <h6 className="team-card__content__designation">Web Developer</h6>
                                            </div>
                                            <div className="team-card__content__hover">
                                                <div className="team-card__content__hover__icon">
                                                    <i className="icon-share"></i>
                                                </div>
                                                <div className="team-card__content__hover__social">
                                                    <a href="https://instagram.com">
                                                        {" "}
                                                        <i className="fab fa-youtube" aria-hidden="true"></i> <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://pinterest.com">
                                                        {" "}
                                                        <i className="fab fa-pinterest-p" aria-hidden="true"></i> <span className="sr-only">Pinterest</span>
                                                    </a>
                                                    <a href="https://twitter.com">
                                                        {" "}
                                                        <i className="fab fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>{" "}
                                                    </a>
                                                    <a href="https://facebook.com">
                                                        {" "}
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i> <span className="sr-only">Facebook</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                <div className="team-card__inner">
                                    <div className="team-card__image">
                                        <img src="/assets/images/team/team-1-5.jpg" alt="kevin martin" />
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__content__inner">
                                            <div className="team-card__content__inner__item">
                                                <h3 className="team-card__content__title">
                                                    <a href="/team-details">kevin martin</a>
                                                </h3>
                                                <h6 className="team-card__content__designation">Web Developer</h6>
                                            </div>
                                            <div className="team-card__content__hover">
                                                <div className="team-card__content__hover__icon">
                                                    <i className="icon-share"></i>
                                                </div>
                                                <div className="team-card__content__hover__social">
                                                    <a href="https://instagram.com">
                                                        {" "}
                                                        <i className="fab fa-youtube" aria-hidden="true"></i> <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://pinterest.com">
                                                        {" "}
                                                        <i className="fab fa-pinterest-p" aria-hidden="true"></i> <span className="sr-only">Pinterest</span>
                                                    </a>
                                                    <a href="https://twitter.com">
                                                        {" "}
                                                        <i className="fab fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>{" "}
                                                    </a>
                                                    <a href="https://facebook.com">
                                                        {" "}
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i> <span className="sr-only">Facebook</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="team-card__inner">
                                    <div className="team-card__image">
                                        <img src="/assets/images/team/team-1-6.jpg" alt="christine eve" />
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__content__inner">
                                            <div className="team-card__content__inner__item">
                                                <h3 className="team-card__content__title">
                                                    <a href="/team-details">christine eve</a>
                                                </h3>
                                                <h6 className="team-card__content__designation">Web Developer</h6>
                                            </div>
                                            <div className="team-card__content__hover">
                                                <div className="team-card__content__hover__icon">
                                                    <i className="icon-share"></i>
                                                </div>
                                                <div className="team-card__content__hover__social">
                                                    <a href="https://instagram.com">
                                                        {" "}
                                                        <i className="fab fa-youtube" aria-hidden="true"></i> <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://pinterest.com">
                                                        {" "}
                                                        <i className="fab fa-pinterest-p" aria-hidden="true"></i> <span className="sr-only">Pinterest</span>
                                                    </a>
                                                    <a href="https://twitter.com">
                                                        {" "}
                                                        <i className="fab fa-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>{" "}
                                                    </a>
                                                    <a href="https://facebook.com">
                                                        {" "}
                                                        <i className="fab fa-facebook-f" aria-hidden="true"></i> <span className="sr-only">Facebook</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageBody>
    );
};

export default TeamsPage;

export const Head: HeadFC = () => <PageHead title="Teams" />;

export const projects = graphql`
    {
        allContentfulProjects(sort: { updatedAt: DESC }) {
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
