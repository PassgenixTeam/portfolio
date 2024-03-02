import * as React from "react";

const PageHead: React.FC<{
    title?: string;
}> = ({ title }) => {
    return (
        <>
            {/* <!-- ========== Meta Tags ========== --> */}
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="bracket-web" />
            <meta
                name="description"
                content="Ostech – IT Solutions & Services Company HTML template is a modern & multipurpose template specially designed for IT services, technology, cyber security, IT solutions, and consulting company related to any business website. This is highly customizable – looks awesome on mobile devices."
            />

            {/* <!-- ======== Page title ============ --> */}
            <title>{title ? `${title} | Passgenix Solutions` : "Passgenix Solutions"}</title>

            {/* <!-- ========== Favicon Icon ========== --> */}
            <link rel="shortcut icon" href="/assets/images/favicons/apple-touch-icon.png" type="image/x-icon" />
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

            {/* <!-- fonts --> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            {/* <!-- ===========  All Stylesheet ================= --> */}
            {/* <!--  Bootstrap css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
            {/* <!--  bootstrap-select css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/bootstrap-select/bootstrap-select.min.css" />
            {/* <!--  animate css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
            {/* <!--  fontawesome css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
            {/* <!--  jquery-ui css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
            {/* <!--  jarallax css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
            {/* <!--  magnific-popup css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
            {/* <!--  nouislider css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
            {/* <!--  nouislider css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
            {/* <!--  nouislider css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/ostech-icons/style.css" />
            {/* <!--  slider css plugins --> */}
            <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css" />
            {/* <!-- template styles --> */}
            <link rel="stylesheet" href="/assets/css/ostech.css" />
        </>
    );
};

export default PageHead;
