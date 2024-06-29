import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";
import { useLanguage } from "../../languages/hooks/useLanguage";

const ContactPage: React.FC<PageProps> = ({ location }) => {
    const { homeLink } = useLanguage(location.pathname);

    const searchParams = new URLSearchParams(location.search);
    const prefillEmail = searchParams.get("email");

    return (
        <PageBody pathname={location.pathname}>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title leading-[120%]">Gửi cho chúng tôi những yêu cầu của bạn</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href={homeLink}>Trang chủ</a>
                                </li>
                                <li>Liên hệ với chúng tôi</li>
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
                                            <div className="mb-4 text-2xl font-semibold -tracking-[0.5]">Nhắn tin với chúng tôi</div>
                                            <p>Chúng tôi sẵn lòng hỗ trợ bạn vào mỗi thứ Hai đến thứ Sáu từ 9 giờ sáng đến 5 giờ chiều giờ Việt Nam.</p>
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
                                            <div className="mb-4 text-2xl font-semibold -tracking-[0.5]">Hãy gọi cho chúng tôi</div>
                                            <p>
                                                Gọi cho chúng tôi{" "}
                                                <a href="tel:+84796796492" className="font-semibold hover:text-ColorPrimary hover:underline hover:underline-offset-4">
                                                    (+84-796-796-492)
                                                </a>{" "}
                                                . Mỗi thứ Hai đến thứ Sáu từ 9 giờ sáng đến 11 giờ tối.
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
                                            <div className="mb-4 text-2xl font-semibold -tracking-[0.5]">Email của chúng tôi</div>
                                            <p>
                                                Gửi email cho chúng tôi tại{" "}
                                                <a href="mailto:info@passgenix.com" className="font-semibold hover:text-ColorPrimary hover:underline hover:underline-offset-4">
                                                    info@passgenix.com
                                                </a>{" "}
                                                và bạn sẽ nhận được phản hồi trong vòng 24 giờ.
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
                                        <h2>Điền vào mẫu này, chúng tôi sẽ phản hồi nhanh nhất có thể.</h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                    <p>
                                        Chúng tôi ở đây để giúp bạn! Hãy cho chúng tôi biết làm thế nào chúng tôi có thể giúp và chúng tôi sẽ liên hệ trong vòng 24 giờ tới với
                                        chuyên gia.
                                    </p>
                                    {/* <!-- Horizontal Line Separator --> */}
                                    <div className="my-7 h-px w-full bg-ColorBlack opacity-10 xl:my-10 xxl:my-14"></div>
                                    {/* <!-- BlockQuote Block--> */}
                                    <div>
                                        <div className="mb-[25px] flex justify-center gap-1 text-[#FFC947] lg:justify-start">
                                            <span>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </span>
                                            <span>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </span>
                                            <span>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </span>
                                            <span>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </span>
                                            <span>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </span>
                                        </div>
                                        <blockquote className="mb-6 font-semibold text-opacity-80">
                                            "Chúng tôi rất hào hứng với trang web mới mà đội của bạn đã thiết kế cho chúng tôi! Nó rất chuyên nghiệp, dễ dàng điều hướng và trình
                                            bày sản phẩm của chúng tôi một cách rất đẹp mắt. Chúng tôi đã nhận thấy một sự tăng đáng kể trong lượng truy cập trực tuyến. Công việc
                                            thực sự tuyệt vời!"
                                        </blockquote>
                                        <div className="flex flex-col items-center gap-4 lg:flex-row">
                                            <img
                                                src="/assets/img/th-1/about-hero-user-blockquote-img-2.jpg"
                                                alt="about-hero-user-blockquote-img-2"
                                                width="60"
                                                height="60"
                                                className="mx-auto h-[60px] w-[60px] rounded-[50%] lg:mx-0"
                                            />
                                            <div>
                                                <span className="block font-semibold text-ColorBlack">Nhung Tran</span>
                                                <span className="text-sm text-opacity-80">Founder @ The Rike</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Section Wrapper --> */}
                            </div>
                            {/* <!-- Contact Content Block --> */}

                            {/* <!-- Contact Form Block --> */}
                            <div className="jos xm:p-10 rounded-[10px] border border-ColorBlack/50 bg-ColorOffWhite p-[30px]">
                                <form action="https://formbold.com/s/3GKk1" method="POST">
                                    {/* <!-- From Group List --> */}
                                    <div className="flex flex-col gap-6">
                                        {/* <!-- Form Group Item--> */}
                                        <div>
                                            <label htmlFor="name" className="mb-[10px] block text-left font-semibold" autoFocus>
                                                Tên của bạn
                                            </label>
                                            <input
                                                autoFocus={Boolean(prefillEmail)}
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Nhập tên đầy đủ của bạn"
                                                className="w-full rounded-[50px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                                                required
                                            />
                                        </div>
                                        {/* <!-- Form Group Item--> */}
                                        {/* <!-- Form Group Item--> */}
                                        <div>
                                            <label htmlFor="email" className="mb-[10px] block text-left font-semibold">
                                                Địa chỉ email
                                            </label>
                                            <input
                                                defaultValue={prefillEmail || ""}
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Nhập địa chỉ email của bạn"
                                                className="w-full rounded-[50px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                                                required
                                            />
                                        </div>
                                        {/* <!-- Form Group Item--> */}
                                        {/* <!-- Form Group Item--> */}
                                        <div>
                                            <label htmlFor="message" className="mb-[10px] block text-left font-semibold">
                                                Nội dung
                                            </label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Nhập nội dung tin nhắn của bạn"
                                                className="min-h-[130px] w-full rounded-[30px] border border-ColorBlack/50 px-[30px] py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                                                required
                                            ></textarea>
                                        </div>
                                        {/* <!-- Form Group Item--> */}
                                    </div>
                                    {/* <!-- From Group List --> */}
                                    <button type="submit" className="btn is-blue is-rounded is-large mt-8">
                                        Gửi
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

export const Head: HeadFC = ({ location }) => <PageHead title="Contact" pathname={location.pathname} />;
