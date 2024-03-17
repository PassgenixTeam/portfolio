import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";

const ContactPage: React.FC<
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
                    <h2 className="page-header__title">Contact</h2>
                    <ul className="ostech-breadcrumb list-unstyled">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <span>Contact</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="contact-one">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-4">
                            <div className="contact-one__left">
                                <ul className="contact-one__list list-unstyled">
                                    <li className="contact-one__list__item">
                                        <div className="contact-one__list__icon">
                                            <i className="icon-telephone"></i>
                                        </div>
                                        <div className="contact-one__list__content">
                                            <span className="contact-one__list__subtitle">Have any question?</span>
                                            <p className="contact-one__list__action">
                                                Free <a href="tel:+23-000-8050"> + 23 (000)-8050</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="contact-one__list__item">
                                        <div className="contact-one__list__icon">
                                            <i className="icon-email2"></i>
                                        </div>
                                        <div className="contact-one__list__content">
                                            <span className="contact-one__list__subtitle">Send Email</span>
                                            <p className="contact-one__list__action">
                                                <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="contact-one__list__item">
                                        <div className="contact-one__list__icon">
                                            <i className="icon-Pin"></i>
                                        </div>
                                        <div className="contact-one__list__content">
                                            <span className="contact-one__list__subtitle">Visit Anytime</span>
                                            <p className="contact-one__list__action">6391 Elgin St. Delaware</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="contact-one__thumb">
                                    <img src="/assets/images/resources/contact-1-1.png" alt="contact thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-one__right">
                                <div className="contact-one__top">
                                    <div className="sec-title wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src="/assets/images/shapes/sec-title-s-1.png" alt="Contact with us" className="sec-title__img" />
                                            <h6 className="sec-title__tagline">Contact with us</h6>
                                        </div>
                                        <h3 className="sec-title__title">Feel Free to Write us Anytime</h3>
                                    </div>
                                </div>
                                <form
                                    className="contact-one__form contact-form-validated form-one background-base wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    action="inc/sendemail.php"
                                >
                                    <div className="form-one__group">
                                        <div className="form-one__control">
                                            <input type="text" name="name" placeholder="Your Name" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="email" name="email" placeholder="Email Address" />
                                        </div>
                                        <div className="form-one__control form-one__control">
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" required />
                                        </div>
                                        <div className="form-one__control form-one__control">
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea name="message" placeholder="Write a Message"></textarea>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <button type="submit" className="ostech-btn">
                                                Send a Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-map">
                <div className="google-map google-map__contact">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                        className="map__contact"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </PageBody>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <PageHead title="Contact" />;

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
