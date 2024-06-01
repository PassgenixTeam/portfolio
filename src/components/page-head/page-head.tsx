import * as React from "react";

const PageHead: React.FC<{
    title?: string;
    description?: string;
}> = ({ title, description }) => {
    const renderTitle = [title, "Passgenix Solution"].filter(Boolean).join(" | ");
    const renderDescription =
        description ||
        "Launched in 2023, we're a Vietnamese open-source company passionate about building high-quality software and services for the global tech community. Our team brings together Vietnam's top IT talent, selected for their strong skills and proven experience on large-scale projects.";
    const renderName = "Passgenix Technology";
    const renderDate = new Date().toISOString();
    const renderBrandImage = "/assets/img/brand.jpg";

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{renderTitle}</title>
            <meta name="description" content={renderDescription} />

            {/* <!-- SEO --> */}
            <meta name="title" property="og:title" content={renderTitle} />
            <meta name="description" property="og:description" content={renderDescription} />
            <meta name="author" content={renderName} />

            <meta name="image" property="og:image" content={renderBrandImage} />
            <meta property="og:image:secure_url" content={renderBrandImage} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:alt" content={renderName} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={renderName} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="/" />
            <meta property="og:updated_time" content={renderDate} />

            <meta property="article:publisher" content={renderName} />
            <meta property="article:author" content={renderName} />
            <meta property="article:published_time" content={renderDate} />
            <meta property="article:section" content={renderName} />
            <meta property="article:tag" content="Technology" />
            <meta property="article:tag" content="Company" />
            <meta property="article:tag" content="Solutions" />
            <meta property="article:tag" content="Service" />

            <meta name="twitter:card" content={renderBrandImage} />
            <meta name="twitter:site" content={renderName} />
            <meta name="twitter:creator" content={renderName} />
            <meta name="twitter:title" content={renderTitle} />
            <meta name="twitter:description" content={renderDescription} />
            <meta name="twitter:image" content={renderBrandImage} />
            <meta name="twitter:image:alt" content={renderDescription}></meta>

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
