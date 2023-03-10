import Head from "next/head";

const HeadTags = () => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/images/about-us-page/hasolution.png" size="12*8" type="image/png" />

      {/* <link rel="stylesheet" type="text/css" href="/" /> */}
      <link
        rel="stylesheet"
        href={'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'}
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      {/* <link href="https://fonts.googleapis.com/css?family=articulatcf-regular:100,200,300,400,500,600,700,800,900|articulatcf-regular:100,200,300,400,500,600,700,800,900|articulatcf-medium:100,200,300,400,500,600,700,800,900|articulatcf-demibold:100,200,300,400,500,600,700,800,900|articulatcf-bold:100,200,300,400,500,600,700,800,900|articulatcf-regular:100,200,300,400,500,600,700,800,900|articulatcf-extrbold:100,200,300,400,500,600,700,800,900&display=optional" rel="stylesheet" /> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap'} rel="stylesheet"></link>
      <title>HA SOLUTIONS</title>
    </Head>
  </>
);
export default HeadTags;
