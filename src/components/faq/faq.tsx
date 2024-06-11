import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import cls from "classnames";
import { useLanguage } from "../../languages/hooks/useLanguage";
import { messages } from "./messages";

const FAQ: React.FC<
    React.HTMLAttributes<HTMLDivElement> & {
        pathname: string;
        faqs: readonly Queries.ContentfulFaq[];
    }
> = ({ pathname, faqs, className, ...props }) => {
    const { homeLink, langKey } = useLanguage(pathname);

    return (
        <section className="section-faq">
            <div className={cls("relative z-10 overflow-hidden", className)} {...props}>
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Section Content Wrapper --> */}
                        <div className="jos mb-[60px] xl:mb-20">
                            {/* <!-- Section Content Block --> */}
                            <div className="mx-auto max-w-[625px]">
                                <h2 className="text-center">{messages["title"][langKey]}</h2>
                            </div>
                            {/* <!-- Section Content Block --> */}
                        </div>
                        {/* <!-- Section Content Wrapper --> */}

                        {/* <!-- FAQ Area --> */}
                        <div className="jos">
                            {/* <!-- Accordion List --> */}
                            <ul className="mx-auto max-w-[1076px] rounded-[10px] border border-ColorBlack">
                                {/* <!-- Accordion Item --> */}
                                {faqs.map((faq) => (
                                    <li key={faq.id} className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                                            <button className="flex-1 text-left">Q. {faq.question}</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <div className="pt-5">
                                                {documentToReactComponents(JSON.parse(faq.answer!.raw!), {
                                                    renderNode: {
                                                        [BLOCKS.PARAGRAPH]: (node, children) => <p className="project-details__text">{children}</p>,
                                                    },
                                                })}
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                ))}
                                {/* <!-- Accordion Item --> */}
                            </ul>
                            {/* <!-- Accordion List --> */}

                            <div className="jos mt-[60px] flex justify-center xl:mt-20">
                                <a href={`${homeLink}contact`} className="btn is-blue is-rounded btn-animation is-large group">
                                    <span>{messages["contact"][langKey]}</span>
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
    );
};

export default FAQ;
