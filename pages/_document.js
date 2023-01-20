import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        id="google-analytics"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5TJPJLF');`,
                        }}
                    ></script>

                    {/* <Script
                        src="https://www.googletagmanager.com/gtag/js?id=GTM-5TJPJLF"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-5TJPJLF');
        `}
                    </Script> */}
                    <meta
                        name="google-site-verification"
                        content="a7JLH2XUmPvgX4X7Eojev9zKBVLX0KzsZfWHQ8IMkvE"
                    />
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    ></meta>
                    <meta
                        name="description"
                        content="Com mais de 10 anos de experiência em serviços elétricos de excelência, oferecendo as melhores soluções em projetos, instalações e energia solar fotovoltaica."
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>

                <body>
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TJPJLF"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    ></noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
