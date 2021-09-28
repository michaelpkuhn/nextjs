import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <p>Here we show some meta tags off!</p>
    </div>
  )
}

export default IndexPage
