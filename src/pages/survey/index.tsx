import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

export default function Survey(): JSX.Element {
  return (
    <Layout
      title="Опитування"
      description="Платформа, де кожен може відправляти вантажі та перевозити людей через незалежних партнерів по доставці, на найкращих умовах, навіть у найнезручніші місця."
    >
      <Head
        htmlAttributes={{
          lang: 'uk',
          prefix: 'og: http://ogp.me/ns#',
          xmlns: 'http://www.w3.org/1999/xhtml',
          'xmlns:og': 'http://ogp.me/ns#',
        }}
      >
        <meta property="og:image" content="https://ufocourier.com/img/ufocourier_survey_ua.jpg" />
      </Head>
      <main>
        <object
          type="text/html"
          data="https://us12.list-manage.com/survey?u=68dd166f70b27de4d248f4e38&id=f94172bb33&attribution=false"
          style={{ width: '100%', minHeight: 2400 }}
        ></object>
      </main>
    </Layout>
  );
}
