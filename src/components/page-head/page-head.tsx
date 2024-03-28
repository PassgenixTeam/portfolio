import * as React from "react";

const PageHead: React.FC<{
    title?: string;
}> = ({ title }) => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{[title, "Passgenix Solution"].filter(Boolean).join(" | ")}</title>
            <meta name="description" content="AIMass Tailwind based SASS Template" />

            {/* <!-- Favicon  --> */}
            <link rel="icon" href="/assets/img/favicon.png" />

            {/* <!-- Icon Font --> */}
            <link rel="stylesheet" href="/assets/fonts/iconfonts/font-awesome/stylesheet.css" />
            {/* <!-- Site font --> */}
            <link rel="stylesheet" href="/assets/fonts/webfonts/inter/stylesheet.css" />
            <link rel="stylesheet" href="/assets/fonts/webfonts/plus-jakarta-sans/stylesheet.css" />

            {/* <!-- Vendor CSS --> */}
            <link rel="stylesheet" href="/assets/css/vendors/swiper-bundle.min.css" />
            <link rel="stylesheet" href="/assets/css/vendors/jos.css" />
            <link rel="stylesheet" href="/assets/css/vendors/menu.css" />

            {/* <!-- Custom CSS --> */}
            <link rel="stylesheet" href="/assets/css/custom.css" />

            {/* <!-- Development css --> */}
            {/* <link href="/assets/css/style.css" rel="stylesheet" /> */}

            {/* <!-- Production css --> */}
            {/* <!-- <link rel="stylesheet" href="/assets/css/style.min.css"> --> */}
        </>
    );
};

export default PageHead;
